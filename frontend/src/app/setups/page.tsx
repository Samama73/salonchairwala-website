"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { sendGAEvent } from "@/lib/gtag";
import ShareButton from "@/app/components/ShareButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

// 👇 DIRECT CONTROL: Complete Setups list — apna path/data yahan edit karo
// Price ke hisaab se LOW → HIGH order mein rakha gaya hai
const COMPLETE_SETUPS = [
  {
    id: "setup-03",
    name: "The Complete Salon Setup",
    tagline: "A full working salon — hair, facial, and manicure — in one package.",
    image: "/setups/s3.jpeg",
    price: 46000,
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
    <main className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://salonchairwala.com" },
          { name: "Complete Setups", url: "https://salonchairwala.com/setups" },
        ]}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-amber-50/60 via-white to-white pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <p className="text-red-900 font-semibold uppercase tracking-[0.35em] text-xs">
            Walk In, Start Working.
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold mt-4 tracking-tight font-elegant text-gray-950">
            Complete Setups
          </h1>
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Fully assembled salon setups — chairs, stations, and furniture — bundled
            together so you can open your doors without chasing a shopping list.
          </p>
        </div>

        {/* Faint background number as texture */}
        <span className="absolute -top-6 right-4 sm:right-16 text-[9rem] sm:text-[14rem] font-black text-red-900/[0.04] select-none pointer-events-none leading-none font-elegant">
          04
        </span>
      </section>

      {/* SHOWCASE ROWS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-28">
        {COMPLETE_SETUPS.map((setup, idx) => {
          const reversed = idx % 2 === 1;
          const isAdded = addedId === setup.id;

          return (
            <div
              key={setup.id}
              className={`flex flex-col ${
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-16 py-14 sm:py-20 border-b border-gray-100 last:border-b-0`}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2 relative">
                <span className="absolute -top-8 left-0 text-xs font-bold tracking-[0.3em] text-red-900/60 uppercase">
                  Setup No. {String(idx + 1).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => setLightboxImage(setup.image)}
                  className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50/40 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] aspect-[2/1] cursor-zoom-in group block"
                >
                  <Image
                    src={setup.image}
                    alt={setup.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    🔍 View Full Image
                  </span>
                </button>
              </div>

              {/* DETAILS */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold font-elegant text-gray-950 tracking-tight">
                  {setup.name}
                </h2>
                <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
                  {setup.tagline}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {setup.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-900 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-4 flex-wrap">
                  <p className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                    ₹{setup.price.toLocaleString("en-IN")}
                  </p>
                  <ShareButton
                    title={setup.name}
                    text={`Check out ${setup.name} at Salon Chair Wala`}
                  />
                </div>

                <button
                  onClick={() => handleAdd(setup)}
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 active:scale-[0.98] ${
                    isAdded
                      ? "bg-green-600"
                      : "bg-gradient-to-r from-red-900 to-red-800 hover:shadow-red-900/30"
                  }`}
                >
                  {isAdded ? "Added to Cart ✓" : "Add Setup to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-light hover:opacity-70 transition-opacity"
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
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}