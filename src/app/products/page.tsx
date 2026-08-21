import ProductsPage from "@/features/products/components/listing/ProductsPage";
import { getProductsServer } from "@/features/products/services/product.service";

export default function Products() {
  const { items } = getProductsServer();

  return (
    <main className="bg-neutral-1 min-h-screen pt-16 pb-12 md:pt-40 md:pb-28">
      <ProductsPage products={items} />
    </main>
  );
}
