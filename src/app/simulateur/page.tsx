import type { Metadata } from "next";
import Engine from "@/components/Simulator/Engine";
import { deserializeFromParams } from "@/lib/url-serializer";

export const metadata: Metadata = {
  title: "Simulateur de Capacité d'Emprunt Immobilier - Calcul Instantané 2026",
  description:
    "Calculez votre capacité d'emprunt immobilier en temps réel. Règle HCSF 35 %, frais de notaire, comparaison 15/20/25 ans. Résultat immédiat, lien partageable.",
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

  const initialInputs = deserializeFromParams(flat);

  return (
    <main className="min-h-screen py-12 px-4">
      {/* Hero */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
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

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight" style={{ color: "var(--t-primary)" }}>
          Votre capacité{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #80c0aa, #268e6b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            d&apos;emprunt
          </span>
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "var(--t-muted)" }}
        >
          Simulez votre budget d&apos;acquisition en temps réel - taux HCSF, frais de
          notaire et comparaison multi-durée inclus. L&apos;URL se met à jour
          automatiquement.
        </p>
      </div>

      <Engine initialInputs={initialInputs} />
    </main>
  );
}
