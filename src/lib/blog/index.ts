import { prisma } from '@/lib/prisma';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  author: string;
  category: string;
  publishedAt: Date | null;
  createdAt: Date;
}

function publishedFilter() {
  const now = new Date();
  return {
    isDraft: false,
    OR: [
      { scheduledPublishAt: null },
      { scheduledPublishAt: { lte: now } },
    ],
  };
}

export async function getAllPostsAsync(): Promise<BlogPost[]> {
  try {
    return await prisma.article.findMany({
      where: publishedFilter(),
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        author: true,
        category: true,
        publishedAt: true,
        createdAt: true,
      },
    });
  } catch {
    return [];
  }
}

export async function getPostBySlugAsync(slug: string): Promise<BlogPost | null> {
  try {
    return await prisma.article.findFirst({
      where: { slug, ...publishedFilter() },
    });
  } catch {
    return null;
  }
}

export async function getAllSlugsAsync(): Promise<string[]> {
  try {
    const articles = await prisma.article.findMany({
      where: publishedFilter(),
      select: { slug: true },
    });
    return articles.map((a) => a.slug);
  } catch {
    return [];
  }
}

export async function getAllPostsForSitemapAsync(): Promise<{ slug: string; updatedAt: Date }[]> {
  try {
    return await prisma.article.findMany({
      where: publishedFilter(),
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    });
  } catch {
    return [];
  }
}

export async function getSimilarPostsAsync(
  currentSlug: string,
  category: string,
): Promise<BlogPost[]> {
  try {
    const posts = await prisma.article.findMany({
      where: { slug: { not: currentSlug }, category, ...publishedFilter() },
      orderBy: { publishedAt: 'desc' },
      take: 3,
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        author: true,
        category: true,
        publishedAt: true,
        createdAt: true,
      },
    });
    if (posts.length < 3) {
      const recent = await prisma.article.findMany({
        where: {
          slug: { notIn: [currentSlug, ...posts.map((p) => p.slug)] },
          ...publishedFilter(),
        },
        orderBy: { publishedAt: 'desc' },
        take: 3 - posts.length,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          author: true,
          category: true,
          publishedAt: true,
          createdAt: true,
        },
      });
      return [...posts, ...recent];
    }
    return posts;
  } catch {
    return [];
  }
}

export function calculateReadingTime(content: string): number {
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 200));
}

export function formatDate(date: Date | null): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
