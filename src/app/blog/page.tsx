import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostsAsync, calculateReadingTime, formatDate } from '@/lib/blog';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog Immobilier 2026 — Guides & Conseils Crédit Immobilier',
  description:
    "Guides pratiques sur la capacité d'emprunt immobilier, les taux de crédit 2026, les frais de notaire et toutes les aides primo-accédant pour réussir votre projet immobilier.",
  openGraph: {
    title: "Blog Immobilier — Guides & Conseils | EmpruntCalcul",
    description: "Guides pratiques sur la capacité d'emprunt, les taux de crédit et votre projet immobilier en France.",
    url: "https://www.empruntcalcul.fr/blog",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog EmpruntCalcul — Guides immobiliers et crédit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Immobilier — Guides & Conseils | EmpruntCalcul",
    description: "Guides pratiques sur la capacité d'emprunt, les taux et votre projet immobilier.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.empruntcalcul.fr/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPostsAsync();

  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.empruntcalcul.fr/blog",
    name: "Blog Immobilier — Guides & Conseils EmpruntCalcul",
    description: "Guides pratiques sur la capacité d'emprunt, les taux de crédit et votre projet immobilier en France.",
    url: "https://www.empruntcalcul.fr/blog",
    inLanguage: "fr-FR",
    isPartOf: { "@id": "https://www.empruntcalcul.fr/#website" },
    publisher: { "@id": "https://www.empruntcalcul.fr/#organization" },
    ...(posts.length > 0 && {
      mainEntity: {
        "@type": "ItemList",
        name: "Articles du blog immobilier EmpruntCalcul",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://www.empruntcalcul.fr/blog/${post.slug}`,
          name: post.title,
        })),
      },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.empruntcalcul.fr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.empruntcalcul.fr/blog" },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Header */}
      <div className="mb-10">
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{ background: 'var(--bg-badge)', color: 'var(--t-brand)' }}
        >
          Blog
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: 'var(--t-primary)' }}>
          Conseils & Guides immobiliers
        </h1>
        <p className="text-base max-w-xl" style={{ color: 'var(--t-secondary)' }}>
          Tout ce qu&apos;il faut savoir sur la capacité d&apos;emprunt, les taux, les frais et votre projet immobilier.
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          className="rounded-2xl px-8 py-16 text-center"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--bd-card)' }}
        >
          <p className="text-base font-medium mb-2" style={{ color: 'var(--t-secondary)' }}>
            Aucun article pour le moment
          </p>
          <p className="text-sm" style={{ color: 'var(--t-muted)' }}>
            Revenez bientôt !
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl p-5 flex flex-col gap-3 transition-colors"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--bd-card)',
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: 'var(--bg-badge)', color: 'var(--t-brand)' }}
                >
                  {post.category}
                </span>
                <span className="text-xs" style={{ color: 'var(--t-muted)' }}>
                  {post.content ? `${calculateReadingTime(post.content)} min` : ''}
                </span>
              </div>

              <div>
                <h2
                  className="font-semibold text-base leading-snug mb-1.5 group-hover:opacity-80 transition-opacity line-clamp-2"
                  style={{ color: 'var(--t-primary)' }}
                >
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--t-secondary)' }}>
                  {post.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-2" style={{ borderTop: '1px solid var(--bd-table-row)' }}>
                <span className="text-xs" style={{ color: 'var(--t-muted)' }}>
                  {post.publishedAt ? formatDate(post.publishedAt) : ''}
                </span>
                <span className="text-xs font-medium" style={{ color: 'var(--t-brand)' }}>
                  Lire →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* CTA simulateur */}
      <div
        className="mt-12 rounded-2xl px-6 py-8 text-center"
        style={{ background: 'var(--bg-brand-dim)', border: '1px solid var(--bd-brand)' }}
      >
        <p className="text-base font-semibold mb-2" style={{ color: 'var(--t-primary)' }}>
          Calculez votre capacité d&apos;emprunt maintenant
        </p>
        <p className="text-sm mb-4" style={{ color: 'var(--t-secondary)' }}>
          Simulation instantanée, aucune inscription requise.
        </p>
        <Link
          href="/simulateur"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: '#003d2b', color: '#ffffff' }}
        >
          Lancer le simulateur
        </Link>
      </div>
    </main>
  );
}
