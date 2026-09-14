import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FAQAccordion from "../components/FAQAccordion";
import CaseStudyVideo from "../components/CaseStudyVideo";

export const metadata: Metadata = {
  title: "Salon Furniture Supplier in Kochi | Chairs, Shampoo Units & More",
  description:
    "Setting up or renovating a salon in Kochi? Salon Chair Wala manufactures and ships hydraulic salon chairs, shampoo units, manicure stations and facial beds to Kochi with custom colors and warranty.",
  alternates: {
    canonical: "https://www.salonchairwala.com/kochi/",
  },
  openGraph: {
    title: "Salon Furniture Supplier in Kochi | Chairs, Shampoo Units & More",
    description:
      "Hydraulic salon chairs, shampoo units, manicure stations and facial beds — delivered to Kochi with custom colors and warranty support.",
    url: "https://www.salonchairwala.com/kochi/",
    images: ["/products/bubbly.webp"],
  },
};

const kochiFaqs = [
  {
    question: "Do you deliver salon furniture to Kochi?",
    answer:
      "Yes. Kochi is one of the Kerala cities we deliver to most frequently — from salons near Marine Drive to newer setups in Kakkanad and Edappally.",
  },
  {
    question: "How long does delivery take to Kochi?",
    answer:
      "Ready-to-dispatch items typically reach Kochi within 7-10 business days. Custom color or fabric orders take 30-35 business days to manufacture before dispatch.",
  },
  {
    question: "Can I get custom colours for my Kochi salon?",
    answer:
      "Yes, send us your interior colour palette or reference photos on WhatsApp and we'll manufacture the upholstery and base finish to match.",
  },
  {
    question: "Do you offer bulk pricing for new salon setups in Kochi?",
    answer:
      "Yes. If you're opening a new salon or fitting out multiple stations in Kochi, message us on WhatsApp for a single bulk quote.",
  },
];

const WHATSAPP_NUMBER = "919145097466";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'm looking for salon furniture in Kochi. Please share details and pricing."
)}`;

export default function KochiPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kochiFaqs.map((faq) => ({
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
          { name: "Kochi", url: "https://www.salonchairwala.com/kochi" },
        ]}
      />

      <Navbar />

      <main className="bg-slate-50 font-sans">
        <section className="bg-white border-b border-gray-100 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Kochi, Kerala
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-950 leading-tight font-elegant">
              Salon Furniture Supplier in Kochi
            </h1>
            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Salon Chair Wala manufactures and delivers salon chairs,
              shampoo units, manicure &amp; pedicure stations and facial
              beds to salons across Kochi — from Marine Drive to Kakkanad
              and Edappally — with custom colours and warranty included.
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
              Delivering Across Kochi
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              As Kerala's commercial hub, Kochi has one of our most active
              salon furniture markets — we've supplied everything from
              single styling chairs to complete salon fit-outs here.
              Ready-to-dispatch items usually reach Kochi within 7-10
              business days, with custom colour orders taking 30-35 business
              days to manufacture before dispatch.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 text-center mb-4 font-elegant">
            WeOne Beauty Clinic — Salon Furniture Setup in Kochi
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-8">
            A look at the salon furniture setup we completed for WeOne Beauty Clinic in
            Kochi — salon chairs, shampoo units and workstations
            manufactured and installed on-site.
          </p>
          <CaseStudyVideo
            video="/videos/kochi.mp4"
            ariaLabel="WeOne Beauty Clinic salon furniture installation in Kochi"
          />
        </section>

        <FAQAccordion faqs={kochiFaqs} />

        <section className="bg-[#82181A] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-elegant">
              Furnishing a Salon in Kochi?
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