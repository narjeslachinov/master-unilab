"use client";

// import Breadcrumb from "@/components/common/Breadcrumb";

import type { Product } from "../../types/product.types";
import type { ProductDetail } from "../../types/product-detail.types";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import { Container } from "@/components/ui/Container";

interface ProductDetailProps {
  product: ProductDetail;
  relatedProducts: Product[];
}



export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  console.log("relatedProducts:", relatedProducts);
  return (
    <Container>
      <div className="flex flex-col gap-8 py-12 md:gap-12">
        {/* <Breadcrumb
          items={[
            { label: "خانه", href: "/" },
            { label: "محصولات", href: "/products" },
            {
              label: product.category,
              href: `/products?category=${encodeURIComponent(product.category)}`,
            },
            { label: product.name },
          ]}
        /> */}

        <section className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <ProductGallery images={product.images} />

          <ProductInfo product={product} />
        </section>

        <ProductTabs product={product} />

        <RelatedProducts products={relatedProducts} />
        <ProductReviews reviews={product.reviews} /> 
      </div>
    </Container>
  );
}
