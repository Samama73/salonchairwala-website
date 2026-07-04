"use client";

import { useRef, useState } from "react";

const videos = [
  "/videos/client1.mp4",
  "/videos/client2.mp4",
  "/videos/client3.mp4",
];

export default function HappyClients() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">

          <p className="text-red-600 font-semibold uppercase tracking-[0.3em] text-xs md:text-sm">
            Client Stories
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-3">
            Happy Clients
          </h2>

          <p className="text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Real experiences shared by salon professionals who trust our craftsmanship.
          </p>

        </div>

        {/* Videos - FIXED FOR MOBILE (Horizontal Swipe/Carousel) */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 hide-scrollbar">
          
          {videos.map((video, index) => (
            // Mobile par width 85% taaki next video ka thoda sa hissa dikhe (swipe hint)
            <div key={index} className="w-[85%] md:w-auto flex-shrink-0 snap-center md:snap-align-none">
              <VideoCard video={video} />
            </div>
          ))}

        </div>

      </div>

      <style jsx>{`
        /* Hide scrollbar for a clean swipe experience on mobile */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function VideoCard({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (videoRef.current) {
      setIsPlaying(true);

      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Playback failed:", error);
      }
    }
  };

  return (
    <div
      className="
        relative
        bg-black
        rounded-2xl md:rounded-[24px]
        overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
      "
    >

      {/* Video */}
      <video
        ref={videoRef}
        controls={isPlaying}
        playsInline
        preload="metadata"
        className="w-full h-[320px] md:h-[420px] object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/55
            backdrop-blur-sm
            hover:bg-black/45
            transition
          "
        >

          <div
            className="
              w-[50px] h-[50px] md:w-[70px] md:h-[70px]
              rounded-full
              bg-white/10
              border border-white/30
              flex items-center justify-center
              hover:scale-110
              transition duration-300
            "
          >
            <span className="text-white text-xl md:text-3xl ml-1">
              ▶
            </span>
          </div>

        </button>
      )}

    </div>
  );
}