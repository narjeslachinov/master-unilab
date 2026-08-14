"use client";

import AboutUs from "@/features/home/components/aboutUSection/AboutUs";
import ArticlesSection from "@/features/home/components/articleSection/ArticlesSection";
import BrandsSection from "@/features/home/components/brandSection/BrandsSection";
import HeroSlider from "@/features/home/components/heroSection/HeroSlider";
import ProductCategories from "@/features/home/components/productCategories/ProductCategories";
import ServicesSection from "@/features/home/components/servicesSection/ServicesSection";
import { useProducts } from "@/features/products/hooks/useProducts";


export default function Home() {
  const { products } = useProducts();
  return (
    <main className="bg-neutral-1 0 min-h-screen space-y-16 py-12 md:py-28">
      <HeroSlider />
      <ServicesSection />
      <ProductCategories products={products} />
      <BrandsSection />
      <AboutUs />
      <ArticlesSection />
    </main>
  );
}
