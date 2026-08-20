"use client";

import { useState } from "react";
import Image from "next/image";

const FOUNDERS = [
  {
    name: "Arvind Redwal",
    role: "Founder",
    photo: "/team/founder.webp",
    bio: "Started Salon Chair Wala from a single shop in Ulhasnagar and has led product and manufacturing decisions ever since.",
  },
  {
    name: "Dinesh Redwal",
    role: "Co-Founder",
    photo: "/team/cofounder.webp",
    bio: "Built the customer and operations backbone that lets Salon Chair Wala deliver reliably across India.",
  },
];

export default function FoundersSection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {FOUNDERS.map((person) => (
          <div
            key={person.name}
            className="bg-white rounded-3xl p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(person.photo)}
              className="relative block w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full ring-4 ring-white shadow-lg overflow-hidden hover:opacity-90 transition-opacity cursor-zoom-in"
            >
              <Image
                src={person.photo}
                alt={`${person.name} - ${person.role}, Salon Chair Wala`}
                fill
                className="object-cover"
              />
            </button>
            <h3 className="mt-5 font-bold text-gray-950 text-lg font-elegant">
              {person.name}
            </h3>
            <p className="text-red-900 text-xs font-semibold uppercase tracking-wide mt-1">
              {person.role}
            </p>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              {person.bio}
            </p>
          </div>
        ))}
      </div>

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
            className="relative w-full max-w-md h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Team member full view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}