import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domainURL = "https://www.sarbit.in";

  return [
    {
      url: `${domainURL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${domainURL}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${domainURL}/products`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${domainURL}/terms`,
      lastModified: new Date().toISOString(),
    },
  ];
}
