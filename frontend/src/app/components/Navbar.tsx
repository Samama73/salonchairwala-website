"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">

          <img
            src="/products/logo.png"
            alt="Salon Chair Wala Logo"
            className="h-16 md:h-14 w-auto hover:scale-105 transition"
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

        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#" className="hover:text-red-600 transition">
            Home
          </a>

          <a href="#products" className="hover:text-red-600 transition">
            Products
          </a>

          {/* Ready to Move */}
          <Link
            href="/readytomove"
            className="hover:text-red-600 transition text-gray-700"
          >
            Ready to Move
          </Link>

          <a href="#testimonials" className="hover:text-red-600 transition">
            Testimonials
          </a>

          <a href="#contact" className="hover:text-red-600 transition">
            Contact
          </a>

          {/* CART BUTTON */}
          <Link
            href="/cart"
            className="relative hover:text-red-600 transition"
          >
            🛒 Cart

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* CTA Button */}
          <a
            href="https://wa.me/919403891146"
            target="_blank"
            className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </nav>
  );
}