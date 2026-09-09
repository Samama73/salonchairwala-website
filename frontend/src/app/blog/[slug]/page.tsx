import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogData";

// ✅ Static export ke liye required
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

  // 🏷️ Article Schema (JSON-LD)
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

  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />

      <main className="bg-white font-sans selection:bg-red-900 selection:text-white pb-24">
        
        {/* TOP GRADIENT BACKGROUND */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-50/80 via-amber-50/20 to-white pointer-events-none -z-10"></div>

        <article className="max-w-3xl mx-auto px-6 pt-32 sm:pt-40">
          
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-red-900/70 hover:text-red-900 transition-colors mb-10"
          >
            <span className="mr-3 transition-transform group-hover:-translate-x-2">
              ←
            </span> 
            Back to Guides
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-elegant text-gray-900 tracking-tight leading-[1.2] mb-6">
              {post.title}
            </h1>
          </header>

          {/* Premium Image Container */}
          <div className="relative w-full aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden mb-16 bg-gradient-to-tr from-amber-50/50 to-slate-50 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-contain p-4 sm:p-8 group-hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-xl" 
              priority 
            />
            {/* Glassmorphism Date Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md shadow-sm text-red-900 text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest z-10 border border-white/20">
              {formattedDate}
            </div>
          </div>

          {/* Editorial Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((para, i) => (
              <p 
                key={i} 
                className={`text-gray-600 leading-relaxed mb-8 ${
                  i === 0 
                    ? "text-xl sm:text-2xl font-medium text-gray-900 leading-snug" // First paragraph is styled like a magazine intro
                    : "text-base sm:text-lg"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Luxury CTA Block */}
          <div className="mt-20 relative overflow-hidden rounded-[2rem] bg-red-900 px-8 py-14 sm:p-16 text-center shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <p className="text-amber-200 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Upgrade Your Space
              </p>
              <h3 className="text-3xl sm:text-4xl font-elegant font-bold text-white mb-6">
                Looking for the right <br className="hidden sm:block" /> salon furniture?
              </h3>
              <Link
                href={post.ctaLink ?? "/categories"}
                className="inline-flex items-center justify-center rounded-xl bg-white text-red-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-50 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                {post.ctaText ?? "Browse Our Collection"}
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}