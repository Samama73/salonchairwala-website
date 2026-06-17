"use client";

import { useRef, useState } from "react";

const videos = [
  "/videos/client1.mp4",
  "/videos/client2.mp4",
  "/videos/client3.mp4",
];

export default function HappyClients() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-red-600 font-semibold uppercase tracking-[0.3em] text-sm">
            Client Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Happy Clients
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Real experiences shared by salon professionals who trust our craftsmanship.
          </p>

        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}

        </div>

      </div>
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
        rounded-[24px]
        overflow-hidden
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
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
        className="w-full h-[420px] object-cover"
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
              w-[70px] h-[70px]
              rounded-full
              bg-white/10
              border border-white/30
              flex items-center justify-center
              hover:scale-110
              transition duration-300
            "
          >
            <span className="text-white text-3xl ml-1">
              ▶
            </span>
          </div>

        </button>
      )}

    </div>
  );
}