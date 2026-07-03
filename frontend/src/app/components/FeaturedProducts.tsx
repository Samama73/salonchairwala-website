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
    dispatch: true,
  },
  {
    name: "Golden Mayur",
    description:
      "High-grade salon chair featuring reinforced frame and premium finish for luxury setups.",
    image: "/products/mayur.png",
    dispatch: true,
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
    dispatch: true,
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
    dispatch: true,
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
  {
    name: "BLACK TROLLEY",
    description:
      "Durable multi-tier salon trolley designed for effortless mobility and smart storage, ensuring smooth workflow and maximum efficiency in professional salon setups.",
    image: "/products/kostech.png",
    dispatch: true,
  },
  {
    name: "WHITE TROLLEY",
    description:
      "Stylish multi-tier salon trolley offering smooth mobility and optimized storage, built to enhance efficiency and workflow in professional salon spaces.",
    image: "/products/white.png",
    dispatch: true,
  },
  {
    name: "FACIAL STEAMER",
    description:
      "High-performance facial steamer designed for deep pore purification, skin hydration, and rejuvenation, ideal for professional salon and spa treatments.",
    image: "/products/steamr.png",
    dispatch: true,
  },
  {
  name: "HAIR STEAMER",
    description:
      "High-performance hair steamer designed for deep conditioning, enhanced moisture retention, and professional hair treatment results in salon use.",
    image: "/products/hstreamer.png",
    dispatch: true,
  }
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
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
            >

              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-black/10 pointer-events-none" />

              {/* IMAGE */}
              <div className="relative h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden p-4 border-b border-gray-100">
                  {product.dispatch && (
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-3 py-1 text-[10px] font-semibold tracking-wide text-white shadow-lg">
                         <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          READY FOR DISPATCH
                      </div>
                    )}
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
                  <a
                      href={`https://wa.me/919403891146?text=${encodeURIComponent(
                        `Hello Team,

                    I am interested in the following product:

                    Product: ${product.name}

                    Please share:
                    • Price
                    • Available Colours
                    • Delivery Time

                    Thank you.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/40 active:scale-[0.98]"
                    >
                      Get Quote →
                    </a>
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}