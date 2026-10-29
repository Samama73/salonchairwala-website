export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: "Salon Chairs" | "Shampoo Chairs" | "Manicure & Pedicure" | "Facial Beds" | "Furnishings";
  dispatch?: boolean;
  seoTitle?: string;
  googleCategoryId?: number;
  zoom?: number;
  focus?: string;
  cutout?: string;
  plate?: string;
};

// ============ CATEGORY HELPERS ============
// 👉 Yahan se saari categories aur unke slugs (URL-friendly names) manage hote hain
export const categoryList = [
  "Salon Chairs",
  "Shampoo Chairs",
  "Manicure & Pedicure",
  "Facial Beds",
  "Furnishings",
] as const;

export type CategoryName = (typeof categoryList)[number];

// Har category ke liye chhota tagline (category page pe dikhega)
export const categoryInfo: Record<CategoryName, { tagline: string; image: string; position?: string }> = {
  "Salon Chairs": {
    tagline: "Hydraulic styling chairs built for daily professional use.",
    image: "/products/goldencombo.webp",
    position: "50% 50%",
  },
  "Shampoo Chairs": {
    tagline: "Premium backwash units with reclining comfort & ceramic basins.",
    image: "/products/shampoo chair website.webp",
    position: "50% 50%",
  },
  "Manicure & Pedicure": {
    tagline: "Dedicated stations for nail care and pedicure services.",
    image: "/products/manicure and pedicure.webp",
    position: "50% 50%",
  },
  "Facial Beds": {
    tagline: "Comfortable beds designed for facials and spa treatments.",
    image: "/products/website bed.webp",
  },
  "Furnishings": {
    tagline: "Trolleys, steamers & dryers to complete your salon.",
    image: "/products/btrolley.webp",
  },
};

// "Manicure & Pedicure" -> "manicure-and-pedicure"
export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCategoryBySlug(slug: string): CategoryName | undefined {
  return categoryList.find((c) => slugifyCategory(c) === slug);
}

export function getProductsByCategory(category: CategoryName): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export const allProducts: Product[] = [
  // ============ SALON CHAIRS (Styling Chairs) ============
  { name: "BUBBLY", price: 18000, description: "Hydraulic salon chair engineered for daily professional use with ergonomic seating support. Leatherette upholstery, wooden ply frame, high-density foam, 150kg capacity.", image: "/products/bubblyyy (1).webp", category: "Salon Chairs", seoTitle: "BUBBLY Hydraulic Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/bubblyyy.png", plate: "/products/cutouts/bubblyyy-empty.webp", },
  { name: "ROYAL DIAMOND", price: 22000, description: "Precision-built styling chair with balanced comfort and long-term structural durability. Leatherette upholstery, wooden ply frame, high-density foam, 150kg capacity.", image: "/products/newrdiamond.webp", category: "Salon Chairs", dispatch: true, seoTitle: "ROYAL DIAMOND Professional Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/rdiamond.webp", plate: "/products/cutouts/rdiamond-empty.webp", },
  { name: "DIAMOND", price: 14000, description: "Warm DIAMOND brown upholstery with subtle sparkle button accents and a comfortable, adjustable headrest. Leatherette, high-density foam, hydraulic, 150kg capacity.", image: "/products/diamond new (1).webp", category: "Salon Chairs", seoTitle: "DIAMOND Brown Upholstered Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/diamond.webp", plate: "/products/cutouts/diamond-empty.webp",},
  { name: "GOLDEN MAYUR", price: 22000, description: "High-grade salon chair featuring reinforced frame and premium finish for luxury setups. Leatherette upholstery, wooden ply, high-density foam, 150kg capacity.", image: "/products/newmayur.webp", category: "Salon Chairs", dispatch: true, seoTitle: "GOLDEN MAYUR Premium Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/goldenmayur.webp", plate: "/products/cutouts/goldenmayur-empty.webp",},
  { name: "BRIDAL", price: 45000, description: "Creamy ivory upholstery with gold accents, full recline, and integrated footrest for a true masterpiece barbershop chair. Leatherette, high-density foam, hydraulic, 150kg capacity.", image: "/products/bridal new (1).webp", category: "Salon Chairs", seoTitle: "BRIDAL Ivory Gold Barbershop Styling Chair", googleCategoryId: 7241,cutout: "/products/cutouts/bridal.webp", plate: "/products/cutouts/bridal-empty.webp",},
  { name: "LINE MENICURE", price: 18000, description: "Retro-chic mint green chair with diamond quilting, perfect for shampoo services or spa treatments. Leatherette upholstery, high-density foam, hydraulic, 150kg capacity.", image: "/products/line menicure new (1).webp", category: "Salon Chairs", seoTitle: "LINE MENICURE Mint Green Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/linemenicure.webp", plate: "/products/cutouts/linemenicure-empty.webp", },
  { name: "DIVA D", price: 22000, description: "Compact yet powerful salon chair ideal for urban salon setups with space optimization. Leatherette, wooden ply frame, high-density foam, 150kg capacity.", image: "/products/divad new (1).webp", category: "Salon Chairs", seoTitle: "DIVA D Compact Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/divad.webp", plate: "/products/cutouts/divad-empty.webp", },
  { name: "SLIXA I", price: 18000, description: "Vivid lime green styling chair with sleek club silhouette and signature chrome accent. Leatherette upholstery, high-density foam, hydraulic, 150kg capacity.", image: "/products/slixai (1).webp", category: "Salon Chairs", seoTitle: "SLIXA I Lime Green Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/slixa.webp", plate: "/products/cutouts/slixa-empty.webp", },
  { name: "QUEEN", price: 18000, description: "Comfort-focused salon chair designed for extended usage with stable hydraulic mechanism. Leatherette, high-density foam, 150kg capacity.", image: "/products/newqueen (1).webp", category: "Salon Chairs", seoTitle: "QUEEN Hydraulic Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/queen.png", plate: "/products/cutouts/quee-empty.webp",},
  { name: "SOFA", price: 22000, description: "Designed for modern salons with sleek design and enhanced client comfort support. Leatherette upholstery, wooden ply frame, high-density foam, hydraulic, 150kg capacity.", image: "/products/croppedsofa.webp", category: "Salon Chairs", seoTitle: "SOFA Modern Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/diamond.webp", plate: "/products/cutouts/diamond-empty.webp", },
  { name: "ULTIMATE MAHARAJA", price: 24000, description: "Vibrant blue upholstery, diamond-quilted stitching, and a chrome round hydraulic base for a bold statement chair. Leatherette, high-density foam, 150kg capacity.", image: "/products/newmaharaja (1).webp", category: "Salon Chairs", seoTitle: "ULTIMATE MAHARAJA Blue Diamond Salon Chair", googleCategoryId: 7241, cutout: "/products/cutouts/maharaja.webp", plate: "/products/cutouts/maharaja-empty.webp", },
  { name: "GOLDEN D", price: 18000, description: "Top-tier salon chair offering maximum durability, comfort, and premium professional finish. Leatherette, wooden ply frame, high-density foam, 150kg capacity.", image: "/products/newgoldend (1).webp", category: "Salon Chairs", seoTitle: "GOLDEN D Premium Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/goldend.webp", plate: "/products/cutouts/goldend-empty.webp", },
  { name: "BUEATY", price: 18000, description: "Sky blue upholstery with bold gold accents and a chevron-stitched backrest for a calming, contemporary look. Leatherette, high-density foam, hydraulic, 150kg capacity.", image: "/products/newbeauty (1).webp", category: "Salon Chairs", seoTitle: "BUEATY Sky Blue Salon Styling Chair", googleCategoryId: 7241, cutout: "/products/cutouts/beauty.webp", plate: "/products/cutouts/beauty-empty.webp", },

  // ============ SHAMPOO CHAIRS (Backwash Units) ============
  { name: "M SLIXA", price: 28000, description: "Elevate your salon's wash station experience with this premium luxury shampoo station chair, crafted for optimal client comfort and effortless functionality duringhair treatments and hair washes.", image: "/products/slixanew.webp", category: "Shampoo Chairs", seoTitle: "M SLIXA Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/slixam.webp", plate: "/products/cutouts/slixam-empty.webp",  },
  { name: "DIAMOND DUCK", price: 28000, description: "Futuristic white shell backwash unit with quilted crystal-stud upholstery and a tilting ceramic basin. Leatherette, high-density foam padding.", image: "/products/full duck new.webp", category: "Shampoo Chairs", seoTitle: "DIAMOND DUCK White Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/fullduck.webp", plate: "/products/cutouts/fullduck-empty.webp",},
  { name: "SLIXA BUBBLY", price: 28000, description: "Premium backwash unit combined with a spa-style reclining lounger and electronically controlled footrest. Leatherette, high-density foam.", image: "/products/slixabubbly (1) (1).webp", category: "Shampoo Chairs", seoTitle: "SLIXA BUBBLY Reclining Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/slixabubbly-empty.webp", plate: "/products/cutouts/slixabubbly.webp",},
  { name: "MAHARAJA", price: 28000, description: "Vibrant orange backwash station with electronic reclining footrest and diamond-quilted stitching. Leatherette, high-density foam padding.", image: "/products/ultimatemaharajashampoonew (1).webp", category: "Shampoo Chairs", seoTitle: "MAHARAJA Orange Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/maharajashampoo.webp", plate: "/products/cutouts/maharajashampoo-empty.webp", },
  { name: "EDEN", price: 28000, description: "Calming beige backwash station with electronic reclining footrest and premium ceramic basin. Leatherette, high-density foam padding.", image: "/products/eden new (1).webp", category: "Shampoo Chairs", seoTitle: "EDEN Beige Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/eden.webp", plate: "/products/cutouts/eden-empty.webp", },
  { name: "GOLDEN MAYUR", price: 28000, description: "Emerald green backwash unit with polished gold details and a deep tilting ceramic basin. Leatherette, high-density foam padding.", image: "/products/golden mayur new (1).webp", category: "Shampoo Chairs", seoTitle: "GOLDEN MAYURR Emerald Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/mayurshampoo.webp", plate: "/products/cutouts/mayurshampoo-empty.webp", },
  { name: "ROYAL DELUXE", price: 23000, description: "Jade green backwash unit with polished chrome open-frame armrests and a deep tilting ceramic basin. Leatherette, high-density foam padding.", image: "/products/royaldeluxe (1).webp", category: "Shampoo Chairs", seoTitle: "ROYAL DELUXE Jade Green Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/royal.webp", plate: "/products/cutouts/royal-empty.webp", },
  { name: "LUXURY LAYER", price: 23000, description: "Sapphire blue backwash unit with diamond-quilted stitching and a premium tilting ceramic basin. Leatherette, high-density foam padding.", image: "/products/luxurylayer (1).webp", category: "Shampoo Chairs", seoTitle: "LUXURY LAYER Sapphire Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/layer.webp", plate: "/products/cutouts/layer-empty.webp", },
  { name: "FULL DUCK WHITE", price: 18000, description: "Futuristic one-piece fiberglass backwash lounger in white with mustard cushioning for a zero-gravity feel. Leatherette, high-density foam.", image: "/products/duck new (1).webp", category: "Shampoo Chairs", seoTitle: "FULL DUCK WHITE Fiberglass Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/duck.webp", plate: "/products/cutouts/duck-empty.webp", },
  { name: "FULL DUCK BLACK", price: 18000, description: "All-black sculptural backwash lounger with dark brown upholstery for a sophisticated look. Leatherette, high-density foam padding.", image: "/products/blackduck (1) (1).webp", category: "Shampoo Chairs", seoTitle: "FULL DUCK BLACK Sculptural Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/blackduck.webp", plate: "/products/cutouts/blackduck-empty.webp", },
  { name: "WAVE", price: 18000, description: "Avant-garde black backwash unit with a ribbed wave pattern and seamless glossy ceramic basin. Leatherette, high-density foam padding.", image: "/products/wavenew (1).webp", category: "Shampoo Chairs", seoTitle: "WAVE Black Ribbed Shampoo Backwash Chair", googleCategoryId: 7241, cutout: "/products/cutouts/wave.webp", plate: "/products/cutouts/wave-empty.webp", },

  // ============ MANICURE & PEDICURE ESSENTIALS ============
  { name: "BEAST ROBUST", price: 65000, description: "Heavy-duty pedicure spa chair engineered for high-usage environments with maximum stability. Leatherette, wooden ply frame, high-density foam, hydraulic, 150kg capacity.", image: "/products/newrobust (1).webp", category: "Manicure & Pedicure", seoTitle: "BEAST ROBUST Heavy-Duty Pedicure Spa Chair", googleCategoryId: 7242, cutout: "/products/cutouts/newbeast.webp", plate: "/products/cutouts/robust-empty.webp", },
  { name: "LUXA", price: 18000, description: "Minimalist chair with integrated manicure trays, ideal as a manicure station, pedicure chair, or waiting lounger. Leatherette, high-density foam, hydraulic, 150kg capacity.", image: "/products/luxanew (1).webp", category: "Manicure & Pedicure", dispatch: true, seoTitle: "LUXA Minimalist Manicure & Pedicure Chair", googleCategoryId: 7241, cutout: "/products/cutouts/luxa.webp", plate: "/products/cutouts/luxa-empty.webp", },
  { name: "MINI ROBUST", price: 18000, description: "Minimalist chair with integrated manicure trays, ideal as a manicure station, pedicure chair, or waiting lounger. Leatherette, high-density foam, hydraulic, 150kg capacity.", image: "/products/manicure and pedicure.webp", category: "Manicure & Pedicure", dispatch: true, seoTitle: "MINI ROBUST Minimalist Manicure & Pedicure Chair", googleCategoryId: 7241, cutout: "/products/cutouts/mini.webp", plate: "/products/cutouts/mini-empty.webp", },
  { name: "LOTUS", price: 6500, description: "Scallop-back accent chair in teal velvet, perfect for waiting areas or styling stations. Leatherette detailing, high-density foam, hydraulic, 150kg capacity.", image: "/products/lotus new (1).webp", category: "Manicure & Pedicure", seoTitle: "LOTUS Teal Velvet Accent Salon Chair", googleCategoryId: 7241, cutout: "/products/cutouts/lotus.webp", plate: "/products/cutouts/lotus-empty.webp", },
  { name: "GOLDEN NEST", price: 18000, description: "Architectural wireframe chair with gold-plated base and vibrant blue upholstery, a striking accent piece. Leatherette, high-density foam, hydraulic, 150kg capacity.", image: "/products/nest.webp", category: "Manicure & Pedicure", seoTitle: "GOLDEN NEST Gold Wireframe Accent Chair", googleCategoryId: 7241, cutout: "/products/cutouts/nest.webp", plate: "/products/cutouts/nest-empty.webp", },

    // ============ FACIAL BEDS ============
  { name: "KOREAN BED", price: 45000, description: " Luxury, all-in-one salon workstation built to support hair washing, head steam therapy, scalp treatments, facials, and massages", image: "/products/KoreanBed.webp", category: "Facial Beds", seoTitle: "Korean Facial Bed" },
  { name: "FACIAL BED", price: 18000, description: "Specialized ergonomic salon and spa furniture designed to keep clients comfortable during skincare treatments while giving estheticians easy access and adjustable positioning", image: "/products/bedwithoutstorage (1s).webp", category: "Facial Beds", seoTitle: "Facial Bed", cutout: "/products/cutouts/bedwithout.webp", plate: "/products/cutouts/bedwithout-empty.webp", },
  { name: "FACIAL BED WITH STORAGE", price: 18500, description: "Multifunctional bed frame with integrated compartments underneath the mattress designed to maximize bedroom space efficiency", image: "/products/storagebed (1) (1s).webp", category: "Facial Beds", seoTitle: "Korean Facial Bed", cutout: "/products/cutouts/withstorage.webp", plate: "/products/cutouts/withstorage-empty.webp", },
  // ============ FURNISHINGS (Trolleys, Steamers, Dryers) ============
  { name: "BLACK TROLLEY", price: 5200, description: "Durable multi-tier salon trolley designed for effortless mobility and smart storage.", image: "/products/blacktrolley.webp", category: "Furnishings", dispatch: true, seoTitle: "BLACK TROLLEY Multi-Tier Salon Trolley", googleCategoryId: 436, cutout: "/products/cutouts/btrolley.webp", plate: "/products/cutouts/btrolley-empty.webp", },
  { name: "WHITE TROLLEY", price: 5200, description: "Stylish multi-tier salon trolley offering smooth mobility and optimized storage.", image: "/products/whitetrolley.webp", category: "Furnishings", dispatch: true, seoTitle: "WHITE TROLLEY Multi-Tier Salon Trolley", googleCategoryId: 436, cutout: "/products/cutouts/wtrolley.webp", plate: "/products/cutouts/wtrolley-empty.webp", },
  { name: "FACIAL STEAMER", price: 3600, description: "High-performance facial steamer designed for deep pore purification and skin hydration.", image: "/products/facialsteamer.webp", category: "Furnishings", dispatch: true, seoTitle: "Professional Facial Steamer for Salons & Spas", googleCategoryId: 473, cutout: "/products/cutouts/fsteamer.webp", plate: "/products/cutouts/fsteamer-empty.webp", },
  { name: "HAIR STEAMER", price: 4500, description: "High-performance hair steamer designed for deep conditioning and moisture retention.", image: "/products/hairsteamer.webp", category: "Furnishings", dispatch: true, seoTitle: "Professional Hair Steamer for Salons", googleCategoryId: 6019, cutout: "/products/cutouts/hsteamer.webp", plate: "/products/cutouts/hsteamer-empty.webp", },
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
// Each combo now uses ONE custom-made image (place files in /public/combos/)
export type ComboSetup = {
  name: string;
  items: string[]; // product names from allProducts, all chair-type
  bundlePrice: number;
  description: string;
  image: string; // single custom combo image
};

export const comboSetups: ComboSetup[] = [
  {
    name: "Styling + Backwash Combo",
    items: ["ROYAL DIAMOND", "DIAMOND DUCK"],
    bundlePrice: 38000,
    description: "Our best-selling styling chair paired with a modern backwash unit, creating a complete two-station salon solution designed for comfort, functionality, and a premium client experience.",
    image: "/products/stylingbackwash.webp",
  },
  {
    name: "Luxury Chair Duo",
    items: ["BRIDAL", "GOLDEN MAYUR"],
    bundlePrice: 65000,
    description: "Our most premium styling chair, paired with a matching luxury backwash unit, creates a sophisticated two-station setup that elevates both aesthetics and client comfort.",
    image: "/products/luxuryduo.webp",
  },
  {
    name: "Everyday Salon Combo",
    items: ["BUBBLY", "FULL DUCK WHITE"],
    bundlePrice: 32000,
    description: "A versatile styling chair paired with an ergonomic zero-gravity backwash lounger, designed to deliver exceptional comfort and reliable performance every day.",
    image: "/products/everydaycombo.webp",
  },
  {
    name: "Manicure & Pedicure Duo",
    items: ["LUXA", "BEAST ROBUST"],
    bundlePrice: 78000,
    description: "A thoughtfully designed manicure station complemented by our luxury pedicure spa chair, delivering a refined and fully integrated nail care experience.",
    image: "/products/duo.webp",
  },
  {
    name: "Accent Golden Waiting Duo",
    items: ["GOLDEN MAYUR", "GOLDEN NEST"],
    bundlePrice: 42000,
    description: "A pair of elegantly crafted accent chairs, perfect for creating a welcoming waiting area or a refined manicure lounge.",
    image: "/products/goldencombo.webp",
  },
  {
    name: "Compact Studio Combo",
    items: ["DIVA D", "EDEN"],
    bundlePrice: 36000,
    description: "Designed for compact salon interiors, this elegant combination of a styling chair and wave-pattern backwash unit delivers exceptional functionality with a refined aesthetic.",
    image: "/products/compact.webp",
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

