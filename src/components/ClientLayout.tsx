'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navigation/Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Navbar />}
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
      {!isAdmin && <Footer />}
    </>
  );
}
