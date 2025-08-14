import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://m-hassaan-portfolio.vercel.app", lastModified: new Date() },
    {
      url: "https://m-hassaan-portfolio.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://m-hassaan-portfolio.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://m-hassaan-portfolio.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
