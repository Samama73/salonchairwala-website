"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp";
import ShareButton from "../../components/ShareButton";
import { useCart } from "@/context/CartContext";
import { sendGAEvent } from "@/lib/gtag";
import {
  categoryList,
  categoryInfo,
  slugifyCategory,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/productData";

// 👉 Ye client component hai — slug ko parent server page.tsx se prop ke roop mein milta hai
export default function CategoryClient({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug);

  const { cart, addToCart, removeFromCart } = useCart();

  // 🚫 Agar galat/unknown category slug ho
  if (!category) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen bg-amber-50/30 py-20 text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900">Category not found</h1>
          <p className="text-gray-500 mt-3">Yeh category exist nahi karti.</p>
          <Link
            href="/categories"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-red-900 text-white font-semibold hover:bg-red-950 transition"
          >
            ← Back to Categories
          </Link>
        </section>
        <Footer />
        <FloatingWhatsapp />
      </>
    );
  }

  const info = categoryInfo[category];
  const products = getProductsByCategory(category);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-amber-50/30 py-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* HERO */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-red-900 text-white uppercase ring-1 ring-inset ring-red-800">
              • {products.length} {products.length === 1 ? "Product" : "Products"} •
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900 tracking-tight">
              {category}
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
              {info.tagline}
            </p>
          </div>

          {/* OTHER CATEGORIES QUICK SWITCH */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categoryList.map((c) => {
              const cSlug = slugifyCategory(c);
              const active = c === category;
              return (
                <Link
                  key={c}
                  href={`/categories/${cSlug}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    active
                      ? "bg-red-900 text-white shadow-md"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-red-900 hover:text-red-900"
                  }`}
                >
                  {c}
                </Link>
              );
            })}
          </div>

          {/* PRODUCT GRID */}
          {products.length === 0 ? (
            <p className="text-center text-gray-400 py-16">
              Is category mein abhi products add nahi hue hain. Jaldi aa rahe hain!
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-9">
              {products.map((product) => {
                const cartItem = cart.find((item: any) => item.name === product.name);

                return (
                  <div
                    key={product.name}
                    onClick={() =>
                      sendGAEvent("select_item", {
                        item_list_name: `Category - ${category}`,
                        items: [{ item_name: product.name, price: product.price }],
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-red-900/30 transition-all duration-300 ease-out hover:-translate-y-3 flex flex-col h-full"
                  >
                    <div className="relative h-44 sm:h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden p-3 sm:p-4 border-b border-gray-50">
                      {product.dispatch && (
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-red-900 to-red-800 px-2 py-1 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-semibold tracking-wide text-white shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          <span className="hidden sm:inline">READY FOR DISPATCH</span>
                          <span className="inline sm:hidden">DISPATCH</span>
                        </div>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={420}
                        height={420}
                        className="object-scale-down h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <h3 className="font-bold text-sm sm:text-lg text-gray-900 group-hover:text-red-900 transition-colors duration-200 truncate sm:whitespace-normal">
                        {product.name}
                      </h3>

                      <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2 sm:line-clamp-none">
                        {product.description}
                      </p>

                      <p className="mt-2 sm:mt-3 text-base sm:text-xl font-extrabold text-gray-900 tracking-tight">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <div className="mt-2 flex justify-end">
                        <ShareButton title={product.name} text={`Check out ${product.name} at Salon Chair Wala`} />
                      </div>

                      {cartItem ? (
                        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 bg-gray-50 p-1.5 rounded-lg sm:rounded-xl border border-gray-200">
                          <button
                            onClick={() => removeFromCart(product.name)}
                            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-200 transition active:scale-95 text-gray-700"
                          >
                            −
                          </button>
                          <span className="font-bold text-sm w-5 text-center">{cartItem.quantity}</span>
                          <button
                            onClick={() => addToCart({ name: product.name, price: product.price })}
                            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-200 transition active:scale-95 text-gray-700"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart({ name: product.name, price: product.price })}
                          className="mt-3 sm:mt-6 inline-flex w-full items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-red-900 to-red-800 px-3 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-red-900/30 active:scale-[0.98]"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}