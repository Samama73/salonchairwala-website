"use client";

export default function Hero() {
  const images = [
    "/products/slideshow1.png",
    "/products/slideshow2.png",
    "/products/slideshow3.png",
  ];

  const loopImages = [...images, ...images];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">

      {/* Slider */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="flex w-max animate-slide">

          {loopImages.map((img, index) => (
            <div key={index} className="w-screen h-[80vh] flex-shrink-0">
              <img
                src={img}
                alt="hero slide"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-red-400 mb-4">
          Premium Salon Furniture
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Design Your Salon
          <br />
          Like a Luxury Brand
        </h1>

        <p className="text-xl text-gray-200 mb-10">
          High-end salon chairs, backwash units, pedicure stations and modern furniture
          crafted for professionals who value comfort, style, and long-lasting quality.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#products"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg transition"
          >
            Explore Products
          </a>

          <a
            href="https://wa.me/919403891146"
            target="_blank"
            className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            Get Quote
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