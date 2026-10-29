// src/lib/setupsData.ts
// Complete Setups list — setups/page.tsx aur api/chat/route.ts dono yahin se import karte hain.
// ⚠️ ORDER matter karta hai: site pe "Setup No. 01, 02..." isi array ke index se bante hain.

export const COMPLETE_SETUPS = [
  {
    id: "setup-03",
    name: "The Complete Salon Setup",
    tagline: "A full working salon — hair, facial, and manicure — in one package.",
    image: "/setups/s3.webp",
    price: 46000,
    badge: "Best Value",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Trolleys",
      "1 x Cutting Stool",
      "1 x Hot and Cold Steamer",
    ],
  },
  {
    id: "setup-02",
    name: "The Twin Chair Setup",
    tagline: "Built for salons running two stylists side by side without compromise.",
    image: "/setups/s2.webp",
    price: 52000,
    badge: "Popular Choice",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Trolleys",
      "1 x Cutting Stool",
      "1 x Hot and Cold Steamer",
    ],
  },
  {
    id: "setup-04",
    name: "The Premium Salon Setup",
    tagline: "The ultimate luxury experience for discerning salon owners.",
    image: "/setups/s4.webp",
    price: 52000,
    badge: "Premium Quality",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Trolleys",
      "1 x Cutting Stool",
      "1 x Hot and Cold Steamer",
    ],
  },
  {
    id: "setup-01",
    name: "The Essential Studio Setup",
    tagline: "Everything a single-chair salon needs, ready to run from day one.",
    image: "/setups/s1.webp",
    price: 110000,
    badge: "Full Heavy Duty",
    includes: [
      "2 x Salon Styling Chair",
      "1 x Shampoo Station",
      "1 x Facial Bed",
      "1 x Manicure Chair",
    ],
  },
  {
    id: "setup-05",
    name: "The Luxury Studio Setup",
    tagline: "Premium finishes and added comfort — for salons that want to stand out.",
    image: "/setups/s5.webp",
    price: 110000,
    badge: "Ultimate Luxury",
    includes: [
      "2 x Salon Styling Chairs",
      "1 x Shampoo Station with Movable Basin",
      "1 x Facial Bed with Added Storage",
      "1 x Manicure Pedicure Chair with Integrated Jacuzzi",
    ],
  },
];