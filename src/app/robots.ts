import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/mentions-legales", "/confidentialite", "/a-propos"],
      },
    ],
    sitemap: "https://www.capacimetrimmo.fr/sitemap.xml",
    host: "https://www.capacimetrimmo.fr",
  };
}
