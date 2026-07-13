"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

type Props = {
  name: string;
  images: string[];
  price: number;
  originalPrice?: number;
  description: string;
  dispatch?: boolean;
  includedItems?: { name: string; price: number }[];
  thumbnails?: React.ReactNode;   // e.g. small image switcher, rendered under main image
  colorSwitcher?: React.ReactNode; // e.g. color dots, rendered in content area
};

export default function ProductCard({
  name,
  images,
  price,
  originalPrice,
  description,
  dispatch,
  includedItems,
  thumbnails,
  colorSwitcher,
}: Props) {
  const { addToCart, removeFromCart, cart } = useCart();
  const cartItem = cart.find((item: any) => item.name === name);
  const isMulti = images.length > 1;

  return (
    <div className="group bg-white border border-gray-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* IMAGE AREA */}
      <div className="w-full bg-[#f4f5f7] flex flex-col items-center relative">
        <div
          className={`w-full p-4 ${
            isMulti ? "grid grid-cols-2 gap-3 h-72 md:h-96" : "h-80 md:h-[28rem] flex items-center justify-center overflow-hidden"
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative flex items-center justify-center bg-white rounded-2xl ${
                isMulti ? "h-full w-full p-3" : "w-full h-full"
              }`}
            >
              <Image
                src={img}
                alt={name}
                width={600}
                height={600}
                className={`object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-700 ease-out ${
                  isMulti ? "w-full h-full" : "w-full h-full scale-110"
                }`}
              />
            </div>
          ))}

          {dispatch && (
            <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-black/85 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white z-10">
              Dispatch Ready
            </span>
          )}
        </div>

        {/* Thumbnail switcher (for featured color setups) */}
        {thumbnails && <div className="pb-5 px-6 w-full flex justify-center">{thumbnails}</div>}
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 flex flex-col gap-4 bg-white">
        <div className="flex justify-between items-start gap-4">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">{name}</h2>
          <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 whitespace-nowrap uppercase tracking-wide">
            In Stock
          </span>
        </div>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{description}</p>

        {/* Color switcher (for featured color setups) */}
        {colorSwitcher && <div className="flex items-center gap-3 -mt-1">{colorSwitcher}</div>}

        {includedItems && (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Included in this Setup
            </h3>
            <div className="space-y-3">
              {includedItems.map((it) => (
                <div key={it.name} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{it.name}</span>
                  <span className="font-bold text-gray-900">₹{it.price.toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">✓ All products are available for individual purchase also.</p>
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <p className="text-sm text-gray-400 font-medium mb-1">Price</p>
            <div className="flex items-baseline gap-2">
              {originalPrice && (
                <p className="text-lg md:text-xl font-medium text-gray-400 line-through">
                  ₹{originalPrice.toLocaleString("en-IN")}
                </p>
              )}
              <p className="text-3xl font-extrabold text-gray-900 tracking-tight">
                ₹{price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {cartItem ? (
            <div className="flex items-center gap-4 bg-gray-50 p-1.5 rounded-xl border border-gray-200/60 shadow-inner">
              <button
                onClick={() => removeFromCart(name)}
                className="w-11 h-11 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-900 hover:bg-gray-100 transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              <span className="font-extrabold w-4 text-center text-lg">{cartItem.quantity}</span>
              <button
                onClick={() => addToCart({ name, price })}
                className="w-11 h-11 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-900 hover:bg-gray-100 transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart({ name, price })}
              className="bg-black text-white px-8 py-3.5 rounded-xl font-bold text-sm md:text-base hover:bg-gray-800 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}