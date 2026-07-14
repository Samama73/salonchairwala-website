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

    {/* 🚀 READY TO ORDER CTA BLOCK - Rich Leaf Green */}
        <section className="flex justify-center bg-white px-4 py-6 md:py-8">
          <Link 
            href="/readytomove" 
            className="w-full max-w-2xl bg-[#1E7A46] text-white py-3 md:py-4 rounded-xl text-center font-bold text-lg md:text-xl shadow-lg transition-all duration-300 hover:bg-[#155C33] hover:scale-105 active:scale-95"
          >
            Ready to Order? Click Here
          </Link>
        </section>

      {/* 📸 FULL WIDTH BANNER */}
      <section className="w-full">
        <Image 
          src="/products/fullsetup.webp" 
          alt="Premium Salon Furniture Collection" 
          width={1920} 
          height={800} 
          className="w-full h-auto object-cover" // <-- rounded-xl aur shadow hata diya hai taaki edges flush rahein
          priority 
        />
      </section>

      <BestSellers />
      <FeaturedProducts />
      <FeaturesSection />
      <HappyClients />
      <InstagramSection />
      <Testimonials />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}