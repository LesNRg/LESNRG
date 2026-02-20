import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lesnrg.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/large-building-blower-door-testing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/energy-star-multifamily`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/phius-passive-house-verification`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
