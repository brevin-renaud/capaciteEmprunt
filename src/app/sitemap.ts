import { MetadataRoute } from "next";
import { getAllPostsForSitemapAsync } from "@/lib/blog";

const BASE_URL = "https://empruntcalcul.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllPostsForSitemapAsync();

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/simulateur`,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/guide-capacite-emprunt`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/taux-immobilier-2026`,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/primo-accedant`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/pret-a-taux-zero-2026`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/frais-de-notaire`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/investissement-locatif`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: blogPosts.length > 0 ? blogPosts[0].updatedAt : new Date("2026-01-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
