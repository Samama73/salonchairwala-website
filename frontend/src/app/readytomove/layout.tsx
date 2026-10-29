import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ready-to-Order Salon Furniture",
  description:
    "In-stock salon chairs, shampoo units, facial beds and complete salon setups ready to order. Premium build quality with fast delivery across India.",
  alternates: { canonical: "/readytomove/" },
};

export default function ReadyToMoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}