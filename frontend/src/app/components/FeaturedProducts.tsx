"use client";

import Image from "next/image";

const products = [
  {
    name: "Bubbly Salon Chair",
    description:
      "Hydraulic salon chair engineered for daily professional use with ergonomic seating support.",
    image: "/products/bubbly.png",
  },
  {
    name: "Royal Diamond",
    description:
      "Precision-built styling chair with balanced comfort and long-term structural durability.",
    image: "/products/royaldiamond.png",
  },
  {
    name: "Golden Mayur",
    description:
      "High-grade salon chair featuring reinforced frame and premium finish for luxury setups.",
    image: "/products/mayur.png",
  },
  {
    name: "SLIXA BUBBLY",
    description:
      "Comfort-focused salon chair designed for extended usage with stable hydraulic mechanism.",
    image: "/products/slixabubbly.png",
  },
  {
    name: "LUXURY LAYER",
    description:
      "Multi-layer cushioned seating system designed for enhanced client comfort and support.",
    image: "/products/luxurylayer.png",
  },
  {
    name: "FULL DUCK",
    description:
      "Robust salon chair built with industrial-grade materials for consistent professional performance.",
    image: "/products/fullduck.png",
  },
  {
    name: "BEAST ROBUST",
    description:
      "Heavy-duty salon chair engineered for high-usage environments with maximum stability.",
    image: "/products/beast.png",
  },
  {
    name: "LUXA",
    description:
      "Minimalist salon chair with refined finishing and modern ergonomic design structure.",
    image: "/products/luxa.png",
  },
  {
    name: "EDEN",
    description:
      "Ultra-premium salon chair with advanced hydraulic system and luxury-grade cushioning.",
    image: "/products/eden.png",
  },
  {
    name: "SOFA",
    description:
      "Designed for modern salons with sleek design and enhanced client comfort support.",
    image: "/products/sofa.png",
  },
  {
    name: "DIVA D",
    description:
      "Compact yet powerful salon chair ideal for urban salon setups with space optimization.",
    image: "/products/divad.png",
  },
  {
    name: "GOLDEN D",
    description:
      "Top-tier salon chair offering maximum durability, comfort, and premium professional finish.",
    image: "/products/goldend.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-[0.35em] text-xs">
            Featured Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Crafted for Professionals
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
            Explore our premium salon chairs designed for ergonomic comfort, durability, and long-term professional usage.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9">

          {products.map((product) => (
            <div
              key={product.name}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
            >

              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-black/10 pointer-events-none" />

              {/* IMAGE */}
              <div className="relative h-80 flex items-center justify-center bg-gray-50 overflow-hidden p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={420}
                  height={420}
                  className="object-contain max-h-full w-auto mx-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-red-600 transition">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {product.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}