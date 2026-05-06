"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_PRIMARY = [
  { href: "/", label: "Accueil" },
  { href: "/simulateur", label: "Simulateur" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
] as const;

const NAV_RESOURCES = [
  { href: "/guide-capacite-emprunt", label: "Guide capacité d'emprunt" },
  { href: "/taux-immobilier-2026", label: "Taux immobilier 2026" },
  { href: "/frais-de-notaire", label: "Frais de notaire" },
  { href: "/primo-accedant", label: "Primo-accédant" },
  { href: "/pret-a-taux-zero-2026", label: "Prêt à Taux Zéro 2026" },
  { href: "/investissement-locatif", label: "Investissement locatif" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const allLinks = [...NAV_PRIMARY, ...NAV_RESOURCES];

  return (
    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-50"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "var(--bg-nav)",
        borderBottom: "1px solid var(--bd-brand-nav)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          aria-label="CapaciteEmprunt — Accueil"
          className="flex items-center gap-2 font-bold text-sm tracking-tight shrink-0"
          style={{ color: "var(--t-primary)" }}
        >
          <span
            aria-hidden="true"
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
            style={{ background: "#003d2b", color: "#ffffff" }}
          >
            CE
          </span>
          <span className="hidden sm:inline">CapaciteEmprunt</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5" role="list">
          {NAV_PRIMARY.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: active ? "var(--t-brand)" : "var(--t-secondary)",
                    background: active ? "var(--bg-brand-dim)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* Ressources dropdown */}
          <li
            className="relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setResourcesOpen(false);
              }
            }}
          >
            <button
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
              onFocus={() => setResourcesOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setResourcesOpen(false);
              }}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              aria-label="Ressources - ouvrir le menu"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: NAV_RESOURCES.some((l) => l.href === pathname)
                  ? "var(--t-brand)"
                  : "var(--t-secondary)",
                background: NAV_RESOURCES.some((l) => l.href === pathname)
                  ? "var(--bg-brand-dim)"
                  : "transparent",
              }}
            >
              Ressources
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                aria-hidden="true"
                style={{
                  transform: resourcesOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.15s",
                }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </button>

            {resourcesOpen && (
              <div
                role="menu"
                className="absolute top-full left-0 mt-1 w-60 rounded-xl py-1.5 flex flex-col"
                style={{
                  background: "var(--bg-dropdown)",
                  border: "1px solid var(--bd-brand-nav)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                }}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                {NAV_RESOURCES.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    role="menuitem"
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={() => setResourcesOpen(false)}
                    className="px-4 py-2 text-sm transition-colors"
                    style={{
                      color: pathname === href ? "var(--t-brand)" : "var(--t-secondary)",
                      background: pathname === href ? "var(--bg-dropdown-active)" : "transparent",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* CTA + ThemeToggle desktop */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Link
            href="/simulateur"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#003d2b", color: "#ffffff" }}
          >
            Simuler maintenant
          </Link>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg"
            style={{ color: "var(--t-secondary)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          className="md:hidden border-t px-4 py-3 flex flex-col gap-0.5"
          style={{ borderColor: "var(--bd-brand-nav)" }}
        >
          {allLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium"
                style={{
                  color: active ? "var(--t-brand)" : "var(--t-secondary)",
                  background: active ? "var(--bg-brand-dim)" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/simulateur"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-center"
            style={{ background: "#003d2b", color: "#ffffff" }}
          >
            Simuler maintenant
          </Link>
        </div>
      )}
    </nav>
  );
}
