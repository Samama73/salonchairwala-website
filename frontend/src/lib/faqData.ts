// ============ FAQ DATA (for category / product pages) ============
export type FAQ = {
  question: string;
  answer: string;
};

export const commonFAQs: FAQ[] = [
  {
    question: "Can I get this in custom colors?",
    answer:
      "Yes. All our salon chairs and furniture are available in custom colors and upholstery finishes to match your salon's interior theme. Share your preferred color or fabric sample with our team and we'll manufacture it accordingly.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Every product comes with a manufacturer warranty covering the hydraulic base, frame and structural components against manufacturing defects. Our team assists with genuine spare parts and after-sales support even after the warranty period.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Ready-to-dispatch items are shipped within 2-4 business days. Custom orders (custom color/fabric) typically take 7-15 business days depending on quantity. We deliver pan-India from our Mumbai (Kalyan) manufacturing unit.",
  },
  {
    question: "Do you offer installation and bulk/salon setup pricing?",
    answer:
      "Yes. We provide on-site installation guidance and offer special bulk pricing for salon owners setting up multiple chairs or a complete salon interior. Contact us on WhatsApp for a custom quote.",
  },
];

export const categorySpecificFAQs: Record<string, FAQ[]> = {
  "Salon Chairs": [
    {
      question: "Are the hydraulic salon chairs suitable for daily heavy use?",
      answer:
        "Yes, our salon chairs use commercial-grade hydraulic pumps and reinforced frames engineered specifically for daily, high-footfall professional salon use.",
    },
  ],
  "Shampoo Chairs": [
    {
      question: "What is the basin material used in shampoo/backwash chairs?",
      answer:
        "Our shampoo chairs use premium ceramic basins that are scratch-resistant, easy to clean, and built for long-term daily use in professional salons.",
    },
  ],
};

export function getFaqsForCategory(category: string): FAQ[] {
  return [...commonFAQs, ...(categorySpecificFAQs[category] || [])];
}