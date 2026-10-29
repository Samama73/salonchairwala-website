import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import FeaturedProducts from "./components/FeaturedProducts";
import HappyClients from "./components/HappyClients";
import InstagramSection from "./components/InstagramSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import FeaturesSection from "./components/FeaturesSection";
import InteractiveBanner from "./components/InteractiveBanner";

// 👉 Next.js ka Image component import kiya hai fast loading ke liye
import Image from "next/image";
// 👉 Link import kiya hai navigation ke liye
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />

    <section className="flex justify-center bg-[#FEFCF7] px-4 py-6 md:py-8">
      <Link 
        href="/readytomove" 
        className="w-full max-w-2xl bg-[#82181A] text-white py-3 md:py-4 rounded-xl text-center font-bold text-lg md:text-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Ready to Order? Click Here
      </Link>
    </section>

      <InteractiveBanner />

      <BestSellers />
      <FeaturedProducts />
      <FeaturesSection />
      <HappyClients />
      <InstagramSection />
      <Testimonials />

      <section className="bg-[#FEFCF7] border-t border-red-900/10 px-4 py-12 md:py-16">s
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-900 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
            Pan-India Delivery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mt-3 font-elegant">
            We Deliver Salon Furniture Across India
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            {[
              { href: "/salon-furniture-hyderabad", label: "Salon Furniture in Hyderabad" },
              { href: "/salon-furniture-bangalore", label: "Salon Furniture in Bangalore" },
              { href: "/salon-furniture-kerala", label: "Salon Furniture in Kerala" },
            ].map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#82181A] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-950 hover:shadow-xl active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                {city.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
