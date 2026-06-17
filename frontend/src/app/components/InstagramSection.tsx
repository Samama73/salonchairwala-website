"use client";

import { useRef, useState } from "react";

const reels = [
  {
    video: "/instagram/insta1.mp4",
    link:
      "https://www.instagram.com/reel/DQZHrOCE-aV/?igsh=MW1zanQwc21ucWZobA==",
  },
  {
    video: "/instagram/insta2.mp4",
    link:
      "https://www.instagram.com/reel/DMxbCsbTNOu/?igsh=ODZnc29iZ2V3c2Vi",
  },
  {
    video: "/instagram/insta3.mp4",
    link:
      "https://www.instagram.com/reel/DUCqlALjIUU/?igsh=aGY0bjN5cjk2bnlo",
  },
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-red-600 font-semibold uppercase tracking-[0.3em] text-sm">
            Follow Our Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            On Instagram
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our latest salon furniture creations through cinematic showcases.
          </p>

        </div>

        {/* Reels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {reels.map((reel, index) => (
            <InstagramCard
              key={index}
              video={reel.video}
              link={reel.link}
            />
          ))}

        </div>

        {/* Follow Button */}
        <div className="text-center mt-14">

          <a
            href="https://www.instagram.com/salonchairwala?igsh=MWhkem5ja254NmRyMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              bg-gradient-to-r
              from-pink-500
              via-red-500
              to-yellow-500
              text-white
              px-8
              py-4
              rounded-full
              font-medium
              hover:scale-105
              transition
            "
          >
            Follow @salonchairwala →
          </a>

        </div>

      </div>
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
        rounded-[24px]
        overflow-hidden
        bg-white
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        hover:-translate-y-2
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
        className="w-full h-[350px] object-cover"
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
          "
        >

          <div
            className="
              w-16 h-16
              rounded-full
              bg-white/20
              border border-white/30
              flex items-center justify-center
              hover:scale-110
              transition
            "
          >
            <span className="text-white text-3xl ml-1">
              ▶
            </span>
          </div>

          <p className="mt-4 text-white uppercase tracking-[0.2em] text-sm">
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
          top-4
          right-4
          bg-white/90
          text-black
          shadow-md
          px-3
          py-2
          rounded-full
          text-sm
          hover:bg-white
          transition
        "
      >
        📷 Instagram
      </a>

    </div>
  );
}