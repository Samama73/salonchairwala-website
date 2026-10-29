import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Salon Setups & Combo Packages",
  description:
    "Ready-made salon setup packages with chairs, shampoo units and furnishings at combo prices. Direct from the manufacturer, delivered across India.",
};

export default function SetupsLayout({ children }: { children: React.ReactNode }) {
  return children;
}