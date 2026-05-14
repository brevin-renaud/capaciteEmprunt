import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { isAuthenticated } from '@/lib/admin/auth';

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  slug: z.string().regex(/^[a-z0-9-]+$/).optional(),
  description: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  author: z.string().optional(),
  category: z.string().optional(),
  isDraft: z.boolean().optional(),
  publishedAt: z.string().nullable().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const parsed = updateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 },
      );
    }

    const existing = await prisma.article.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Article introuvable' }, { status: 404 });
    }

    if (parsed.data.slug && parsed.data.slug !== existing.slug) {
      const conflict = await prisma.article.findFirst({
        where: { slug: parsed.data.slug, id: { not: id } },
      });
      if (conflict) {
        return NextResponse.json({ error: 'Ce slug est déjà utilisé' }, { status: 409 });
      }
    }

    const { isDraft, publishedAt, ...rest } = parsed.data;

    let resolvedPublishedAt = existing.publishedAt;
    let scheduledPublishAt = existing.scheduledPublishAt;

    if (isDraft !== undefined) {
      if (isDraft) {
        resolvedPublishedAt = null;
        scheduledPublishAt = null;
      } else if (!existing.publishedAt) {
        if (!publishedAt) {
          resolvedPublishedAt = new Date();
        } else {
          const date = new Date(publishedAt);
          const now = new Date();
          if (date <= now) {
            resolvedPublishedAt = date;
            scheduledPublishAt = null;
          } else {
            scheduledPublishAt = new Date(date.setHours(10, 0, 0, 0));
            resolvedPublishedAt = null;
          }
        }
      }
    }

    const updated = await prisma.article.update({
      where: { id },
      data: {
        ...rest,
        isDraft: isDraft ?? existing.isDraft,
        publishedAt: resolvedPublishedAt,
        scheduledPublishAt,
      },
    });

    revalidatePath('/blog');
    revalidatePath(`/blog/${updated.slug}`);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { id } = await params;

  const existing = await prisma.article.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: 'Article introuvable' }, { status: 404 });
  }

  await prisma.article.delete({ where: { id } });

  revalidatePath('/blog');
  revalidatePath(`/blog/${existing.slug}`);

  return NextResponse.json({ success: true });
}
