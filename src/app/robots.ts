import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/notrack" },
    sitemap: "https://www.lesnrg.com/sitemap.xml",
  };
}
