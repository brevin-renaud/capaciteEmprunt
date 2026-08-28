import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales - EmpruntCalcul",
  description: "Mentions légales du simulateur EmpruntCalcul : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: { canonical: "https://empruntcalcul.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm hover:underline"
          style={{ color: "var(--t-brand)" }}
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>

      <h1
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ color: "var(--t-primary)" }}
      >
        Mentions légales
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--t-muted)" }}>
        Conformément à l&apos;article 6 III-2 de la loi n° 2004-575 du 21 juin 2004
        pour la confiance dans l&apos;économie numérique.
      </p>

      <div className="flex flex-col gap-10" style={{ color: "var(--t-secondary)" }}>
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            1. Éditeur du site
          </h2>
          <p className="text-base leading-relaxed">
            Le site <strong>empruntcalcul.fr</strong> est édité à titre personnel.
          </p>
          <p className="text-base leading-relaxed">
            Contact :{" "}
            <a
              href="mailto:contact@empruntcalcul.fr"
              className="hover:underline"
              style={{ color: "var(--t-brand)" }}
            >
              contact@empruntcalcul.fr
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            2. Hébergement
          </h2>
          <p className="text-base leading-relaxed">
            Ce site est hébergé par :
          </p>
          <p className="text-base leading-relaxed">
            <strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 701<br />
            San Francisco, CA 94104, États-Unis<br />
            <a
              href="mailto:privacy@vercel.com"
              className="hover:underline"
              style={{ color: "var(--t-brand)" }}
            >
              privacy@vercel.com
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            3. Propriété intellectuelle
          </h2>
          <p className="text-base leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, graphismes, logo, icônes,
            images, code source, bases de données, etc.) est protégé par le droit
            d&apos;auteur et les lois relatives à la propriété intellectuelle.
          </p>
          <p className="text-base leading-relaxed">
            Toute reproduction, représentation, modification, publication, adaptation
            de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite sauf autorisation écrite préalable de
            l&apos;éditeur.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            4. Limitation de responsabilité
          </h2>
          <p className="text-base leading-relaxed">
            Les simulations proposées par EmpruntCalcul sont fournies à titre
            indicatif uniquement. Elles ne constituent pas un conseil financier,
            bancaire ou juridique et ne sauraient engager la responsabilité de
            l&apos;éditeur.
          </p>
          <p className="text-base leading-relaxed">
            Les résultats sont calculés sur la base des barèmes et réglementations
            en vigueur en 2026 (règle HCSF des 35 %). Chaque établissement bancaire
            applique ses propres critères d&apos;octroi, susceptibles de différer des
            simulations obtenues. La consultation d&apos;un professionnel (courtier,
            conseiller bancaire) est recommandée avant toute décision d&apos;emprunt.
          </p>
          <p className="text-base leading-relaxed">
            L&apos;éditeur ne peut être tenu responsable des dommages directs ou
            indirects résultant de l&apos;utilisation de ce site ou de l&apos;application
            de ses simulations.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            5. Liens hypertextes
          </h2>
          <p className="text-base leading-relaxed">
            Ce site peut contenir des liens vers des sites tiers. L&apos;éditeur
            n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité
            quant à leur contenu ou à leur disponibilité.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            6. Droit applicable
          </h2>
          <p className="text-base leading-relaxed">
            Le présent site et ses mentions légales sont soumis au droit français.
            En cas de litige, et à défaut de résolution amiable, les tribunaux français
            seront seuls compétents.
          </p>
        </section>
      </div>
    </main>
  );
}
