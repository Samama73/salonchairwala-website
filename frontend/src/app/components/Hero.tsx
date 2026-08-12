"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/products/1.webp",
    "/products/2.webp",
    "/products/3.webp",
    "/products/4.webp",
    "/products/5.webp",
    "/products/6.webp",
    "/products/7.webp",
    "/products/8.webp",
  ];

  const n = images.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % n);
    }, 3000);
    return () => clearInterval(interval);
  }, [n]);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-100">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-[1.7] blur-[200px] saturate-[1.8] brightness-125 contrast-110 transition-all duration-1000 ease-out"
            style={{
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-white/30"></div>

        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 25%, transparent 65%)",
            mixBlendMode: "screen",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.35) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.25), rgba(255,255,255,0.6))",
          }}
        />
      </div>

      <div className="absolute top-4 md:top-6 z-20 w-full px-6 text-center pointer-events-none">
        <p className="uppercase tracking-[0.3em] text-red-800 mb-2 md:mb-4 text-xs md:text-sm font-semibold">
          New Arrivals
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 mt-[-5vh] px-4">
        <div className="relative w-[280px] h-[380px] sm:w-[400px] sm:h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-[0_30px_50px_rgba(0,0,0,0.25)] border border-black/10 transition-opacity duration-1000 ease-in-out pointer-events-none select-none"
              style={{
                opacity: index === activeIndex ? 1 : 0,
              }}
              draggable={false}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/5 pointer-events-none rounded-2xl"></div>
        </div>
      </div>

      <div className="absolute bottom-14 md:bottom-16 left-0 right-0 z-20 flex items-center justify-between px-3 md:px-12 w-full">
        <a
          href="#products"
          className="bg-gradient-to-r from-red-800 to-red-700 hover:from-red-900 hover:to-red-800 text-white px-4 py-2.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium shadow-[0_0_20px_rgba(127,29,29,0.3)] text-[13px] md:text-base whitespace-nowrap flex items-center justify-center gap-1.5"
        >
          <span>→</span> Explore Collection
        </a>

        <a
          href="https://wa.me/919403891146"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black/20 bg-black/5 backdrop-blur-xl text-black px-4 py-2.5 md:px-8 md:py-4 rounded-xl font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-[13px] md:text-base whitespace-nowrap flex items-center justify-center gap-1.5"
        >
          <span>💬</span> WhatsApp Us
        </a>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-red-800 scale-[1.8] shadow-[0_0_10px_rgba(127,29,29,0.6)]"
                : "bg-black/20 hover:bg-black/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}