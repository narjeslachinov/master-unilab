import ProductsPage from "@/features/products/components/listing/ProductsPage";
import { getProducts } from "@/features/products/services/product.service";

export default async function Products() {
  const response = await getProducts();

  return (
    <main className="bg-neutral-1 pb-12 pt-16 md:pb-28 md:pt-40 min-h-screen">
      <ProductsPage products={response.data.items} />
    </main>
  );
}
