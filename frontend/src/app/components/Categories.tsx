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
    <section className="py-16 bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
          
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Explore Our Collections
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-4 w-max animate-scroll">

          {looped.map((category, index) => (
            <div
              key={index}
              className="whitespace-nowrap px-5 py-3 bg-gray-100 rounded-full text-sm md:text-base font-medium shadow-sm hover:bg-red-600 hover:text-white transition"
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