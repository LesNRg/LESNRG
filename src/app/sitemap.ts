import type { MetadataRoute } from "next";

const base = "https://www.lesnrg.com";

// Update the date on a route when that page's content meaningfully changes.
const routes = [
  { path: "", lastModified: "2026-07-29", changeFrequency: "monthly", priority: 1.0 },
  { path: "/services", lastModified: "2026-05-26", changeFrequency: "monthly", priority: 0.9 },
  { path: "/large-building-blower-door-testing", lastModified: "2026-07-29", changeFrequency: "monthly", priority: 0.9 },
  { path: "/special-inspections", lastModified: "2026-07-29", changeFrequency: "monthly", priority: 0.9 },
  { path: "/energy-star-multifamily", lastModified: "2026-04-26", changeFrequency: "monthly", priority: 0.9 },
  { path: "/phius-passive-house-verification", lastModified: "2026-05-09", changeFrequency: "monthly", priority: 0.9 },
  { path: "/why-it-matters", lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", lastModified: "2026-08-13", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", lastModified: "2026-04-26", changeFrequency: "yearly", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
