import type { Metadata } from "next";
import {
  categoryList,
  slugifyCategory,
  getCategoryBySlug,
  getProductsByCategory,
  categoryInfo,
} from "@/lib/productData";
import { getFaqsForCategory } from "@/lib/faqData";
import CategoryClient from "./CategoryClient";

export function generateStaticParams() {
  return categoryList.map((category) => ({
    slug: slugifyCategory(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const info = categoryInfo[category];
  const title = `${category} - Buy Online in Mumbai`;
  const description = `Shop premium ${category} from Salon Chair Wala, a trusted salon furniture manufacturer in Mumbai. ${info.tagline} Custom colors available, warranty included, pan-India delivery.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.salonchairwala.com/categories/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.salonchairwala.com/categories/${slug}/`,
      images: [info.image],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return <CategoryClient slug={slug} />;
  }

  const products = getProductsByCategory(category);
  const faqs = getFaqsForCategory(category);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `https://www.salonchairwala.com${product.image}`,
        description: product.description,
        category: product.category,
        brand: { "@type": "Brand", name: "Salon Chair Wala" },
        manufacturer: { "@type": "Organization", name: "Redwal Furniture OPC Pvt Ltd." },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.price,
          availability: product.dispatch
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
          url: `https://www.salonchairwala.com/categories/${slug}/`,
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <CategoryClient slug={slug} />
    </>
  );
}