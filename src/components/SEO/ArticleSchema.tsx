interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export default function ArticleSchema({
  headline,
  description,
  url,
  datePublished = "2025-01-15",
  dateModified = "2026-05-05",
  image,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage: "fr-FR",
    image: image ?? "https://www.capacimetrimmo.fr/og-image.png",
    author: {
      "@type": "Organization",
      name: "CapaciteEmprunt",
      url: "https://www.capacimetrimmo.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "CapaciteEmprunt",
      url: "https://www.capacimetrimmo.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.capacimetrimmo.fr/og-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
