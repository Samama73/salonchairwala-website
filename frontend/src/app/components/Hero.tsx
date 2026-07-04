"use client";

import { useEffect, useRef, useState } from "react";

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
  const [angle, setAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [cardWidth, setCardWidth] = useState(300); 
  const [cardHeight, setCardHeight] = useState(400);
  const [radius, setRadius] = useState(0);

  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const startAngle = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      const w = isMobile ? 280 : 400;
      const h = isMobile ? 380 : 500;
      setCardWidth(w);
      setCardHeight(h);
      
      const r = (w / 2) / Math.tan(Math.PI / n) + (isMobile ? 30 : 80);
      setRadius(r);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [n]);

  // Live background update logic
  const updateActiveIndex = (currentAngle: number) => {
    const snapAngle = 360 / n;
    const idx = ((Math.round(-currentAngle / snapAngle) % n) + n) % n;
    setActiveIndex(idx);
  };

  const onDown = (clientX: number) => {
    dragging.current = true;
    dragStartX.current = clientX;
    startAngle.current = angle;
  };

  const onMove = (clientX: number) => {
    if (!dragging.current) return;
    const delta = clientX - dragStartX.current;
    const newAngle = startAngle.current + delta * 0.4;
    setAngle(newAngle);
    updateActiveIndex(newAngle);
  };

  const onUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setAngle((a) => {
      const snapAngle = 360 / n; 
      const snapped = Math.round(a / snapAngle) * snapAngle;
      updateActiveIndex(snapped);
      return snapped;
    });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Premium Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-[1.7] blur-[200px] saturate-[2.4] brightness-130 contrast-125 transition-all duration-1000 ease-out"
            style={{
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/45"></div>

        {/* Product Aura */}
        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 25%, transparent 65%)",
            mixBlendMode: "screen",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55), rgba(0,0,0,0.9))",
          }}
        />
      </div>

    {/* Top Text Content */}
      {/* top-4 md:top-6 se ye thoda aur upar shift ho jayega aur z-20 se animation ke upar rahega */}
      <div className="absolute top-4 md:top-6 z-20 w-full px-6 text-center pointer-events-none">
        <p className="uppercase tracking-[0.3em] text-red-400 mb-2 md:mb-4 text-xs md:text-sm font-semibold">
          New Arrivals
        </p>
      </div>

      {/* 2. 3D Circular Ring Stage */}
      <div
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing z-10 mt-[-5vh]"
        style={{ perspective: "2000px", touchAction: "pan-y" }}
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onUp}
      >
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${angle}deg)`,
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            willChange: "transform",
            transition: dragging.current ? "none" : "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute left-0 top-0 overflow-hidden rounded-2xl shadow-[0_40px_50px_rgba(0,0,0,0.75)] transition-all duration-500 border ${
                  isActive ? "border-white/20 z-10" : "border-white/5 z-0"
                }`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `rotateY(${(360 / n) * index}deg) translateZ(${radius}px) scale(${isActive ? 1.05 : 0.85})`,
                  backfaceVisibility: "hidden",
                  opacity: isActive ? 1 : 0.3,
                  filter: isActive 
                    ? "brightness(1.1) saturate(1.2)" 
                    : "brightness(0.4) blur(2px)",
                }}
              >
                <img 
                  src={img} 
                  alt={`Product ${index + 1}`} 
                  className="w-full h-full object-cover pointer-events-none select-none" 
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-white/5 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons at Bottom - MOBILE OPTIMIZED (Side by side) */}
      {/* Action Buttons at Bottom */}
      <div className="absolute bottom-14 md:bottom-16 left-0 right-0 z-20 flex items-center justify-between px-3 md:px-12 w-full">
        
        {/* Explore Collection Button */}
        <a
          href="#products"
          className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 py-2.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium shadow-[0_0_20px_rgba(220,38,38,0.4)] text-[13px] md:text-base whitespace-nowrap flex items-center justify-center gap-1.5"
        >
          <span>→</span> Explore Collection
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919403891146"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/50 bg-white/10 backdrop-blur-xl text-white px-4 py-2.5 md:px-8 md:py-4 rounded-xl font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,255,255,0.15)] text-[13px] md:text-base whitespace-nowrap flex items-center justify-center gap-1.5"
        >
          <span>💬</span> WhatsApp Us
        </a>
        
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { 
              const newAngle = -(360 / n) * i;
              setAngle(newAngle);
              setActiveIndex(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'bg-red-500 scale-[1.8] shadow-[0_0_10px_rgba(239,68,68,0.8)]' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}