export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.empruntcalcul.fr/#organization",
    name: "EmpruntCalcul",
    alternateName: ["Emprunt Calcul", "EmpruntCalcul.fr"],
    url: "https://www.empruntcalcul.fr",
    logo: {
      "@type": "ImageObject",
      "@id": "https://www.empruntcalcul.fr/#logo",
      url: "https://www.empruntcalcul.fr/og-image.png",
      contentUrl: "https://www.empruntcalcul.fr/og-image.png",
      width: 1200,
      height: 630,
      caption: "EmpruntCalcul — Simulateur de capacité d'emprunt immobilier",
    },
    description:
      "Simulateur gratuit de capacité d'emprunt immobilier pour la France. Formule HCSF officielle des 35 %, frais de notaire, comparatif 15/20/25 ans.",
    foundingDate: "2025",
    areaServed: {
      "@type": "Country",
      name: "France",
      "@id": "https://www.wikidata.org/wiki/Q142",
    },
    knowsAbout: [
      "capacité d'emprunt immobilier",
      "crédit immobilier",
      "règle HCSF",
      "prêt immobilier",
      "frais de notaire",
      "prêt à taux zéro",
      "investissement locatif",
      "primo-accédant",
      "taux d'endettement",
      "apport personnel immobilier",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outils de simulation immobilière",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Simulateur de capacité d'emprunt immobilier",
            url: "https://www.empruntcalcul.fr/simulateur",
            description:
              "Calcul instantané de capacité d'emprunt selon la règle HCSF des 35 %. Gratuit, sans inscription.",
          },
          price: "0",
          priceCurrency: "EUR",
        },
      ],
    },
    sameAs: ["https://www.empruntcalcul.fr"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
