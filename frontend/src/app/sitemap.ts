import type { MetadataRoute } from "next";
import { categoryList, slugifyCategory } from "@/lib/productData";
import { blogPosts } from "@/lib/blogData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.salonchairwala.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/categories/`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/setups/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/readytomove/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), priority: 0.8 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categoryList.map((category) => ({
    url: `${baseUrl}/categories/${slugifyCategory(category)}/`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedDate),
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}