"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { allProducts } from "@/lib/productData";

export default function FeaturedProducts() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <section
      id="products"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-[0.35em] text-xs">
            Featured Collection
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 tracking-tight">
            Crafted for Professionals
          </h2>

          <p className="text-gray-500 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our premium salon chairs designed for ergonomic comfort, durability, and long-term professional usage.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-9">

          {allProducts.map((product) => {
            const cartItem = cart.find((item: any) => item.name === product.name);

            return (
              <div
                key={product.name}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 flex flex-col h-full"
              >
                {/* glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-black/10 pointer-events-none" />

                {/* IMAGE CONTAINER */}
                <div className="relative h-40 sm:h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden p-3 sm:p-4 border-b border-gray-100">
                  {product.dispatch && (
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-2 py-1 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-semibold tracking-wide text-white shadow-lg">
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
                    className="object-scale-down h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm sm:text-lg text-gray-900 group-hover:text-red-600 transition truncate sm:whitespace-normal">
                    {product.name}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2 sm:line-clamp-none">
                    {product.description}
                  </p>

                  <p className="mt-2 sm:mt-3 text-base sm:text-xl font-extrabold text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  {cartItem ? (
                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 bg-gray-50 p-1.5 rounded-lg sm:rounded-xl border border-gray-200">
                      <button
                        onClick={() => removeFromCart(product.name)}
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-100 transition active:scale-95 text-gray-700"
                      >
                        −
                      </button>
                      <span className="font-bold text-sm w-5 text-center">{cartItem.quantity}</span>
                      <button
                        onClick={() => addToCart({ name: product.name, price: product.price })}
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-100 transition active:scale-95 text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart({ name: product.name, price: product.price })}
                      className="mt-3 sm:mt-6 inline-flex w-full items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-3 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/40 active:scale-[0.98]"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}