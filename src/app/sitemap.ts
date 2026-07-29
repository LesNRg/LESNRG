import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lesnrg.com";
  const lastModified = new Date("2026-05-26");
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/large-building-blower-door-testing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/special-inspections`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/energy-star-multifamily`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/phius-passive-house-verification`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/why-it-matters`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
