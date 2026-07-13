"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle ke liye state

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/products/logo.webp"
            alt="Salon Chair Wala Logo"
            className="h-16 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold text-black tracking-tight">
              Salon Chair{" "}
              <span className="text-black">Wala</span>
            </h1>
            <p className="text-xs text-gray-500 tracking-wide">
              Redwal Furniture OPC Pvt Ltd.
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full">
            Home
          </a>
          <a href="#products" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full">
            Products
          </a>

          {/* Ready to Move */}
          <Link
            href="/readytomove"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Ready to Order
          </Link>

          <a href="#testimonials" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full">
            Testimonials
          </a>
          <a href="#contact" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full">
            Contact
          </a>

          {/* CART BUTTON */}
          <Link
            href="/cart"
            className="relative px-4 py-2 rounded-full border border-gray-200 hover:border-red-600 hover:text-red-600 transition-all duration-300"
          >
            🛒 Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (Hidden on Desktop) */}
        <button 
          className="md:hidden text-2xl text-black focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col font-medium">
          <Link 
            href="/" 
            className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/#products" 
            className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link 
            href="/readytomove" 
            className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50 text-red-600 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Ready to Order
          </Link>

          <Link 
            href="/#testimonials" 
            className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>

          <Link 
            href="/#contact" 
            className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link 
            href="/cart" 
            className="px-6 py-4 hover:bg-gray-50 flex items-center justify-between"
            onClick={() => setIsOpen(false)}
          >
            <span>🛒 Cart</span>
            {cart.length > 0 && (
              <span className="bg-red-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}