"use client";

import ProductsGrid from "./ProductsGrid";
import ProductsHeader from "./ProductsHeader";
import ProductFilters from "../filter/ProductFilters";

import { useProductFilters } from "../../hooks/useProductFilters";

import { Container } from "@/components/ui/Container";

import type { Product } from "../../types/product.types";

interface ProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  const {
    filterOptions,
    selectedCategory,
    selectedVolumes,
    selectedBrands,
    maxPrice,
    sortBy,
    filteredProducts,
    setSelectedCategory,
    setMaxPrice,
    setSortBy,
    toggleVolume,
    toggleBrand,
  } = useProductFilters(products);

  return (
    <Container>
      <div className="flex flex-col gap-8 lg:flex-row">
        <ProductFilters
          categories={filterOptions.categories}
          volumes={filterOptions.volumes}
          brands={filterOptions.brands}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedVolumes={selectedVolumes}
          onVolumeToggle={toggleVolume}
          selectedBrands={selectedBrands}
          onBrandToggle={toggleBrand}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
        />

        <section className="w-full lg:w-3/4">
          <ProductsHeader
            sortBy={sortBy}
            onSortChange={setSortBy}
            total={filteredProducts.length}
          />

          <ProductsGrid products={filteredProducts} />
        </section>
      </div>
    </Container>
  );
}
