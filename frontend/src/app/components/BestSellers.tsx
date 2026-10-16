"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { sendGAEvent } from "@/lib/gtag";   // 👈 NEW
import ShareButton from "@/app/components/ShareButton";


const products = [
  {
    name: "Ultimate Maharaja",
    video: "/products/maharaja.mp4",
    description:
      "Experience unmatched luxury with a chair designed to make a statement. Featuring premium upholstery, superior comfort, and a regal design, the Ultimate Maharaja is perfect for high-end salons seeking elegance and prestige.",
  },
  {
    name: "Golden Nest",
    image: "/products/golden nest new.webp",
    description:
      "A perfect blend of sophistication and durability. Golden Nest offers exceptional comfort, premium finishing, and a modern aesthetic that enhances the overall salon experience.",
  },
  {
    name: "Golden Mayur",
    image: "/products/goldenmayur.webp",
    description:
      "Inspired by timeless luxury, Golden Mayur combines elegant styling with ergonomic comfort. Designed to elevate both client satisfaction and salon interiors.",
  },
  {
    name: "Royal Diamond",
    image: "/products/royaldiamondnew.webp",
    description:
      "Crafted for modern salons, Royal Diamond delivers a sleek appearance, superior comfort, and reliable performance, making it an ideal choice for everyday professional use.",
  },
  {
    name: "Luxury Layer",
    image: "/products/luxurylayer.webp",
    description:
      "Built with precision and premium materials, Luxury Layer offers a refined look, exceptional durability, and a comfortable seating experience for clients and professionals alike.",
  },
  {
    name: "Golden D",
    image: "/products/goldend.webp",
    description:
      "Specially designed for bridal and beauty services, this chair combines luxurious comfort with an elegant presence, creating a truly premium experience for every client.",
  },
];

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#82181A] font-elegant">
            Our Best Sellers
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
          {products.map((product, index) => (
            <div
              key={product.name}
              onClick={() => {
                sendGAEvent("select_item", {
                  item_list_name: "Best Sellers",
                  items: [{ item_name: product.name }],
                });
                setSelectedProduct(product);
              }}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-3 sm:p-4 cursor-pointer flex flex-col ${
                index === 0 || index === 5 ? "col-span-2" : "col-span-1"
              }`}
            >
              <div 
                className={`${
                  index === 0 || index === 5 ? "h-64 sm:h-72" : "h-40 sm:h-48"
                } w-full rounded-xl overflow-hidden flex items-center justify-center bg-gray-50/50`}
              >
                {product.video ? (
                  <video
                    src={product.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain hover:scale-105 transition duration-500"
                  />
                )}
              </div>

              <h3 
                className={`mt-3 text-center font-semibold ${
                  index === 0 || index === 5 ? "text-lg" : "text-sm sm:text-base leading-tight"
                }`}
              >
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop Luxury Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          
          {/* Left Featured Product (Ultimate Maharaja) */}
          <div className="lg:col-span-2">
            <div
              onClick={() => {
                sendGAEvent("select_item", {
                  item_list_name: "Best Sellers",
                  items: [{ item_name: products[0].name }],
                });
                setSelectedProduct(products[0]);
              }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 h-full p-6 cursor-pointer flex flex-col overflow-hidden"
            >
    
              <div className="flex-1 min-h-[400px] w-full rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50/50">
                {products[0].video ? (
                  <video
                    src={products[0].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={products[0].image}
                    alt={products[0].name}
                    loading="lazy"
                    className="h-full w-full object-contain hover:scale-105 transition duration-500"
                  />
                )}
              </div>

              <h3 className="mt-3 text-center text-2xl font-bold pb-2">
                {products[0].name}
              </h3>
            </div>
          </div>

          {/* Right Side Products */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            
            {/* Products 2 to 5 */}
            {products.slice(1, 5).map((product) => (
              <div
                key={product.name}
                onClick={() => {
                sendGAEvent("select_item", {
                  item_list_name: "Best Sellers",
                  items: [{ item_name: product.name }],
                });
                setSelectedProduct(product);
              }}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 p-4 cursor-pointer flex flex-col overflow-hidden"
              >

                <div className="aspect-square w-full rounded-xl overflow-hidden flex items-center justify-center bg-gray-50/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain hover:scale-105 transition duration-500"
                  />
                </div>

            
                <h3 className="mt-3 text-center font-semibold">
                  {product.name}
                </h3>
              </div>
            ))}

            {/* Product 6 */}
            <div
              onClick={() => {
                sendGAEvent("select_item", {
                  item_list_name: "Best Sellers",
                  items: [{ item_name: products[5].name }],
                });
                setSelectedProduct(products[5]);
              }}
              className="col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 p-5 cursor-pointer flex flex-col overflow-hidden"
            >
          
              <div className="h-72 w-full rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50/50">
                {products[5].video ? (
                  <video
                    src={products[5].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={products[5].image}
                    alt={products[5].name}
                    loading="lazy"
                    className="h-full w-full object-contain hover:scale-105 transition duration-500"
                  />
                )}
              </div>

              
              <h3 className="mt-3 text-center text-lg font-semibold">
                {products[5].name}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 relative animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-3xl leading-none text-gray-400 hover:text-black transition-colors"
            >
              &times;
            </button>

            <div className="flex justify-center mb-6 w-full rounded-2xl overflow-hidden bg-gray-50">
              {selectedProduct.video ? (
                <video
                  src={selectedProduct.video}
                  controls
                  autoPlay
                  className="w-full max-h-[350px] object-cover"
                />
              ) : (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full max-h-[350px] object-contain"
                />
              )}
            </div>

            <h3 className="text-2xl font-bold text-center mb-3">
              {selectedProduct.name}
            </h3>

            <p className="text-gray-600 text-center leading-relaxed text-sm">
              {selectedProduct.description}
            </p>

            {/* ShareButton added inside the modal */}
            <div className="mt-5 flex justify-center">
              <ShareButton title={selectedProduct.name} text={`Check out ${selectedProduct.name} at Salon Chair Wala`} />
            </div>
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
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}