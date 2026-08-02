"use client";

import AboutUs from "@/features/home/components/aboutUSection/AboutUs";
import ArticlesSection from "@/features/home/components/articleSection/ArticlesSection";
import BrandsSection from "@/features/home/components/brandSection/BrandsSection";
import HeroSlider from "@/features/home/components/heroSection/HeroSlider";
import ProductCategories from "@/features/home/components/productCategories/ProductCategories";
import ServicesSection from "@/features/home/components/servicesSection/ServicesSection";
import Footer from "@/features/layout/footer/components/Footer";
import Header from "@/features/layout/header/components/header";

export default function Home() {
  return (
    <main className="bg-neutral-1">
      <Header />
      <HeroSlider />
      <ServicesSection />
      <ProductCategories />
      <BrandsSection />
      <AboutUs />
      <ArticlesSection />
      <Footer />
    </main>
  );
}
