import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon Chairs, Shampoo Units & Facial Beds",
  description:
    "Shop salon chairs, shampoo chairs, manicure & pedicure stations, facial beds and salon furnishings. Direct from the manufacturer with custom colours and warranty.",
  alternates: { canonical: "/categories/" },
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}