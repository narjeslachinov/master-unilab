import ProductsPage from "@/features/products/components/listing/ProductsPage";
import { getProducts } from "@/features/products/services/product.service";

export default async function Products() {
  const response = await getProducts();

  return (
    <main className="bg-neutral-1 min-h-screen pt-16 pb-12 md:pt-40 md:pb-28">
      <ProductsPage products={response.data.items} />
    </main>
  );
}
