"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  allProducts,
  comboSetups,
  getComboProducts,
  getComboOriginalPrice,
} from "@/lib/productData";
import ProductCard from "@/app/components/ProductCard";

// 🟢 Featured setups with color switcher
const colorSetups = [
  {
    name: "Salon Setup",
    originalPrice: 92000,
    price: 42000,
    description:
      "A complete premium salon setup designed to deliver exceptional comfort, elegant aesthetics, and long-lasting performance for modern professional salons.",
    colors: [
      { name: "Persian Green", images: ["/products/setup1.2.webp", "/products/setup1.1.webp"] },
      { name: "Dark Green", images: ["/products/setup2.1.webp", "/products/setup2.2.webp"] },
    ],
    includedItems: [
      { name: "Royal Diamond Chair", price: 15000 },
      { name: "Shampoo Station", price: 22000 },
    ],
  },
  {
    name: "Glass Trolley",
    originalPrice: 6500,
    price: 5200,
    description:
      "Premium tempered glass trolley designed to keep your salon essentials organized while adding a clean, modern, and professional touch to your workspace.",
    colors: [
      { name: "Black", images: ["/products/btrolley.webp"] },
      { name: "White", images: ["/products/wtrolley.webp"] },
    ],
  },
];

export default function ReadyToMovePage() {
  const { cart } = useCart();

  const [selectedColors, setSelectedColors] = useState<Record<string, number>>(
    colorSetups.reduce((acc, s) => ({ ...acc, [s.name]: 0 }), {})
  );
  const [selectedImageIndices, setSelectedImageIndices] = useState<Record<string, number>>(
    colorSetups.reduce((acc, s) => ({ ...acc, [s.name]: 0 }), {})
  );

  const totalItems = cart.reduce((sum: number, i: any) => sum + (i.quantity || 1), 0);
  const productTotal = cart.reduce(
    (sum: number, i: any) => sum + (i.price || 0) * (i.quantity || 1),
    0
  );
  const hasSalonProduct = cart.some(
    (i: any) => allProducts.some((p) => i.name.includes(p.name)) || i.name.includes("Salon Setup")
  );
  const trolleyInCart = cart.some((i: any) => i.name.includes("Trolley"));

  return (
    <section className="min-h-screen bg-[#fafafa] py-12 font-sans">
      {/* 🎟 TICKER */}
      <div className="overflow-hidden bg-black text-white py-2.5 mb-12 shadow-sm">
        <div className="ticker">
          <div className="ticker-track text-xs sm:text-sm">
            <span>🎟 SAVE10 - 10% OFF</span>
            <span>🎟 FLAT500 - ₹500 OFF</span>
            <span>🎟 WELCOME5 - 5% OFF</span>
            <span>🎟 SAVE10 - 10% OFF</span>
            <span>🎟 FLAT500 - ₹500 OFF</span>
            <span>🎟 WELCOME5 - 5% OFF</span>
          </div>
          <div className="ticker-track text-xs sm:text-sm" aria-hidden="true">
            <span>🎟 SAVE10 - 10% OFF</span>
            <span>🎟 FLAT500 - ₹500 OFF</span>
            <span>🎟 WELCOME5 - 5% OFF</span>
            <span>🎟 SAVE10 - 10% OFF</span>
            <span>🎟 FLAT500 - ₹500 OFF</span>
            <span>🎟 WELCOME5 - 5% OFF</span>
          </div>
        </div>
      </div>

      {/* 🛒 FLOATING CART */}
      <Link href="/cart">
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-3.5 rounded-full shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all z-50 font-semibold tracking-wide flex items-center gap-2 border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          Cart ({totalItems})
        </div>
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HERO */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-gray-900 text-white uppercase ring-1 ring-inset ring-gray-800">
            • Ready To Ship •
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900 tracking-tight">
            Ready To Order Products
          </h1>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Premium salon equipment with fast delivery & professional build quality.
          </p>
        </div>

        {/* 🟢 FEATURED SETUPS (color switcher) */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-8">Featured Setups</h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {colorSetups.map((setup) => {
            const selIdx = selectedColors[setup.name] || 0;
            const color = setup.colors[selIdx];
            const imgIdx = selectedImageIndices[setup.name] || 0;
            const itemName = `${setup.name} - ${color.name}`;

            return (
              <ProductCard
                key={setup.name}
                name={itemName}
                images={[color.images[imgIdx]]}
                price={setup.price}
                originalPrice={setup.originalPrice}
                description={setup.description}
                includedItems={(setup as any).includedItems}
                thumbnails={
                  color.images.length > 1 ? (
                    <div className="flex gap-3">
                      {color.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setSelectedImageIndices((p) => ({ ...p, [setup.name]: idx }))
                          }
                          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white overflow-hidden transition-all duration-200 ${
                            imgIdx === idx
                              ? "ring-2 ring-black ring-offset-2 shadow-md"
                              : "ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-sm"
                          }`}
                        >
                          <img src={img} alt="thumb" className="object-cover w-full h-full p-1.5" />
                        </button>
                      ))}
                    </div>
                  ) : undefined
                }
                colorSwitcher={
                  <>
                    <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Color:
                    </span>
                    <div className="flex gap-3 items-center">
                      {setup.colors.map((c, idx) => (
                        <button
                          key={c.name}
                          onClick={() => {
                            setSelectedColors((p) => ({ ...p, [setup.name]: idx }));
                            setSelectedImageIndices((p) => ({ ...p, [setup.name]: 0 }));
                          }}
                          title={c.name}
                          className={`w-7 h-7 rounded-full transition-all duration-200 ${
                            selIdx === idx
                              ? "ring-2 ring-black ring-offset-2 shadow-sm scale-110"
                              : "ring-1 ring-gray-200 hover:scale-110"
                          }`}
                          style={{
                            backgroundColor: c.name.toLowerCase().includes("dark green")
                              ? "#1f4d36"
                              : c.name.toLowerCase().includes("persian")
                              ? "#00a693"
                              : c.name.toLowerCase().includes("black")
                              ? "#111111"
                              : c.name.toLowerCase().includes("white")
                              ? "#ffffff"
                              : "#cccccc",
                          }}
                        />
                      ))}
                      <span className="text-sm font-medium text-gray-700 ml-1">{color.name}</span>
                    </div>
                  </>
                }
              />
            );
          })}
        </div>

        {/* 🟣 COMBO SETUPS — max 6, chair + chair pairing */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-8">Combo Setups</h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {comboSetups.slice(0, 6).map((combo) => {
            const items = getComboProducts(combo);
            const originalPrice = getComboOriginalPrice(combo);
            return (
              <ProductCard
                key={combo.name}
                name={combo.name}
                images={items.map((i) => i.image)}
                price={combo.bundlePrice}
                originalPrice={originalPrice}
                description={combo.description}
                includedItems={items.map((i) => ({ name: i.name, price: i.price }))}
              />
            );
          })}
        </div>

        {/* 🧾 ORDER SUMMARY */}
        <div className="mt-24 max-w-lg mx-auto bg-white border border-gray-200/80 rounded-3xl p-8 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-900 via-gray-700 to-black"></div>

          <h3 className="text-2xl font-extrabold mb-6 text-gray-900 tracking-tight">Order Summary</h3>

          <div className="flex justify-between text-gray-500 font-medium mb-6 text-sm">
            <span>Total Items in Cart</span>
            <span className="bg-gray-100 text-gray-900 px-2 py-0.5 rounded-full font-bold">{totalItems}</span>
          </div>

          <div className="space-y-3 text-sm font-medium">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-8 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                Your cart is feeling a bit empty
              </p>
            ) : (
              cart.map((item: any, i: number) => <CartRow key={i} item={item} />)
            )}
          </div>

          <hr className="my-6 border-dashed border-gray-300" />

          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500 uppercase tracking-wider text-sm">Subtotal</span>
            <span className="font-black text-2xl text-gray-900">₹{productTotal.toLocaleString("en-IN")}</span>
          </div>

          <Link href="/cart">
            <button
              disabled={cart.length === 0}
              className={`mt-8 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex justify-center items-center gap-2
                ${
                  cart.length === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-900 hover:shadow-xl hover:shadow-gray-900/20 active:scale-95"
                }`}
            >
              Proceed to Checkout
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </Link>

          {hasSalonProduct && !trolleyInCart && <TrolleyUpsell />}

          <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Secure Checkout
          </p>
        </div>
      </div>

      <style jsx>{`
        .ticker {
          display: flex;
          width: max-content;
        }
        .ticker-track {
          display: flex;
          gap: 3rem;
          padding-right: 3rem;
          white-space: nowrap;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .ticker {
          animation: scroll 18s linear infinite;
        }
        .ticker:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function CartRow({ item }: { item: any }) {
  const { removeFromCart } = useCart();
  return (
    <div className="flex justify-between items-center text-gray-800 py-3 border-b border-gray-50 last:border-0 group">
      <div className="flex flex-col max-w-[65%]">
        <span className="truncate font-semibold">{item.name}</span>
        <span className="text-gray-400 text-xs mt-0.5">Qty: {item.quantity || 1}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="whitespace-nowrap font-bold text-gray-900">
          ₹{((item.price || 0) * (item.quantity || 1)).toLocaleString("en-IN")}
        </span>
        <button
          onClick={() => removeFromCart(item.name)}
          className="text-gray-300 hover:text-red-500 transition-colors p-1"
          title="Remove from Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function TrolleyUpsell() {
  const { addToCart } = useCart();
  return (
    <div className="mt-10 mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-6">
        <div>
          <span className="inline-flex items-center rounded-full bg-black px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Recommended Add-On
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900">Complete Your Salon Setup</h3>

        <p className="text-[15px] leading-7 text-gray-600 max-w-2xl">
          Enhance your workspace with our{" "}
          <span className="font-semibold text-gray-900">Premium Glass Trolley</span>. It keeps
          styling tools neatly organized, improves workflow, and complements every salon interior
          with a clean, premium finish.
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border">✓ Premium Glass</div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border">✓ Heavy Duty Wheels</div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border">✓ Professional Finish</div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border">✓ Easy Mobility</div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Add-On Price</p>
            <div className="mt-1">
              <span className="text-gray-400 line-through mr-2 text-sm">₹6,500</span>
              <span className="text-3xl font-extrabold text-gray-900">₹5,200</span>
            </div>
          </div>

          <button
            onClick={() => addToCart({ name: "Glass Trolley - Black", price: 5200 })}
            className="rounded-xl bg-black px-8 py-3.5 font-bold text-white transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] active:scale-95"
          >
            + Add Glass Trolley
          </button>
        </div>
      </div>
    </div>
  );
}