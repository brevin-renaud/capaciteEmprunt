import { redirect, notFound } from 'next/navigation';
import { isAuthenticatedFromCookies } from '@/lib/admin/auth';
import { prisma } from '@/lib/prisma';
import ArticleFormClient from '../ArticleFormClient';

export const metadata = { title: 'Modifier un article — Admin', robots: { index: false } };

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const authenticated = await isAuthenticatedFromCookies();
  if (!authenticated) redirect('/admin');

  const { id } = await params;

  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) notFound();

  return (
    <ArticleFormClient
      mode="edit"
      initialData={{
        id: article.id,
        title: article.title,
        slug: article.slug,
        description: article.description,
        content: article.content,
        author: article.author,
        category: article.category,
        isDraft: article.isDraft,
        publishedAt: article.publishedAt
          ? new Date(article.publishedAt).toISOString().slice(0, 16)
          : '',
      }}
    />
  );
}
