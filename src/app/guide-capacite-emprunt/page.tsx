import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/SEO/ArticleSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Capacité d'Emprunt 2026 : Guide Complet pour Votre Projet Immobilier",
  description:
    "Guide complet sur le calcul de la capacité d'emprunt immobilier en 2026 : formule d'annuité, règle HCSF des 35 %, rôle de l'apport, durée et taux. Optimisez votre dossier bancaire.",
  keywords: [
    "guide capacité d'emprunt",
    "comment calculer capacité d'emprunt",
    "formule annuité prêt immobilier",
    "règle HCSF 35 pour cent",
    "optimiser dossier bancaire",
    "variables crédit immobilier",
    "apport personnel immobilier",
  ],
  openGraph: {
    title: "Capacité d'Emprunt 2026 : Guide Complet pour Votre Projet Immobilier",
    description: "Guide complet : formule, HCSF, apport, durée, taux - tout pour calculer et optimiser votre capacité d'emprunt.",
    url: "https://www.capacimetrimmo.fr/guide-capacite-emprunt",
    type: "article",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.capacimetrimmo.fr/guide-capacite-emprunt" },
};

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-20">{children}</section>;
}

function InfoCard({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: accent ? "var(--bg-brand-dim)" : "var(--bg-card)",
        border: `1px solid ${accent ? "var(--bd-brand)" : "var(--bd-card)"}`,
      }}
    >
      <h3
        className="font-semibold text-sm mb-3"
        style={{ color: accent ? "var(--t-brand)" : "var(--t-muted)" }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function GuideCapaciteEmprunt() {
  return (
    <main className="min-h-screen py-16 px-4">
      <ArticleSchema
        headline="Capacité d'Emprunt 2026 : Guide Complet pour Votre Projet Immobilier"
        description="Guide complet sur le calcul de la capacité d'emprunt immobilier en 2026 : formule d'annuité, règle HCSF des 35 %, rôle de l'apport, durée et taux."
        url="https://www.capacimetrimmo.fr/guide-capacite-emprunt"
        datePublished="2025-01-15"
        dateModified="2026-05-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.capacimetrimmo.fr" },
          { name: "Guide capacité d'emprunt", url: "https://www.capacimetrimmo.fr/guide-capacite-emprunt" },
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
            Guide complet · 2026
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: "var(--t-primary)" }}
          >
            Capacité d&apos;Emprunt :{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tout savoir
            </span>{" "}
            pour votre projet
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--t-muted)" }}
          >
            Comprenez chaque variable qui détermine votre budget d&apos;acquisition :
            formule de calcul, règle HCSF, impact du taux, de la durée et de
            l&apos;apport personnel.
          </p>
        </div>

        {/* Table des matières */}
        <nav
          className="rounded-2xl p-6 mb-12"
          style={{
            background: "var(--bg-brand-dim)",
            border: "1px solid var(--bd-brand-dim)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--t-brand)" }}
          >
            Sommaire
          </p>
          <ol className="flex flex-col gap-2 text-sm" style={{ color: "var(--t-secondary)" }}>
            {[
              ["#definition", "1. Qu'est-ce que la capacité d'emprunt ?"],
              ["#formule", "2. La formule de calcul expliquée"],
              ["#variables", "3. Les 5 variables clés"],
              ["#hcsf", "4. La règle HCSF des 35 %"],
              ["#optimiser", "5. Comment optimiser son dossier ?"],
              ["#simulateur", "6. Utilisez notre simulateur"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:underline transition-colors"
                  style={{ color: "var(--t-secondary)" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-14">

          {/* 1. Définition */}
          <Section id="definition">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              1. Qu&apos;est-ce que la capacité d&apos;emprunt ?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--t-secondary)" }}
            >
              La capacité d&apos;emprunt est le montant maximum que vous pouvez
              emprunter auprès d&apos;une banque pour financer un bien immobilier, en
              respectant les règles prudentielles françaises. Elle détermine votre
              budget total d&apos;acquisition combiné à votre apport personnel.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--t-secondary)" }}
            >
              Ce n&apos;est pas simplement ce que la banque <em>veut bien</em> vous
              prêter - c&apos;est un plafond calculé objectivement à partir de vos
              revenus, de votre situation d&apos;endettement existante et des conditions
              de marché (taux d&apos;intérêt, durée choisie).
            </p>
          </Section>

          {/* 2. Formule */}
          <Section id="formule">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              2. La formule de calcul expliquée
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--t-secondary)" }}
            >
              Notre calculateur implémente la formule d&apos;annuité classique,
              identique à celle utilisée par les banques françaises :
            </p>

            <div
              className="rounded-2xl p-6 mb-6 font-mono text-center"
              style={{
                background: "var(--bg-brand-medium)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              <p
                className="text-lg font-bold"
                style={{ color: "var(--t-brand)" }}
              >
                P = M × [1 − (1+r)^(−n)] / r
              </p>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm text-left"
                style={{ color: "var(--t-secondary)" }}
              >
                <div>
                  <span className="font-semibold" style={{ color: "var(--t-brand)" }}>P</span> - Capital empruntable
                </div>
                <div>
                  <span className="font-semibold" style={{ color: "var(--t-brand)" }}>M</span> - Mensualité max (revenus × 35 %)
                </div>
                <div>
                  <span className="font-semibold" style={{ color: "var(--t-brand)" }}>r</span> - Taux mensuel (annuel ÷ 12 ÷ 100)
                </div>
                <div>
                  <span className="font-semibold" style={{ color: "var(--t-brand)" }}>n</span> - Nombre de mensualités (années × 12)
                </div>
              </div>
            </div>

            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Exemple concret
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard title="Paramètres d'entrée" accent>
                <ul className="text-sm flex flex-col gap-1.5" style={{ color: "var(--t-secondary)" }}>
                  <li>Revenus nets : <strong style={{ color: "var(--t-primary)" }}>3 500 €/mois</strong></li>
                  <li>Taux d&apos;intérêt : <strong style={{ color: "var(--t-primary)" }}>3,5 %</strong></li>
                  <li>Durée : <strong style={{ color: "var(--t-primary)" }}>20 ans</strong></li>
                  <li>Assurance : <strong style={{ color: "var(--t-primary)" }}>0,36 %/an</strong></li>
                </ul>
              </InfoCard>
              <InfoCard title="Résultats calculés">
                <ul className="text-sm flex flex-col gap-1.5" style={{ color: "var(--t-secondary)" }}>
                  <li>Mensualité max (35 %) : <strong style={{ color: "var(--t-primary)" }}>1 225 €</strong></li>
                  <li>Capital empruntable : <strong style={{ color: "var(--t-primary)" }}>~213 000 €</strong></li>
                  <li>Intérêts totaux : <strong style={{ color: "var(--t-primary)" }}>~81 000 €</strong></li>
                  <li>Assurance totale : <strong style={{ color: "var(--t-primary)" }}>~15 000 €</strong></li>
                </ul>
              </InfoCard>
            </div>
          </Section>

          {/* 3. Variables */}
          <Section id="variables">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              3. Les 5 variables clés
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  title: "Les revenus nets",
                  body: "La base de tout calcul. Les banques retiennent les revenus nets avant impôt (après prélèvement à la source). Les revenus locatifs sont pris en compte à 70 % pour compenser les risques de vacance. Les primes et bonus sont intégrés sur justificatif des 3 dernières années.",
                },
                {
                  num: "02",
                  title: "Le taux d'intérêt",
                  body: "Il évolue selon la politique monétaire de la BCE et le profil emprunteur. En 2026, les taux nominaux oscillent entre 3,2 % et 4,0 % sur 20 ans selon les profils. Une différence de 0,5 % sur le taux représente environ 5 % de capacité d'emprunt en moins ou en plus.",
                },
                {
                  num: "03",
                  title: "La durée du prêt",
                  body: "Chaque année supplémentaire augmente la capacité d'emprunt mais aussi le coût total. Passer de 20 à 25 ans augmente typiquement la capacité de 10-12 %, mais peut multiplier les intérêts par 1,5. La durée maximale réglementaire est de 25 ans (27 ans en VEFA).",
                },
                {
                  num: "04",
                  title: "L'assurance emprunteur",
                  body: "Obligatoire, elle s'ajoute au taux d'intérêt pour former le TAEG. Depuis la loi Lemoine (2022), vous pouvez en changer à tout moment. Un écart de 0,2 % sur une assurance représente plusieurs milliers d'euros d'économies sur 20 ans.",
                },
                {
                  num: "05",
                  title: "L'apport personnel",
                  body: "L'apport couvre les frais de notaire (7-8 % dans l'ancien, 2-3 % dans le neuf) et réduit le capital emprunté. Après déduction des frais, le capital net restant s'ajoute à la capacité d'emprunt pour former le budget total d'acquisition.",
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
          </Section>

          {/* 4. HCSF */}
          <Section id="hcsf">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              4. La règle HCSF des 35 %
            </h2>
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "var(--bg-brand-dim)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--t-brand)" }}
              >
                Définition HCSF
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--t-secondary)" }}
              >
                Le Haut Conseil de Stabilité Financière impose depuis janvier 2022
                que la totalité des remboursements mensuels (tous crédits confondus,
                assurance comprise) ne dépasse pas{" "}
                <strong style={{ color: "var(--t-primary)" }}>35 % des revenus nets</strong>.
              </p>
            </div>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--t-secondary)" }}
            >
              Cette norme remplace l&apos;ancienne règle du tiers (33 %) et est
              désormais contraignante pour les établissements bancaires. Les banques
              peuvent accorder jusqu&apos;à 20 % de dérogations par trimestre,
              prioritairement aux primo-accédants et aux résidences principales.
            </p>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--t-primary)" }}
            >
              Que se passe-t-il si vous dépassez les 35 % ?
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--t-secondary)" }}
            >
              Notre simulateur signale automatiquement tout dépassement de la limite
              HCSF. Dans ce cas, la banque refusera très probablement votre dossier
              - ou vous demandera un apport plus important, une durée plus courte,
              ou de solder des crédits en cours pour revenir sous le seuil.
            </p>
          </Section>

          {/* 5. Optimiser */}
          <Section id="optimiser">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ color: "var(--t-primary)" }}
            >
              5. Comment optimiser son dossier ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Solder les crédits à la conso",
                  body: "Chaque mensualité de crédit réduit d'autant votre capacité. Soldez les petits crédits avant de déposer votre dossier, même si cela entame l'apport.",
                },
                {
                  title: "Augmenter la durée stratégiquement",
                  body: "Passer de 20 à 25 ans augmente la capacité sans toucher aux revenus. À utiliser en complément d'autres leviers, car le coût total augmente.",
                },
                {
                  title: "Comparer les assurances",
                  body: "La délégation d'assurance (loi Lemoine) permet d'économiser 0,1-0,3 % par an. Sur 20 ans, c'est 5 000 à 15 000 € d'économies potentielles.",
                },
                {
                  title: "Négocier un taux préférentiel",
                  body: "Un bon apport (>10 %), un CDI stable et une épargne résiduelle (précaution) sont les 3 leviers pour obtenir le meilleur taux du marché.",
                },
              ].map(({ title, body }) => (
                <InfoCard key={title} title={title} accent>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    {body}
                  </p>
                </InfoCard>
              ))}
            </div>
          </Section>

          {/* 6. CTA simulateur */}
          <Section id="simulateur">
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "var(--bg-cta)",
                border: "1px solid var(--bd-brand)",
              }}
            >
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--t-primary)" }}
              >
                6. Calculez votre situation en temps réel
              </h2>
              <p
                className="text-sm mb-6 max-w-md mx-auto"
                style={{ color: "var(--t-muted)" }}
              >
                Tous les principes de ce guide sont implémentés dans notre
                simulateur. Ajustez chaque paramètre et voyez l&apos;impact
                instantanément.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: "#003d2b", color: "#ffffff" }}
                >
                  Lancer le simulateur →
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    background: "var(--bg-btn-secondary)",
                    color: "var(--t-btn-secondary)",
                    border: "1px solid var(--bd-btn-secondary)",
                  }}
                >
                  Lire la FAQ
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
