"use client";

const categories = [
  "Professional Salon Chairs",
  "Luxury Shampoo Chairs",
  "Manicure & Pedicure Essentials",
  "Facial Beds & Spa Beds",
  "Professional Body Therapy Systems",
  "Salon Furnishings & Essentials",
];

export default function Categories() {
  // duplicate for seamless loop
  const looped = [...categories, ...categories];

  return (
    <section className="py-16 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <div className="flex justify-center gap-1.5 mb-3">
          <span className="w-8 h-1 rounded-full bg-[#FF9933]" />
          <span className="w-8 h-1 rounded-full bg-gray-300" />
          <span className="w-8 h-1 rounded-full bg-[#138808]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-900 mt-2 font-elegant">
          Explore Our Collections
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-4 w-max animate-scroll">

          {looped.map((category, index) => (
            <div
              key={index}
              className="whitespace-nowrap px-5 py-3 bg-gray-100 rounded-full text-sm md:text-base font-medium shadow-sm hover:bg-gradient-to-r hover:from-[#FF9933] hover:to-[#138808] hover:text-white transition"
            >
              {category}
            </div>
          ))}

        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 16s linear infinite;
        }
      `}</style>

    </section>
  );
}
