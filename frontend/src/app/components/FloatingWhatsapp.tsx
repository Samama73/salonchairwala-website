'use client'; // Next.js App Router ke liye zaroori hai

import React from 'react';

// 1. TypeScript ko batane ke liye ki window par 'gtag' exist karta hai
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function FloatingWhatsapp() {
  
  // 2. 'e' ko React.MouseEvent ka type de diya
const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  // YE LOGS HUMEIN BATAENGE KI KYA HO RAHA HAI
  console.log("--- WhatsApp Button Clicked! ---");
  console.log("Is window defined?", typeof window !== 'undefined');
  console.log("Does window.gtag exist?", typeof window !== 'undefined' && !!window.gtag);

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Engagement',
      event_label: 'WhatsApp Button'
    });
    console.log("GA4 event triggered successfully!");
  } else {
    console.log("GA4 event FAILED because window.gtag is missing!");
  }

  window.open('https://api.whatsapp.com/send/?phone=918265084144&text&type=phone_number&app_absent=0', '_blank');
};

  return (
    <a
      href="#"
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
    >
      WhatsApp
    </a>
  );
}