"use client";

import ProductsGrid from "./ProductsGrid";
import ProductsHeader from "./ProductsHeader";
import ProductFilters from "../filter/ProductFilters";

import { useProductFilters } from "../../hooks/useProductFilters";

import { Container } from "@/components/ui/Container";

import type { Product } from "../../types/product.types";
import ProductPagination from "./ProductPagination";

interface ProductsPageProps {
  products: Product[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function ProductsPage({
  products,
  pagination,
}: ProductsPageProps) {
  const {
    filterOptions,
    selectedCategory,
    selectedVolumes,
    selectedBrands,
    maxPrice,
    sortBy,

    setSelectedCategory,
    setMaxPrice,
    setSortBy,
    toggleVolume,
    toggleBrand,
    setPage,
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
            total={pagination.total}
          />

          <ProductsGrid products={products} />

          <ProductPagination
            currentPage={pagination.page}
            totalPages={pagination.totalPages}
            onPageChange={setPage}
          />
        </section>
      </div>
    </Container>
  );
}
