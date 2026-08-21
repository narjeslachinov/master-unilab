import { notFound } from "next/navigation";

import ProductDetail from "@/features/products/components/detail/ProductDetail";
import {
  getProductServer,
  getRelatedProductsServer,
} from "@/features/products/services/product.service";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const productId = Number(id);

  if (!Number.isInteger(productId)) {
    notFound();
  }

  const [product, relatedProductsResult] = await Promise.all([
    getProductServer(productId),
    getRelatedProductsServer(productId),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-neutral-1 pt-16 pb-12 md:pt-40 md:pb-28">
      <ProductDetail
        product={product}
        relatedProducts={relatedProductsResult.items}
      />
    </main>
  );
}
