"use client";

// import Breadcrumb from "@/components/common/Breadcrumb";

import ProductFilters from "../filter/ProductFilters";
import ProductsGrid from "./ProductsGrid";
import ProductsHeader from "./ProductsHeader";

import { products } from "../../data/products.data";
import { productFilterOptions } from "../../data/product-filters.data";
import { useProductFilters } from "../../hooks/useProductFilters";
import { Container } from "@/components/ui/Container";

export default function ProductsPage() {
  const {
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
    <div className="py-16">
      {/* <Breadcrumb
        items={[
          {
            label: "خانه",
            href: "/",
          },
          {
            label: "محصولات",
            href: "/products",
          },
        ]}
      /> */}

      <div className="mx-auto flex flex-col gap-8  lg:flex-row ">
        <ProductFilters
          categories={productFilterOptions.categories}
          volumes={productFilterOptions.volumes}
          brands={productFilterOptions.brands}
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
    </div>     
    </Container>
 
  );
}
