import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FAQAccordion from "../components/FAQAccordion";
import CaseStudyVideo from "../components/CaseStudyVideo";

export const metadata: Metadata = {
  title: "Salon Furniture Supplier in Thiruvananthapuram | Salon Chair Wala",
  description:
    "Setting up a salon in Thiruvananthapuram (Trivandrum)? Salon Chair Wala manufactures and ships hydraulic salon chairs, shampoo units, manicure stations and facial beds with custom colors and warranty.",
  alternates: {
    canonical: "https://www.salonchairwala.com/trivandrum/",
  },
  openGraph: {
    title: "Salon Furniture Supplier in Thiruvananthapuram | Salon Chair Wala",
    description:
      "Hydraulic salon chairs, shampoo units, manicure stations and facial beds — delivered to Thiruvananthapuram with custom colors and warranty support.",
    url: "https://www.salonchairwala.com/trivandrum/",
    images: ["/products/bubbly.webp"],
  },
};

const trivandrumFaqs = [
  {
    question: "Do you deliver salon furniture to Thiruvananthapuram?",
    answer:
      "Yes. We regularly deliver salon chairs, shampoo units and stations to salons across Thiruvananthapuram, the capital city.",
  },
  {
    question: "How long does delivery take to Thiruvananthapuram?",
    answer:
      "Ready-to-dispatch items typically reach Thiruvananthapuram within 7-10 business days. Custom colour or fabric orders take 30-35 business days to manufacture before dispatch.",
  },
  {
    question: "Can I order in bulk for a new salon in Thiruvananthapuram?",
    answer:
      "Yes. Message us on WhatsApp with your requirement — number of chairs, stations, colour theme — and we'll put together a single bulk quote.",
  },
  {
    question: "Is there a warranty on furniture delivered here?",
    answer:
      "Every product comes with a manufacturer warranty on the hydraulic base, frame and structural components, along with after-sales support for spare parts.",
  },
];

const WHATSAPP_NUMBER = "919145097466";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'm looking for salon furniture in Thiruvananthapuram. Please share details and pricing."
)}`;

export default function TrivandrumPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trivandrumFaqs.map((faq) => ({
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
          {
            name: "Thiruvananthapuram",
            url: "https://www.salonchairwala.com/trivandrum",
          },
        ]}
      />

      <Navbar />

      <main className="bg-slate-50 font-sans">
        <section className="bg-white border-b border-gray-100 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Thiruvananthapuram, Kerala
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-950 leading-tight font-elegant">
              Salon Furniture Supplier in Thiruvananthapuram
            </h1>
            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Salon Chair Wala manufactures and delivers salon chairs,
              shampoo units, manicure &amp; pedicure stations and facial
              beds to salons across Kerala's capital city, with custom
              colours and warranty included.
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

        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-6 font-elegant">
              Delivering Across Thiruvananthapuram
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              From bulk setups for new salons to single-chair replacements
              for established ones, we've supplied salon furniture across
              Thiruvananthapuram. Ready-to-dispatch items usually reach you
              within 7-10 business days, with custom colour orders taking
              30-35 business days to manufacture before dispatch.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-4 font-elegant">
            Audrey's Beauty Salon — Salon Furniture Setup in Thiruvananthapuram
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-8">
            A look at the salon furniture setup we completed for Audrey's Beauty Salon in
            Thiruvananthapuram — salon chairs, shampoo units and workstations
            manufactured and installed on-site.
          </p>
          <CaseStudyVideo
            video="/videos/trivandrum.mp4"
            ariaLabel="Audrey's Beauty Salon salon furniture installation in Thiruvananthapuram"
          />
        </section>

        <FAQAccordion faqs={trivandrumFaqs} />

        <section className="bg-[#82181A] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-elegant">
              Furnishing a Salon in Thiruvananthapuram?
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-8">
              Tell us what you need and we'll put together a quote — chairs,
              shampoo units, stations and more, delivered to your door.
            </p>
            <a
              href={whatsappHref}
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