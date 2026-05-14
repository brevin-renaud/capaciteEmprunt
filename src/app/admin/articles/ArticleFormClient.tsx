'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CATEGORIES = ['Immobilier', 'Crédit', 'Taux', 'Fiscalité', 'Investissement', 'Guides'];

interface ArticleFormData {
  id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  category: string;
  isDraft: boolean;
  publishedAt: string;
}

interface Props {
  initialData?: ArticleFormData;
  mode: 'create' | 'edit';
}

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function ArticleFormClient({ initialData, mode }: Props) {
  const router = useRouter();

  const [form, setForm] = useState<ArticleFormData>(
    initialData ?? {
      title: '',
      slug: '',
      description: '',
      content: '',
      author: 'CapaciteEmprunt',
      category: 'Immobilier',
      isDraft: true,
      publishedAt: '',
    },
  );
  const [slugManual, setSlugManual] = useState(mode === 'edit');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleTitleChange(value: string) {
    setForm((f) => ({
      ...f,
      title: value,
      slug: slugManual ? f.slug : slugify(value),
    }));
  }

  function handleSlugChange(value: string) {
    setSlugManual(true);
    setForm((f) => ({ ...f, slug: value.toLowerCase().replace(/[^a-z0-9-]/g, '') }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const payload = {
      title: form.title,
      slug: form.slug,
      description: form.description,
      content: form.content,
      author: form.author,
      category: form.category,
      isDraft: form.isDraft,
      publishedAt: form.publishedAt || null,
    };

    try {
      const url =
        mode === 'edit' ? `/api/admin/articles/${initialData!.id}` : '/api/admin/articles';
      const method = mode === 'edit' ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Erreur lors de la sauvegarde');
        return;
      }

      setSuccess(true);
      setTimeout(() => router.push('/admin/articles'), 800);
    } catch {
      setError('Erreur réseau');
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    background: 'var(--bg-brand-dim)',
    border: '1px solid var(--bd-brand)',
    color: 'var(--t-primary)',
    borderRadius: '0.5rem',
    padding: '0.625rem 0.75rem',
    fontSize: '0.875rem',
    outline: 'none',
    width: '100%',
  } as React.CSSProperties;

  const labelStyle = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: 'var(--t-secondary)',
    marginBottom: '0.375rem',
  } as React.CSSProperties;

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
          <Link
            href="/admin/articles"
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: 'var(--t-secondary)' }}
          >
            Articles
          </Link>
          <span style={{ color: 'var(--t-muted)' }}>/</span>
          <span className="text-sm" style={{ color: 'var(--t-brand)' }}>
            {mode === 'create' ? 'Nouvel article' : 'Modifier'}
          </span>
        </div>

        <Link
          href="/admin/articles"
          className="px-3 py-1.5 rounded-lg text-xs transition-colors"
          style={{ color: 'var(--t-secondary)', background: 'var(--bg-btn-secondary)', border: '1px solid var(--bd-btn-secondary)' }}
        >
          ← Retour
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--t-primary)' }}>
          {mode === 'create' ? 'Nouvel article' : 'Modifier l\'article'}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Titre */}
          <div>
            <label htmlFor="title" style={labelStyle}>Titre *</label>
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              placeholder="Mon article sur l'immobilier"
              style={inputStyle}
            />
          </div>

          {/* Slug */}
          <div>
            <label htmlFor="slug" style={labelStyle}>Slug *</label>
            <input
              id="slug"
              type="text"
              value={form.slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              required
              placeholder="mon-article-immobilier"
              pattern="^[a-z0-9-]+$"
              style={inputStyle}
            />
            <p className="mt-1 text-xs" style={{ color: 'var(--t-muted)' }}>
              URL : /blog/{form.slug || '…'}
            </p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" style={labelStyle}>
              Meta description * <span style={{ color: 'var(--t-muted)' }}>({form.description.length}/160)</span>
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              required
              maxLength={160}
              rows={2}
              placeholder="Description SEO de l'article (160 caractères max)"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Auteur + Catégorie */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="author" style={labelStyle}>Auteur</label>
              <input
                id="author"
                type="text"
                value={form.author}
                onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="category" style={labelStyle}>Catégorie</label>
              <select
                id="category"
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                style={inputStyle}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Contenu */}
          <div>
            <label htmlFor="content" style={labelStyle}>Contenu (Markdown) *</label>
            <textarea
              id="content"
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              required
              rows={20}
              placeholder="# Titre de l'article&#10;&#10;Votre contenu en Markdown..."
              style={{
                ...inputStyle,
                resize: 'vertical',
                fontFamily: 'monospace',
                fontSize: '0.8125rem',
                lineHeight: '1.6',
              }}
            />
          </div>

          {/* Publication */}
          <div
            className="rounded-xl p-4 flex flex-col gap-3"
            style={{ background: 'var(--bg-brand-dim)', border: '1px solid var(--bd-brand-dim)' }}
          >
            <h2 className="text-sm font-semibold" style={{ color: 'var(--t-secondary)' }}>
              Publication
            </h2>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={!form.isDraft}
                onChange={(e) => setForm((f) => ({ ...f, isDraft: !e.target.checked }))}
                className="w-4 h-4 rounded accent-brand-500"
              />
              <span className="text-sm" style={{ color: 'var(--t-primary)' }}>
                Publier l&apos;article
              </span>
            </label>

            {!form.isDraft && (
              <div>
                <label htmlFor="publishedAt" style={labelStyle}>
                  Date de publication (laisser vide = maintenant)
                </label>
                <input
                  id="publishedAt"
                  type="datetime-local"
                  value={form.publishedAt}
                  onChange={(e) => setForm((f) => ({ ...f, publishedAt: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            )}
          </div>

          {error && (
            <p
              className="px-4 py-3 rounded-lg text-sm"
              style={{ color: 'var(--t-warning)', background: 'var(--bg-warning)', border: '1px solid var(--bd-warning)' }}
            >
              {error}
            </p>
          )}

          {success && (
            <p
              className="px-4 py-3 rounded-lg text-sm"
              style={{ color: '#16a34a', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
            >
              Article sauvegardé. Redirection…
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading || success}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ background: '#003d2b', color: '#ffffff' }}
            >
              {loading ? 'Sauvegarde…' : mode === 'create' ? 'Créer l\'article' : 'Enregistrer les modifications'}
            </button>
            <Link
              href="/admin/articles"
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ color: 'var(--t-secondary)', background: 'var(--bg-btn-secondary)', border: '1px solid var(--bd-btn-secondary)' }}
            >
              Annuler
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
