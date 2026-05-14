import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/SEO/ArticleSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Frais de Notaire 2026 - Calcul Complet Neuf et Ancien",
  description:
    "Tout sur les frais de notaire 2026 : droits de mutation, émoluments, débours. Neuf (2,5 %) vs ancien (7,5 %) : impact sur votre apport et votre capacité d'emprunt.",
  keywords: [
    "frais de notaire 2026",
    "calcul frais notaire",
    "frais notaire achat immobilier",
    "droits de mutation",
    "frais notaire neuf vs ancien",
    "émoluments notaire",
    "combien coûtent les frais de notaire",
  ],
  openGraph: {
    title: "Frais de Notaire 2026 - Calcul Complet Neuf et Ancien",
    description: "Droits de mutation, émoluments, débours : calculez et anticipez vos frais de notaire selon le type de bien.",
    url: "https://www.empruntcalcul.fr/frais-de-notaire",
    type: "article",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.empruntcalcul.fr/frais-de-notaire" },
};

const COMPOSITION_FRAIS = [
  {
    poste: "Droits de mutation (taxe de publicité foncière)",
    neuf: "0,71 %",
    ancien: "5,09 %",
    detail: "Taxes versées à l'État et aux collectivités. C'est la composante principale dans l'ancien.",
  },
  {
    poste: "Émoluments du notaire (barème dégressif)",
    neuf: "0,8-1,0 %",
    ancien: "0,8-1,0 %",
    detail: "Rémunération réglementée du notaire. Dégressif selon le prix (3,87 % < 6 500 €, 1,59 % jusqu'à 17 000 €, etc.).",
  },
  {
    poste: "Contribution de sécurité immobilière",
    neuf: "0,10 %",
    ancien: "0,10 %",
    detail: "Taxe perçue pour la publicité foncière - plafonnée à 5 000 €.",
  },
  {
    poste: "Débours (cadastre, diagnostics, etc.)",
    neuf: "~0,3 %",
    ancien: "~0,3 %",
    detail: "Frais avancés par le notaire pour le compte de l'acheteur (hypothèque, géomètre...).",
  },
];

const EXEMPLES = [
  { prix: "150 000 €", frais_ancien: "11 250 €", frais_neuf: "4 500 €", taux_ancien: "7,5 %", taux_neuf: "3,0 %" },
  { prix: "200 000 €", frais_ancien: "15 000 €", frais_neuf: "5 500 €", taux_ancien: "7,5 %", taux_neuf: "2,75 %" },
  { prix: "300 000 €", frais_ancien: "22 500 €", frais_neuf: "7 500 €", taux_ancien: "7,5 %", taux_neuf: "2,5 %" },
  { prix: "400 000 €", frais_ancien: "30 000 €", frais_neuf: "9 500 €", taux_ancien: "7,5 %", taux_neuf: "2,4 %" },
  { prix: "500 000 €", frais_ancien: "37 500 €", frais_neuf: "11 500 €", taux_ancien: "7,5 %", taux_neuf: "2,3 %" },
];

export default function FraisDeNotaire() {
  return (
    <main className="min-h-screen py-16 px-4">
      <ArticleSchema
        headline="Frais de Notaire 2026 - Calcul Complet Neuf et Ancien"
        description="Tout sur les frais de notaire 2026 : droits de mutation, émoluments, débours. Neuf (2,5 %) vs ancien (7,5 %) : impact sur votre apport et votre capacité d'emprunt."
        url="https://www.empruntcalcul.fr/frais-de-notaire"
        datePublished="2025-01-15"
        dateModified="2026-05-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.empruntcalcul.fr" },
          { name: "Frais de notaire", url: "https://www.empruntcalcul.fr/frais-de-notaire" },
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
            Calcul détaillé · Neuf et Ancien · 2026
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Frais de{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Notaire 2026
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--t-muted)" }}
          >
            Les frais de notaire impactent directement votre apport disponible.
            Comprenez leur composition pour budgéter précisément votre achat
            immobilier.
          </p>
        </div>

        <div className="flex flex-col gap-12">

          {/* Accroche */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Neuf vs Ancien : une différence de 5 points
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "var(--bg-brand-dim)",
                  border: "1px solid var(--bd-brand)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--t-brand)" }}
                >
                  Logement neuf / VEFA
                </p>
                <p
                  className="text-5xl font-black mb-2"
                  style={{ color: "var(--t-primary)" }}
                >
                  2–3 %
                </p>
                <p className="text-sm" style={{ color: "var(--t-muted)" }}>
                  du prix d&apos;achat (droits réduits)
                </p>
              </div>
              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--t-muted)" }}
                >
                  Logement ancien
                </p>
                <p
                  className="text-5xl font-black mb-2"
                  style={{ color: "var(--t-primary)" }}
                >
                  7–8 %
                </p>
                <p className="text-sm" style={{ color: "var(--t-muted)" }}>
                  du prix d&apos;achat (droits pleins)
                </p>
              </div>
            </div>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--t-secondary)" }}
            >
              Cette différence s&apos;explique par les droits de mutation - une taxe
              levée par les collectivités locales - quasi-inexistante dans le neuf
              (TVA payée à la place) et au taux plein de ~5,09 % dans l&apos;ancien.
              Notre simulateur applique automatiquement 2,5 % pour le neuf et 7,5 %
              pour l&apos;ancien lors du calcul de l&apos;apport net disponible.
            </p>
          </section>

          {/* Composition détaillée */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Composition détaillée des frais de notaire
            </h2>

            <div className="flex flex-col gap-3">
              {COMPOSITION_FRAIS.map(({ poste, neuf, ancien, detail }) => (
                <div
                  key={poste}
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bd-card)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                    <div className="flex-1">
                      <h3
                        className="font-semibold mb-1"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {poste}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--t-muted)" }}
                      >
                        {detail}
                      </p>
                    </div>
                    <div className="flex gap-6 shrink-0 text-sm">
                      <div className="text-center">
                        <p className="text-xs mb-1" style={{ color: "var(--t-brand)" }}>
                          Neuf
                        </p>
                        <p className="font-bold" style={{ color: "var(--t-brand)" }}>
                          {neuf}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs mb-1" style={{ color: "var(--t-muted)" }}>
                          Ancien
                        </p>
                        <p className="font-bold" style={{ color: "var(--t-primary)" }}>
                          {ancien}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Exemples chiffrés */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Exemples de frais de notaire selon le prix du bien
            </h2>

            <div className="overflow-x-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--bd-card)" }}
            >
              <table className="w-full text-sm min-w-105">
                <caption className="sr-only">Exemples de frais de notaire selon le prix du bien - logement neuf et ancien 2026</caption>
                <thead>
                  <tr style={{ background: "var(--bg-brand-medium)" }}>
                    <th
                      scope="col"
                      className="text-left px-5 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Prix d&apos;achat
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Frais ancien
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-muted)" }}
                    >
                      Taux ancien
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-brand)" }}
                    >
                      Frais neuf
                    </th>
                    <th
                      scope="col"
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: "var(--t-muted)" }}
                    >
                      Taux neuf
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EXEMPLES.map(({ prix, frais_ancien, frais_neuf, taux_ancien, taux_neuf }, i) => (
                    <tr
                      key={prix}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-table-even)" : "transparent",
                        borderTop: "1px solid var(--bd-table-row)",
                      }}
                    >
                      <td
                        className="px-5 py-3 font-bold"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {prix}
                      </td>
                      <td
                        className="px-4 py-3 text-right font-semibold"
                        style={{ color: "var(--t-secondary)" }}
                      >
                        {frais_ancien}
                      </td>
                      <td
                        className="px-4 py-3 text-right text-xs"
                        style={{ color: "var(--t-faint)" }}
                      >
                        {taux_ancien}
                      </td>
                      <td
                        className="px-4 py-3 text-right font-semibold"
                        style={{ color: "var(--t-brand)" }}
                      >
                        {frais_neuf}
                      </td>
                      <td
                        className="px-4 py-3 text-right text-xs"
                        style={{ color: "var(--t-brand)", opacity: 0.65 }}
                      >
                        {taux_neuf}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </section>

          {/* Peut-on les financer ? */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Comment financer les frais de notaire ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Avec l'apport personnel",
                  body: "La voie standard. Les banques exigent généralement que les frais de notaire soient couverts par votre épargne, ne laissant que le reste comme apport net sur le bien.",
                  recommande: true,
                },
                {
                  title: "Intégrés au prêt (prêt à 110 %)",
                  body: "Rare et conditionnel. Certaines banques l'accordent aux primo-accédants avec excellent profil. Le taux est souvent moins favorable.",
                  recommande: false,
                },
                {
                  title: "Via le PTZ (partiellement)",
                  body: "Le Prêt à Taux Zéro peut financer jusqu'à 50 % du bien dans les zones tendues, ce qui libère de l'apport pour couvrir les frais.",
                  recommande: true,
                },
                {
                  title: "Prêt Action Logement",
                  body: "Si votre employeur cotise à Action Logement, vous pouvez emprunter jusqu'à 40 000 € à taux préférentiel (< 2 %), utilisable pour les frais.",
                  recommande: true,
                },
              ].map(({ title, body, recommande }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6"
                  style={{
                    background: recommande ? "var(--bg-brand-dim)" : "var(--bg-card)",
                    border: `1px solid ${recommande ? "var(--bd-brand)" : "var(--bd-card)"}`,
                  }}
                >
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
              Calculez l&apos;impact des frais de notaire sur votre budget
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--t-muted)" }}
            >
              Notre simulateur déduit automatiquement les frais de notaire de votre
              apport selon le type de bien choisi.
            </p>
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: "#003d2b", color: "#ffffff" }}
            >
              Simuler mon budget total →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
