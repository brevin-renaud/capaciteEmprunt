import { redirect } from 'next/navigation';
import { isAuthenticatedFromCookies } from '@/lib/admin/auth';
import { prisma } from '@/lib/prisma';
import ArticlesListClient from './ArticlesListClient';

export const metadata = { title: 'Articles — Admin', robots: { index: false } };

export default async function AdminArticlesPage() {
  const authenticated = await isAuthenticatedFromCookies();
  if (!authenticated) redirect('/admin');

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

  const serialized = articles.map((a) => ({
    ...a,
    publishedAt: a.publishedAt?.toISOString() ?? null,
    scheduledPublishAt: a.scheduledPublishAt?.toISOString() ?? null,
    createdAt: a.createdAt.toISOString(),
    updatedAt: a.updatedAt.toISOString(),
  }));

  return <ArticlesListClient articles={serialized} />;
}
