// ============ BLOG DATA ============
// 👉 Yahan naye blog posts add karne ke liye bas is array mein ek naya object add karo

export type BlogPost = {
  slug: string;          // URL: /blog/[slug]
  title: string;
  excerpt: string;       // listing page + meta description ke liye
  content: string[];     // har string ek paragraph hai
  coverImage: string;    // /public folder ka path
  publishedDate: string; // "2026-08-14"
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-salon-chairs-for-small-salons",
    title: "Best Salon Chairs for Small Salons in Mumbai (2026 Guide)",
    excerpt:
      "Setting up a small salon? Here's how to choose the right hydraulic salon chairs that save space without compromising comfort or durability.",
    coverImage: "/products/bubbly.webp",
    publishedDate: "2026-08-01",
    content: [
      "Setting up a salon in a compact space doesn't mean you have to compromise on quality or client comfort. The right salon chair can make all the difference between a cramped-feeling salon and one that feels professional and welcoming.",
      "When choosing salon chairs for a small salon, prioritize compact footprint designs with a stable hydraulic base — this ensures durability without taking up excess floor space. Chairs like the BUBBLY or DIVA D from our collection are specifically engineered for space-optimized urban salon setups.",
      "Another important factor is upholstery material. Choose easy-to-clean, stain-resistant fabric since small salons often see higher chair turnover per square foot. Custom color options also help match the chair to your salon's existing interior theme without needing a full renovation.",
      "Finally, always check the warranty and after-sales support offered by the manufacturer. A good warranty on the hydraulic pump and frame protects your investment for years of daily professional use.",
    ],
  },
  {
    slug: "how-to-choose-salon-furniture-mumbai",
    title: "How to Choose the Right Salon Furniture in Mumbai",
    excerpt:
      "A practical guide for salon owners in Mumbai on choosing chairs, shampoo stations and furnishings that balance cost, durability and style.",
    coverImage: "/products/wave.webp",
    publishedDate: "2026-08-05",
    content: [
      "Choosing salon furniture is one of the most important decisions a salon owner makes — it directly affects client experience, staff efficiency, and your salon's overall brand image.",
      "Start by listing your must-have stations: styling chairs, shampoo/backwash units, manicure & pedicure stations, and facial beds. Prioritize based on your services and available floor space.",
      "For Mumbai's humid climate, look for furniture with moisture-resistant frames and ceramic basins (for shampoo chairs) that won't corrode over time. Ceramic basins used in units like our WAVE and EDEN shampoo chairs are built for exactly this kind of daily, high-usage environment.",
      "Budget matters too — but the cheapest option often costs more in the long run due to frequent repairs. Look for manufacturers offering genuine warranty coverage and local (Mumbai-based) after-sales support, so replacement parts and servicing are quick and hassle-free.",
    ],
  },
  {
  slug: "barber-chair-buying-guide",
  title: "Barber Chair Buying Guide: What to Check Before You Buy (2026)",
  excerpt:
    "Buying a barber chair for your shop? Here's what actually matters — hydraulics, recline mechanism, upholstery, and warranty — before you spend your money.",
  coverImage: "/products/gmayur.webp",
  publishedDate: "2026-08-19",
  content: [
    "A barber chair isn't just seating — it's the centerpiece of your shop and the one piece of furniture your client sits in for the longest stretch of time. Getting it wrong means daily complaints about comfort, or worse, a chair that breaks down within a year of heavy use.",
    "Start with the hydraulic pump. This is the single most common point of failure in cheap barber chairs. Look for a heavy-duty pump rated for continuous daily use, not the lighter pumps used in home or occasional-use furniture. Our Golden Mayur barber chair, for instance, is built around a heavy-duty pump specifically rated for all-day shop use — ask any manufacturer directly what pump rating they use, and a serious one will have a straight answer.",
    "Next, check the recline mechanism. A good barber chair should recline smoothly for shaves and neck-tilt services without feeling loose or wobbly. Test this in person if you can, or ask for a video demo before ordering — recline mechanisms are hard to judge from photos alone.",
    "Upholstery matters more than it looks. Barber chairs see constant contact with hair clippings, water, and cleaning chemicals throughout the day. PU leather or vinyl with reinforced stitching holds up far better than fabric or low-grade synthetic leather, which tends to crack and peel within months.",
    "Base and footrest stability is often overlooked. A wide, weighted base prevents tipping when clients get in and out repeatedly through the day, and a footrest that doesn't wobble adds to the perceived quality of your shop, not just the chair itself.",
    "Finally, ask about warranty specifics — not just 'warranty included,' but exactly what's covered: the hydraulic pump, the frame, or just the upholstery. Chairs like the Golden Mayur, manufactured in-house rather than resold from someone else's stock, tend to come with clearer, longer warranty terms because the maker controls the build quality end to end.",
  ],
},
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}