import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getPostBySlugAsync,
  getAllSlugsAsync,
  getSimilarPostsAsync,
  calculateReadingTime,
  formatDate,
} from '@/lib/blog';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugsAsync();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugAsync(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlugAsync(slug);
  if (!post) notFound();

  const similarPosts = await getSimilarPostsAsync(slug, post.category);
  const readingTime = post.content ? calculateReadingTime(post.content) : 1;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.publishedAt?.toISOString(),
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs mb-8" style={{ color: 'var(--t-muted)' }}>
        <Link href="/" className="hover:opacity-70 transition-opacity">Accueil</Link>
        <span>/</span>
        <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
        <span>/</span>
        <span style={{ color: 'var(--t-secondary)' }} className="truncate max-w-[200px]">{post.title}</span>
      </nav>

      {/* Article header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ background: 'var(--bg-badge)', color: 'var(--t-brand)' }}
          >
            {post.category}
          </span>
          <span className="text-xs" style={{ color: 'var(--t-muted)' }}>
            {readingTime} min de lecture
          </span>
        </div>

        <h1
          className="text-2xl sm:text-3xl font-bold leading-tight mb-3"
          style={{ color: 'var(--t-primary)' }}
        >
          {post.title}
        </h1>
        <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--t-secondary)' }}>
          {post.description}
        </p>

        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--t-muted)' }}>
          <span>Par {post.author}</span>
          {post.publishedAt && (
            <>
              <span>·</span>
              <time dateTime={new Date(post.publishedAt).toISOString()}>
                {formatDate(post.publishedAt)}
              </time>
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-8"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--bd-card)' }}
      >
        {post.content && <MarkdownRenderer content={post.content} />}
      </div>

      {/* CTA simulateur */}
      <div
        className="rounded-2xl px-6 py-7 text-center mb-10"
        style={{ background: 'var(--bg-brand-dim)', border: '1px solid var(--bd-brand)' }}
      >
        <p className="text-base font-semibold mb-1.5" style={{ color: 'var(--t-primary)' }}>
          Calculez votre capacité d&apos;emprunt
        </p>
        <p className="text-sm mb-4" style={{ color: 'var(--t-secondary)' }}>
          Simulation instantanée selon la règle HCSF des 35 %.
        </p>
        <Link
          href="/simulateur"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: '#003d2b', color: '#ffffff' }}
        >
          Lancer le simulateur
        </Link>
      </div>

      {/* Articles similaires */}
      {similarPosts.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--t-primary)' }}>
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {similarPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="rounded-xl p-4 flex flex-col gap-2 transition-colors hover:opacity-80"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--bd-card)' }}
              >
                <span
                  className="text-xs px-2 py-0.5 rounded-full w-fit"
                  style={{ background: 'var(--bg-badge)', color: 'var(--t-brand)' }}
                >
                  {related.category}
                </span>
                <p className="text-sm font-medium leading-snug line-clamp-2" style={{ color: 'var(--t-primary)' }}>
                  {related.title}
                </p>
                <p className="text-xs" style={{ color: 'var(--t-muted)' }}>
                  {related.publishedAt ? formatDate(related.publishedAt) : ''}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
