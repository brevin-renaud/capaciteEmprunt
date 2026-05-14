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
    sitemap: "https://www.empruntcalcul.fr/sitemap.xml",
    host: "https://www.empruntcalcul.fr",
  };
}
