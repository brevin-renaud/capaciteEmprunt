import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos - EmpruntCalcul",
  description:
    "EmpruntCalcul est un simulateur gratuit de capacité d'emprunt immobilier, 100 % côté navigateur, sans collecte de données personnelles.",
  alternates: { canonical: "https://empruntcalcul.fr/a-propos" },
  robots: { index: false, follow: false },
};

export default function APropos() {
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
        À propos de EmpruntCalcul
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--t-muted)" }}>
        Dernière mise à jour : mai 2026
      </p>

      <div className="flex flex-col gap-10" style={{ color: "var(--t-secondary)" }}>
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            Notre mission
          </h2>
          <p className="text-base leading-relaxed">
            EmpruntCalcul est né d&apos;un constat simple : beaucoup de personnes en
            projet immobilier ne savent pas combien elles peuvent réellement emprunter
            avant de consulter une banque ou un courtier. Les outils existants sont
            souvent opaques, contraignants à l&apos;inscription, ou conçus pour collecter
            des données commerciales.
          </p>
          <p className="text-base leading-relaxed">
            Notre objectif est de rendre la simulation de capacité d&apos;emprunt
            accessible à tous, gratuitement et sans friction - en appliquant exactement
            la formule officielle utilisée par les banques françaises sous le cadre
            réglementaire HCSF (Haut Conseil de Stabilité Financière).
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            Comment ça marche ?
          </h2>
          <p className="text-base leading-relaxed">
            Le simulateur calcule votre capacité d&apos;emprunt à partir de trois
            éléments clés : vos revenus nets mensuels, votre apport personnel et la
            durée souhaitée du prêt. Il intègre également le taux d&apos;intérêt, le
            taux d&apos;assurance et les frais de notaire (selon le type de bien : neuf
            ou ancien).
          </p>
          <p className="text-base leading-relaxed">
            La règle HCSF plafonne le taux d&apos;endettement à 35 % des revenus nets -
            c&apos;est la contrainte réelle imposée aux banques. Notre simulateur
            l&apos;applique strictement, pour vous donner une estimation fiable et non
            flatteuse.
          </p>
          <p className="text-base leading-relaxed">
            La simulation est instantanée : chaque modification d&apos;un paramètre met
            à jour les résultats en temps réel, sans rechargement de page.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            Respect de votre vie privée
          </h2>
          <p className="text-base leading-relaxed">
            EmpruntCalcul fonctionne en mode <strong>stateless</strong> : aucune
            donnée n&apos;est envoyée à un serveur, stockée en base de données, ou
            associée à votre identité. Tous les calculs s&apos;effectuent directement
            dans votre navigateur.
          </p>
          <p className="text-base leading-relaxed">
            La fonctionnalité de partage par lien encode vos paramètres de simulation
            dans l&apos;URL elle-même (via une compression Base36), sans jamais passer
            par nos serveurs. Vous restez seul maître de vos données.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            Avertissement
          </h2>
          <p
            className="text-base leading-relaxed p-4 rounded-xl"
            style={{
              background: "var(--bg-brand-dim)",
              border: "1px solid var(--bd-brand-dim)",
            }}
          >
            Les résultats fournis par ce simulateur sont indicatifs et ne constituent
            en aucun cas un conseil financier, bancaire ou juridique. Ils sont basés
            sur les barèmes et réglementations en vigueur en 2026. Chaque établissement
            bancaire applique ses propres critères d&apos;octroi. Nous vous
            recommandons de consulter un courtier ou un conseiller bancaire pour toute
            décision d&apos;emprunt.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold" style={{ color: "var(--t-primary)" }}>
            Contact
          </h2>
          <p className="text-base leading-relaxed">
            Une question, un retour, une suggestion d&apos;amélioration ? Écrivez-nous à{" "}
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
      </div>
    </main>
  );
}
