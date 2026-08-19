import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogData";

// ✅ Static export ke liye required — batata hai kaunse blog slugs pre-build hone hain
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.salonchairwala.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.salonchairwala.com/blog/${slug}/`,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishedDate,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  // 🏷️ Article Schema (JSON-LD) — helps Google understand this is a blog article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.salonchairwala.com${post.coverImage}`,
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "Salon Chair Wala",
    },
    publisher: {
      "@type": "Organization",
      name: "Salon Chair Wala",
      logo: {
        "@type": "ImageObject",
        url: "https://www.salonchairwala.com/products/logo.webp",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />

      <article className="min-h-screen bg-amber-50/30 py-16 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="text-sm text-red-900 font-semibold hover:underline">
            ← Back to Blog
          </Link>

          <p className="text-xs text-gray-400 mt-6">
            {new Date(post.publishedDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold mt-2 text-gray-900 tracking-tight">
            {post.title}
          </h1>

          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden my-8 bg-gray-50">
            <Image src={post.coverImage} alt={post.title} fill className="object-contain" priority />
          </div>

          <div className="prose prose-gray max-w-none">
            {post.content.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 text-base">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-100 text-center">
            <p className="text-gray-700 font-semibold mb-3">Looking for the right salon furniture?</p>
            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-900 to-red-800 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-red-900/30 transition"
            >
              Browse Our Collection
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}