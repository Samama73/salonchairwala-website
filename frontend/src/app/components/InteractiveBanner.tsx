"use client";

import Image from "next/image";
import { useState } from "react";

const BANNER_SRC = "/setups/s1.jpeg";
const WHATSAPP = "919145097466";
const ZOOM = 1.1; // product kitna bada ho (1.1 = 10% zyada)

type Hotspot = {
  id: string;
  name: string;
  // Hover/tap wala invisible box (image ke % mein)
  x: number;
  y: number;
  w: number;
  h: number;
  // Product ka cutout (public/banner/ mein) aur uski position (image ke % mein)
  cutout: string;
  cx: number;
  cy: number;
  cw: number;
  ch: number;
  features: string[];
};

// ✏️ Features ka text yahan edit karo. Position ke numbers mat chhedna (cutouts ke hisaab se set hain).
const HOTSPOTS: Hotspot[] = [
  {
    id: "shampoo",
    name: "Shampoo Station",
    x: 1.5, y: 38, w: 27, h: 58,
    cutout: "/banner/shampoo.webp",
    cx: 1.55, cy: 39.04, cw: 26.49, ch: 57.1,
    features: [
      "Premium backwash unit",
      "Reclining comfort",
      "Ceramic shampoo basin",
      "Leatherette, high-density foam",
    ],
  },
  {
    id: "styling-1",
    name: "Styling Chair",
    x: 24.5, y: 33, w: 13, h: 44,
    cutout: "/banner/styling-1.webp",
    cx: 24.34, cy: 32.87, cw: 13.19, ch: 43.83,
    features: [
      "Hydraulic height adjustment",
      "Leatherette upholstery",
      "High-density foam seating",
      "150 kg capacity",
    ],
  },
  {
    id: "styling-2",
    name: "Styling Chair",
    x: 36.5, y: 35, w: 11, h: 34,
    cutout: "/banner/styling-2.webp",
    cx: 36.44, cy: 35.65, cw: 11.08, ch: 32.79,
    features: [
      "Hydraulic height adjustment",
      "Leatherette upholstery",
      "High-density foam seating",
      "150 kg capacity",
    ],
  },
  {
    id: "facial-bed",
    name: "Facial Bed",
    x: 48.8, y: 38, w: 25, h: 38,
    cutout: "/banner/facial-bed.webp",
    cx: 48.71, cy: 38.58, cw: 24.97, ch: 37.58,
    features: [
      "Ergonomic, adjustable positioning",
      "Built for facials and spa treatments",
      "Storage drawers and cabinet",
      "Pure wood construction with leatherette finish",
    ],
  },
  {
    id: "pedicure",
    name: "Pedicure Chair",
    x: 67, y: 38, w: 31, h: 57,
    cutout: "/banner/pedicure.webp",
    cx: 67.03, cy: 38.27, cw: 32.97, ch: 54.63,
    features: [
      "Cushioned leatherette comfort",
      "Made for nail and pedicure services",
      "Pedicure basin with matching stool",
    ],
  },
];

export default function InteractiveBanner() {
  const [active, setActive] = useState<string | null>(null);

  // Phone/tablet (touch) par tap se on/off, laptop par sirf hover
  const handleClick = (id: string) => {
    if (window.matchMedia("(hover: none)").matches) {
      setActive((prev) => (prev === id ? null : id));
    }
  };

  const current = HOTSPOTS.find((h) => h.id === active) ?? null;

  const whatsappLink = (name: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want to know more about the ${name}`)}`;

  return (
    <section className="w-full">
      <div
        className="relative w-full overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
        onMouseLeave={() => setActive(null)}
      >
        {/* 1. Base photo */}
        <Image
          src={BANNER_SRC}
          alt="Premium Salon Furniture Collection"
          width={3024}
          height={1296}
          sizes="100vw"
          priority
          className="w-full h-auto pointer-events-none select-none"
        />

        {/* 2. White blur layer */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-white/55 backdrop-blur-[4px] transition-opacity duration-500"
          style={{ opacity: active ? 1 : 0 }}
        />

        {/* 3. Product cutouts (sirf active wala zoom hota hai) */}
        {HOTSPOTS.map((h) => {
          const isOn = active === h.id;
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={h.id}
              src={h.cutout}
              alt=""
              aria-hidden
              draggable={false}
              className="pointer-events-none absolute z-20 select-none transition-all duration-500 ease-out"
              style={{
                left: `${h.cx}%`,
                top: `${h.cy}%`,
                width: `${h.cw}%`,
                height: `${h.ch}%`,
                opacity: isOn ? 1 : 0,
                transformOrigin: "50% 65%",
                transform: isOn ? `scale(${ZOOM})` : "scale(1)",
                filter: isOn ? "drop-shadow(0 18px 28px rgba(0,0,0,0.35))" : "none",
              }}
            />
          );
        })}

        {/* 4. Invisible hover/tap areas */}
        {HOTSPOTS.map((h) => (
          <button
            key={h.id}
            type="button"
            aria-label={h.name}
            className="absolute z-30 cursor-pointer bg-transparent outline-none"
            style={{
              left: `${h.x}%`,
              top: `${h.y}%`,
              width: `${h.w}%`,
              height: `${h.h}%`,
            }}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) setActive(h.id);
            }}
            onFocus={() => setActive(h.id)}
            onClick={() => handleClick(h.id)}
          />
        ))}

        {/* 5. Features card (laptop/tablet: product ke side mein) */}
        {HOTSPOTS.map((h) => {
          const isOn = active === h.id;
          const onLeftHalf = h.x + h.w / 2 < 50;
          const pos = onLeftHalf
            ? { left: `${h.x + h.w + 1}%` }
            : { right: `${100 - h.x + 1}%` };
          return (
            <div
              key={h.id}
              className="pointer-events-none absolute z-40 hidden w-56 rounded-2xl border border-gray-100 bg-white/95 p-4 shadow-2xl backdrop-blur-sm transition-all duration-500 md:block"
              style={{
                ...pos,
                top: `${h.y}%`,
                opacity: isOn ? 1 : 0,
                transform: isOn ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <p className="text-sm font-bold text-gray-900">{h.name}</p>
              <ul className="mt-2 space-y-1.5">
                {h.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs leading-snug text-gray-600">
                    <span className="mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-bold text-emerald-700">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Phone par card image ke neeche */}
      <div className="px-4 py-3 md:hidden">
        {current ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-md">
            <p className="text-sm font-bold text-gray-900">{current.name}</p>
            <ul className="mt-2 space-y-1.5">
              {current.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-bold text-emerald-700">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(current.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white"
            >
              WhatsApp us for more details
            </a>
          </div>
        ) : (
          <p className="text-center text-xs text-gray-400">
            
          </p>
        )}
      </div>
    </section>
  );
}