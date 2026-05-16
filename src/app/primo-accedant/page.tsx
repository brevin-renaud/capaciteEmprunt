import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/SEO/ArticleSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Primo-Accédant 2026 - Toutes les Aides pour Votre Premier Achat Immobilier",
  description:
    "Prêt à Taux Zéro, Action Logement, TVA réduite, exonération taxe foncière… Toutes les aides primo-accédants 2026 pour maximiser votre budget immobilier et concrétiser votre premier achat.",
  openGraph: {
    title: "Primo-Accédant 2026 - Toutes les Aides pour Votre Premier Achat Immobilier",
    description: "PTZ, Action Logement, TVA réduite - toutes les aides disponibles pour les primo-accédants en 2026.",
    url: "https://www.empruntcalcul.fr/primo-accedant",
    type: "article",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.empruntcalcul.fr/primo-accedant" },
};

const AIDES = [
  {
    nom: "Prêt à Taux Zéro (PTZ)",
    montant: "Jusqu'à 50 % du prix",
    profil: "Revenus sous plafond · Résidence principale",
    description:
      "Prêt sans intérêts accordé par l'État pour financer l'achat de votre première résidence principale. Montant variable selon la zone géographique (A, B1, B2, C) et la composition du foyer. Remboursement différé possible.",
    lien: "/pret-a-taux-zero-2026",
    highlight: true,
  },
  {
    nom: "Prêt Action Logement (ex-1 % patronal)",
    montant: "Jusqu'à 40 000 €",
    profil: "Salariés d'entreprises ≥ 10 personnes",
    description:
      "Prêt à taux préférentiel (moins de 2 %) accordé par votre employeur via Action Logement. Cumulable avec le PTZ et un crédit classique. Idéal pour financer l'apport ou les frais de notaire.",
    highlight: false,
  },
  {
    nom: "TVA réduite à 5,5 %",
    montant: "Économie de 14 points sur la TVA",
    profil: "Zones ANRU ou QPV · Sous plafonds de ressources",
    description:
      "Pour l'achat d'un logement neuf en zone ANRU (rénovation urbaine) ou dans un quartier prioritaire, la TVA est réduite de 20 % à 5,5 %. Cela représente une économie significative sur le prix du bien.",
    highlight: false,
  },
  {
    nom: "Exonération taxe foncière",
    montant: "2 ans d'exonération",
    profil: "Logement neuf · Résidence principale",
    description:
      "Les logements neufs bénéficient d'une exonération totale de taxe foncière pendant 2 ans après l'achèvement de la construction. Certaines communes prolongent cette exonération jusqu'à 5 ans.",
    highlight: false,
  },
  {
    nom: "Prêt conventionné",
    montant: "Pas de plafond de ressources",
    profil: "Résidence principale · Tous profils",
    description:
      "Prêt à taux réglementé octroyé par les banques ayant signé une convention avec l'État. Sans plafond de ressources, il permet d'accéder à l'APL accession (aide au logement pour propriétaires), sous conditions.",
    highlight: false,
  },
  {
    nom: "Garantie Visale",
    montant: "Pas un prêt - une caution gratuite",
    profil: "Moins de 30 ans ou en mobilité professionnelle",
    description:
      "Garantie d'État pour votre loyer (en attendant l'achat) ou caution pour certains prêts. Gratuit, accordé par Action Logement. Peut rassurer un bailleur si vous êtes en CDD ou en mobilité.",
    highlight: false,
  },
];

const CHECKLIST = [
  {
    etape: "Calculer votre capacité d'emprunt",
    detail: "Utilisez notre simulateur pour estimer le capital empruntable selon vos revenus, durée et taux actuels.",
    lien: "/simulateur",
  },
  {
    etape: "Vérifier votre éligibilité au PTZ",
    detail: "Consultez la carte des zones et les plafonds de ressources 2026 pour estimer votre PTZ.",
    lien: "/pret-a-taux-zero-2026",
  },
  {
    etape: "Évaluer les frais de notaire",
    detail: "Anticipez 2-3 % dans le neuf ou 7-8 % dans l'ancien pour budgéter l'apport nécessaire.",
    lien: "/frais-de-notaire",
  },
  {
    etape: "Consolider votre apport",
    detail: "Solder les petits crédits, mobiliser l'épargne salariale (déblocage anticipé possible à l'achat immo).",
    lien: null,
  },
  {
    etape: "Consulter un courtier",
    detail: "Un courtier compare les offres de 20+ banques et optimise votre dossier pour le meilleur taux.",
    lien: null,
  },
  {
    etape: "Préparer votre dossier bancaire",
    detail: "3 derniers bulletins de salaire, 3 relevés bancaires, avis d'imposition, compromis de vente.",
    lien: null,
  },
];

export default function PrimoAccedant() {
  return (
    <main className="min-h-screen py-16 px-4">
      <ArticleSchema
        headline="Primo-Accédant 2026 - Toutes les Aides pour Votre Premier Achat Immobilier"
        description="Prêt à Taux Zéro, Action Logement, TVA réduite, exonération taxe foncière… Toutes les aides primo-accédants 2026 pour maximiser votre budget immobilier."
        url="https://www.empruntcalcul.fr/primo-accedant"
        datePublished="2025-01-15"
        dateModified="2026-05-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.empruntcalcul.fr" },
          { name: "Guide primo-accédant", url: "https://www.empruntcalcul.fr/primo-accedant" },
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
            Premier achat · Aides 2026
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Guide{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Primo-Accédant
            </span>{" "}
            2026
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--t-muted)" }}
          >
            Acheter pour la première fois, c&apos;est bénéficier d&apos;aides
            spécifiques que les secundo-accédants n&apos;ont pas. Tour complet des
            dispositifs disponibles en 2026.
          </p>
        </div>

        <div className="flex flex-col gap-12">

          {/* Qui est primo-accédant ? */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Qui est considéré comme primo-accédant ?
            </h2>
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "var(--bg-brand-dim)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--t-brand)" }}
              >
                Définition officielle (PTZ et aides publiques)
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--t-primary)" }}
              >
                Ne pas avoir été propriétaire de sa résidence principale au cours
                des{" "}
                <strong>deux dernières années</strong> précédant la demande de
                prêt.
              </p>
            </div>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--t-secondary)" }}
            >
              Cette règle des 2 ans ouvre des droits même à ceux qui ont déjà été
              propriétaires dans le passé. Cas particuliers reconnus : locataires
              de longue date, personnes hébergées chez un tiers, résidents en
              logement social.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--t-secondary)" }}
            >
              Être propriétaire d&apos;une résidence secondaire ou d&apos;un bien locatif ne
              remet pas en cause le statut de primo-accédant pour la résidence
              principale.
            </p>
          </section>

          {/* Aides disponibles */}
          <section>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--t-primary)" }}
            >
              Les 6 aides pour primo-accédants en 2026
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--t-muted)" }}>
              Ces dispositifs sont cumulables entre eux dans la plupart des cas.
            </p>

            <div className="flex flex-col gap-4">
              {AIDES.map(({ nom, montant, profil, description, lien, highlight }) => (
                <div
                  key={nom}
                  className="rounded-2xl p-6"
                  style={{
                    background: highlight ? "var(--bg-brand-dim)" : "var(--bg-card)",
                    border: `1px solid ${highlight ? "var(--bd-brand)" : "var(--bd-card)"}`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="font-bold"
                          style={{ color: "var(--t-primary)" }}
                        >
                          {nom}
                        </h3>
                        {highlight && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "var(--bg-brand-filter)",
                              color: "var(--t-brand)",
                              border: "1px solid var(--bd-brand-dim)",
                            }}
                          >
                            Phare
                          </span>
                        )}
                      </div>
                      <p className="text-xs mb-3" style={{ color: "var(--t-brand)" }}>
                        {profil}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--t-secondary)" }}
                      >
                        {description}
                      </p>
                      {lien && (
                        <Link
                          href={lien}
                          className="inline-flex items-center gap-1 text-xs mt-3"
                          style={{ color: "var(--t-brand)" }}
                        >
                          En savoir plus →
                        </Link>
                      )}
                    </div>
                    <div
                      className="rounded-xl px-4 py-3 text-center shrink-0"
                      style={{
                        background: "var(--bg-badge)",
                        border: "1px solid var(--bd-brand-dim)",
                        minWidth: "140px",
                      }}
                    >
                      <p className="text-xs mb-1" style={{ color: "var(--t-brand)", opacity: 0.7 }}>
                        Montant
                      </p>
                      <p className="font-bold text-sm" style={{ color: "var(--t-brand)" }}>
                        {montant}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Checklist : les 6 étapes avant votre premier achat
            </h2>

            <div className="flex flex-col gap-3">
              {CHECKLIST.map(({ etape, detail, lien }, i) => (
                <div
                  key={etape}
                  className="flex gap-5 rounded-2xl p-5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bd-card)",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{
                      background: "var(--bg-brand-filter)",
                      color: "var(--t-brand)",
                      border: "1px solid var(--bd-brand-dim)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {etape}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      {detail}
                    </p>
                    {lien && (
                      <Link
                        href={lien}
                        className="inline-flex items-center gap-1 text-xs mt-2"
                        style={{ color: "var(--t-brand)" }}
                      >
                        Accéder →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Avantages primo-accédant */}
          <section>
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              Les avantages bancaires du primo-accédant
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "var(--t-secondary)" }}
            >
              En plus des aides d&apos;État, les banques accordent souvent des
              conditions préférentielles aux primo-accédants, car ils représentent
              un profil fidélisant à long terme.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Dérogation HCSF prioritaire",
                  body: "Les 20 % de dérogations au plafond de 35 % sont prioritairement accordées aux primo-accédants achetant leur résidence principale.",
                },
                {
                  title: "Taux légèrement préférentiels",
                  body: "Certaines banques offrent -0,05 à -0,10 % aux primo-accédants pour les fidéliser et récupérer la domiciliation des revenus.",
                },
                {
                  title: "Exigences d'apport assouplies",
                  body: "Un primo-accédant avec un bon profil peut parfois emprunter sans couvrir la totalité des frais de notaire par son apport.",
                },
                {
                  title: "Acceptation de l'épargne cumulée",
                  body: "Les banques valorisent positivement une épargne régulière (Livret A, PEL) comme signal de comportement financier sain.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--bg-brand-dim)",
                    border: "1px solid var(--bd-brand-dim)",
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
              Calculez votre budget primo-accédant
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--t-muted)" }}
            >
              Simulez votre capacité d&apos;emprunt + estimez votre PTZ pour connaître
              votre budget total d&apos;acquisition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/simulateur"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "#003d2b", color: "#ffffff" }}
              >
                Simuler ma capacité →
              </Link>
              <Link
                href="/pret-a-taux-zero-2026"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: "var(--bg-btn-secondary)",
                  color: "var(--t-btn-secondary)",
                  border: "1px solid var(--bd-btn-secondary)",
                }}
              >
                Voir le PTZ 2026
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
