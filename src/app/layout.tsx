import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LES NRG | Building Performance Testing | Philadelphia, PA",
  description: "Expert blower door testing, HERS ratings, energy audits, and code compliance verification for new construction and existing buildings. Philadelphia, PA.",
  keywords: "blower door testing, HERS rating, energy audit, building performance, Philadelphia, passive house, energy star, code compliance",
  metadataBase: new URL("https://www.lesnrg.com"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LES NRG",
  description: "Building performance verification firm specializing in blower door testing, HERS ratings, energy audits, PHIUS verification, and Energy Star certification.",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
