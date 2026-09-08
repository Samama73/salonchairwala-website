import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Salon Chair Wala",
  description:
    "Get in touch with Salon Chair Wala — visit our showroom in Bhiwandi, call, email, or message us on WhatsApp for salon furniture enquiries.",
};

const PHONE_DISPLAY = "+91 91450 97466";
const PHONE_RAW = "919145097466";
const EMAIL = "redwalenterprises@gmail.com";
const ADDRESS_LINE_1 = "206, F4 Building, Bhumi World"; 
const ADDRESS_LINE_2 = "Bhiwandi-Kalyan Bypass, Kalyan, Maharashtra";
const MAP_EMBED_SRC =
    "https://www.google.com/maps?q=19.2651558,73.0716213&output=embed"; 

const CONTACT_CARDS = [
  {
    key: "phone",
    label: "Phone Support",
    value: PHONE_DISPLAY,
    href: "tel:" + PHONE_RAW,
    sub: "Mon-Sun, 10 AM - 6 PM",
    icon: "📞",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "Chat With Us",
    href:
      "https://api.whatsapp.com/send/?phone=" +
      PHONE_RAW +
      "&text=" +
      encodeURIComponent("Hi, I'd like to know more about your salon furniture.") +
      "&type=phone_number&app_absent=0",
    sub: "Fastest way to reach us",
    icon: "💬",
  },
  {
    key: "email",
    label: "Email Us",
    value: EMAIL,
    href: "mailto:" + EMAIL,
    sub: "We reply within 24 hours",
    icon: "✉️",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white font-sans selection:bg-red-900 selection:text-white pb-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://salonchairwala.com" },
          { name: "Contact Us", url: "https://salonchairwala.com/contact" },
        ]}
      />

      {/* 1. HERO SECTION (Beige/Amber Gradient) */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-white pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-xs mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-elegant text-gray-950 mb-6">
            Let's Talk Furniture.
          </h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Whether you need a single chair or a complete salon setup, our team is here to help. Reach out to us directly — no bots, just real people.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CARDS (OVERLAPPING DESIGN WITH MAROON ACCENTS) */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 sm:-mt-20 relative z-10">
        <div className="grid sm:grid-cols-3 gap-6">
          {CONTACT_CARDS.map((card) => (
            <a
              key={card.key}
              href={card.href}
              target={card.key === "whatsapp" ? "_blank" : undefined}
              rel={card.key === "whatsapp" ? "noopener noreferrer" : undefined}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-red-900/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-red-900/5 border border-red-900/10 flex items-center justify-center mb-5 text-xl group-hover:bg-red-900 transition-colors">
                <span className="text-red-900 group-hover:hidden">{card.icon}</span>
                <span className="text-white hidden group-hover:block">{card.icon}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-900/70 mb-2 group-hover:text-red-900 transition-colors">
                {card.label}
              </p>
              <p className="text-gray-950 font-bold text-lg font-elegant break-words w-full">
                {card.value}
              </p>
              <p className="text-gray-500 text-sm mt-2">{card.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 3. SHOWROOM + MAP (MAROON BOX & SLEEK MAP) */}
      <section className="max-w-6xl mx-auto px-6 pt-24 sm:pt-32">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          
          {/* Address Details Block (Maroon Theme) */}
          <div className="lg:col-span-5 bg-red-900 p-10 sm:p-14 text-white flex flex-col justify-between">
            <div>
              <p className="text-amber-200 font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-amber-200"></span> Visit Factory
              </p>
              <h2 className="text-3xl sm:text-4xl font-elegant font-bold leading-tight mb-8">
                Our Showroom <br/> & Manufacturing
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-amber-100/60 text-xs uppercase tracking-widest mb-1">Address</p>
                  <p className="text-white font-medium text-lg leading-snug">
                    {ADDRESS_LINE_1}
                  </p>
                  <p className="text-amber-50/80 text-sm mt-1 leading-relaxed">
                    {ADDRESS_LINE_2}
                  </p>
                </div>

                <div>
                  <p className="text-amber-100/60 text-xs uppercase tracking-widest mb-1">Working Hours</p>
                  <p className="text-amber-50/90 text-sm">Mon - Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href={
                "https://api.whatsapp.com/send/?phone=" +
                PHONE_RAW +
                "&text=" +
                encodeURIComponent("Hi, I'd like to visit your showroom today.") +
                "&type=phone_number&app_absent=0"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold bg-white text-red-900 hover:bg-amber-50 transition-colors w-full sm:w-fit"
            >
              Schedule a Visit
            </a>
          </div>

          {/* Map Embed Block */}
          <div className="lg:col-span-7 bg-gray-100 min-h-[400px]">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Chair Wala Showroom Location"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </section>
    </main>
  );
}