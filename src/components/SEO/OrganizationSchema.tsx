export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.empruntcalcul.fr/#organization",
    name: "EmpruntCalcul",
    alternateName: "Emprunt Calcul",
    url: "https://www.empruntcalcul.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.empruntcalcul.fr/og-image.png",
      width: 1200,
      height: 630,
    },
    description:
      "Simulateur gratuit de capacité d'emprunt immobilier pour la France. Formule HCSF officielle des 35 %, frais de notaire, comparatif 15/20/25 ans.",
    foundingDate: "2025",
    areaServed: { "@type": "Country", name: "France" },
    knowsAbout: [
      "capacité d'emprunt immobilier",
      "crédit immobilier",
      "règle HCSF",
      "prêt immobilier",
      "frais de notaire",
      "prêt à taux zéro",
    ],
    sameAs: ["https://www.empruntcalcul.fr"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
