export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: "Salon Chairs" | "Shampoo Chairs" | "Manicure & Pedicure" | "Facial Beds" | "Furnishings";
  dispatch?: boolean;
};

export const allProducts: Product[] = [
  // ============ SALON CHAIRS (Styling Chairs) ============
  { name: "BUBBLY", price: 18000, description: "Hydraulic salon chair engineered for daily professional use with ergonomic seating support.", image: "/products/bubbly.webp", category: "Salon Chairs" },
  { name: "ROYAL DIAMOND", price: 15000, description: "Precision-built styling chair with balanced comfort and long-term structural durability.", image: "/products/royaldiamond.webp", category: "Salon Chairs", dispatch: true },
  { name: "DIAMOND", price: 14000, description: "Warm DIAMOND brown upholstery with subtle sparkle button accents and a comfortable, adjustable headrest.", image: "/products/diamond.webp", category: "Salon Chairs" },
  { name: "GOLDEN MAYUR", price: 22000, description: "High-grade salon chair featuring reinforced frame and premium finish for luxury setups.", image: "/products/mayur.webp", category: "Salon Chairs", dispatch: true },
  { name: "BRIDAL", price: 45000, description: "Creamy ivory upholstery with gold accents, full recline, and integrated footrest for a true masterpiece barbershop chair.", image: "/products/seller3.webp", category: "Salon Chairs" },
  { name: "LINE MENICURE", price: 18000, description: "Retro-chic mint green chair with diamond quilting, perfect for shampoo services or spa treatments.", image: "/products/linemenicure.webp", category: "Salon Chairs" },
  { name: "DIVA D", price: 22000, description: "Compact yet powerful salon chair ideal for urban salon setups with space optimization.", image: "/products/diva.webp", category: "Salon Chairs" },
  { name: "SLIXA I", price: 18000, description: "Vivid lime green styling chair with sleek club silhouette and signature chrome accent.", image: "/products/slixai.webp", category: "Salon Chairs" },
  { name: "QUEEN", price: 18000, description: "Comfort-focused salon chair designed for extended usage with stable hydraulic mechanism.", image: "/products/queen.webp", category: "Salon Chairs" },
  { name: "SOFA", price: 22000, description: "Designed for modern salons with sleek design and enhanced client comfort support.", image: "/products/sofa.webp", category: "Salon Chairs" },
  { name: "ULTIMATE MAHARAJA", price: 24000, description: "Vibrant blue upholstery, diamond-quilted stitching, and a chrome round hydraulic base for a bold statement chair.", image: "/products/maharaja.webp", category: "Salon Chairs" },
  { name: "GOLDEN D", price: 18000, description: "Top-tier salon chair offering maximum durability, comfort, and premium professional finish.", image: "/products/goldend.webp", category: "Salon Chairs" },
  { name: "BUEATY", price: 18000, description: "Sky blue upholstery with bold gold accents and a chevron-stitched backrest for a calming, contemporary look.", image: "/products/bueaty.webp", category: "Salon Chairs" },

  // ============ SHAMPOO CHAIRS (Backwash Units) ============
  { name: "DIAMOND DUCK (Shampoo)", price: 28000, description: "Futuristic white shell backwash unit with quilted crystal-stud upholstery and a tilting ceramic basin.", image: "/products/seller5.webp", category: "Shampoo Chairs" },
  { name: "SLIXA BUBBLY (Shampoo)", price: 28000, description: "Premium backwash unit combined with a spa-style reclining lounger and electronically controlled footrest.", image: "/products/slixabubbly.webp", category: "Shampoo Chairs" },
  { name: "MAHARAJA (Shampoo)", price: 28000, description: "Vibrant orange backwash station with electronic reclining footrest and diamond-quilted stitching.", image: "/products/maharaja-shampoo.webp", category: "Shampoo Chairs" },
  { name: "EDEN (Shampoo)", price: 28000, description: "Calming beige backwash station with electronic reclining footrest and premium ceramic basin.", image: "/products/eden.webp", category: "Shampoo Chairs" },
  { name: "GOLDEN MAYUR (Shampoo)", price: 28000, description: "Emerald green backwash unit with polished gold details and a deep tilting ceramic basin.", image: "/products/goldenmayur.webp", category: "Shampoo Chairs" },
  { name: "ROYAL DELUXE (Shampoo)", price: 23000, description: "Jade green backwash unit with polished chrome open-frame armrests and a deep tilting ceramic basin.", image: "/products/royaldeluxe.webp", category: "Shampoo Chairs" },
  { name: "LUXURY LAYER (Shampoo)", price: 23000, description: "Sapphire blue backwash unit with diamond-quilted stitching and a premium tilting ceramic basin.", image: "/products/luxurylayer.webp", category: "Shampoo Chairs" },
  { name: "FULL DUCK WHITE (Shampoo)", price: 18000, description: "Futuristic one-piece fiberglass backwash lounger in white with mustard cushioning for a zero-gravity feel.", image: "/products/fullduck.webp", category: "Shampoo Chairs" },
  { name: "FULL DUCK BLACK (Shampoo)", price: 18000, description: "All-black sculptural backwash lounger with dark brown upholstery for a sophisticated look.", image: "/products/fullduck.webp", category: "Shampoo Chairs" },
  { name: "WAVE (Shampoo)", price: 18000, description: "Avant-garde black backwash unit with a ribbed wave pattern and seamless glossy ceramic basin.", image: "/products/wave.webp", category: "Shampoo Chairs" },

  // ============ MANICURE & PEDICURE ESSENTIALS ============
  { name: "BEAST ROBUST", price: 65000, description: "Heavy-duty pedicure spa chair engineered for high-usage environments with maximum stability.", image: "/products/beast.webp", category: "Manicure & Pedicure" },
  { name: "LUXA", price: 18000, description: "Minimalist chair with integrated manicure trays, ideal as a manicure station, pedicure chair, or waiting lounger.", image: "/products/luxa.webp", category: "Manicure & Pedicure", dispatch: true },
  { name: "LOTUS", price: 6500, description: "Scallop-back accent chair in teal velvet, perfect for waiting areas or styling stations.", image: "/products/lotus.webp", category: "Manicure & Pedicure" },
  { name: "GOLDEN NEST", price: 18000, description: "Architectural wireframe chair with gold-plated base and vibrant blue upholstery, a striking accent piece.", image: "/products/goldennest.webp", category: "Manicure & Pedicure" },

  // ============ FACIAL BEDS ============
  { name: "SERENITY ARTISAN SPA BED", price: 26000, description: "Premium natural wood facial bed with plush ergonomic upholstery and dual-zone storage.", image: "/products/spabed.webp", category: "Facial Beds" },
  { name: "ELITE PROFESSIONAL TREATMENT TABLE", price: 18500, description: "Clinical-grade treatment table with walnut-grain finish, toffee upholstery, and multi-level incline.", image: "/products/treatmenttable.webp", category: "Facial Beds" },

  // ============ FURNISHINGS (Trolleys, Steamers, Dryers) ============
  { name: "BLACK TROLLEY", price: 5200, description: "Durable multi-tier salon trolley designed for effortless mobility and smart storage.", image: "/products/kostech.webp", category: "Furnishings", dispatch: true },
  { name: "WHITE TROLLEY", price: 5200, description: "Stylish multi-tier salon trolley offering smooth mobility and optimized storage.", image: "/products/white.webp", category: "Furnishings", dispatch: true },
  { name: "FACIAL STEAMER", price: 3600, description: "High-performance facial steamer designed for deep pore purification and skin hydration.", image: "/products/steamr.webp", category: "Furnishings", dispatch: true },
  { name: "HAIR STEAMER", price: 4500, description: "High-performance hair steamer designed for deep conditioning and moisture retention.", image: "/products/hstreamer.webp", category: "Furnishings", dispatch: true },
];

const CHAIRS = allProducts.filter((p) => p.category === "Salon Chairs").map((p) => p.name);

const addOnRules: { match: (name: string) => boolean; recommend: string[] }[] = [
  { match: (n) => CHAIRS.includes(n), recommend: ["BLACK TROLLEY", "FACIAL STEAMER"] },
  { match: (n) => n.includes("TROLLEY"), recommend: ["FACIAL STEAMER", "HAIR STEAMER"] },
  { match: (n) => n.includes("STEAMER"), recommend: ["BLACK TROLLEY"] },
];

export function getRecommendations(cartItemNames: string[]): Product[] {
  const recommendedNames = new Set<string>();
  cartItemNames.forEach((cartName) => {
    addOnRules.forEach((rule) => {
      if (rule.match(cartName)) {
        rule.recommend.forEach((r) => recommendedNames.add(r));
      }
    });
  });
  cartItemNames.forEach((n) => recommendedNames.delete(n));
  return allProducts.filter((p) => recommendedNames.has(p.name));
}

// ============ COMBO SETUPS (max 6) — chair + chair pairing only ============
export type ComboSetup = {
  name: string;
  items: string[]; // product names from allProducts, all chair-type
  bundlePrice: number;
  description: string;
};

export const comboSetups: ComboSetup[] = [
  {
    name: "Styling + Backwash Combo",
    items: ["ROYAL DIAMOND", "DIAMOND DUCK (Shampoo)"],
    bundlePrice: 38000,
    description: "Our best-selling styling chair paired with a modern backwash unit, creating a complete two-station salon solution designed for comfort, functionality, and a premium client experience.",
  },
  {
    name: "Luxury Chair Duo",
    items: ["BRIDAL", "GOLDEN MAYUR"],
    bundlePrice: 65000,
    description: "Our most premium styling chair, paired with a matching luxury backwash unit, creates a sophisticated two-station setup that elevates both aesthetics and client comfort.",
  },
  {
    name: "Everyday Salon Combo",
    items: ["BUBBLY", "FULL DUCK WHITE (Shampoo)"],
    bundlePrice: 32000,
    description: "A versatile styling chair paired with an ergonomic zero-gravity backwash lounger, designed to deliver exceptional comfort and reliable performance every day.",
  },
  {
    name: "Manicure & Pedicure Duo",
    items: ["LUXA", "BEAST ROBUST"],
    bundlePrice: 78000,
    description: "A thoughtfully designed manicure station complemented by our luxury pedicure spa chair, delivering a refined and fully integrated nail care experience.",
  },
  {
    name: "Accent Golden Waiting Duo",
    items: ["GOLDEN MAYUR (Shampoo)", "GOLDEN NEST"],
    bundlePrice: 42000,
    description: "A pair of elegantly crafted accent chairs, perfect for creating a welcoming waiting area or a refined manicure lounge.",
  },
  {
    name: "Compact Studio Combo",
    items: ["DIVA D", "EDEN (Shampoo)"],
    bundlePrice: 36000,
    description: "Designed for compact salon interiors, this elegant combination of a styling chair and wave-pattern backwash unit delivers exceptional functionality with a refined aesthetic.",
  },
];

export function getComboProducts(combo: ComboSetup): Product[] {
  return combo.items
    .map((name) => allProducts.find((p) => p.name === name))
    .filter(Boolean) as Product[];
}

export function getComboOriginalPrice(combo: ComboSetup): number {
  return getComboProducts(combo).reduce((sum, p) => sum + p.price, 0);
}