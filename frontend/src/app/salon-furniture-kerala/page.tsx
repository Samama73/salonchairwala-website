import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FAQAccordion from "../components/FAQAccordion";

// ============ SEO METADATA ============
export const metadata: Metadata = {
  title: "Salon Furniture Manufacturer & Supplier in Kerala",
  description:
    "Salon Chair Wala supplies premium salon chairs, shampoo chairs, manicure & pedicure stations, facial beds and salon furnishings across Kerala — Kochi, Thiruvananthapuram, Kozhikode, Thrissur and beyond. Custom colors, warranty included.",
  alternates: {
    canonical: "https://www.salonchairwala.com/salon-furniture-kerala/",
  },
  openGraph: {
    title: "Salon Furniture Manufacturer & Supplier in Kerala",
    description:
      "Premium salon furniture supply across Kerala — salon chairs, shampoo units, manicure & pedicure stations, facial beds and more. Custom colors, warranty, fast delivery.",
    url: "https://www.salonchairwala.com/salon-furniture-kerala/",
    images: ["/products/bubbly.webp"],
  },
};

// ============ KERALA CITIES WE DELIVER TO ============
const keralaCities = [
  {
    name: "Kochi",
    slug: "kochi",
    note: "Kerala's commercial hub — we've delivered salon chairs, shampoo units and full station setups to salons across the city, from Marine Drive to Kakkanad.",
  },
  {
    name: "Thiruvananthapuram",
    slug: "trivandrum",
    note: "Regular orders from salons across the capital city, including bulk setups for new salons and single-chair replacements for established ones.",
  },
  {
    name: "Kozhikode",
    slug: "kozhikode",
    note: "A growing base of salon owners here are choosing us for custom-coloured furniture and complete interior fit-outs, backed by warranty support.",
  },
  {
    name: "Thrissur",
    slug: "thrissur",
    note: "Trusted by salons in the state's cultural capital, with deliveries ranging from single manicure stations to complete salon furnishings.",
  },
];

// ============ KERALA-SPECIFIC FAQS ============
const keralaFaqs = [
  {
    question: "Do you deliver salon furniture across Kerala?",
    answer:
      "Yes. We regularly deliver salon furniture to salons across Kerala, including Kochi, Thiruvananthapuram, Kozhikode and Thrissur. Furniture is dispatched from our manufacturing unit and delivered directly to your salon.",
  },
  {
    question: "How long does delivery take to Kerala?",
    answer:
      "Ready-to-dispatch items typically reach Kerala within 7-10 business days. Custom color or fabric orders take 30-35 business days to manufacture before dispatch, depending on quantity.",
  },
  {
    question: "Can I get salon furniture in custom colors for my Kerala salon?",
    answer:
      "Yes, every product can be made in custom colors and upholstery to match your salon's interior. Share your preferred color or fabric with our team on WhatsApp and we'll manufacture it accordingly.",
  },
  {
    question: "Do you offer bulk pricing for new salon setups in Kerala?",
    answer:
      "Yes. If you're opening a new salon or setting up multiple stations anywhere in Kerala, we offer special bulk pricing. Contact us on WhatsApp with your requirement for a custom quote.",
  },
  {
    question: "Is there a warranty on salon furniture delivered to Kerala?",
    answer:
      "Every product comes with a manufacturer warranty covering the hydraulic base, frame and structural components against manufacturing defects, along with after-sales support for genuine spare parts.",
  },
];

const WHATSAPP_NUMBER = "919145097466";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'm looking for salon furniture in Kerala. Please share details and pricing."
)}`;

export default function SalonFurnitureKeralaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: keralaFaqs.map((faq) => ({
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
            name: "Salon Furniture Kerala",
            url: "https://www.salonchairwala.com/salon-furniture-kerala",
          },
        ]}
      />

      <Navbar />

      <main className="bg-slate-50 font-sans">
        {/* 1. H1 + INTRO */}
        <section className="bg-white border-b border-gray-100 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              God&apos;s Own Country
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-950 leading-tight font-elegant">
              Salon Furniture Manufacturer &amp; Supplier in Kerala
            </h1>
            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Salon Chair Wala is a well-known name among salon owners across
              Kerala. We manufacture and deliver salon chairs, shampoo
              units, manicure &amp; pedicure stations and facial beds
              straight from our factory, with custom colors and warranty
              included.
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

        {/* 2. STATS STRIP */}
        <section className="bg-[#82181A] py-10">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-white text-3xl sm:text-4xl font-black">4+</p>
              <p className="text-red-100 text-xs sm:text-sm uppercase tracking-wide mt-1">
                Major Cities Served
              </p>
            </div>
            <div>
              <p className="text-white text-3xl sm:text-4xl font-black">
                7-10
              </p>
              <p className="text-red-100 text-xs sm:text-sm uppercase tracking-wide mt-1">
                Days Delivery
              </p>
            </div>
            <div>
              <p className="text-white text-3xl sm:text-4xl font-black">
                100%
              </p>
              <p className="text-red-100 text-xs sm:text-sm uppercase tracking-wide mt-1">
                Self-Manufactured
              </p>
            </div>
            <div>
              <p className="text-white text-3xl sm:text-4xl font-black">✓</p>
              <p className="text-red-100 text-xs sm:text-sm uppercase tracking-wide mt-1">
                Warranty Backed
              </p>
            </div>
          </div>
        </section>

        {/* 3. AREAS SERVED — CITY CARDS (CLICKABLE) */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-4 font-elegant">
            Delivering to Salons Across Kerala
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            From bustling commercial hubs to growing salon markets, here are
            some of the Kerala cities we regularly deliver to. Tap a city to
            see furniture setups we've completed there.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keralaCities.map((city) => (
              <Link
                key={city.name}
                href={`/${city.slug}`}
                className="flex bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 sm:w-24 shrink-0 bg-[#82181A] flex items-center justify-center">
                  <span className="text-white text-4xl sm:text-5xl font-black font-elegant">
                    {city.name.charAt(0)}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-gray-950 text-lg">
                      {city.name}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span className="text-green-700 text-xs font-semibold">
                      Delivering
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {city.note}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-8">
            Don&apos;t see your city? We deliver across Kerala — message us
            on WhatsApp and we&apos;ll confirm your location.
          </p>
        </section>

        {/* 4. DELIVERY / SERVICE INFO */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-6 font-elegant">
              How Delivery to Kerala Works
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              We ship salon furniture across Kerala directly from our
              manufacturing unit. Ready-to-dispatch products usually reach
              you within 7-10 business days, while custom color or fabric
              orders take 30-35 business days to manufacture before
              dispatch. Our team coordinates delivery, shares tracking
              updates, and assists with installation guidance once your
              furniture arrives.
            </p>
          </div>
        </section>

        {/* 5. FAQs */}
        <FAQAccordion faqs={keralaFaqs} />

        {/* 6. FINAL CTA */}
        <section className="bg-[#82181A] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-elegant">
              Setting Up a Salon in Kerala?
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-8">
              Get a custom quote for your salon furniture requirement — chairs,
              shampoo units, manicure stations and more, delivered anywhere
              in Kerala.
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