import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "LES NRG | Building Performance Testing | Philadelphia, PA",
  description: "Expert blower door testing, HERS ratings, energy audits, and code compliance verification for new construction and existing buildings. Philadelphia, PA.",
  keywords: "blower door testing, HERS rating, energy audit, building performance, Philadelphia, passive house, energy star, code compliance, envelope integrity testing, whole building blower door testing",
  metadataBase: new URL("https://www.lesnrg.com"),
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
  "@type": "LocalBusiness",
  name: "LES NRG",
  description: "Building performance verification firm focused on blower door testing, HERS ratings, energy audits, PHIUS verification, and Energy Star certification.",
  url: "https://www.lesnrg.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: ["Pennsylvania", "New Jersey", "New York", "Delaware"],
  sameAs: ["https://www.instagram.com/les.nrg"],
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
      </body>
    </html>
  );
}
