"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import {
  categoryList,
  categoryInfo,
  slugifyCategory,
  getProductsByCategory,
} from "@/lib/productData";

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-amber-50/30 py-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* HERO */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-red-900 text-white uppercase ring-1 ring-inset ring-red-800">
              • Browse By Category •
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900 tracking-tight">
              Shop by Category
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
              Find exactly what you need — from styling chairs to salon furnishings, organized for easy browsing.
            </p>
          </div>

          {/* CATEGORY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryList.map((category) => {
              const info = categoryInfo[category];
              const count = getProductsByCategory(category).length;
              const slug = slugifyCategory(category);

              return (
                <Link
                  key={category}
                  href={`/categories/${slug}`}
                  className="group bg-white border border-gray-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-60 w-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                        src={info.image}
                        alt={category}
                        width={500}
                        height={500}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-3 right-3 bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                        {count} {count === 1 ? "item" : "items"}
                    </span>
                    </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-900 transition-colors duration-200">
                      {category}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                      {info.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-900">
                      View Collection
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}