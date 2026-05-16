import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import ArticleSchema from "@/components/SEO/ArticleSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Prêt à Taux Zéro 2026 (PTZ) - Conditions, Zones et Éligibilité",
  description:
    "Tout savoir sur le Prêt à Taux Zéro 2026 : zones géographiques A, A bis, B1, B2, C, plafonds de ressources, quotité maximale et cumul avec un crédit immobilier classique.",
  openGraph: {
    title: "Prêt à Taux Zéro 2026 (PTZ) - Conditions, Zones et Éligibilité",
    description:
      "Zones A/B/C, plafonds de ressources et quotités - tout comprendre sur le Prêt à Taux Zéro pour les primo-accédants en 2026.",
    url: "https://www.empruntcalcul.fr/pret-a-taux-zero-2026",
    type: "article",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.empruntcalcul.fr/pret-a-taux-zero-2026" },
};

const ZONES = [
  {
    zone: "A & A bis",
    description: "Paris, Île-de-France dense, Côte d'Azur, Genevois",
    plafond_4pers: "74 000 €",
    quotite: "50 %",
    badge: "Tendu",
  },
  {
    zone: "B1",
    description: "Grandes métropoles, Outre-mer, Corse, DROM",
    plafond_4pers: "60 000 €",
    quotite: "40 %",
    badge: "Intermédiaire",
  },
  {
    zone: "B2",
    description: "Villes moyennes de 50 000 à 250 000 hab.",
    plafond_4pers: "54 000 €",
    quotite: "40 %",
    badge: "Détendu",
  },
  {
    zone: "C",
    description: "Reste du territoire (zones rurales, petites villes)",
    plafond_4pers: "49 000 €",
    quotite: "20 %",
    badge: "Rural",
  },
];

const PLAFONDS_RESSOURCES = [
  { pers: "1 personne", A_Abis: "37 000 €", B1: "30 000 €", B2_C: "27 000 €" },
  { pers: "2 personnes", A_Abis: "51 800 €", B1: "42 000 €", B2_C: "37 800 €" },
  { pers: "3 personnes", A_Abis: "62 900 €", B1: "51 000 €", B2_C: "45 900 €" },
  { pers: "4 personnes", A_Abis: "74 000 €", B1: "60 000 €", B2_C: "54 000 €" },
  { pers: "5 personnes", A_Abis: "85 100 €", B1: "69 000 €", B2_C: "62 100 €" },
];


export default function PTZ2026() {
  return (
    <main className="min-h-screen py-16 px-4">
      <ArticleSchema
        headline="Prêt à Taux Zéro 2026 (PTZ) - Conditions, Zones et Éligibilité"
        description="Guide complet sur le Prêt à Taux Zéro (PTZ) 2026 : conditions, zones géographiques, plafonds de ressources et intégration dans un plan de financement immobilier."
        url="https://www.empruntcalcul.fr/pret-a-taux-zero-2026"
        datePublished="2025-01-15"
        dateModified="2026-05-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.empruntcalcul.fr" },
          { name: "Prêt à Taux Zéro 2026", url: "https://www.empruntcalcul.fr/pret-a-taux-zero-2026" },
        ]}
      />

      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 uppercase tracking-widest"
            style={{
              background: "var(--bg-badge)",
              border: "1px solid var(--bd-brand)",
              color: "var(--t-brand)",
            }}
          >
            Dispositif d&apos;aide à l&apos;accession · 2026
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Prêt à Taux Zéro 2026 :{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conditions et Éligibilité
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--t-muted)" }}
          >
            Le Prêt à Taux Zéro (PTZ) finance jusqu&apos;à 50 % de votre achat sans
            intérêts. Découvrez si vous êtes éligible selon votre zone géographique
            et vos revenus.
          </p>
        </div>

        <div className="flex flex-col gap-12">

          {/* Qu'est-ce que le PTZ ? */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Qu&apos;est-ce que le Prêt à Taux Zéro ?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--t-secondary)" }}
            >
              Le Prêt à Taux Zéro (PTZ) est un prêt sans intérêts accordé par l&apos;État français aux
              primo-accédants pour financer l&apos;achat de leur résidence principale.
              Il ne peut pas financer la totalité de l&apos;achat : il vient en
              complément d&apos;un crédit immobilier classique, d&apos;un apport personnel, ou
              d&apos;autres prêts aidés (prêt Action Logement, prêt conventionné…).
            </p>
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--bg-cta)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--t-primary)" }}
              >
                Les 3 conditions d&apos;accès au Prêt à Taux Zéro 2026
              </h3>
              <ul className="flex flex-col gap-3 text-sm" style={{ color: "var(--t-secondary)" }}>
                <li className="flex gap-3 items-start">
                  <Check size={16} style={{ color: "var(--t-brand)", flexShrink: 0, marginTop: 2 }} />
                  <span>
                    <strong style={{ color: "var(--t-primary)" }}>Primo-accédant :</strong> ne pas
                    avoir été propriétaire de votre résidence principale dans les 2
                    dernières années.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check size={16} style={{ color: "var(--t-brand)", flexShrink: 0, marginTop: 2 }} />
                  <span>
                    <strong style={{ color: "var(--t-primary)" }}>Plafonds de ressources :</strong>{" "}
                    votre revenu fiscal de référence N-2 doit être inférieur aux
                    plafonds de votre zone géographique.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check size={16} style={{ color: "var(--t-brand)", flexShrink: 0, marginTop: 2 }} />
                  <span>
                    <strong style={{ color: "var(--t-primary)" }}>Résidence principale :</strong>{" "}
                    le bien financé doit être votre résidence principale dans l&apos;année
                    suivant l&apos;achat.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Zones géographiques */}
          <section>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--t-primary)" }}
            >
              Zones géographiques et quotités maximales
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--t-muted)" }}>
              La quotité PTZ (part du prix finançable à taux zéro) varie selon la
              tension du marché immobilier local.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {ZONES.map(({ zone, description, plafond_4pers, quotite, badge }) => (
                <div
                  key={zone}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bd-card)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "var(--t-primary)" }}
                      >
                        Zone {zone}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--t-faint)" }}>
                        {description}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full shrink-0"
                      style={{
                        background: "var(--bg-badge)",
                        color: "var(--t-brand)",
                        border: "1px solid var(--bd-brand)",
                      }}
                    >
                      {badge}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <p className="text-xs mb-1" style={{ color: "var(--t-faint)" }}>
                        Quotité PTZ
                      </p>
                      <p className="font-bold text-2xl" style={{ color: "var(--t-brand)" }}>
                        {quotite}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: "var(--t-faint)" }}>
                        Plafond revenus (4 pers.)
                      </p>
                      <p
                        className="font-semibold"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {plafond_4pers}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Plafonds de ressources */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Plafonds de ressources PTZ 2026
            </h2>
            <p className="text-sm mb-5" style={{ color: "var(--t-muted)" }}>
              Revenu fiscal de référence N-2 à ne pas dépasser selon la composition
              du foyer et la zone.
            </p>

            <div className="overflow-x-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--bd-card)" }}
            >
              <table className="w-full text-sm min-w-120">
                <caption className="sr-only">Plafonds de ressources PTZ 2026 selon la composition du foyer et la zone géographique</caption>
                <thead>
                  <tr style={{ background: "var(--bg-brand-medium)" }}>
                    <th scope="col" className="text-left px-5 py-3 font-semibold" style={{ color: "var(--t-brand)" }}>
                      Foyer
                    </th>
                    <th scope="col" className="text-right px-4 py-3 font-semibold" style={{ color: "var(--t-brand)" }}>
                      Zone A/A bis
                    </th>
                    <th scope="col" className="text-right px-4 py-3 font-semibold" style={{ color: "var(--t-brand)" }}>
                      Zone B1
                    </th>
                    <th scope="col" className="text-right px-4 py-3 font-semibold" style={{ color: "var(--t-brand)" }}>
                      Zone B2/C
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PLAFONDS_RESSOURCES.map((row, i) => (
                    <tr
                      key={row.pers}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-table-even)" : "transparent",
                        borderTop: "1px solid var(--bd-table-row)",
                      }}
                    >
                      <td
                        className="px-5 py-3 font-medium"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {row.pers}
                      </td>
                      <td className="px-4 py-3 text-right" style={{ color: "var(--t-secondary)" }}>
                        {row.A_Abis}
                      </td>
                      <td className="px-4 py-3 text-right" style={{ color: "var(--t-secondary)" }}>
                        {row.B1}
                      </td>
                      <td className="px-4 py-3 text-right" style={{ color: "var(--t-secondary)" }}>
                        {row.B2_C}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </section>

          {/* Cumul et calcul */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Comment le Prêt à Taux Zéro s&apos;intègre dans votre plan de financement ?
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--t-secondary)" }}
            >
              Le PTZ ne finance pas tout. Il s&apos;intègre dans un plan de financement
              global où chaque source comble une partie du prix d&apos;achat.
            </p>

            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bd-card)",
              }}
            >
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--t-primary)" }}
              >
                Exemple : achat de 250 000 € en zone B1 pour un foyer de 3 personnes
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { label: "Prix du bien", value: "250 000 €", highlight: false },
                  { label: "Prêt à Taux Zéro (40 % en zone B1)", value: "100 000 €", highlight: true },
                  { label: "Apport personnel", value: "25 000 €", highlight: false },
                  { label: "Frais de notaire (~8 %)", value: "−18 000 €", highlight: false },
                  { label: "Crédit immobilier classique nécessaire", value: "143 000 €", highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-2 px-3 rounded-lg"
                    style={{
                      background: highlight ? "var(--bg-brand-medium)" : "transparent",
                      color: highlight ? "var(--t-brand)" : "var(--t-secondary)",
                    }}
                  >
                    <span>{label}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>
              Note : le Prêt à Taux Zéro est remboursable sans intérêts, sur une durée pouvant
              aller jusqu&apos;à 25 ans, avec une période de différé (0 à 5 ans selon
              vos revenus) durant laquelle vous ne remboursez pas le PTZ.
            </p>
          </section>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "var(--bg-cta)",
              border: "1px solid var(--bd-brand)",
            }}
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Calculez votre capacité d&apos;emprunt global (Prêt à Taux Zéro inclus)
            </h2>
            <p
              className="text-sm mb-6 max-w-md mx-auto"
              style={{ color: "var(--t-muted)" }}
            >
              Notre simulateur vous permet d&apos;estimer la capacité sur la partie
              crédit classique. Ajoutez-y votre PTZ estimé pour obtenir votre
              budget total.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "#003d2b", color: "#ffffff" }}
              >
                Simuler ma capacité →
              </Link>
              <Link
                href="/guide-capacite-emprunt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: "var(--bg-btn-secondary)",
                  color: "var(--t-btn-secondary)",
                  border: "1px solid var(--bd-btn-secondary)",
                }}
              >
                Lire le guide complet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
