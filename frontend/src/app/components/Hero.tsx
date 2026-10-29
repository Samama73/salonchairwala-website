"use client";

import { useEffect, useRef, useState } from "react";
import { useWhatsappPopup } from "@/context/WhatsappPopupContext";

const FADE_MS = 2000; // transition ka time (1400 karoge to aur slow aur dreamy lagega)
export default function Hero() {
  const videos = ["/videos/2.mp4", "/videos/1.mp4", "/videos/3.mp4"];

  const n = videos.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const advancedRef = useRef(-1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const bgRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { openPopup } = useWhatsappPopup();
  const goTo = (next: number) => {
    if (next === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(next);
  };

  const goNext = () => {
    if (advancedRef.current === activeIndex) return; // ek video ke liye sirf ek baar
    advancedRef.current = activeIndex;
    goTo((activeIndex + 1) % n);
  };

  useEffect(() => {
    advancedRef.current = -1;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const next = (activeIndex + 1) % n;

    [videoRefs.current, bgRefs.current].forEach((list) => {
      list.forEach((v, i) => {
        if (!v) return;
        if (i === activeIndex) {
          if (v.currentTime > 0.05) v.currentTime = 0;
          v.play().catch(() => {});
        } else if (i === next) {
          v.preload = "auto"; // agli video pehle se buffer ho jaye
        } else if (i !== prevIndex) {
          v.pause();
        }
      });
    });

    // purani video ko fade khatam hone ke baad hi pause karo
    if (prevIndex !== null) {
      timers.push(
        setTimeout(() => {
          [videoRefs.current[prevIndex], bgRefs.current[prevIndex]].forEach((v) => v?.pause());
        }, FADE_MS + 100)
      );
    }
    return () => timers.forEach(clearTimeout);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-neutral-900 px-0 py-0 md:px-8 md:py-8">
      {/* Blurred background: usi video ka zoomed + blur version */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {videos.map((src, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex;
          return (
            <video
              key={index}
              ref={(el) => {
                bgRefs.current[index] = el;
              }}
              src={src}
              muted
              playsInline
              autoPlay={index === 0}
              preload={index === 0 ? "auto" : "metadata"}
              className="absolute inset-0 w-full h-full object-cover scale-125 blur-3xl saturate-150"
              style={{
                opacity: isActive || isPrev ? 1 : 0,
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
              }}
            />
          );
        })}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Frame: 9:16 (video ka exact ratio) => koi crop nahi */}
      <div className="relative z-10 mx-auto w-full max-w-none md:max-w-[420px] aspect-[9/16] max-h-[88vh] overflow-hidden rounded-none md:rounded-3xl bg-black shadow-none md:shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
        {videos.map((src, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex;
          return (
            <video
              key={index}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={src}
              muted
              playsInline
              autoPlay={index === 0}
              preload={index === 0 ? "auto" : "metadata"}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                if (isActive && v.duration && v.duration - v.currentTime <= FADE_MS / 1000) goNext();
              }}
              onEnded={() => {
                if (isActive) goNext();
              }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                opacity: isActive || isPrev ? 1 : 0,
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
              }}
            />
          );
        })}

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

        <div className="absolute top-4 z-20 w-full px-6 text-center pointer-events-none">
          <p className="uppercase tracking-[0.3em] text-white text-xs font-semibold drop-shadow">
            Salon Furniture That Defines Your Space
          </p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 z-20 flex items-center justify-between px-3 w-full">
          <a
            href="#products"
            className="bg-gradient-to-r from-red-800 to-red-700 hover:from-red-900 hover:to-red-800 text-white px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium shadow-[0_0_20px_rgba(127,29,29,0.3)] text-[13px] whitespace-nowrap flex items-center justify-center gap-1.5"
          >
            <span>→</span> Explore Collection
          </a>

          <button
            type="button"
            onClick={openPopup}
            className="border border-white/40 bg-white/10 backdrop-blur-xl text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-[13px] whitespace-nowrap flex items-center justify-center gap-1.5"
          >
            <span>💬</span> WhatsApp Us
          </button>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {videos.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to video ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-white scale-[1.8] shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}