"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Setups", href: "/setups" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FEFCF7]/70 backdrop-blur-lg border-b border-red-900/10 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/products/newlogo.png"
            alt="Salon Chair Wala Logo"
            className="h-14 w-auto drop-shadow-sm"
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Salon Chair <span className="text-red-900">Wala</span>
            </h1>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-0.5">
              Redwal Furniture
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="hover:text-red-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link 
            href="/readytomove" 
            className="px-6 py-2.5 rounded-full bg-red-900 text-white hover:bg-red-800 transition-colors shadow-md hover:shadow-lg"
          >
            Ready to Order
          </Link>

          {/* CART BUTTON */}
          <Link 
            href="/cart" 
            className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-red-900 bg-white/50 transition-colors"
          >
            <span>🛒 Cart</span>
            {mounted && cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FEFCF7]/90 backdrop-blur-xl shadow-lg border-t border-gray-100 flex flex-col font-medium transition-all">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="px-6 py-4 border-b border-gray-200/50 hover:bg-red-900/5"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link 
            href="/readytomove" 
            className="px-6 py-4 border-b border-gray-200/50 text-red-900 font-bold hover:bg-red-900/5"
            onClick={() => setIsOpen(false)}
          >
            Ready to Order
          </Link>

          <Link 
            href="/cart" 
            className="px-6 py-4 flex items-center justify-between hover:bg-red-900/5"
            onClick={() => setIsOpen(false)}
          >
            <span>🛒 Cart</span>
            {mounted && cart.length > 0 && (
              <span className="bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}