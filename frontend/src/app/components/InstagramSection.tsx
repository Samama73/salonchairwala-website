"use client";

import { useRef, useState } from "react";

const reels = [
  {
    video: "/instagram/insta1.mp4",
    link: "https://www.instagram.com/reel/DQZHrOCE-aV/?igsh=MW1zanQwc21ucWZobA==",
  },
  {
    video: "/instagram/insta2.mp4",
    link: "https://www.instagram.com/reel/DMxbCsbTNOu/?igsh=ODZnc29iZ2V3c2Vi",
  },
  {
    video: "/instagram/insta3.mp4",
    link: "https://www.instagram.com/reel/DUCqlALjIUU/?igsh=aGY0bjN5cjk2bnlo",
  },
];

export default function InstagramSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">

          <p className="text-red-600 font-semibold uppercase tracking-[0.3em] text-xs md:text-sm">
            Follow Our Journey
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-3">
            On Instagram
          </h2>

          <p className="text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Discover our latest salon furniture creations through cinematic showcases.
          </p>

        </div>

        {/* Reels - HORIZONTAL SWIPE FOR MOBILE, GRID FOR LAPTOP */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 hide-scrollbar">

          {reels.map((reel, index) => (
            <div 
              key={index} 
              className="w-[85%] md:w-auto flex-shrink-0 snap-center md:snap-align-none"
            >
              <InstagramCard
                video={reel.video}
                link={reel.link}
              />
            </div>
          ))}

        </div>

        {/* Follow Button */}
        <div className="text-center mt-10 md:mt-14">

          <a
            href="https://www.instagram.com/salonchairwala?igsh=MWhkem5ja254NmRyMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2 md:gap-3
              bg-gradient-to-r
              from-pink-500
              via-red-500
              to-yellow-500
              text-white
              px-6 py-3 md:px-8 md:py-4
              rounded-full
              font-medium
              text-sm md:text-base
              hover:scale-105
              transition
            "
          >
            Follow @salonchairwala →
          </a>

        </div>

      </div>

      {/* Safe Style Tag for Next.js */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}

function InstagramCard({
  video,
  link,
}: {
  video: string;
  link: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (videoRef.current) {
      setIsPlaying(true);

      try {
        videoRef.current.muted = false;
        await videoRef.current.play();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className="
        relative
        rounded-2xl md:rounded-[24px]
        overflow-hidden
        bg-white
        shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        hover:-translate-y-1 md:hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
      "
    >

      {/* Video */}
      <video
        ref={videoRef}
        playsInline
        controls={isPlaying}
        className="w-full h-[320px] md:h-[350px] object-cover"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Play Overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="
            absolute inset-0
            flex flex-col
            items-center
            justify-center
            bg-black/30
            backdrop-blur-sm
            hover:bg-black/20
            transition
            w-full
            h-full
          "
        >

          <div
            className="
              w-12 h-12 md:w-16 md:h-16
              rounded-full
              bg-white/20
              border border-white/30
              flex items-center justify-center
              hover:scale-110
              transition
            "
          >
            <span className="text-white text-2xl md:text-3xl ml-1">
              ▶
            </span>
          </div>

          <p className="mt-3 md:mt-4 text-white uppercase tracking-[0.2em] text-xs md:text-sm">
            Watch Reel
          </p>

        </button>
      )}

      {/* Instagram Redirect */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute
          top-3 md:top-4
          right-3 md:right-4
          bg-white/90
          text-black
          shadow-md
          px-2.5 py-1.5 md:px-3 md:py-2
          rounded-full
          text-[11px] md:text-sm
          hover:bg-white
          transition
        "
      >
        📷 Instagram
      </a>

    </div>
  );
}