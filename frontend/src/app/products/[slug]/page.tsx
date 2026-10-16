// app/products/[slug]/page.tsx
// Individual product page — required for unique Merchant Center product URLs
// Static export compatible (generateStaticParams) — Next.js 15+ async params

import { allProducts, slugifyCategory } from "@/lib/productData";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.salonchairwala.com";

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Pre-generate a static page for every product at build time
export async function generateStaticParams() {
  return allProducts.map((p) => ({
    slug: slugify(p.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = allProducts.find((p) => slugify(p.name) === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url: `${SITE_URL}/products/${slug}/`,
      images: [`${SITE_URL}${product.image}`],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = allProducts.find((p) => slugify(p.name) === slug);

  if (!product) {
    notFound();
  }

  const categorySlug = slugifyCategory(product.category);

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [`${SITE_URL}${product.image}`],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Salon Chair Wala",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <meta property="og:type" content="product" />
      <meta property="product:price:amount" content={String(product.price)} />
      <meta property="product:price:currency" content="INR" />
      <meta property="product:availability" content={product.dispatch ? "in stock" : "available for order"} />
      <meta property="product:brand" content="Salon Chair Wala" />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> {" / "}
        <Link href={`/categories/${categorySlug}`}>{product.category}</Link> {" / "}
        <span>{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full rounded-xl object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-semibold mb-4">₹{product.price.toLocaleString("en-IN")}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          {product.dispatch && (
            <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-4">
              Ready to Dispatch
            </span>
          )}

          <a
            href={`https://wa.me/919145097466?text=${encodeURIComponent(
              `Hi, I'm interested in ${product.name} (₹${product.price})`
            )}`}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium"
          >
            💬 Enquire on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}