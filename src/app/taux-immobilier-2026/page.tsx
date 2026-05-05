import type { Metadata } from "next";
import Link from "next/link";
import { Check, TriangleAlert } from "lucide-react";
import ArticleSchema from "@/components/SEO/ArticleSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Taux Immobilier 2026 - Baromètre des Taux de Crédit par Durée et Profil",
  description:
    "Consultez les taux de crédit immobilier en mai 2026 selon la durée (15, 20, 25 ans) et le profil emprunteur. Conseils pour négocier le meilleur taux avec votre banque ou un courtier.",
  keywords: [
    "taux immobilier 2026",
    "taux crédit immobilier mai 2026",
    "baromètre taux immobilier",
    "taux prêt immobilier 20 ans",
    "meilleur taux immobilier",
    "négocier taux crédit immobilier",
    "taux fixe variable immobilier",
  ],
  openGraph: {
    title: "Taux Immobilier 2026 - Baromètre des Taux de Crédit",
    description: "Taux actuels par durée et profil emprunteur + conseils pour obtenir le meilleur taux en 2026.",
    url: "https://www.capaciteemprunt.fr/taux-immobilier-2026",
    type: "article",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.capaciteemprunt.fr/taux-immobilier-2026" },
};

const TAUX_PAR_DUREE = [
  {
    duree: "15 ans",
    excellent: "2,95 %",
    bon: "3,20 %",
    standard: "3,45 %",
    tendance: "↘",
  },
  {
    duree: "20 ans",
    excellent: "3,20 %",
    bon: "3,45 %",
    standard: "3,70 %",
    tendance: "↘",
  },
  {
    duree: "25 ans",
    excellent: "3,45 %",
    bon: "3,70 %",
    standard: "3,95 %",
    tendance: "→",
  },
];

const EVOLUTION = [
  { periode: "Jan 2022", taux: "1,10 %", contexte: "Taux historiquement bas" },
  { periode: "Jan 2023", taux: "2,70 %", contexte: "Remontée BCE" },
  { periode: "Jan 2024", taux: "4,20 %", contexte: "Pic du cycle de hausse" },
  { periode: "Juil 2024", taux: "3,80 %", contexte: "Début de la détente" },
  { periode: "Jan 2025", taux: "3,50 %", contexte: "Poursuite de la baisse" },
  { periode: "Mai 2026", taux: "3,30 %", contexte: "Stabilisation attendue" },
];

export default function TauxImmobilier2026() {
  return (
    <main className="min-h-screen py-16 px-4">
      <ArticleSchema
        headline="Taux Immobilier 2026 - Baromètre des Taux de Crédit par Durée et Profil"
        description="Consultez les taux de crédit immobilier en mai 2026 selon la durée (15, 20, 25 ans) et le profil emprunteur. Conseils pour négocier le meilleur taux."
        url="https://www.capaciteemprunt.fr/taux-immobilier-2026"
        datePublished="2025-01-15"
        dateModified="2026-05-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.capaciteemprunt.fr" },
          { name: "Taux immobilier 2026", url: "https://www.capaciteemprunt.fr/taux-immobilier-2026" },
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
            Baromètre · Mis à jour mai 2026
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Taux Immobilier{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              2026
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--t-muted)" }}
          >
            Les taux de crédit immobilier en 2026 s&apos;inscrivent dans une phase de
            stabilisation après le pic de 2024. Voici les fourchettes actuelles
            par profil et par durée.
          </p>
        </div>

        <div className="flex flex-col gap-12">

          {/* Baromètre actuel */}
          <section>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--t-primary)" }}
            >
              Taux actuels par durée (mai 2026)
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--t-muted)" }}>
              Taux nominaux hors assurance emprunteur, pour une résidence
              principale avec apport ≥ 10 %.
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--bd-card)" }}
            >
              <table className="w-full text-sm">
                <caption className="sr-only">Taux de crédit immobilier par durée et profil emprunteur - mai 2026</caption>
                <thead>
                  <tr style={{ background: "var(--bg-brand-medium)" }}>
                    <th
                      scope="col"
                      className="text-left px-5 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Durée
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Excellent profil
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Bon profil
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Profil standard
                    </th>
                    <th
                      scope="col"
                      className="text-center px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Tendance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TAUX_PAR_DUREE.map((row, i) => (
                    <tr
                      key={row.duree}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-table-even)" : "transparent",
                        borderTop: "1px solid var(--bd-table-row)",
                      }}
                    >
                      <td
                        className="px-5 py-4 font-bold"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {row.duree}
                      </td>
                      <td
                        className="px-4 py-4 text-right font-semibold"
                        style={{ color: "var(--t-brand)" }}
                      >
                        {row.excellent}
                      </td>
                      <td
                        className="px-4 py-4 text-right"
                        style={{ color: "var(--t-secondary)" }}
                      >
                        {row.bon}
                      </td>
                      <td
                        className="px-4 py-4 text-right"
                        style={{ color: "var(--t-muted)" }}
                      >
                        {row.standard}
                      </td>
                      <td
                        className="px-4 py-4 text-center text-lg"
                        style={{ color: row.tendance === "↘" ? "var(--t-brand)" : "var(--t-muted)" }}
                      >
                        {row.tendance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs mt-3" style={{ color: "var(--t-faint)" }}>
              Sources : relevés courtiers, baromètre Empruntis, CSA/Crédit
              Logement. Taux indicatifs - vérifiez auprès de votre banque.
            </p>
          </section>

          {/* Évolution historique */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Évolution des taux immobiliers depuis 2022
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--t-secondary)" }}
            >
              Après des taux historiquement bas en 2021-2022 (autour de 1 %),
              la remontée brutale des taux directeurs de la BCE en 2022-2023 a
              porté les taux immobiliers à plus de 4 % début 2024. La détente
              monétaire amorcée mi-2024 ramène les taux vers 3,2-3,5 % en 2026.
            </p>

            <div className="flex flex-col gap-2">
              {EVOLUTION.map(({ periode, taux, contexte }, i) => {
                const isLast = i === EVOLUTION.length - 1;
                return (
                  <div
                    key={periode}
                    className="flex items-center gap-4 px-5 py-3 rounded-xl"
                    style={{
                      background: isLast ? "var(--bg-brand-medium)" : "var(--bg-table-even)",
                      border: `1px solid ${isLast ? "var(--bd-brand)" : "var(--bd-table-row)"}`,
                    }}
                  >
                    <span
                      className="text-sm font-semibold w-24 shrink-0"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {periode}
                    </span>
                    <span
                      className="text-lg font-bold w-16 shrink-0"
                      style={{ color: isLast ? "var(--t-brand)" : "var(--t-secondary)" }}
                    >
                      {taux}
                    </span>
                    <span className="text-sm" style={{ color: "var(--t-muted)" }}>
                      {contexte}
                      {isLast && (
                        <span
                          className="ml-2 text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "var(--bg-badge)",
                            color: "var(--t-brand)",
                          }}
                        >
                          Actuel
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Qu'est-ce qui influence le taux ? */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Quels facteurs influencent votre taux personnel ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Le taux directeur BCE",
                  body: "Principal déterminant du niveau général des taux. Une baisse de 0,25 point de la BCE se répercute en 2-4 mois sur les offres bancaires.",
                  impact: "Marché",
                },
                {
                  title: "L'apport personnel",
                  body: "Plus l'apport est élevé, moins la banque prend de risque. Un apport de 20 % peut faire gagner 0,1-0,2 % vs 10 % d'apport.",
                  impact: "Fort",
                },
                {
                  title: "La stabilité du contrat",
                  body: "CDI confirmé = taux préférentiel. CDD, intérim et indépendants paient généralement 0,1-0,3 % de plus.",
                  impact: "Fort",
                },
                {
                  title: "L'épargne résiduelle",
                  body: "Conserver 3-6 mois de charges après l'achat rassure la banque et peut améliorer le taux de 0,05-0,15 %.",
                  impact: "Modéré",
                },
                {
                  title: "Le profil bancaire",
                  body: "Absence de découvert, revenus domiciliés, ancienneté client peuvent faciliter l'obtention d'un taux compétitif.",
                  impact: "Modéré",
                },
                {
                  title: "La concurrence (courtier)",
                  body: "Faire jouer la concurrence via un courtier peut générer 0,2-0,5 % de gain. C'est souvent le levier le plus accessible.",
                  impact: "Actionnable",
                },
              ].map(({ title, body, impact }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bd-card)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3
                      className="font-semibold"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {title}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        background: "var(--bg-badge)",
                        color: "var(--t-brand)",
                        border: "1px solid var(--bd-brand-dim)",
                      }}
                    >
                      {impact}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Taux fixe vs variable */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Taux fixe ou taux variable en 2026 ?
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--t-secondary)" }}
            >
              En France, plus de 95 % des prêts immobiliers sont à taux fixe -
              à juste titre. Le taux fixe garantit une mensualité stable sur
              toute la durée du prêt, quelle que soit l&apos;évolution des marchés.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--bg-brand-dim)",
                  border: "1px solid var(--bd-brand)",
                }}
              >
                <h3
                  className="font-semibold mb-3 flex items-center gap-2"
                  style={{ color: "var(--t-brand)" }}
                >
                  <Check size={16} />
                  Taux fixe - Recommandé
                </h3>
                <ul
                  className="text-sm flex flex-col gap-2"
                  style={{ color: "var(--t-secondary)" }}
                >
                  <li>Mensualité garantie sur toute la durée</li>
                  <li>Prévisibilité totale du coût final</li>
                  <li>Protection contre les hausses futures</li>
                  <li>Standard du marché français</li>
                </ul>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
              >
                <h3
                  className="font-semibold mb-3 flex items-center gap-2"
                  style={{ color: "var(--t-primary)" }}
                >
                  <TriangleAlert size={16} style={{ color: "var(--icon-warning)" }} />
                  Taux variable - Prudence
                </h3>
                <ul
                  className="text-sm flex flex-col gap-2"
                  style={{ color: "var(--t-secondary)" }}
                >
                  <li>Initialement plus bas, mais évolutif</li>
                  <li>Risque de hausse en cas de remontée des taux</li>
                  <li>Souvent capé (ex. ± 2 points max)</li>
                  <li>Rare en France, courant en Europe</li>
                </ul>
              </div>
            </div>
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
              Simulez votre capacité avec le taux du marché
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--t-muted)" }}
            >
              Entrez le taux qui correspond à votre profil dans notre simulateur
              et voyez l&apos;impact sur votre budget d&apos;acquisition.
            </p>
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: "#003d2b", color: "#ffffff" }}
            >
              Ouvrir le simulateur →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
