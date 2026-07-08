export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  dispatch?: boolean;
};

export const allProducts: Product[] = [
  { name: "BUBBLY", price: 18000, description: "Hydraulic salon chair engineered for daily professional use with ergonomic seating support.", image: "/products/bubbly.webp" },
  { name: "ROYAL DIAMOND", price: 15000, description: "Precision-built styling chair with balanced comfort and long-term structural durability.", image: "/products/royaldiamond.webp", dispatch: true },
{ name: "GOLDEN MAYUR", price: 22000, description: "High-grade salon chair featuring reinforced frame and premium finish for luxury setups.", image: "/products/mayur.webp", dispatch: true },
  { name: "QUEEN", price: 18000, description: "Comfort-focused salon chair designed for extended usage with stable hydraulic mechanism.", image: "/products/queen.webp" },
  { name: "LUXURY LAYER", price: 23000, description: "Multi-layer cushioned seating system designed for enhanced client comfort and support.", image: "/products/luxurylayer.webp", dispatch: true },
  { name: "MAHARAJA", price: 28000, description: "Robust salon chair built with industrial-grade materials for consistent professional performance.", image: "/products/maharaja.webp" },
  { name: "BEAST ROBUST", price: 65000, description: "Heavy-duty salon chair engineered for high-usage environments with maximum stability.", image: "/products/beast.webp" },
  { name: "LUXA", price: 18000, description: "Minimalist salon chair with refined finishing and modern ergonomic design structure.", image: "/products/luxa.webp", dispatch: true },
  { name: "EDEN", price: 28000, description: "Ultra-premium salon chair with advanced hydraulic system and luxury-grade cushioning.", image: "/products/eden.webp" },
  { name: "SOFA", price: 22000, description: "Designed for modern salons with sleek design and enhanced client comfort support.", image: "/products/sofa.webp" },
  { name: "DIVA D", price: 22000, description: "Compact yet powerful salon chair ideal for urban salon setups with space optimization.", image: "/products/diva.webp" },
  { name: "GOLDEN D", price: 18000, description: "Top-tier salon chair offering maximum durability, comfort, and premium professional finish.", image: "/products/goldend.webp" },
  { name: "BLACK TROLLEY", price: 5200, description: "Durable multi-tier salon trolley designed for effortless mobility and smart storage.", image: "/products/kostech.webp", dispatch: true },
  { name: "WHITE TROLLEY", price: 5200, description: "Stylish multi-tier salon trolley offering smooth mobility and optimized storage.", image: "/products/white.webp", dispatch: true },
  { name: "FACIAL STEAMER", price: 3600, description: "High-performance facial steamer designed for deep pore purification and skin hydration.", image: "/products/steamr.webp", dispatch: true },
  { name: "HAIR STEAMER", price: 4500, description: "High-performance hair steamer designed for deep conditioning and moisture retention.", image: "/products/hstreamer.webp", dispatch: true },
];

const CHAIRS = [
  "Bubbly Salon Chair", "Royal Diamond", "Golden Mayur", "SLIXA BUBBLY",
  "LUXURY LAYER", "FULL DUCK", "BEAST ROBUST", "LUXA", "EDEN", "SOFA",
  "DIVA D", "GOLDEN D",
];

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
