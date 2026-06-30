"use client";

import { useState } from "react";

const products = [
  {
    name: "Ultimate Maharaja",
    image: "/products/seller6.png",
    description:
      "Experience unmatched luxury with a chair designed to make a statement. Featuring premium upholstery, superior comfort, and a regal design, the Ultimate Maharaja is perfect for high-end salons seeking elegance and prestige..",
  },
  {
    name: "Golden Nest",
    image: "/products/seller2.png",
    description:
      "A perfect blend of sophistication and durability. Golden Nest offers exceptional comfort, premium finishing, and a modern aesthetic that enhances the overall salon experience.",
  },
  {
    name: "Golden Mayur",
    image: "/products/seller1.png",
    description:
      "Inspired by timeless luxury, Golden Mayur combines elegant styling with ergonomic comfort. Designed to elevate both client satisfaction and salon interiors.",
  },
  {
    name: "Beauty",
    image: "/products/seller4.png",
    description:
      "Crafted for modern salons, Beauty delivers a sleek appearance, superior comfort, and reliable performance, making it an ideal choice for everyday professional use.",
  },
  {
    name: "Diamond Duck",
    image: "/products/seller5.png",
    description:
      "Built with precision and premium materials, Diamond Duck offers a refined look, exceptional durability, and a comfortable seating experience for clients and professionals alike.",
  },
  {
    name: "Bridal Salon Chair",
    image: "/products/seller3.png",
    description:
      "Specially designed for bridal and premium beauty services, this chair combines luxurious comfort with an elegant presence, creating a truly premium experience for every client.",
  },
];

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Our Best Sellers
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="grid gap-6 lg:hidden">
          {products.map((product) => (
            <div
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 cursor-pointer"
            >
              <div className="h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[230px] w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-center font-semibold text-lg">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop Luxury Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">

          {/* Left Featured Product */}
          <div className="lg:col-span-2">
            <div
              onClick={() => setSelectedProduct(products[0])}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 h-full p-6 cursor-pointer"
            >
              <div className="h-[550px] flex items-center justify-center pt-8">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="max-h-[480px] w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-center text-2xl font-bold">
                {products[0].name}
              </h3>
            </div>
          </div>

          {/* Right Side Products */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">

            {products.slice(1, 5).map((product) => (
              <div
                key={product.name}
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 p-4 cursor-pointer"
              >
                <div className="h-52 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[200px] w-auto object-contain hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="mt-3 text-center font-semibold">
                  {product.name}
                </h3>
              </div>
            ))}

            {/* Product 6 */}
            <div
              onClick={() => setSelectedProduct(products[5])}
              className="col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 p-4 cursor-pointer"
            >
              <div className="h-56 flex items-center justify-center">
                <img
                  src={products[5].image}
                  alt={products[5].name}
                  className="max-h-[220px] w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-3 text-center font-semibold text-lg">
                {products[5].name}
              </h3>
            </div>

          </div>

        </div>

      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 relative animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <div className="flex justify-center mb-5">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[280px] object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-center mb-4">
              {selectedProduct.name}
            </h3>

            <p className="text-gray-600 text-center leading-relaxed">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )}
      <style jsx>{`
          @keyframes modalPop {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .animate-modal {
            animation: modalPop 0.3s ease-out;
          }
`}</style>
    </section>
  );
}