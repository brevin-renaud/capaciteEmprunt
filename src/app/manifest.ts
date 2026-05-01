import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CapaciteEmprunt - Simulateur de capacité d'emprunt",
    short_name: "CapaciteEmprunt",
    description:
      "Calculez gratuitement votre capacité d'emprunt immobilier avec la formule HCSF officielle des 35 %.",
    start_url: "/simulateur",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#003d2b",
    orientation: "any",
    lang: "fr",
    dir: "ltr",
    categories: ["finance", "utilities"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
