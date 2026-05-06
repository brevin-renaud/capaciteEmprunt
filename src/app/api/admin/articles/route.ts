import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { isAuthenticated } from '@/lib/admin/auth';

const createSchema = z.object({
  title: z.string().min(1, 'Titre requis'),
  slug: z.string().regex(/^[a-z0-9-]+$/, 'Slug invalide (minuscules, chiffres, tirets uniquement)'),
  description: z.string().min(1, 'Description requise'),
  content: z.string().min(1, 'Contenu requis'),
  author: z.string().default('CapaciteEmprunt'),
  category: z.string().default('Immobilier'),
  isDraft: z.boolean().default(true),
  publishedAt: z.string().nullable().optional(),
});

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const articles = await prisma.article.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      author: true,
      category: true,
      isDraft: true,
      publishedAt: true,
      scheduledPublishAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = createSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 },
      );
    }

    const { title, slug, description, content, author, category, isDraft, publishedAt } =
      parsed.data;

    const existing = await prisma.article.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json({ error: 'Ce slug est déjà utilisé' }, { status: 409 });
    }

    let resolvedPublishedAt: Date | null = null;
    let scheduledPublishAt: Date | null = null;

    if (!isDraft) {
      if (!publishedAt) {
        resolvedPublishedAt = new Date();
      } else {
        const date = new Date(publishedAt);
        const now = new Date();
        if (date <= now) {
          resolvedPublishedAt = date;
        } else {
          scheduledPublishAt = new Date(date.setHours(10, 0, 0, 0));
        }
      }
    }

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        description,
        content,
        author,
        category,
        isDraft,
        publishedAt: resolvedPublishedAt,
        scheduledPublishAt,
      },
    });

    revalidatePath('/blog');
    return NextResponse.json(article, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
