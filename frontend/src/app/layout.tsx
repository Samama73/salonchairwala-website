import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salon Chair Wala",
  description: "Premium Salon Furniture Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Analytics (GA4) Tracking Code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-31V2J2933J"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-31V2J2933J');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* CART PROVIDER (GLOBAL STATE FIXED) */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}