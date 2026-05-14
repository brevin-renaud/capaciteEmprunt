import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import FAQSchema from "@/components/SEO/FAQSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
  description:
    "Réponses claires aux questions les plus posées sur le calcul de la capacité d'emprunt immobilier : règle HCSF 35 %, apport personnel, crédits en cours, taux, durée et profils spécifiques.",
  keywords: [
    "FAQ capacité d'emprunt",
    "questions crédit immobilier",
    "règle HCSF explication",
    "apport personnel minimum",
    "impact crédits en cours emprunt",
    "taux assurance emprunteur",
    "capacité d'emprunt couple",
  ],
  openGraph: {
    title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
    description:
      "Réponses claires sur la capacité d'emprunt : HCSF, apport, crédits, taux, durée et profils spécifiques.",
    url: "https://www.empruntcalcul.fr/faq",
    type: "website",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.empruntcalcul.fr/faq" },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.empruntcalcul.fr" },
          { name: "FAQ", url: "https://www.empruntcalcul.fr/faq" },
        ]}
      />
      <FAQClient />
    </>
  );
}
