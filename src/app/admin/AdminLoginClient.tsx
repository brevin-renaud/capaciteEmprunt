'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginClient() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Erreur de connexion');
        return;
      }

      router.push('/admin/articles');
      router.refresh();
    } catch {
      setError('Erreur réseau');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--bd-card)',
          boxShadow: 'var(--shadow-glass-lg)',
        }}
      >
        <div className="mb-8 text-center">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-lg font-black mb-4"
            style={{ background: '#003d2b', color: '#ffffff' }}
          >
            CE
          </span>
          <h1 className="text-xl font-bold" style={{ color: 'var(--t-primary)' }}>
            Administration
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--t-muted)' }}>
            Accès réservé
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1.5"
              style={{ color: 'var(--t-secondary)' }}
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors"
              style={{
                background: 'var(--bg-brand-dim)',
                border: '1px solid var(--bd-brand)',
                color: 'var(--t-primary)',
              }}
            />
          </div>

          {error && (
            <p className="text-sm px-3 py-2 rounded-lg" style={{ color: 'var(--t-warning)', background: 'var(--bg-warning)', border: '1px solid var(--bd-warning)' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: '#003d2b', color: '#ffffff' }}
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}
