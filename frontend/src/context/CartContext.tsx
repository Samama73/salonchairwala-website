"use client";

import { sendGAEvent } from "@/lib/gtag";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  updateQuantity: (name: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

function getInitialCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem("cart");
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  // ✅ Lazy initializer reads localStorage once, during first render —
  // no setState call inside an effect needed for the initial load.
  const [cart, setCart] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === item.name);

      if (existing) {
        return prev.map((p) =>
          p.name === item.name
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    // 📊 GA4 EVENT
    sendGAEvent("add_to_cart", {
      currency: "INR",
      value: item.price,
      items: [{ item_name: item.name, price: item.price }],
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => {
      const removed = prev.find((p) => p.name === name);
      if (removed) {
        sendGAEvent("remove_from_cart", {
          currency: "INR",
          value: removed.price,
          items: [{ item_name: removed.name, price: removed.price }],
        });
      }
      return prev.filter((item) => item.name !== name);
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.name !== name));
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ✅ THIS IS THE MOST IMPORTANT FIX
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}