"use client";

import { useState } from "react";
import { sendGAEvent } from "@/lib/gtag";
import { allProducts } from "@/lib/productData";

const SITE_URL = "https://www.salonchairwala.com";

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getProductUrl(title: string): string | null {
  const product = allProducts.find((p) => p.name === title);
  return product ? `${SITE_URL}/products/${slugify(product.name)}/` : null;
}

type Props = {
  title: string;
  text?: string;
  url?: string; // agar nahi diya toh current page ka URL use hoga
};

export default function ShareButton({ title, text, url }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || getProductUrl(title) || window.location.href;

    // 📊 GA4 EVENT — track karega kitni baar share button dabaya
    sendGAEvent("share", {
      method: typeof navigator.share === "function" ? "native_share" : "copy_link",
      item_name: title,
    });

    // Mobile / supported browsers -> native share sheet (WhatsApp, Instagram, etc.)
    if (navigator.share) {
      try {
        await navigator.share({ title, text: text || title, url: shareUrl });
      } catch (err) {
        // user ne share cancel kiya, ignore karo
      }
      return;
    }

    // Desktop fallback -> link copy karo
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Link copy nahi ho paya, manually copy kar lein: " + shareUrl);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all text-sm font-semibold text-gray-800 active:scale-95"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
      {copied ? "Link Copied!" : "Share"}
    </button>
  );
}