// frontend/src/lib/gtag.ts
// Chhota helper — GA4 ko custom events bhejne ke liye

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function sendGAEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}