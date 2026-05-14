import { redirect } from 'next/navigation';
import { isAuthenticatedFromCookies } from '@/lib/admin/auth';
import ArticleFormClient from '../ArticleFormClient';

export const metadata = { title: 'Nouvel article — Admin', robots: { index: false } };

export default async function NewArticlePage() {
  const authenticated = await isAuthenticatedFromCookies();
  if (!authenticated) redirect('/admin');

  return <ArticleFormClient mode="create" />;
}
