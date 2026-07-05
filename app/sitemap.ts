import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arikasoft.com";

  return [
    {
      url: base,
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: `${base}/about`,
      priority: 0.9,
    },
    {
      url: `${base}/services`,
      priority: 0.9,
    },
    {
      url: `${base}/products`,
      priority: 0.9,
    },
    {
      url: `${base}/portfolio`,
      priority: 0.8,
    },
    {
      url: `${base}/industries`,
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      priority: 0.8,
    },
    {
      url: `${base}/careers`,
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      priority: 1,
    },
  ];
}