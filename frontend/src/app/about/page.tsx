import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FoundersSection from "@/components/FoundersSection";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "About Us | Salon Chair Wala",
  description:
    "From a small shop in Ulhasnagar in 2021 to our own manufacturing unit in Kalyan today — the Salon Chair Wala story of quality, trust, and pan-India delivery.",
};

const TIMELINE = [
  {
    year: "2021",
    title: "The First Shop",
    text: "Salon Chair Wala opens in Ulhasnagar under Redwal Furnitures OPC Pvt. Ltd. manufacturing our own furniture in-house from day one, on a smaller scale.",
  },
  {
    year: "2022",
    title: "Word Started Spreading",
    text: "Repeat orders from happy salon owners became our biggest source of new customers. We doubled down on build quality over cutting corners.",
  },
  {
    year: "2023",
    title: "Beyond Maharashtra",
    text: "Orders started coming in from outside our home state. We built out reliable pan-India shipping so any salon, anywhere, could order with confidence.",
  },
  {
    year: "2024",
    title: "Expanding The Range",
    text: "From single chairs to complete salon setups — we started offering fully bundled packages so new salons could open their doors without chasing a shopping list.",
  },
  {
    year: "2025",
    title: "Custom, By Default",
    text: "Custom colors and made-to-order finishes became standard, not an upsell because every salon's interior deserves furniture that actually matches.",
  },
  {
    year: "2026",
    title: "A Bigger Home",
    text: "We moved into Bhumi World, Kalyan — a larger, dedicated facility that houses both our manufacturing unit and our showroom under one roof.",
  },
];

const STATS = [
  { value: "2021", label: "Founded" },
  { value: "5+", label: "Years in Business" },
  { value: "100%", label: "In-House Made" },
  { value: "Pan-India", label: "Delivery" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 overflow-hidden font-sans selection:bg-red-900 selection:text-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://salonchairwala.com" },
          { name: "About Us", url: "https://salonchairwala.com/about" },
        ]}
      />

      {/* 1. HERO SECTION (Premium Grid & Glow) */}
        <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-24 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[65vh] bg-white border-b border-gray-100">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

        <span className="absolute -top-10 right-4 sm:right-16 text-[10rem] sm:text-[18rem] font-black text-red-900/[0.02] select-none pointer-events-none leading-none font-elegant tracking-tighter">
          Est.
        </span>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/5 border border-red-900/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-900 animate-pulse" />
            <p className="text-red-900 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              Our Story
            </p>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mt-4 tracking-tight font-elegant text-gray-950 leading-[1.05]">
            Built By Hand.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-950 via-red-900 to-red-800">
              Trusted By Salons.
            </span>
          </h1>
          <p className="text-gray-500 mt-8 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed font-light">
            What began as a small outlet in Ulhasnagar in 2021 is today a
            self-manufactured, pan-India salon furniture brand built one
            honest conversation with a salon owner at a time.
          </p>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <div className="relative z-20 -mt-12 sm:-mt-16 max-w-5xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-4 sm:p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-x divide-gray-100/50">
            {STATS.map((s) => (
              <div key={s.label} className="text-center group px-2">
                <p className="text-2xl sm:text-4xl font-black text-gray-950 font-elegant transition-colors group-hover:text-red-900">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-2 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. TIMELINE / HISTORY (Interactive Layout) */}
      <section className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black font-elegant text-gray-950 mt-3">
            The Journey
          </h2>
          <div className="w-16 h-1 bg-red-900 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-[23px] sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-900/20 via-gray-200 to-transparent sm:-translate-x-1/2 rounded-full" />

          <div className="space-y-12 sm:space-y-24">
            {TIMELINE.map((item, idx) => (
              <div
                key={item.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16 group ${
                  idx % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Dot with pulse effect */}
                <div className="absolute left-[13px] sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-red-900 z-10 group-hover:scale-125 group-hover:bg-red-900 transition-all duration-300 shadow-[0_0_15px_rgba(153,27,27,0.3)]" />

                {/* Content Card */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                  <div className={`bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:shadow-[0_20px_40px_-15px_rgba(153,27,27,0.1)] group-hover:-translate-y-1 transition-all duration-500 ${
                    idx % 2 === 1 ? "sm:mr-12 text-left" : "sm:ml-12 sm:text-right"
                  }`}>
                    <span className="inline-block text-2xl font-black text-gray-200 font-elegant mb-2 group-hover:text-red-900/20 transition-colors">
                      {item.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-950 font-elegant mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING (Dark Mode Visual Break - Extremely Premium) */}
      <section className="bg-gray-950 py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle dark pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-end mb-20">
            <div className="flex-1 text-left">
              <p className="text-red-500 font-semibold uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-red-500"></span> Factory Direct
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-elegant text-white leading-tight">
                Crafted By Hand,<br /> Not Outsourced.
              </h2>
            </div>
            <p className="flex-1 text-gray-400 text-base sm:text-lg leading-relaxed border-l border-gray-800 pl-6 md:pl-10">
              We&apos;ve manufactured our own furniture in-house since 2021. Our massive facility at Bhumi World, Kalyan handles everything from raw steel to the final stitch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Design", text: "Built strictly on what salons demand — ergonomics, deep comfort, and durability." },
              { step: "02", title: "Fabricate", text: "Heavy-duty frames welded in-house to our exact tested specifications." },
              { step: "03", title: "Finish", text: "Premium upholstery and custom paintwork done precisely by skilled craftsmen." },
              { step: "04", title: "Deliver", text: "Strict quality checks before it leaves our floor directly for your salon." },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative bg-gray-900 border border-gray-800 hover:border-red-900/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-900/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="block text-5xl font-black text-gray-800 font-elegant mb-6 group-hover:text-red-900/40 transition-colors">
                  {item.step}
                </span>
                <h3 className="font-bold text-white text-xl mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDERS (Sleek Glass Cards) */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black font-elegant text-gray-950">
              Meet The Visionaries
            </h2>
            <div className="w-16 h-1 bg-red-900 mx-auto mt-6 rounded-full" />
          </div>
          <FoundersSection />
        </div>
      </section>

      {/* 5. CITIES SERVED (Bold Map Replacement) */}
      <section className="relative bg-red-950 py-24 sm:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] sm:text-[25rem] font-black text-white/[0.03] select-none pointer-events-none leading-none font-elegant tracking-tighter">
          INDIA
        </span>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black font-elegant text-white mb-6">
            Delivering Pan-India
          </h2>
          <p className="text-red-100/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            From our grand facility in Kalyan, we ship premium salon furniture
            across the nation. Unmatched demand in <span className="font-semibold text-white">Mumbai, Thane, and Pune</span>, with a rapidly growing footprint nationwide.
          </p>
        </div>
      </section>

      {/* 6. WHY TRUST US (Modern Bento Grid) */}
      <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black font-elegant text-gray-950">
            The Salon Chair Wala Edge
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Why top salons choose us over the rest.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-100 to-white border border-gray-200 rounded-[2rem] p-8 sm:p-12 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-red-900 text-2xl">
              🏭
            </div>
            <h3 className="font-black text-gray-950 text-2xl sm:text-3xl mb-4 font-elegant">
              Our Own Factory
            </h3>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
              No middlemen, no outsourcing excuses. What we design is exactly what we build giving us absolute control over materials, build strength, and flawless finishing.
            </p>
          </div>

          {/* Small Card 1 */}
          <div className="bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-900 text-xl">
              🎨
            </div>
            <h3 className="font-bold text-gray-950 text-xl mb-3 font-elegant">
              Custom Themes
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We tailor upholstery colors and base finishes so the furniture matches your salon's exact vibe.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-900 text-xl">
              ⏳
            </div>
            <h3 className="font-bold text-gray-950 text-xl mb-3 font-elegant">
              Time-Tested
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              5+ years of feedback from real Indian salons ensures our chairs withstand heavy daily traffic.
            </p>
          </div>

          {/* Medium Card (Spans 2 on Tablet/Desktop) */}
          <div className="md:col-span-2 bg-gray-950 rounded-[2rem] p-8 sm:p-12 text-white overflow-hidden relative group">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-red-900/20 rounded-tl-full blur-3xl group-hover:bg-red-900/40 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 text-white text-xl">
                💬
              </div>
              <h3 className="font-black text-white text-2xl sm:text-3xl mb-4 font-elegant">
                Real, Direct Support
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
                No automated bots or confusing ticketing systems. Want to order or check status? Reach the founders directly on a phone call or WhatsApp.
              </p>
            </div>
          </div>
        </div>
     </section>
    </main>
    </>
  );
}