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

interface ScheduledResult {
  id: string;
  title: string;
  slug: string;
  scheduledPublishAt: string;
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

function formatScheduleDate(iso: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export default function ArticlesListClient({ articles }: { articles: Article[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState<{ imported: { slug: string; title: string }[]; skipped: string[]; errors: { file: string; reason: string }[]; empty?: boolean } | null>(null);
  const [generating, setGenerating] = useState(false);
  const [scheduleResult, setScheduleResult] = useState<ScheduledResult[] | null>(null);

  const draftCount = articles.filter((a) => a.isDraft).length;

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

  async function handleImport() {
    if (!confirm("Importer les fichiers .md du dossier drafts/ comme brouillons ?")) return;

    setImporting(true);
    setImportResult(null);

    try {
      const res = await fetch('/api/admin/articles/import', { method: 'POST' });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Erreur lors de l'import");
        return;
      }

      setImportResult(data);
      if (data.imported.length > 0) router.refresh();
    } catch {
      setError('Erreur réseau');
    } finally {
      setImporting(false);
    }
  }

  async function handleGenerate() {
    if (draftCount === 0) return;
    if (!confirm(`Planifier ${draftCount} brouillon${draftCount > 1 ? 's' : ''} chaque mercredi et samedi ?\n\nLes articles seront programmés à partir du prochain créneau disponible.`)) return;

    setGenerating(true);
    setError('');
    setScheduleResult(null);

    try {
      const res = await fetch('/api/admin/articles/generate', { method: 'POST' });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Erreur lors de la planification');
        return;
      }

      setScheduleResult(data.scheduled);
      router.refresh();
    } catch {
      setError('Erreur réseau');
    } finally {
      setGenerating(false);
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
              {draftCount > 0 && (
                <span className="ml-2" style={{ color: '#ca8a04' }}>
                  · {draftCount} brouillon{draftCount > 1 ? 's' : ''}
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleImport}
              disabled={importing}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ background: 'var(--bg-btn-secondary)', color: 'var(--t-secondary)', border: '1px solid var(--bd-btn-secondary)' }}
            >
              {importing ? 'Import…' : 'Importer drafts/'}
            </button>
            {draftCount > 0 && (
              <button
                onClick={handleGenerate}
                disabled={generating}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: 'var(--bg-brand-dim)', color: 'var(--t-brand)', border: '1px solid var(--bd-brand)' }}
              >
                {generating ? 'Planification…' : `Générer le planning (${draftCount})`}
              </button>
            )}
            <Link
              href="/admin/articles/nouveau"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: '#003d2b', color: '#ffffff' }}
            >
              + Nouvel article
            </Link>
          </div>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg text-sm" style={{ color: 'var(--t-warning)', background: 'var(--bg-warning)', border: '1px solid var(--bd-warning)' }}>
            {error}
          </div>
        )}

        {/* Résultat import */}
        {importResult && !importResult.empty && (
          <div
            className="mb-6 rounded-xl p-5"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--bd-card)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold" style={{ color: 'var(--t-primary)' }}>
                Import drafts/
                {importResult.imported.length > 0 && <span className="ml-2" style={{ color: '#16a34a' }}>· {importResult.imported.length} importé{importResult.imported.length > 1 ? 's' : ''}</span>}
                {importResult.skipped.length > 0 && <span className="ml-2" style={{ color: 'var(--t-muted)' }}>· {importResult.skipped.length} déjà présent{importResult.skipped.length > 1 ? 's' : ''}</span>}
                {importResult.errors.length > 0 && <span className="ml-2" style={{ color: '#ef4444' }}>· {importResult.errors.length} erreur{importResult.errors.length > 1 ? 's' : ''}</span>}
              </p>
              <button onClick={() => setImportResult(null)} className="text-xs" style={{ color: 'var(--t-muted)' }}>Fermer</button>
            </div>
            {importResult.imported.length > 0 && (
              <div className="flex flex-col gap-1 mb-2">
                {importResult.imported.map((a) => (
                  <p key={a.slug} className="text-xs" style={{ color: '#16a34a' }}>✓ {a.title}</p>
                ))}
              </div>
            )}
            {importResult.errors.length > 0 && (
              <div className="flex flex-col gap-1">
                {importResult.errors.map((e) => (
                  <p key={e.file} className="text-xs" style={{ color: '#ef4444' }}>{e.file} — {e.reason}</p>
                ))}
              </div>
            )}
          </div>
        )}
        {importResult?.empty && (
          <div
            className="mb-4 px-4 py-3 rounded-lg text-sm"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--bd-card)', color: 'var(--t-muted)' }}
          >
            Aucun fichier .md trouvé dans <code>drafts/</code>.
          </div>
        )}

        {/* Planning généré */}
        {scheduleResult && scheduleResult.length > 0 && (
          <div
            className="mb-6 rounded-xl p-5"
            style={{ background: 'var(--bg-brand-dim)', border: '1px solid var(--bd-brand)' }}
          >
            <p className="text-sm font-semibold mb-3" style={{ color: 'var(--t-brand)' }}>
              Planning généré — {scheduleResult.length} article{scheduleResult.length > 1 ? 's' : ''} programmé{scheduleResult.length > 1 ? 's' : ''}
            </p>
            <div className="flex flex-col gap-2">
              {scheduleResult.map((item) => (
                <div key={item.id} className="flex items-center gap-3 text-sm">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium shrink-0"
                    style={{ background: 'rgba(99,102,241,0.15)', color: '#6366f1' }}
                  >
                    {formatScheduleDate(item.scheduledPublishAt)}
                  </span>
                  <span style={{ color: 'var(--t-primary)' }}>{item.title}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setScheduleResult(null)}
              className="mt-3 text-xs"
              style={{ color: 'var(--t-muted)' }}
            >
              Fermer
            </button>
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
                    {article.scheduledPublishAt && new Date(article.scheduledPublishAt) > new Date() && (
                      <span style={{ color: '#6366f1' }}>
                        {' · '}{formatScheduleDate(article.scheduledPublishAt)}
                      </span>
                    )}
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
