import Link from "next/link";

const SIMULATEUR_LINKS = [
  { href: "/simulateur", label: "Simulateur" },
  { href: "/faq", label: "FAQ" },
  { href: "/guide-capacite-emprunt", label: "Guide capacité d'emprunt" },
  { href: "/taux-immobilier-2026", label: "Taux immobilier 2026" },
];

const RESSOURCES_LINKS = [
  { href: "/pret-a-taux-zero-2026", label: "Prêt à taux zéro 2026" },
  { href: "/frais-de-notaire", label: "Frais de notaire" },
  { href: "/investissement-locatif", label: "Investissement locatif" },
  { href: "/primo-accedant", label: "Primo-accédant" },
];

const LEGAL_LINKS = [
  { href: "/a-propos", label: "À propos" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{ borderColor: "var(--bd-brand-nav)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--t-primary)" }}
            >
              Capacimètr<span style={{ color: "var(--t-brand)" }}>Immo</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--t-muted)" }}>
              Simulateur gratuit de capacité d&apos;emprunt immobilier. Calcul
              instantané, aucune donnée collectée.
            </p>
            <a
              href="mailto:contact@impotscouple.fr"
              className="text-sm mt-1 hover:underline"
              style={{ color: "var(--t-brand)" }}
            >
              contact@impotscouple.fr
            </a>
          </div>

          {/* Simulateur */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>
              Simulateur
            </p>
            <ul className="flex flex-col gap-2">
              {SIMULATEUR_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:underline"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>
              Ressources
            </p>
            <ul className="flex flex-col gap-2">
              {RESSOURCES_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:underline"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>
              Légal
            </p>
            <ul className="flex flex-col gap-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:underline"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t text-xs"
          style={{ borderColor: "var(--bd-brand-nav)", color: "var(--t-muted)" }}
        >
          <p>© {new Date().getFullYear()} CapaciteEmprunt - Tous droits réservés.</p>
          <p>Simulation à titre indicatif, basée sur la réglementation HCSF 2026.</p>
        </div>
      </div>
    </footer>
  );
}
