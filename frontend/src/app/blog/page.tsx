import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Blog - Salon Furniture Guides & Tips",
  description:
    "Read expert guides on choosing salon chairs, shampoo stations, and salon furniture for your business. Tips and buying guides from Salon Chair Wala, Mumbai.",
  alternates: {
    canonical: "https://www.salonchairwala.com/blog/",
  },
};

export default function BlogListPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white font-sans selection:bg-red-900 selection:text-white pb-24">
        
        {/* 1. PREMIUM HERO SECTION */}
        <section className="bg-gradient-to-b from-amber-50/80 via-amber-50/30 to-white pt-24 pb-20 sm:pt-32 sm:pb-24 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block text-red-900 font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-6 px-4 py-2 bg-red-900/5 rounded-full border border-red-900/10">
              • Guides & Articles •
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 mb-6">
              Salon Furniture Blog.
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Practical guides, expert tips, and everything you need to know about setting up and upgrading your salon space.
            </p>
          </div>
        </section>

        {/* 2. BLOG GRID (With Wow Factor) */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {blogPosts.map((post) => {
              // Date Formatting for the Badge
              const dateObj = new Date(post.publishedDate);
              const formattedDate = dateObj.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(153,27,27,0.08)] hover:-translate-y-2 hover:border-red-900/20 transition-all duration-500"
                >
                  {/* Image Wrapper */}
                  <div className="relative h-56 w-full bg-gradient-to-tr from-amber-50/50 to-slate-50 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-xl"
                    />
                    {/* Glassmorphism Date Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md shadow-sm text-red-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-10 border border-white/20">
                      {formattedDate}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-slate-50/30">
                    <h2 className="text-xl font-bold text-gray-950 mb-3 leading-snug group-hover:text-red-900 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More Link (Animated) */}
                    <div className="mt-auto flex items-center text-red-900 font-bold text-[11px] uppercase tracking-[0.2em]">
                      Read Article
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}