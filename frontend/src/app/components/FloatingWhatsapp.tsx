'use client'; // Next.js App Router ke liye zaroori hai
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useWhatsappPopup } from '../../context/WhatsappPopupContext';

// 1. TypeScript ko batane ke liye ki window par 'gtag' exist karta hai
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// 🔗 Same Google Sheet Web App URL jo cart/orders ke liye use hoti hai
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyS8F_JBfYgIGzpAI39KaV8rkfBBdcDWjMur-VEeGRxoBMF2FOMzYObIk-wXOnFMeXQmA/exec";

const WHATSAPP_NUMBER = "919145097466";

export default function FloatingWhatsapp() {
  const { isOpen, openPopup, closePopup } = useWhatsappPopup();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isValid = name.trim().length > 1 && phone.trim().length >= 10;

  // Button click hote hi popup khulega (seedha WhatsApp open nahi hoga)
  const handleOpenPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openPopup();
  };

  const handleSubmit = async () => {
    if (!isValid) {
      setError("Please enter a valid name and 10-digit phone number");
      return;
    }
    setError("");
    setSubmitting(true);

    // GA4 event — same jaisa pehle tha
    console.log("--- WhatsApp Button Clicked! ---");
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Engagement',
        event_label: 'WhatsApp Button'
      });
      console.log("GA4 event triggered successfully!");
    } else {
      console.log("GA4 event FAILED because window.gtag is missing!");
    }

    // Lead ko Google Sheet me save karo
    const leadData = {
      action: "whatsapp_lead", // 👈 alag action taaki orders se mix na ho
      date: new Date().toLocaleString(),
      customerName: name.trim(),
      phone: phone.trim(),
      source: "Floating WhatsApp Button",
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
    } catch (err) {
      console.error("Lead save failed:", err);
    } finally {
      setSubmitting(false);
      closePopup();
      setName("");
      setPhone("");

      // Ab WhatsApp pe redirect karo
      window.open(
        `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
          `Name: ${leadData.customerName}`
        )}&type=phone_number&app_absent=0`,
        '_blank'
      );
    }
  };

  return (
    <>
      <a
        href="#"
        onClick={handleOpenPopup}
        className="fixed bottom-8 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        WhatsApp
      </a>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-4 backdrop-blur-sm"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-2xl leading-none text-gray-400 hover:text-black transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex items-center gap-2 mb-1">
              <WhatsAppIcon size={22} color="#25D366" />
              <h3 className="text-lg font-bold text-gray-900">Quick Chat on WhatsApp</h3>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              Share your details and we&apos;ll connect with you right away.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rohan Sharma"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#82181A]/30 focus:border-[#82181A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#82181A]/30 focus:border-[#82181A]"
                />
              </div>

              {error && <p className="text-xs text-[#B30000]">{error}</p>}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold text-sm hover:brightness-95 transition-all disabled:opacity-60"
              >
                {submitting ? (
                  "Connecting…"
                ) : (
                  <>
                    <WhatsAppIcon />
                    Continue to WhatsApp
                  </>
                )}
              </button>

              <p className="text-[10px] text-gray-400 text-center mt-1">
                We respect your privacy. Your number is only used to assist you better.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function WhatsAppIcon({ size = 18, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.24-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
    </svg>
  );
}