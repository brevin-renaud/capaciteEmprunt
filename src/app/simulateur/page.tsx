import type { Metadata } from "next";
import SimulatorTabs from "@/components/Simulator/SimulatorTabs";
import { deserializeFromParams, deserializeOptimizationFromParams } from "@/lib/url-serializer";
import { OPTIMIZATION_URL_KEYS } from "@/lib/constants";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

const loanServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LoanService",
  "@id": "https://www.capacimetrimmo.fr/simulateur#service",
  name: "Simulateur de capacité d'emprunt immobilier",
  description:
    "Calculez instantanément votre capacité d'emprunt immobilier selon la règle HCSF des 35 %. Formule bancaire officielle, frais de notaire, comparatif 15/20/25 ans.",
  serviceType: "Mortgage Capacity Calculator",
  loanType: "https://schema.org/MortgageLoan",
  url: "https://www.capacimetrimmo.fr/simulateur",
  areaServed: { "@type": "Country", name: "France", "@id": "https://www.wikidata.org/wiki/Q142" },
  isAccessibleForFree: true,
  availableLanguage: { "@type": "Language", name: "French", alternateName: "fr" },
  termsOfService: "https://www.capacimetrimmo.fr/mentions-legales",
  provider: { "@id": "https://www.capacimetrimmo.fr/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description: "Simulation gratuite, sans inscription, résultat instantané.",
  },
};

export const metadata: Metadata = {
  title: "Simulateur de Capacité d'Emprunt Immobilier - Calcul Instantané 2026",
  description:
    "Calculez votre capacité d'emprunt immobilier en temps réel. Règle HCSF 35 %, frais de notaire, comparaison 15/20/25 ans. Résultat immédiat, lien partageable.",
  keywords: [
    "simulateur capacité d'emprunt",
    "calculateur prêt immobilier en ligne",
    "calcul mensualité crédit immobilier",
    "outil capacité d'emprunt HCSF",
    "simulation prêt immobilier gratuit",
    "optimisation prêt immobilier",
  ],
  openGraph: {
    title: "Simulateur de Capacité d'Emprunt Immobilier - Calcul Instantané",
    description: "Calculez votre capacité d'emprunt immobilier en temps réel selon la règle HCSF des 35 %.",
    url: "https://www.capacimetrimmo.fr/simulateur",
    type: "website",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.capacimetrimmo.fr/simulateur" },
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function SimulateurPage({ searchParams }: PageProps) {
  const raw = await searchParams;

  const flat: Record<string, string> = {};
  for (const [key, val] of Object.entries(raw)) {
    if (typeof val === "string") {
      flat[key] = val;
    } else if (Array.isArray(val) && val[0] !== undefined) {
      flat[key] = val[0];
    }
  }

  const initialMode = flat[OPTIMIZATION_URL_KEYS.mode] === "1" ? "optimization" : "capacity";
  const initialCapacityInputs = deserializeFromParams(flat);
  const initialOptimizationInputs = deserializeOptimizationFromParams(flat);

  return (
    <main className="min-h-screen py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loanServiceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.capacimetrimmo.fr" },
          { name: "Simulateur", url: "https://www.capacimetrimmo.fr/simulateur" },
        ]}
      />
      {/* Hero */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 uppercase tracking-widest"
          style={{
            background: "var(--bg-badge)",
            border: "1px solid var(--bd-brand)",
            color: "var(--t-brand)",
          }}
        >
          Simulateur immobilier · Règle HCSF
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight"
          style={{ color: "var(--t-primary)" }}
        >
          Simulateur{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #80c0aa, #268e6b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            immobilier
          </span>
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--t-muted)" }}
        >
          Calculez votre capacité d&apos;emprunt ou optimisez les conditions d&apos;un prêt
          existant — taux HCSF, frais de notaire et comparatif multi-durée inclus.
        </p>
      </div>

      <SimulatorTabs
        initialMode={initialMode}
        initialCapacityInputs={initialCapacityInputs}
        initialOptimizationInputs={initialOptimizationInputs}
      />
    </main>
  );
}
