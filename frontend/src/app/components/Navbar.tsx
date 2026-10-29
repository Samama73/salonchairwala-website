"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { categoryList, slugifyCategory } from "@/lib/productData";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // mobile Products dropdown

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile menu: bahar tap karne ya page scroll karne pe apne aap band ho jaye
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = () => {
      setIsOpen(false);
      setProductsOpen(false);
    };

    const startY = window.scrollY;

    const handleOutsideTap = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      // 10px se zyada scroll hone pe hi band ho (chhote jitter pe nahi)
      if (Math.abs(window.scrollY - startY) > 10) closeMenu();
    };

    document.addEventListener("pointerdown", handleOutsideTap);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handleOutsideTap);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Setups", href: "/setups" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-[#FEFCF7]/70 backdrop-blur-lg border-b border-red-900/10 shadow-sm transition-all">
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
          {navLinks.map((item) =>
            item.name === "Products" ? (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-red-900 transition-colors"
                >
                  Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>

                {/* pt-3 = invisible bridge, taaki mouse Products se dropdown tak jaate waqt menu band na ho */}
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block">
                  <div className="min-w-[220px] rounded-2xl bg-[#FEFCF7] border border-red-900/10 shadow-xl py-2 overflow-hidden">
                    {categoryList.map((c) => (
                      <Link
                        key={c}
                        href={`/categories/${slugifyCategory(c)}`}
                        className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-900/5 hover:text-red-900 transition-colors"
                      >
                        {c}
                      </Link>
                    ))}
                    <Link
                      href="/categories"
                      className="block px-5 py-2.5 mt-1 border-t border-gray-200/60 text-sm font-semibold text-red-900 hover:bg-red-900/5 transition-colors"
                    >
                      View All Categories →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-red-900 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}

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
      <div
        inert={!isOpen}
        className={`md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-5rem)] overflow-y-auto bg-[#FEFCF7]/90 backdrop-blur-xl shadow-lg border-t border-gray-100 flex flex-col font-medium transition-[opacity,transform,visibility] duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
        >
          {navLinks.map((item) =>
            item.name === "Products" ? (
              <div key={item.name} className="border-b border-gray-200/50">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  aria-expanded={productsOpen}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-red-900/5"
                >
                  <span>Products</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <div
                  inert={!productsOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    productsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                  <div className="bg-red-900/[0.03] flex flex-col">
                    {categoryList.map((c) => (
                      <Link
                        key={c}
                        href={`/categories/${slugifyCategory(c)}`}
                        className="pl-10 pr-6 py-3 text-[15px] text-gray-700 border-t border-gray-200/40 hover:bg-red-900/5 hover:text-red-900"
                        onClick={() => {
                          setIsOpen(false);
                          setProductsOpen(false);
                        }}
                      >
                        {c}
                      </Link>
                    ))}
                    <Link
                      href="/categories"
                      className="pl-10 pr-6 py-3 text-[15px] font-semibold text-red-900 border-t border-gray-200/40 hover:bg-red-900/5"
                      onClick={() => {
                        setIsOpen(false);
                        setProductsOpen(false);
                      }}
                    >
                      View All Categories →
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-6 py-4 border-b border-gray-200/50 hover:bg-red-900/5"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}

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
    </nav>
  );
}