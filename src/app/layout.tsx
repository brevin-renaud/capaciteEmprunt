import Footer from "@/components/Footer";
import Navbar from "@/components/Navigation/Navbar";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const viewport: Viewport = {
  themeColor: "#003d2b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Simulateur de capacité d'emprunt immobilier | EmpruntCalcul",
    template: "%s | EmpruntCalcul",
  },
  description:
    "Calculez gratuitement votre capacité d'emprunt immobilier. Formule HCSF 35 %, frais de notaire, comparatif 15/20/25 ans. Résultat instantané, aucune inscription.",
  keywords: [
    "capacité d'emprunt",
    "simulateur capacité d'emprunt",
    "calculer capacité d'emprunt",
    "calcul prêt immobilier",
    "règle HCSF",
    "taux endettement 35%",
    "simulation crédit immobilier",
    "combien emprunter",
    "frais de notaire",
    "prêt immobilier 2026",
  ],
  authors: [{ name: "EmpruntCalcul", url: "https://www.empruntcalcul.fr" }],
  creator: "EmpruntCalcul",
  publisher: "EmpruntCalcul",
  metadataBase: new URL("https://www.empruntcalcul.fr"),
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EmpruntCalcul",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "EmpruntCalcul",
    title: "Simulateur de capacité d'emprunt immobilier gratuit",
    description:
      "Calculez votre capacité d'emprunt immobilier selon la règle HCSF des 35 %. Simulation instantanée, partageable par lien.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EmpruntCalcul — Simulateur de capacité d'emprunt immobilier gratuit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur de capacité d'emprunt immobilier gratuit",
    description:
      "Calculez votre capacité d'emprunt immobilier selon la règle HCSF des 35 %. Simulation instantanée, partageable par lien.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={geist.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <OrganizationSchema />
        <Navbar />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
