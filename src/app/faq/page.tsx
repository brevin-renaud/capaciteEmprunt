import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import FAQSchema from "@/components/SEO/FAQSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
  description:
    "Réponses claires aux questions les plus posées sur le calcul de la capacité d'emprunt immobilier : règle HCSF 35 %, apport personnel, crédits en cours, taux, durée et profils spécifiques.",
  openGraph: {
    title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
    description:
      "Réponses claires sur la capacité d'emprunt : HCSF, apport, crédits, taux, durée et profils spécifiques.",
    url: "https://empruntcalcul.fr/faq",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://empruntcalcul.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "FAQ capacité d'emprunt immobilier — EmpruntCalcul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
    description: "Réponses claires sur la capacité d'emprunt : HCSF, apport, crédits, taux, durée et profils spécifiques.",
    images: ["https://empruntcalcul.fr/og-image.png"],
  },
  alternates: { canonical: "https://empruntcalcul.fr/faq" },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://empruntcalcul.fr" },
          { name: "FAQ", url: "https://empruntcalcul.fr/faq" },
        ]}
      />
      <FAQClient />
    </>
  );
}
