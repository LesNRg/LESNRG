import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "LES NRG | Building Performance Testing | Philadelphia, PA",
  description: "Expert air leakage testing agency, envelope commissioning provider, and air leakage special inspection firm offering blower door testing, HERS ratings, energy audits, and code compliance verification for new construction and existing buildings. Philadelphia, PA.",
  keywords: "blower door testing, HERS rating, energy audit, building performance, Philadelphia, passive house, energy star, code compliance, envelope integrity testing, whole building blower door testing, air leakage testing agency, envelope commissioning provider, air leakage special inspection",
  metadataBase: new URL("https://www.lesnrg.com"),
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "LES NRG",
  description: "Air leakage testing agency, envelope commissioning provider, and air leakage special inspection firm offering blower door testing, HERS ratings, energy audits, PHIUS passive house verification, and Energy Star certification for residential and commercial buildings throughout PA, NJ, NY, and DE.",
  url: "https://www.lesnrg.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "New York" },
    { "@type": "State", name: "Delaware" },
  ],
  sameAs: ["https://www.instagram.com/les.nrg"],
  knowsAbout: [
    "Blower Door Testing",
    "HERS Rating",
    "Energy Audits",
    "PHIUS Passive House Verification",
    "Energy Star Multifamily Certification",
    "Large Building Air Leakage Testing",
    "ASTM E779",
    "ASTM E3158",
    "IECC Energy Code Compliance",
    "Building Envelope Testing",
    "Unit Compartmentalization Testing",
    "Building Science Consulting",
    "Envelope Commissioning",
    "Air Leakage Special Inspection",
    "Commercial Air Leakage Testing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building Performance Testing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blower Door Testing", description: "Air leakage testing per ASTM E779 and ASTM E3158 for code compliance and energy performance verification." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HERS Rating", description: "Home Energy Rating System assessments by an accredited RESNET HERS Rater for new construction and existing homes." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PHIUS Passive House Verification", description: "Independent third-party PHIUS+ passive house verification, inspections, airtightness testing, and certification support." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energy Star Multifamily Certification", description: "Authorized Energy Star Multifamily New Construction and DOE Zero Energy Ready Home verification and certification." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Large Building Blower Door Testing", description: "Multi-fan air leakage testing for commercial and industrial buildings per ASTM E3158." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Energy Audit", description: "Comprehensive whole-home energy audits with HERS score generation, energy modeling, and prioritized improvement recommendations." } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#111111" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111111" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} antialiased`} style={{ backgroundColor: "#111111" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AnalyticsWrapper />
        <GoogleAnalytics gaId="G-P79PK1R545" />
      </body>
    </html>
  );
}
