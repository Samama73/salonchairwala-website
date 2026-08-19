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

      <section className="min-h-screen bg-amber-50/30 py-16 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-red-900 text-white uppercase ring-1 ring-inset ring-red-800">
              • Guides & Articles •
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold mt-6 text-gray-900 tracking-tight">
                Salon Furniture Blog
            </h1>
            <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto font-medium">
                Practical guides and tips for salon owners on choosing, maintaining and setting up salon furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-1">
                    {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="font-bold text-lg text-gray-900 group-hover:text-red-900 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}