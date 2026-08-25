import ProductsPage from "@/features/products/components/listing/ProductsPage";

import { getProducts } from "@/features/products/services/products-query.service";
import { parseProductQuery } from "@/features/products/utils/parse-product-query";

interface ProductsRouteProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Products({ searchParams }: ProductsRouteProps) {
  const params = await searchParams;

  const urlSearchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === "string") {
      urlSearchParams.set(key, value);
    }

    if (Array.isArray(value)) {
      urlSearchParams.set(key, value.join(","));
    }
  });

  const result = parseProductQuery(urlSearchParams);

  if (!result.success) {
    return (
      <main className="bg-neutral-1 min-h-screen pt-16 pb-12 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4">Invalid product query</div>
      </main>
    );
  }

  const response = getProducts(result.data);

  return (
    <main className="bg-neutral-1 min-h-screen pt-16 pb-12 md:pt-40 md:pb-28">
      <ProductsPage
        products={response.items}
        pagination={response.pagination}
      />
    </main>
  );
}
