import ProductsPage from "@/features/products/components/listing/ProductsPage";
import { getProducts } from "@/features/products/services/product.service";

export default async function Products() {
  const response = await getProducts();

  return (
    <main className="bg-neutral-1 py-12 md:py-28">
      <ProductsPage products={response.data.items} />
    </main>
  );
}
