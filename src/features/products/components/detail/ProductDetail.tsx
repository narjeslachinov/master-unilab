"use client";

import type { Product } from "../../types/product.types";
import type { ProductDetail as ProductDetailType } from "../../types/product-detail.types";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

import { Container } from "@/components/ui/Container";
import { ProductDetailProvider } from "./context/ProductDetailContext";

interface ProductDetailProps {
  product: ProductDetailType;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  return (
    <ProductDetailProvider product={product} relatedProducts={relatedProducts}>
      <Container>
        <div className="flex flex-col gap-8 py-12 md:gap-12">
          <section className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <ProductGallery />

            <ProductInfo />
          </section>

          <ProductTabs />

          <RelatedProducts />

          <ProductReviews />
        </div>
      </Container>
    </ProductDetailProvider>
  );
}
