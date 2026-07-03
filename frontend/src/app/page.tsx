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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />

    {/* 📸 FULL WIDTH BANNER */}
      <section className="w-full">
        <Image 
          src="/products/fullsetup.png" 
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