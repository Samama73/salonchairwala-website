import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FAQAccordion from "../components/FAQAccordion";
import TestimonialVideo from "../components/TestimonialVideo";
import { categoryList, categoryInfo, slugifyCategory } from "@/lib/productData";

// ============ SEO METADATA ============
export const metadata: Metadata = {
  title: "Salon Furniture in Hyderabad | Chairs, Shampoo Units & More",
  description:
    "Setting up or renovating a salon in Hyderabad? Salon Chair Wala ships hydraulic salon chairs, shampoo units, manicure stations and facial beds to Hyderabad with custom colors and warranty support.",
  alternates: {
    canonical: "https://www.salonchairwala.com/salon-furniture-hyderabad/",
  },
  openGraph: {
    title: "Salon Furniture in Hyderabad | Chairs, Shampoo Units & More",
    description:
      "Hydraulic salon chairs, shampoo units, manicure stations and facial beds — shipped to Hyderabad with custom colors and warranty support.",
    url: "https://www.salonchairwala.com/salon-furniture-hyderabad/",
    images: ["/products/wave.webp"],
  },
};

// ============ HYDERABAD-SPECIFIC FAQS ============
const hyderabadFaqs = [
  {
    question: "I'm opening a new salon in Hyderabad — where do I start?",
    answer:
      "Message us on WhatsApp with your salon's size (number of chairs/stations) and interior theme. We'll suggest a furniture package — chairs, shampoo units, stations — and give you a single bulk quote with delivery timeline to Hyderabad.",
  },
  {
    question: "Can I match the furniture to my salon's colour theme?",
    answer:
      "Yes, this is one of our most requested customizations. Send us your interior colour palette or reference photos on WhatsApp and we'll manufacture the upholstery and base finish to match.",
  },
  {
    question: "What's the typical order-to-delivery timeline for Hyderabad?",
    answer:
      "Stock items ship out and typically arrive in Hyderabad within 7-10 business days. If you've asked for a custom colour or fabric, it takes 30-35 business days to manufacture before dispatch, depending on quantity.",
  },
  {
    question: "Do you replace parts if something breaks after installation?",
    answer:
      "Yes, structural components like the hydraulic base and frame are covered under manufacturer warranty. If something needs replacing, contact our support team with your order details and we'll arrange genuine spare parts.",
  },
  {
    question: "Can I see the furniture before ordering in bulk?",
    answer:
      "We share detailed photos, videos and dimensions of every product on WhatsApp before you order. For large bulk orders, we can also arrange sample pieces on request.",
  },
];

const WHATSAPP_NUMBER = "919145097466";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'm setting up a salon in Hyderabad and need furniture. Can you share a quote?"
)}`;

export default function SalonFurnitureHyderabadPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hyderabadFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.salonchairwala.com" },
          {
            name: "Salon Furniture Hyderabad",
            url: "https://www.salonchairwala.com/salon-furniture-hyderabad",
          },
        ]}
      />

      <Navbar />

      <main className="bg-slate-50 font-sans">
        {/* 1. H1 + INTRO */}
        <section className="bg-white border-b border-gray-100 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Serving Hyderabad
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-950 leading-tight font-elegant">
              Salon Furniture in Hyderabad — Chairs, Shampoo Units &amp; Stations
            </h1>
            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re opening a new salon or replacing worn-out
              chairs, Salon Chair Wala manufactures and ships salon furniture
              straight to Hyderabad. One supplier for your entire salon —
              styling chairs, shampoo units, manicure &amp; pedicure stations
              and facial beds — with custom colours built to order.
            </p>
            <div className="mt-8">
              
            <a    href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#82181A] text-white py-3 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 2. WHY HYDERABAD SALONS CHOOSE US */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-10 font-elegant">
            Why Salons in Hyderabad Order From Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 text-red-900 text-xl">
                🏭
              </div>
              <h3 className="font-bold text-gray-950 text-lg mb-2">
                One Supplier, Full Setup
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Order chairs, shampoo units and stations together so
                everything arrives on the same timeline instead of chasing
                multiple vendors.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 text-red-900 text-xl">
                🎨
              </div>
              <h3 className="font-bold text-gray-950 text-lg mb-2">
                Built To Your Theme
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Send your interior colours or mood board — we manufacture the
                upholstery and finish to match, not the other way around.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 text-red-900 text-xl">
                📦
              </div>
              <h3 className="font-bold text-gray-950 text-lg mb-2">
                Bulk Orders, Handled Directly
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Setting up multiple stations? Talk to the founders directly
                on WhatsApp for a single bulk quote — no back-and-forth with
                a sales team.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PRODUCT RANGE */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-4 font-elegant">
              What We Ship to Hyderabad
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
              Everything a salon needs, from a single styling chair to a
              complete interior fit-out.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryList.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${slugifyCategory(category)}`}
                  className="block bg-slate-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-950 text-lg mb-2">
                    {category}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {categoryInfo[category].tagline}
                  </p>
                  <span className="inline-block mt-4 text-red-900 font-semibold text-sm">
                    View {category} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ORDER PROCESS */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-10 font-elegant">
            How Ordering to Hyderabad Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Tell us what you need",
                text: "Message us on WhatsApp with the products, quantity, and your salon's colour theme, if any.",
              },
              {
                step: "2",
                title: "Get a quote & timeline",
                text: "We confirm pricing, customization details, and an expected delivery window for Hyderabad.",
              },
              {
                step: "3",
                title: "Manufacturing & dispatch",
                text: "Stock items are dispatched right away; custom-colour orders are made to order and shipped once ready.",
              },
              {
                step: "4",
                title: "Delivery to your salon",
                text: "Furniture is delivered directly to your address in Hyderabad, with support for setup and installation.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 items-start bg-white border border-gray-200 rounded-2xl p-6"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-[#82181A] text-white font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-950 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. AREAS SERVED */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mb-6 font-elegant">
              Delivering Across Hyderabad
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              From salons in Banjara Hills and Jubilee Hills to newer setups
              in Madhapur, Gachibowli and Kondapur, or established chains
              near Secunderabad and Kukatpally — we&apos;ve delivered salon
              furniture across Hyderabad's beauty and wellness hubs.
              Wherever your salon is located, we'll get your order there.
            </p>
          </div>
        </section>

        {/* 5B. TESTIMONIAL */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-10 font-elegant">
            What Hyderabad Salons Say About Us
          </h2>
          <TestimonialVideo />
        </section>

        {/* 6. FAQs */}
        <FAQAccordion faqs={hyderabadFaqs} />

        {/* 7. FINAL CTA */}
        <section className="bg-[#82181A] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-elegant">
              Ready to Furnish Your Hyderabad Salon?
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-8">
              Tell us what you're setting up and we'll put together a quote
              — chairs, shampoo units, stations, and more, delivered to your
              door.
            </p>
            
            <a  href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#82181A] py-3 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}