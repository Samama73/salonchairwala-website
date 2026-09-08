"use client";

import { useRef, useState } from "react";

export default function TestimonialVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div
      className="
        relative
        bg-black
        rounded-2xl md:rounded-[24px]
        overflow-hidden
        max-w-xl
        mx-auto
        shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
      "
    >
      {/* Video - Autoplay, Muted, Loop */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-[400px] md:h-[480px] object-cover"
      >
        <source src="/testimonials/hyderabad-testimonial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Volume Toggle Button */}
      <button
        onClick={toggleMute}
        className="
          absolute bottom-3 right-3 md:bottom-4 md:right-4
          w-10 h-10 md:w-12 md:h-12
          rounded-full
          bg-black/55
          backdrop-blur-sm
          border-2
          border-[#82181A]
          flex items-center justify-center
          hover:scale-110
          hover:bg-black/70
          transition-all duration-300
        "
      >
        {isMuted ? (
          // Muted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L18.73 21 20 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          // Unmuted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </div>
  );
}