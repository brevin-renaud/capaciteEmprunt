import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - EmpruntCalcul",
  description:
    "Politique de confidentialité de EmpruntCalcul : zéro donnée collectée, calculs 100 % côté navigateur, aucun cookie publicitaire.",
  alternates: { canonical: "https://empruntcalcul.fr/confidentialite" },
  robots: { index: false, follow: false },
};

export default function Confidentialite() {
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
        Politique de confidentialité
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--t-muted)" }}>
        Dernière mise à jour : mai 2026
      </p>

      <div className="flex flex-col gap-10" style={{ color: "var(--t-secondary)" }}>

        {/* Engagement */}
        <section
          className="rounded-xl p-5 flex flex-col gap-2"
          style={{
            background: "var(--bg-brand-dim)",
            border: "1px solid var(--bd-brand-dim)",
          }}
        >
          <p className="font-semibold" style={{ color: "var(--t-primary)" }}>
            Notre engagement : zéro stockage
          </p>
          <p className="text-base leading-relaxed">
            EmpruntCalcul est conçu dès l&apos;origine pour ne collecter aucune
            donnée personnelle. Tous les calculs s&apos;exécutent localement dans
            votre navigateur. Aucune information ne transite vers nos serveurs.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            1. Données collectées
          </h2>
          <p className="text-base leading-relaxed">
            EmpruntCalcul ne collecte <strong>aucune donnée personnelle</strong> :
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-base">
            <li>Aucune identité (nom, prénom, email)</li>
            <li>Aucune donnée financière (revenus, apport, etc.) n&apos;est envoyée à un serveur</li>
            <li>Aucune adresse IP enregistrée</li>
            <li>Aucun cookie publicitaire ou de suivi</li>
            <li>Aucune base de données utilisateurs</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            2. Fonctionnement technique
          </h2>
          <p className="text-base leading-relaxed">
            Voici comment votre simulation est traitée :
          </p>
          <ol className="list-decimal pl-5 flex flex-col gap-2 text-base">
            <li>Vous saisissez vos paramètres dans le simulateur.</li>
            <li>Les calculs s&apos;effectuent immédiatement dans votre navigateur (JavaScript côté client).</li>
            <li>Les résultats s&apos;affichent instantanément, sans aucun appel réseau.</li>
            <li>Si vous partagez votre simulation, vos paramètres sont encodés dans l&apos;URL (compression Base36) - aucun serveur n&apos;est impliqué dans ce processus.</li>
            <li>Le destinataire du lien décode les paramètres directement dans son navigateur.</li>
          </ol>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            3. Cookies
          </h2>
          <p className="text-base leading-relaxed">
            Ce site n&apos;utilise pas de cookies publicitaires ou de tracking.
            Un unique cookie technique peut être enregistré dans votre navigateur
            pour mémoriser votre préférence de thème (clair / sombre) - il ne
            contient aucune donnée personnelle identifiable et n&apos;est jamais
            transmis à un tiers.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            4. Hébergement et infrastructure
          </h2>
          <p className="text-base leading-relaxed">
            Le site est hébergé sur l&apos;infrastructure Edge de{" "}
            <strong>Vercel Inc.</strong> (États-Unis). Vercel peut enregistrer des
            logs d&apos;accès techniques (adresse IP, user-agent, URL visitée) à des
            fins d&apos;exploitation et de sécurité, conformément à sa propre
            politique de confidentialité disponible sur{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--t-brand)" }}
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            5. Vos droits (RGPD)
          </h2>
          <p className="text-base leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez de droits sur vos données personnelles (accès, rectification,
            suppression, portabilité, opposition). Dans la mesure où EmpruntCalcul
            ne stocke aucune donnée vous concernant, ces droits ne s&apos;appliquent
            pas dans le cadre de l&apos;utilisation du simulateur.
          </p>
          <p className="text-base leading-relaxed">
            Pour toute question relative à la confidentialité, contactez-nous à{" "}
            <a
              href="mailto:contact@empruntcalcul.fr"
              className="hover:underline"
              style={{ color: "var(--t-brand)" }}
            >
              contact@empruntcalcul.fr
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            6. Modifications
          </h2>
          <p className="text-base leading-relaxed">
            Cette politique peut être mise à jour pour refléter d&apos;éventuelles
            évolutions techniques ou réglementaires. La date de dernière mise à jour
            est indiquée en haut de cette page.
          </p>
        </section>
      </div>
    </main>
  );
}
