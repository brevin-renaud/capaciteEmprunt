import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building2, X, Check, TriangleAlert } from "lucide-react";
import ArticleSchema from "@/components/SEO/ArticleSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Investissement Locatif 2026 - Capacité d'Emprunt et Calcul Différentiel",
  description:
    "Calculez votre capacité d'emprunt pour un investissement locatif en 2026 : méthode différentielle, revenus locatifs, cashflow, levier immobilier et fiscalité.",
  keywords: [
    "investissement locatif capacité d'emprunt",
    "calcul différentiel investissement locatif",
    "revenus locatifs crédit immobilier",
    "cashflow immobilier",
    "levier immobilier",
    "fiscalité investissement locatif",
    "rendement locatif 2026",
  ],
  openGraph: {
    title: "Investissement Locatif 2026 - Capacité d'Emprunt et Calcul Différentiel",
    description: "Méthode différentielle, revenus locatifs, cashflow, fiscalité - tout pour réussir votre investissement immobilier.",
    url: "https://www.capaciteemprunt.fr/investissement-locatif",
    type: "article",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.capaciteemprunt.fr/investissement-locatif" },
};

export default function InvestissementLocatif() {
  return (
    <main className="min-h-screen py-16 px-4">
      <ArticleSchema
        headline="Investissement Locatif 2026 - Capacité d'Emprunt et Calcul Différentiel"
        description="Calculez votre capacité d'emprunt pour un investissement locatif en 2026 : méthode différentielle, revenus locatifs, cashflow, levier immobilier et fiscalité."
        url="https://www.capaciteemprunt.fr/investissement-locatif"
        datePublished="2025-01-15"
        dateModified="2026-05-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.capaciteemprunt.fr" },
          { name: "Investissement locatif", url: "https://www.capaciteemprunt.fr/investissement-locatif" },
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
            Stratégie patrimoniale · 2026
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Réussir son{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Investissement Locatif
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--t-muted)" }}
          >
            Calculer sa capacité d&apos;emprunt pour de l&apos;investissement locatif obéit à
            des règles différentes de la résidence principale. Maîtrisez le calcul
            différentiel et le levier de l&apos;endettement.
          </p>
        </div>

        <div className="flex flex-col gap-12">

          {/* Différence résidentiel vs locatif */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Résidentiel vs Locatif : deux calculs différents
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
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
                  <Home size={16} style={{ color: "var(--t-brand)" }} />
                  Résidence principale
                </h3>
                <ul className="text-sm flex flex-col gap-2.5" style={{ color: "var(--t-secondary)" }}>
                  <li>Capacité = revenus nets × 35 %</li>
                  <li>Pas de revenus locatifs intégrés</li>
                  <li>Durée max 25 ans (27 en VEFA)</li>
                  <li>PTZ et prêts aidés possibles</li>
                  <li>Taux souvent plus bas (-0,1 à -0,3 %)</li>
                </ul>
              </div>
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
                  <Building2 size={16} />
                  Investissement locatif
                </h3>
                <ul className="text-sm flex flex-col gap-2.5 mt-0" style={{ color: "var(--t-secondary)" }}>
                  <li>Calcul différentiel (revenus locatifs déduits)</li>
                  <li>Loyers intégrés à 70 % (risque vacance)</li>
                  <li>Durée max souvent 20-25 ans selon banque</li>
                  <li>Aucun prêt aidé (PTZ exclu)</li>
                  <li>Taux légèrement supérieur (+0,1 à +0,2 %)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Calcul différentiel */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Le calcul différentiel expliqué
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--t-secondary)" }}
            >
              La méthode différentielle est la plus favorable pour l&apos;investisseur.
              Elle consiste à soustraire 70 % des loyers attendus de la mensualité
              du crédit avant de calculer le taux d&apos;endettement.
            </p>

            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "var(--bg-brand-medium)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--t-brand)" }}>
                Formule du taux d&apos;endettement différentiel
              </p>
              <p
                className="font-mono text-base"
                style={{ color: "var(--t-primary)" }}
              >
                Taux = (Mensualités totales − Loyers × 70 %) / Revenus nets
              </p>
            </div>

            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--t-primary)" }}
            >
              Exemple pratique
            </h3>
            <div className="overflow-x-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--bd-card)" }}
            >
              <table className="w-full text-sm min-w-105">
                <thead>
                  <tr style={{ background: "var(--bg-brand-medium)" }}>
                    <th
                      className="text-left px-5 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Paramètre
                    </th>
                    <th
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Méthode classique
                    </th>
                    <th
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Méthode différentielle
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--t-secondary)" }}>
                  {[
                    ["Revenus nets", "4 000 €", "4 000 €", false],
                    ["Résidence principale (mensualité)", "800 €", "800 €", false],
                    ["Nouvel investissement (mensualité)", "600 €", "600 €", false],
                    ["Loyer attendu × 70 %", "-", "−420 €", false],
                    ["Charge nette prise en compte", "1 400 €", "980 €", false],
                    ["Taux d'endettement", "35,0 %", "24,5 %", false],
                    ["Résultat", "Limite HCSF", "Finançable", true],
                  ].map(([param, classic, diff, isResult], i) => (
                    <tr
                      key={String(param)}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-table-even)" : "transparent",
                        borderTop: "1px solid var(--bd-table-row)",
                      }}
                    >
                      <td
                        className="px-5 py-3 font-medium"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {param}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {isResult ? (
                          <span className="inline-flex items-center gap-1 justify-end" style={{ color: "var(--t-warning)" }}>
                            <X size={13} />
                            {classic}
                          </span>
                        ) : classic}
                      </td>
                      <td
                        className="px-4 py-3 text-right font-semibold"
                        style={{ color: isResult ? "var(--t-brand)" : "var(--t-secondary)" }}
                      >
                        {isResult ? (
                          <span className="inline-flex items-center gap-1 justify-end">
                            <Check size={13} />
                            {diff}
                          </span>
                        ) : diff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </section>

          {/* Cashflow et levier */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Cashflow et levier de l&apos;endettement
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--t-secondary)" }}
            >
              L&apos;investissement locatif à crédit permet d&apos;utiliser l&apos;effet de levier :
              emprunter pour acheter un actif qui génère des revenus supérieurs au
              coût du crédit.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  title: "Cashflow positif",
                  desc: "Loyers > mensualité + charges. Idéal mais rare en zone tendue.",
                  accent: true,
                },
                {
                  title: "Cashflow neutre",
                  desc: "Loyers ≈ mensualité + charges. Le locataire rembourse le crédit.",
                  accent: false,
                },
                {
                  title: "Effort d'épargne",
                  desc: "Loyers < mensualité. Vous complétez la différence - capital garanti.",
                  accent: false,
                },
              ].map(({ title, desc, accent }) => (
                <div
                  key={title}
                  className="rounded-2xl p-5"
                  style={{
                    background: accent ? "var(--bg-brand-dim)" : "var(--bg-card)",
                    border: `1px solid ${accent ? "var(--bd-brand)" : "var(--bd-card)"}`,
                  }}
                >
                  <p
                    className="font-semibold mb-2"
                    style={{ color: accent ? "var(--t-brand)" : "var(--t-primary)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--t-muted)" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Fiscalité */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Fiscalité locative en 2026
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  regime: "Micro-foncier",
                  condition: "Revenus locatifs < 15 000 €/an",
                  avantage: "Abattement forfaitaire de 30 %. Déclaration simplifiée.",
                  limite: "Pas de déduction des charges réelles.",
                },
                {
                  regime: "Régime réel",
                  condition: "Revenus locatifs ≥ 15 000 €/an ou sur option",
                  avantage: "Déduction des intérêts d'emprunt, travaux, assurances, taxe foncière...",
                  limite: "Comptabilité plus complexe.",
                },
                {
                  regime: "LMNP (Micro-BIC)",
                  condition: "Location meublée < 77 700 €/an",
                  avantage: "Abattement de 50 %. Statut avantageux pour les meublés.",
                  limite: "Conditions de classement à respecter.",
                },
                {
                  regime: "LMNP (Réel)",
                  condition: "Location meublée - sur option ou > 77 700 €/an",
                  avantage: "Amortissement du bien. Déficits imputables sur BIC.",
                  limite: "Nécessite un expert-comptable.",
                },
              ].map(({ regime, condition, avantage, limite }) => (
                <div
                  key={regime}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bd-card)",
                  }}
                >
                  <p
                    className="font-bold mb-1"
                    style={{ color: "var(--t-primary)" }}
                  >
                    {regime}
                  </p>
                  <p className="text-xs mb-4" style={{ color: "var(--t-brand)" }}>
                    {condition}
                  </p>
                  <p className="text-sm mb-2 flex items-start gap-2" style={{ color: "var(--t-secondary)" }}>
                    <Check size={13} className="shrink-0 mt-0.5" style={{ color: "var(--t-brand)" }} />
                    {avantage}
                  </p>
                  <p className="text-sm flex items-start gap-2" style={{ color: "var(--t-muted)" }}>
                    <TriangleAlert size={13} className="shrink-0 mt-0.5" style={{ color: "var(--icon-warning)" }} />
                    {limite}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stratégies */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              4 stratégies pour optimiser votre investissement
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  title: "Choisir la bonne zone géographique",
                  body: "Les zones B et C offrent souvent un meilleur rendement brut (6-9 %) que les zones A (3-5 %), même si la valorisation long terme peut être moindre. L'équilibre cashflow / plus-value potentielle est la clé.",
                },
                {
                  num: "02",
                  title: "Maximiser le levier bancaire",
                  body: "Emprunter 100 % du prix d'achat (si possible) pour conserver votre épargne disponible. Le coût net de l'endettement (après loyers et fiscalité) est souvent inférieur au rendement du capital.",
                },
                {
                  num: "03",
                  title: "Réduire la fiscalité par le réel",
                  body: "Le régime réel permet de déduire les intérêts d'emprunt, qui représentent souvent 40-60 % des loyers en début de prêt. Cela peut ramener votre imposition à zéro sur plusieurs années.",
                },
                {
                  num: "04",
                  title: "Anticiper les travaux",
                  body: "Les travaux de rénovation sont déductibles au régime réel et créent un déficit foncier (plafonné à 10 700 €/an) imputable sur le revenu global. Une stratégie patrimoniale puissante combinant rénovation et économies d'impôt.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="flex gap-5 rounded-2xl p-6"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bd-card)",
                  }}
                >
                  <span
                    className="text-2xl font-black shrink-0 mt-0.5"
                    style={{ color: "var(--t-step-num)" }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
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
              Estimez la part crédit classique de votre investissement
            </h2>
            <p
              className="text-sm mb-6 max-w-md mx-auto"
              style={{ color: "var(--t-muted)" }}
            >
              Notre simulateur calcule la capacité sur la base de vos revenus.
              Saisissez vos revenus locatifs nets dans la case salaire pour
              simuler un scénario d&apos;investissement locatif pur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "#003d2b", color: "#ffffff" }}
              >
                Simuler maintenant →
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
                Guide capacité d&apos;emprunt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
