import type { MetadataRoute } from "next";
import { categoryList, slugifyCategory, allProducts } from "@/lib/productData";
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
    { url: `${baseUrl}/salon-furniture-bangalore/`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/salon-furniture-hyderabad/`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/salon-furniture-kerala/`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/kochi/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/trivandrum/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/thrissur/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/kozhikode/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), priority: 0.6 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categoryList.map((category) => ({
    url: `${baseUrl}/categories/${slugifyCategory(category)}/`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  // Product pages
  const productPages: MetadataRoute.Sitemap = allProducts.map((p) => ({
    url: `${baseUrl}/products/${p.name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}/`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedDate),
    priority: 0.7,
  }));

  // Combine all sitemap entries
  return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}