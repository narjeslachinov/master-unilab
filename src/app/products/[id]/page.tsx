import { getProduct } from "@/features/products/services/product.service";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const response = await getProduct(Number(id));

  const product = response.data;

  return (
    <main>
        
      <h1>{product.name}</h1>

      <p>{product.description}</p>
    </main>
  );
}