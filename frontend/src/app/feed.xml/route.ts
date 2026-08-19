// app/feed.xml/route.ts
// Google Merchant Center XML Feed (RSS 2.0) — auto-generated from productdata.ts
// Live at: https://www.salonchairwala.com/feed.xml

import { allProducts } from "@/lib/productData";

export const dynamic = "force-static";

const SITE_URL = "https://www.salonchairwala.com";
const BRAND = "Salon Chair Wala";

const googleCategoryFallback: Record<string, number> = {
  "Salon Chairs": 7241,
  "Shampoo Chairs": 7241,
  "Manicure & Pedicure": 7241,
  "Facial Beds": 2074,
  "Furnishings": 436,
};

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = allProducts
    .map((p) => {
      const id = slugify(p.name);
      const link = `${SITE_URL}/products/${id}`;
      const imageLink = `${SITE_URL}${p.image}`;
      const availability = p.dispatch ? "in_stock" : "in_stock";

      const title = p.seoTitle || p.name;
      const categoryId = p.googleCategoryId || googleCategoryFallback[p.category] || 436;

      return `
    <item>
      <g:id>${id}</g:id>
      <title>${escapeXml(title)}</title>
      <description>${escapeXml(p.description)}</description>
      <link>${link}</link>
      <g:image_link>${imageLink}</g:image_link>
      <g:availability>${availability}</g:availability>
      <g:price>${p.price}.00 INR</g:price>
      <g:condition>new</g:condition>
      <g:brand>${BRAND}</g:brand>
      <g:google_product_category>${categoryId}</g:google_product_category>
      <g:product_type>${escapeXml(p.category)}</g:product_type>
      <g:identifier_exists>false</g:identifier_exists>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>${BRAND} Product Feed</title>
    <link>${SITE_URL}</link>
    <description>Premium salon furniture — chairs, shampoo stations, manicure/pedicure units, facial beds &amp; furnishings.</description>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
    },
  });
}