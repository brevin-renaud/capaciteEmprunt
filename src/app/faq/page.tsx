import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import FAQSchema from "@/components/SEO/FAQSchema";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
  description:
    "Réponses claires aux questions les plus posées sur le calcul de la capacité d'emprunt immobilier : règle HCSF 35 %, apport personnel, crédits en cours, taux, durée et profils spécifiques.",
  openGraph: {
    title: "FAQ Capacité d'Emprunt - 32 Questions & Réponses par Thème",
    description:
      "Réponses claires sur la capacité d'emprunt : HCSF, apport, crédits, taux, durée et profils spécifiques.",
    url: "https://www.capacimetrimmo.fr/faq",
    type: "website",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://www.capacimetrimmo.fr/faq" },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />
      <FAQClient />
    </>
  );
}
