import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Scale,
  BarChart3,
  Link2,
  Home,
  Lock,
  BookOpen,
  Landmark,
  Building2,
  TrendingUp,
  ClipboardList,
  KeyRound,
} from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";
import FAQSchema from "@/components/SEO/FAQSchema";
import HowToSchema from "@/components/SEO/HowToSchema";

export const metadata: Metadata = {
  title: "Simulateur Capacité d'Emprunt Immobilier Gratuit - Calcul Instantané 2026",
  description:
    "Calculez gratuitement votre capacité d'emprunt immobilier en 2026. Formule HCSF officielle des 35 %, frais de notaire, comparatif d'années. Résultat instantané, aucune inscription.",
  openGraph: {
    title: "Simulateur Capacité d'Emprunt Immobilier Gratuit - Calcul Instantané 2026",
    description:
      "Calculez gratuitement votre capacité d'emprunt immobilier en 2026. Formule HCSF officielle des 35 %, frais de notaire, comparatif 15/20/25 ans.",
    url: "https://empruntcalcul.fr",
    type: "website",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://empruntcalcul.fr" },
};

const FEATURES = [
  {
    Icon: Zap,
    title: "Calcul instantané",
    body: "Résultat en temps réel à chaque frappe. Aucun bouton, aucune attente.",
  },
  {
    Icon: Scale,
    title: "Formule HCSF officielle",
    body: "Même calcul d'annuité que les banques françaises. Règle des 35 % strictement appliquée.",
  },
  {
    Icon: BarChart3,
    title: "Comparatif multi-durée",
    body: "Visualisez simultanément les scénarios sur 15, 20 et 25 ans pour choisir le meilleur équilibre.",
  },
  {
    Icon: Link2,
    title: "Partage par lien",
    body: "L'URL encode votre simulation. Copiez-la pour la partager avec votre courtier ou votre banque.",
  },
  {
    Icon: Home,
    title: "Frais de notaire inclus",
    body: "Calcul automatique selon le type de bien (neuf ou ancien) pour un budget total réaliste.",
  },
  {
    Icon: Lock,
    title: "100 % privé",
    body: "Aucune donnée envoyée à un serveur. Tout se calcule dans votre navigateur, sans cookie.",
  },
];

const CONTENT_LINKS = [
  {
    href: "/guide-capacite-emprunt",
    Icon: BookOpen,
    title: "Guide complet",
    desc: "Formule, variables clés, règle HCSF - tout comprendre en un seul article.",
    badge: "Guide",
  },
  {
    href: "/pret-a-taux-zero-2026",
    Icon: Landmark,
    title: "Prêt à Taux Zéro 2026",
    desc: "Zones A/B/C, plafonds de ressources et quotités - suis-je éligible ?",
    badge: "Dispositif",
  },
  {
    href: "/investissement-locatif",
    Icon: Building2,
    title: "Investissement locatif",
    desc: "Calcul différentiel, cashflow, régimes fiscaux pour l'investissement.",
    badge: "Stratégie",
  },
  {
    href: "/taux-immobilier-2026",
    Icon: TrendingUp,
    title: "Taux immobilier 2026",
    desc: "Baromètre des taux actuels par durée et profil emprunteur.",
    badge: "Marché",
  },
  {
    href: "/frais-de-notaire",
    Icon: ClipboardList,
    title: "Frais de notaire",
    desc: "Calcul détaillé des frais selon le type de bien et la région.",
    badge: "Calcul",
  },
  {
    href: "/primo-accedant",
    Icon: KeyRound,
    title: "Primo-accédant",
    desc: "Toutes les aides disponibles pour votre premier achat immobilier en 2026.",
    badge: "Aides",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Renseignez vos revenus nets",
    body: "Salaire net mensuel - le point de départ de tout calcul de capacité d'emprunt.",
  },
  {
    num: "02",
    title: "Ajustez les paramètres",
    body: "Apport, durée, taux d'intérêt et taux d'assurance. Les sliders s'ajustent en glisser-déposer.",
  },
  {
    num: "03",
    title: "Lisez votre budget immédiatement",
    body: "Capital empruntable, budget total, coût des intérêts et comparatif multi-durée s'affichent en temps réel.",
  },
];

const REASSURANCES = [
  "Gratuit, sans inscription",
  "Aucune donnée envoyée",
  "Formule bancaire officielle",
  "Mis à jour 2026",
];

const PREVIEW_FAQ = FAQ_ITEMS.slice(0, 4);

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://empruntcalcul.fr/#website",
  name: "EmpruntCalcul",
  url: "https://empruntcalcul.fr",
  description: "Simulateur gratuit de capacité d'emprunt immobilier pour la France",
  inLanguage: "fr-FR",
  publisher: { "@id": "https://empruntcalcul.fr/#organization" },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://empruntcalcul.fr/simulateur#app",
  name: "Simulateur de capacité d'emprunt immobilier",
  url: "https://empruntcalcul.fr/simulateur",
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Mortgage Calculator",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  inLanguage: "fr-FR",
  isAccessibleForFree: true,
  featureList: [
    "Calcul capacité d'emprunt en temps réel",
    "Règle HCSF 35 % appliquée",
    "Comparatif 15/20/25 ans",
    "Frais de notaire inclus (neuf et ancien)",
    "Mode optimisation de prêt",
    "Résultat partageable par URL",
    "100 % privé, aucune donnée envoyée",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  description:
    "Calculez instantanément votre capacité d'emprunt immobilier avec la formule officielle HCSF des 35 %. Comparatif multi-durée, frais de notaire intégrés, résultat partageable.",
  provider: { "@id": "https://empruntcalcul.fr/#organization" },
};

export default function HomePage() {
  return (
    <>
      <FAQSchema items={PREVIEW_FAQ} />
      <HowToSchema
        name="Comment calculer sa capacité d'emprunt immobilier ?"
        description="Calculez votre capacité d'emprunt immobilier en 3 étapes avec notre simulateur gratuit. Résultat instantané basé sur la règle HCSF des 35 %."
        totalTime="PT2M"
        steps={[
          {
            name: "Renseignez vos revenus nets mensuels",
            text: "Entrez votre salaire net mensuel — c'est le point de départ de tout calcul de capacité d'emprunt. Les banques appliquent la règle HCSF des 35 % sur ce montant pour calculer votre mensualité maximale.",
          },
          {
            name: "Ajustez les paramètres du prêt",
            text: "Indiquez votre apport personnel, la durée souhaitée (10 à 25 ans), le taux d'intérêt et le taux d'assurance. Les sliders se mettent à jour en temps réel.",
          },
          {
            name: "Lisez votre budget d'acquisition en temps réel",
            text: "Le capital empruntable, le budget total incluant l'apport net, le coût des intérêts, l'assurance et le comparatif sur 15/20/25 ans s'affichent immédiatement.",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-20 px-4 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, var(--bg-hero-glow) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 uppercase tracking-widest"
            style={{
              background: "var(--bg-badge)",
              border: "1px solid var(--bd-brand)",
              color: "var(--t-brand)",
            }}
          >
            Outil gratuit · Règle HCSF 2026 · Calcul instantané
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Calculez votre{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              capacité d&apos;emprunt
            </span>{" "}
            immobilier
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--t-muted)" }}
          >
            Simulation instantanée basée sur la formule officielle des banques
            françaises. Règle HCSF des 35 %, frais de notaire et comparaison
            15/20/25 ans inclus. Aucune inscription.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "#003d2b", color: "#ffffff" }}
            >
              Simuler ma capacité d&apos;emprunt →
            </Link>
            <Link
              href="/guide-capacite-emprunt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base"
              style={{
                background: "var(--bg-btn-secondary)",
                color: "var(--t-btn-secondary)",
                border: "1px solid var(--bd-btn-secondary)",
              }}
            >
              Lire le guide
            </Link>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-5 mt-10 text-xs"
            style={{ color: "var(--t-muted)" }}
          >
            {REASSURANCES.map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeOpacity="0.4" />
                  <path
                    d="M3.5 6l1.7 1.7 3.3-3.4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Un simulateur précis, transparent et gratuit
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--t-faint)" }}
            >
              Conçu pour donner une estimation fiable, pas pour collecter vos
              données.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "var(--bg-brand-dim)", color: "var(--t-brand)" }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--t-primary)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--t-muted)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ─────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Comment calculer sa capacité d&apos;emprunt ?
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--t-faint)" }}
            >
              3 étapes suffisent pour obtenir une estimation précise.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map(({ num, title, body }) => (
              <div key={num} className="flex flex-col gap-3">
                <span
                  className="text-5xl font-black"
                  style={{ color: "var(--t-step-num)" }}
                >
                  {num}
                </span>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--t-primary)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--t-muted)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "#003d2b", color: "#ffffff" }}
            >
              Accéder au simulateur →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORMULE ─────────────────────────────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "var(--bg-brand-dim)",
              border: "1px solid var(--bd-brand-dim)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--t-brand)" }}
            >
              Formule utilisée par toutes les banques françaises
            </p>
            <p
              className="font-mono text-xl md:text-2xl font-bold mb-4"
              style={{ color: "var(--t-primary)" }}
            >
              P = M × [1 − (1+r)^(−n)] / r
            </p>
            <div
              className="flex flex-wrap justify-center gap-6 text-sm"
              style={{ color: "var(--t-secondary)" }}
            >
              <span>
                <strong style={{ color: "var(--t-brand)" }}>P</strong> = Capital empruntable
              </span>
              <span>
                <strong style={{ color: "var(--t-brand)" }}>M</strong> = Salaire × 35 %
              </span>
              <span>
                <strong style={{ color: "var(--t-brand)" }}>r</strong> = Taux mensuel
              </span>
              <span>
                <strong style={{ color: "var(--t-brand)" }}>n</strong> = Nb mensualités
              </span>
            </div>
            <p
              className="text-sm mt-5 max-w-lg mx-auto"
              style={{ color: "var(--t-faint)" }}
            >
              Notre simulateur implémente exactement cette formule, appliquée au
              plafond HCSF de 35 % sur vos revenus nets mensuels.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT HUB ─────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Tout sur le crédit immobilier en 2026
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--t-faint)" }}
            >
              Guides, outils et ressources pour maîtriser chaque étape de
              votre projet immobilier.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_LINKS.map(({ href, Icon, title, desc, badge }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl p-6 flex flex-col gap-3 transition-all"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--bg-brand-dim)", color: "var(--t-brand)" }}
                  >
                    <Icon size={18} />
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full shrink-0"
                    style={{
                      background: "var(--bg-badge)",
                      color: "var(--t-brand)",
                      border: "1px solid var(--bd-brand-dim)",
                    }}
                  >
                    {badge}
                  </span>
                </div>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--t-primary)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--t-muted)" }}
                >
                  {desc}
                </p>
                <span
                  className="text-xs mt-auto"
                  style={{ color: "var(--t-brand)" }}
                >
                  Lire →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER ──────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Questions fréquentes sur la capacité d&apos;emprunt
            </h2>
            <p
              className="text-base"
              style={{ color: "var(--t-faint)" }}
            >
              Les réponses aux questions les plus posées avant un achat
              immobilier.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            {PREVIEW_FAQ.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
              >
                <p
                  className="font-semibold mb-2"
                  style={{ color: "var(--t-primary)" }}
                >
                  {item.question}
                </p>
                <p
                  className="text-sm leading-relaxed line-clamp-3"
                  style={{ color: "var(--t-secondary)" }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background: "var(--bg-brand-dim)",
                color: "var(--t-brand)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="rounded-3xl p-10"
            style={{
              background: "var(--bg-cta)",
              border: "1px solid var(--bd-brand)",
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--t-primary)" }}
            >
              Prêt à simuler votre capacité d&apos;emprunt ?
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "var(--t-muted)" }}
            >
              100 % gratuit, instantané, aucune inscription. Votre résultat
              personnalisé en moins de 30 secondes.
            </p>
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "#003d2b", color: "#ffffff" }}
            >
              Calculer ma capacité d&apos;emprunt →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
