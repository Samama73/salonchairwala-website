"use client";

export default function Hero() {
  const images = [
    "/products/slideshow1.png",
    "/products/slideshow2.png",
    "/products/slideshow3.png",
  ];

  const loopImages = [...images, ...images];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">

      {/* Slider */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex w-max animate-slide">
          {loopImages.map((img, index) => (
            <div key={index} className="w-screen h-[90vh] flex-shrink-0">
              <img
                src={img}
                alt="hero slide"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-red-400 mb-4 text-sm md:text-base">
          India's Trusted Salon Furniture Brand
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Premium Salon Furniture
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Build for Comfort. Designed for Style.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#products"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg transition font-medium"
          >
            Explore Collection
          </a>

          <a
            href="https://wa.me/919403891146"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition font-medium"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 12s linear infinite;
        }
      `}</style>

    </section>
  );
}