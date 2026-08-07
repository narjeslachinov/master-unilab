import ProductDetail from "@/features/products/components/detail/ProductDetail";

import {
  getProduct,
  getRelatedProducts,
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

  const [productResponse, relatedResponse] = await Promise.all([
    getProduct(productId),
    getRelatedProducts(productId),
  ]);

  const product = productResponse.data;
  const relatedProducts = relatedResponse.data.items;

  return (
    <main className="bg-neutral-1 py-12 md:py-28">
      <ProductDetail
        product={product}
        relatedProducts={relatedProducts}
      />
    </main>
  );
}