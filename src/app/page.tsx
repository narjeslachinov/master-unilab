"use client";

import AboutUs from "@/features/home/components/aboutUSection/AboutUs";
import ArticlesSection from "@/features/home/components/articleSection/ArticlesSection";
import BrandsSection from "@/features/home/components/brandSection/BrandsSection";
import HeroSlider from "@/features/home/components/heroSection/HeroSlider";
import ProductCategories from "@/features/home/components/productCategories/ProductCategories";
import ServicesSection from "@/features/home/components/servicesSection/ServicesSection";

export default function Home() {
  return (
    <main className="bg-neutral-1 0 min-h-screen space-y-16 py-12 md:py-28">
      <HeroSlider />
      <ServicesSection />
      <ProductCategories />
      <BrandsSection />
      <AboutUs />
      <ArticlesSection />
    </main>
  );
}
