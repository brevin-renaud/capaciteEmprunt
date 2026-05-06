'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  category: string;
  isDraft: boolean;
  publishedAt: string | null;
  scheduledPublishAt: string | null;
  createdAt: string;
  updatedAt: string;
}

function ArticleStatus({ article }: { article: Article }) {
  const now = new Date();

  if (article.isDraft) {
    return (
      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(234,179,8,0.15)', color: '#ca8a04' }}>
        Brouillon
      </span>
    );
  }

  if (article.scheduledPublishAt && new Date(article.scheduledPublishAt) > now) {
    return (
      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(99,102,241,0.15)', color: '#6366f1' }}>
        Programmé
      </span>
    );
  }

  if (article.publishedAt) {
    return (
      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(34,197,94,0.15)', color: '#16a34a' }}>
        Publié
      </span>
    );
  }

  return (
    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(107,114,128,0.15)', color: '#6b7280' }}>
      En attente
    </span>
  );
}

export default function ArticlesListClient({ articles }: { articles: Article[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Supprimer l'article "${title}" ? Cette action est irréversible.`)) return;

    setDeletingId(id);
    setError('');

    try {
      const res = await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? 'Erreur lors de la suppression');
        return;
      }
      router.refresh();
    } catch {
      setError('Erreur réseau');
    } finally {
      setDeletingId(null);
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page-from)' }}>
      {/* Admin header */}
      <div
        className="sticky top-0 z-40 px-6 h-14 flex items-center justify-between"
        style={{
          background: 'var(--bg-nav)',
          borderBottom: '1px solid var(--bd-brand-nav)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
            style={{ background: '#003d2b', color: '#ffffff' }}
          >
            CE
          </span>
          <span className="text-sm font-semibold" style={{ color: 'var(--t-primary)' }}>
            Admin
          </span>
          <span style={{ color: 'var(--t-muted)' }}>/</span>
          <span className="text-sm" style={{ color: 'var(--t-brand)' }}>
            Articles
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="px-3 py-1.5 rounded-lg text-xs transition-colors"
            style={{ color: 'var(--t-secondary)', background: 'var(--bg-btn-secondary)', border: '1px solid var(--bd-btn-secondary)' }}
          >
            Voir le site
          </Link>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 rounded-lg text-xs transition-colors"
            style={{ color: 'var(--t-secondary)', background: 'var(--bg-btn-secondary)', border: '1px solid var(--bd-btn-secondary)' }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--t-primary)' }}>
              Articles
            </h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--t-muted)' }}>
              {articles.length} article{articles.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Link
            href="/admin/articles/nouveau"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#003d2b', color: '#ffffff' }}
          >
            + Nouvel article
          </Link>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg text-sm" style={{ color: 'var(--t-warning)', background: 'var(--bg-warning)', border: '1px solid var(--bd-warning)' }}>
            {error}
          </div>
        )}

        {articles.length === 0 ? (
          <div
            className="rounded-2xl px-8 py-16 text-center"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--bd-card)' }}
          >
            <p className="text-lg font-medium mb-2" style={{ color: 'var(--t-secondary)' }}>
              Aucun article
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--t-muted)' }}>
              Créez votre premier article pour alimenter le blog.
            </p>
            <Link
              href="/admin/articles/nouveau"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#003d2b', color: '#ffffff' }}
            >
              + Nouvel article
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {articles.map((article) => (
              <div
                key={article.id}
                className="rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 transition-colors"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--bd-card)',
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <ArticleStatus article={article} />
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: 'var(--bg-badge)', color: 'var(--t-brand)' }}
                    >
                      {article.category}
                    </span>
                  </div>
                  <p className="font-semibold text-sm truncate" style={{ color: 'var(--t-primary)' }}>
                    {article.title}
                  </p>
                  <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--t-muted)' }}>
                    /{article.slug} · {article.author}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {!article.isDraft && (
                    <Link
                      href={`/blog/${article.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 rounded-lg text-xs transition-colors"
                      style={{ color: 'var(--t-brand)', background: 'var(--bg-brand-dim)', border: '1px solid var(--bd-brand-dim)' }}
                    >
                      Voir
                    </Link>
                  )}
                  <Link
                    href={`/admin/articles/${article.id}`}
                    className="px-3 py-1.5 rounded-lg text-xs transition-colors"
                    style={{ color: 'var(--t-secondary)', background: 'var(--bg-btn-secondary)', border: '1px solid var(--bd-btn-secondary)' }}
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id, article.title)}
                    disabled={deletingId === article.id}
                    className="px-3 py-1.5 rounded-lg text-xs transition-colors disabled:opacity-50"
                    style={{ color: '#ef4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    {deletingId === article.id ? '…' : 'Supprimer'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
