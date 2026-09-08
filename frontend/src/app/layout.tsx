import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WhatsappPopupProvider } from "@/context/WhatsappPopupContext";
import JsonLd from '@/components/JsonLd'
import ChatBot from "./components/ChatBot";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
  });

const playfair = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-playfair",
   display: "swap",
 });

export const metadata: Metadata = {
  title: {
    default: "Salon Furniture Manufacturer & Supplier in India | Salon Chair Wala",
    template: "%s | Salon Chair Wala",
  },
  description:
    "Salon Chair Wala (Redwal Furniture OPC Pvt Ltd.) is a leading salon furniture manufacturer in India, offering premium salon chairs, shampoo chairs, manicure & pedicure stations, facial beds and salon furnishings with pan-India delivery to Mumbai, Pune, Bangalore, Hyderabad and beyond.",
  metadataBase: new URL("https://www.salonchairwala.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ufVt9OgKY_OQx9EueCnK2PPJiJ0aZbIAZ1cRzO6Onro" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Google Analytics (GA4) Tracking Code */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-31V2J2933J"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-31V2J2933J');
          `}
        </Script>

        <JsonLd />
        {/* CART PROVIDER (GLOBAL STATE FIXED) */}
        <CartProvider>
          <WhatsappPopupProvider>
            {children}
            <ChatBot />
          </WhatsappPopupProvider>
        </CartProvider>
      </body>
    </html>
  );
}