"use client";

import BrandsSection from "@/features/home/components/brandSection/BrandsSection";
import HeroSlider from "@/features/home/components/heroSection/HeroSlider";
import ProductCategories from "@/features/home/components/productCategories/ProductCategories";
import ServicesSection from "@/features/home/components/servicesSection/ServicesSection";
import Header from "@/features/layout/header/components/header";

export default function Home() {
  return (
    <main className="bg-neutral-1">
      <Header />
      <HeroSlider />
      <ServicesSection />
      <ProductCategories />
      <BrandsSection />
    </main>
  );
}
