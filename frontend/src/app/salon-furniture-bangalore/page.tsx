import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FAQAccordion from "../components/FAQAccordion";
import { categoryList, categoryInfo, slugifyCategory } from "@/lib/productData";

// ============ SEO METADATA ============
export const metadata: Metadata = {
  title: "Salon Furniture Manufacturer & Supplier in Bangalore",
  description:
    "Salon Chair Wala supplies premium salon chairs, shampoo chairs, manicure & pedicure stations, facial beds and salon furnishings in Bangalore. Custom colors, warranty included, fast delivery across Bangalore.",
  alternates: {
    canonical: "https://www.salonchairwala.com/salon-furniture-bangalore/",
  },
  openGraph: {
    title: "Salon Furniture Manufacturer & Supplier in Bangalore",
    description:
      "Premium salon furniture supply in Bangalore — salon chairs, shampoo units, manicure & pedicure stations, facial beds and more. Custom colors, warranty, fast delivery.",
    url: "https://www.salonchairwala.com/salon-furniture-bangalore/",
    images: ["/products/bubbly.webp"],
  },
};

// ============ BANGALORE-SPECIFIC FAQS ============
const bangaloreFaqs = [
  {
    question: "Do you deliver salon furniture across Bangalore?",
    answer:
      "Yes. We deliver to all areas of Bangalore including Koramangala, Indiranagar, Whitefield, HSR Layout, Jayanagar, Electronic City, Marathahalli and Hebbal. Furniture is dispatched from our manufacturing unit and delivered directly to your salon.",
  },
  {
    question: "How long does delivery take to Bangalore?",
    answer:
      "Ready-to-dispatch items typically reach Bangalore within 7-10 business days. Custom color or fabric orders take 30-35 business days to manufacture before dispatch, depending on quantity.",
  },
  {
    question: "Can I get salon furniture in custom colors for my Bangalore salon?",
    answer:
      "Yes, every product can be made in custom colors and upholstery to match your salon's interior. Share your preferred color or fabric with our team on WhatsApp and we'll manufacture it accordingly.",
  },
  {
    question: "Do you offer bulk pricing for new salon setups in Bangalore?",
    answer:
      "Yes. If you're opening a new salon or setting up multiple stations in Bangalore, we offer special bulk pricing. Contact us on WhatsApp with your requirement for a custom quote.",
  },
  {
    question: "Is there a warranty on salon furniture delivered to Bangalore?",
    answer:
      "Every product comes with a manufacturer warranty covering the hydraulic base, frame and structural components against manufacturing defects, along with after-sales support for genuine spare parts.",
  },
];

const WHATSAPP_NUMBER = "919145097466";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'm looking for salon furniture in Bangalore. Please share details and pricing."
)}`;

export default function SalonFurnitureBangalorePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bangaloreFaqs.map((faq) => ({
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
            name: "Salon Furniture Bangalore",
            url: "https://www.salonchairwala.com/salon-furniture-bangalore",
          },
        ]}
      />

      <Navbar />

      <main className="bg-slate-50 font-sans">
        {/* 1. H1 + INTRO */}
        <section className="bg-white border-b border-gray-100 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Bangalore
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-950 leading-tight font-elegant">
              Salon Furniture Manufacturer &amp; Supplier in Bangalore
            </h1>
            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Salon Chair Wala supplies premium, self-manufactured salon
              furniture to salons across Bangalore — salon chairs, shampoo
              chairs, manicure &amp; pedicure stations, facial beds and salon
              furnishings, all delivered directly from our factory with
              custom colors and warranty included.
            </p>
            <div className="mt-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#82181A] text-white py-3 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get a Quote on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 2. CATEGORIES / PRODUCTS */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-10 font-elegant">
            Salon Furniture Categories We Supply in Bangalore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryList.map((category) => (
              <Link
                key={category}
                href={`/categories/${slugifyCategory(category)}`}
                className="block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
        </section>

        {/* 3. DELIVERY / SERVICE INFO */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-6 font-elegant">
              Salon Furniture Delivery in Bangalore
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              We ship salon furniture to Bangalore directly from our
              manufacturing unit. Ready-to-dispatch products usually reach
              Bangalore within 7-10 business days, while custom color or
              fabric orders take 30-35 business days to manufacture before
              dispatch. Our team coordinates delivery and shares tracking
              updates, and we also assist with installation guidance once
              your furniture arrives.
            </p>
          </div>
        </section>

        {/* 4. AREAS SERVED */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mb-6 font-elegant">
            Serving Salons Across Bangalore
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We regularly deliver salon furniture to salons in Koramangala,
            Indiranagar, Whitefield, HSR Layout, Jayanagar, Electronic City,
            Marathahalli, Hebbal and other neighbourhoods across Bangalore.
            Wherever your salon is located in the city, we can get your
            furniture delivered to your doorstep.
          </p>
        </section>

        {/* 5. FAQs */}
        <FAQAccordion faqs={bangaloreFaqs} />

        {/* 6. FINAL CTA */}
        <section className="bg-[#82181A] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-elegant">
              Setting Up a Salon in Bangalore?
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-8">
              Get a custom quote for your salon furniture requirement — chairs,
              shampoo units, manicure stations and more, delivered to
              Bangalore.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#82181A] py-3 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Quote on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}