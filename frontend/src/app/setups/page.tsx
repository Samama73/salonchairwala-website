"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { sendGAEvent } from "@/lib/gtag";
import ShareButton from "@/app/components/ShareButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

// 👇 DIRECT CONTROL: Complete Setups list
const COMPLETE_SETUPS = [
  {
    id: "setup-03",
    name: "The Complete Salon Setup",
    tagline: "A full working salon — hair, facial, and manicure — in one package.",
    image: "/setups/s3.jpeg",
    price: 46000,
    badge: "Best Value",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Trolleys",
      "1 x Cutting Stool",
      "1 x Hot and Cold Steamer",
    ],
  },
  {
    id: "setup-02",
    name: "The Twin Chair Setup",
    tagline: "Built for salons running two stylists side by side without compromise.",
    image: "/setups/s2.jpeg",
    price: 52000,
    badge: "Popular Choice",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Trolleys",
      "1 x Cutting Stool",
      "1 x Hot and Cold Steamer",
    ],
  },
  {
    id: "setup-04",
    name: "The Premium Salon Setup",
    tagline: "The ultimate luxury experience for discerning salon owners.",
    image: "/setups/s4.jpeg",
    price: 52000,
    badge: "Premium Quality",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Trolleys",
      "1 x Cutting Stool",
      "1 x Hot and Cold Steamer",
    ],
  },
  {
    id: "setup-01",
    name: "The Essential Studio Setup",
    tagline: "Everything a single-chair salon needs, ready to run from day one.",
    image: "/setups/s1.jpeg",
    price: 110000,
    badge: "Full Heavy Duty",
    includes: [
      "2 x Salon Styling Chair",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Manicure Chair",
    ],
  },
  {
    id: "setup-05",
    name: "The Luxury Studio Setup",
    tagline: "Premium finishes and added comfort — for salons that want to stand out.",
    image: "/setups/s5.jpeg",
    price: 110000,
    badge: "Ultimate Luxury",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station with Movable Basin",
      "1 x Facial Bed with Added Storage",
      "1 x Manicure Pedicure Chair with Integrated Jacuzzi",
    ],
  },
];

export default function SetupsPage() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleAdd = (setup: (typeof COMPLETE_SETUPS)[number]) => {
    addToCart({ name: setup.name, price: setup.price });
    sendGAEvent("select_item", {
      item_list_name: "Complete Setups",
      items: [{ item_name: setup.name, price: setup.price }],
    });
    setAddedId(setup.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <main className="bg-slate-50/30 min-h-screen text-gray-900 overflow-x-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://salonchairwala.com" },
          { name: "Complete Setups", url: "https://salonchairwala.com/setups" },
        ]}
      />

      {/* HERO SECTION WITH GLOW & TRUST BADGES */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 overflow-hidden border-b border-gray-200/60 bg-gradient-to-b from-amber-50/80 via-white to-slate-50/50">
        {/* Soft Ambient Glow Backgrounds */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-200/30 via-red-200/20 to-amber-100/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-10 -left-20 w-80 h-80 bg-red-100/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-10 -right-20 w-80 h-80 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/5 border border-red-900/15 text-red-900 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
            <span>✨ Walk In, Start Working</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mt-6 tracking-tight font-elegant text-gray-950 max-w-4xl mx-auto leading-[1.15]">
            Complete Professional <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-red-900 via-red-800 to-amber-900 bg-clip-text text-transparent">
              Salon Setups
            </span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Fully assembled salon setups — chairs, stations, and furniture so you can open your doors without chasing a shopping list.
          </p>

          {/* TRUST HIGHLIGHT BADGES BAR */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-xl mb-1">🚚</span>
              <span className="font-semibold text-xs sm:text-sm text-gray-900">Pan-India Shipping</span>
              <span className="text-[11px] text-gray-500">Safe & Insured Transit</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-xl mb-1">🏭</span>
              <span className="font-semibold text-xs sm:text-sm text-gray-900">Factory Direct</span>
              <span className="text-[11px] text-gray-500">Best Price Guaranteed</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-xl mb-1">✂️</span>
              <span className="font-semibold text-xs sm:text-sm text-gray-900">Ready To Install</span>
              <span className="text-[11px] text-gray-500">Zero Hassle Setup</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-xl mb-1">⭐</span>
              <span className="font-semibold text-xs sm:text-sm text-gray-900">500+ Salons</span>
              <span className="text-[11px] text-gray-500">Trusted Across India</span>
            </div>
          </div>
        </div>

        {/* Faint background texture */}
        <span className="absolute -top-8 right-2 sm:right-12 text-[10rem] sm:text-[16rem] font-black text-red-900/[0.03] select-none pointer-events-none leading-none font-elegant">
          SETUPS
        </span>
      </section>

      {/* SHOWCASE LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12 sm:space-y-16">
        {COMPLETE_SETUPS.map((setup, idx) => {
          const reversed = idx % 2 === 1;
          const isAdded = addedId === setup.id;

          return (
            <div
              key={setup.id}
              className="group relative bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-amber-200/80 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle accent background tint */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-50/50 to-transparent rounded-bl-full pointer-events-none" />

              <div
                className={`flex flex-col ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-12 relative z-10`}
              >
                {/* IMAGE CONTAINER */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-[0.25em] text-red-900 uppercase">
                      Setup No. {String(idx + 1).padStart(2, "0")}
                    </span>
                    {setup.badge && (
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200">
                        {setup.badge}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxImage(setup.image)}
                    className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-white to-amber-50/30 border border-gray-200/80 shadow-sm aspect-[16/10] cursor-zoom-in group/img block"
                  >
                    <Image
                      src={setup.image}
                      alt={setup.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx === 0}
                      className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 backdrop-blur-md text-gray-900 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                        🔍 Tap To View Full Image
                      </span>
                    </div>
                  </button>
                </div>

                {/* DETAILS CONTAINER */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-elegant text-gray-950 tracking-tight">
                      {setup.name}
                    </h2>
                    <p className="text-gray-600 mt-2.5 text-sm sm:text-base leading-relaxed">
                      {setup.tagline}
                    </p>

                    {/* FEATURES INCLUDED IN SETUP */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Package Includes:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {setup.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 bg-slate-50/80 p-2 rounded-lg border border-gray-100"
                          >
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* PRICE & ACTION */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-baseline justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs text-gray-400 font-medium block">Complete Package Price</span>
                        <p className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                          ₹{setup.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <ShareButton
                        title={setup.name}
                        text={`Check out ${setup.name} at Salon Chair Wala`}
                      />
                    </div>

                    <button
                      onClick={() => handleAdd(setup)}
                      className={`w-full inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 active:scale-[0.99] ${
                        isAdded
                          ? "bg-emerald-600 shadow-emerald-600/20"
                          : "bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 hover:shadow-lg hover:shadow-red-900/20"
                      }`}
                    >
                      {isAdded ? "Added to Cart ✓" : "Add Setup to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CUSTOM SETUP CTA SECTION */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-amber-50/40 to-amber-100/30 border-t border-gray-200/80">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-amber-200/80 shadow-xl px-6 sm:px-16 py-14 sm:py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-red-900/5 to-transparent pointer-events-none" />

            <span className="inline-block text-red-900 font-semibold uppercase tracking-[0.3em] text-xs px-3.5 py-1 rounded-full bg-red-900/5 border border-red-900/10">
              🛠 Custom Salon Layouts
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold mt-5 tracking-tight font-elegant text-gray-950">
              We Build <span className="italic text-red-900">Custom Setups</span> Too.
            </h2>

            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Tell us your salon size, budget, and style preferences. We will design a complete setup tailored to your exact floor plan.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/919145097466?text=Hi%2C%20I%20want%20a%20custom%20salon%20setup"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  try {
                    sendGAEvent("select_item", {
                      item_list_name: "Custom Setup CTA",
                      items: [{ item_name: "WhatsApp for Custom Setup" }],
                    });
                  } catch (err) {
                    console.error("GA event failed:", err);
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-emerald-600/20 transition-all duration-300 active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.002 2C6.478 2 2 6.478 2 12c0 1.85.505 3.58 1.383 5.06L2 22l5.042-1.353A9.945 9.945 0 0 0 12.002 22C17.523 22 22 17.522 22 12S17.523 2 12.002 2zm0 18.09c-1.64 0-3.16-.48-4.442-1.31l-.318-.2-3.16.85.846-3.08-.207-.318A8.066 8.066 0 0 1 3.91 12c0-4.463 3.63-8.09 8.092-8.09 4.462 0 8.09 3.627 8.09 8.09 0 4.462-3.628 8.09-8.09 8.09z" />
                </svg>
                WhatsApp for Custom Setup
              </a>
              <a
                href="tel:+919145097466"
                onClick={() => {
                  try {
                    sendGAEvent("select_item", {
                      item_list_name: "Custom Setup CTA",
                      items: [{ item_name: "Call for a Quote" }],
                    });
                  } catch (err) {
                    console.error("GA event failed:", err);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-gray-900 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm transition-all duration-300 active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call for a Quote
              </a>
            </div>

            {/* TRUST CHIPS */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-center gap-x-8 gap-y-3 flex-wrap text-xs sm:text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-900" />
                Free Design Consultation
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-900" />
                Pan-India Delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-900" />
                Response Within 24 Hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-4xl font-light hover:opacity-70 transition-opacity"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Setup full view"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}