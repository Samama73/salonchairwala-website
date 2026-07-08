"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { allProducts } from "@/lib/productData";

// 👇 BOSS APPROVED: Fixed Accessories List (Direct Image Path Control)
// Yahan aap apna image path directly edit kar sakte ho
const ACCESSORIES = [
  {
    name: "Trolley - Black",
    price: 2499,
    image: "/products/kostech.webp", // 👈 apna path yahan daalo
  },
  {
    name: "Trolley - White",
    price: 2499,
    image: "/products/white.webp", // 👈 apna path yahan daalo
  },
  {
    name: "Hair Steamer",
    price: 5999,
    image: "/products/steamr.webp", // 👈 apna path yahan daalo
  },
  {
    name: "Facial Steamer",
    price: 4999,
    image: "/products/hstreamer.webp", // 👈 apna path yahan daalo
  },
];

export default function FeaturedProducts() {
  const { cart, addToCart, removeFromCart } = useCart();

  // Drawer aur Recommendation ke liye states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [recentlyAddedItem, setRecentlyAddedItem] = useState<any>(null);

  // BOSS LOGIC: Fixed accessories jo already cart mein NAHI hain
  const getAccessoriesRecommendations = () => {
    return ACCESSORIES.filter((p) => {
      const isAlreadyInCart = cart.some((c: any) => c.name === p.name);
      return !isAlreadyInCart;
    });
  };

  // Custom function jo product add karega aur drawer kholega
  const handleFeaturedAddToCart = (product: any) => {
    addToCart({ name: product.name, price: product.price });
    setRecentlyAddedItem(product);
    setIsDrawerOpen(true);
  };

  // Live render mein recommendations calculate honge
  const activeRecommendations = getAccessoriesRecommendations();

  return (
    <section
      id="products"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-[0.35em] text-xs">
            Featured Collection
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 tracking-tight">
            Crafted for Professionals
          </h2>

          <p className="text-gray-500 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our premium salon chairs designed for ergonomic comfort, durability, and long-term professional usage.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-9">

          {allProducts.map((product) => {
            const cartItem = cart.find((item: any) => item.name === product.name);

            return (
              <div
                key={product.name}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-red-500/30 transition-all duration-300 ease-out hover:-translate-y-3 flex flex-col h-full"
              >
                {/* Red subtle glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-500/[0.04] via-transparent to-transparent pointer-events-none" />

                {/* IMAGE CONTAINER */}
                <div className="relative h-44 sm:h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden p-3 sm:p-4 border-b border-gray-50">
                  {product.dispatch && (
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-2 py-1 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-semibold tracking-wide text-white shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span className="hidden sm:inline">READY FOR DISPATCH</span>
                      <span className="inline sm:hidden">DISPATCH</span>
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={420}
                    height={420}
                    className="object-scale-down h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-sm sm:text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-200 truncate sm:whitespace-normal">
                    {product.name}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2 sm:line-clamp-none">
                    {product.description}
                  </p>

                  <p className="mt-2 sm:mt-3 text-base sm:text-xl font-extrabold text-gray-900 tracking-tight">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  {cartItem ? (
                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 bg-gray-50 p-1.5 rounded-lg sm:rounded-xl border border-gray-200">
                      <button
                        onClick={() => removeFromCart(product.name)}
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-200 transition active:scale-95 text-gray-700"
                      >
                        −
                      </button>
                      <span className="font-bold text-sm w-5 text-center">{cartItem.quantity}</span>
                      <button
                        onClick={() => handleFeaturedAddToCart(product)}
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-200 transition active:scale-95 text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleFeaturedAddToCart(product)}
                      className="mt-3 sm:mt-6 inline-flex w-full items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-3 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-red-500/30 active:scale-[0.98]"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* RECOMENDATION SLIDE-IN DRAWER */}
      {isDrawerOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsDrawerOpen(false)}
          />
          
          {/* Drawer Wrapper */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white z-[100] shadow-[-10px_0_40px_rgba(0,0,0,0.12)] flex flex-col animate-drawer-slide border-l border-gray-100">
            
            {/* Drawer Header */}
            <div className="p-6 bg-white border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-gray-950 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> 
                Added to Selection
              </h2>
              <button 
                onClick={() => setIsDrawerOpen(false)} 
                className="text-3xl text-gray-400 hover:text-black transition-colors duration-200 font-light leading-none"
              >
                &times;
              </button>
            </div>

            {/* Drawer Body Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-10 bg-gray-50/40">
              
              {/* Added Product Card */}
              {recentlyAddedItem && (
                <div className="flex gap-5 items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                  <div className="h-24 w-24 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden relative p-1.5 border border-gray-100/50">
                    <Image 
                      src={recentlyAddedItem.image} 
                      alt={recentlyAddedItem.name} 
                      width={96} 
                      height={96} 
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded-md uppercase">Successfully Added</span>
                    <h3 className="font-bold text-gray-900 text-base truncate mt-1.5">{recentlyAddedItem.name}</h3>
                    <p className="text-base font-black text-gray-950 mt-1">
                      ₹{recentlyAddedItem.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              )}

              {/* Fixed Accessories Recommendations Section */}
              {activeRecommendations.length > 0 ? (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5 pb-2 border-b border-gray-200/50">
                    Essential Accessories
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    {activeRecommendations.map((rec) => (
                      <div 
                        key={rec.name} 
                        className="group flex gap-4 items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-500/20 transition-all duration-300"
                      >
                        <div className="h-20 w-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-1 relative">
                          <Image 
                            src={rec.image} 
                            alt={rec.name} 
                            width={80} 
                            height={80} 
                            className="object-contain h-full w-full transition-transform duration-300 ease-out group-hover:scale-110"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-gray-900 truncate group-hover:text-red-600 transition-colors duration-200">{rec.name}</h4>
                          <p className="text-sm text-gray-900 font-extrabold mt-1">
                            ₹{rec.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                        
                        <button 
                          className="px-4 py-2 bg-white border border-gray-950 text-gray-950 text-xs font-bold rounded-lg hover:bg-gray-950 hover:text-white transition-all duration-300 shadow-sm"
                          onClick={() => addToCart({ name: rec.name, price: rec.price })}
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-xs text-gray-400 py-4">
                  All standard accessories have been added to your cart.
                </div>
              )}

            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="w-full bg-gray-950 text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-red-600 transition-all duration-300 shadow-md active:scale-[0.99]"
              >
                Continue Shopping
              </button>
            </div>

          </div>
        </>
      )}

      {/* Slide Animation CSS */}
      <style jsx>{`
        @keyframes drawerSlide {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-drawer-slide {
          animation: drawerSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}