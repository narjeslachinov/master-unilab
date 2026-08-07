import { NextResponse } from "next/server";

import { products } from "@/features/products/data/products.data";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;

  const productId = Number(id);

  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) {
    return NextResponse.json(
      {
        message: "محصول مورد نظر پیدا نشد.",
      },
      {
        status: 404,
      },
    );
  }

  const relatedProducts = products.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id,
  );

  return NextResponse.json({
    data: {
      items: relatedProducts,
      pagination: {
        page: 1,
        limit: relatedProducts.length,
        total: relatedProducts.length,
        totalPages: 1,
      },
    },
  });
}
