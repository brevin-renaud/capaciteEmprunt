import { redirect } from 'next/navigation';
import { isAuthenticatedFromCookies } from '@/lib/admin/auth';
import AdminLoginClient from './AdminLoginClient';

export const metadata = { title: 'Admin — CapaciteEmprunt', robots: { index: false } };

export default async function AdminPage() {
  const authenticated = await isAuthenticatedFromCookies();
  if (authenticated) redirect('/admin/articles');

  return <AdminLoginClient />;
}
