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

// 👉 NEW SECTION IMPORT
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />

      <BestSellers />

      {/* ⭐ NEW FEATURES SECTION (Screenshot wala) */}
      <FeaturesSection />

      <FeaturedProducts />
      <HappyClients />
      <InstagramSection />
      <Testimonials />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}