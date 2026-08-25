import { NextResponse } from "next/server";

import { getProducts } from "@/features/products/services/products-query.service";
import { parseProductQuery } from "@/features/products/utils/parse-product-query";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const result = parseProductQuery(url.searchParams);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: result.error,
      },
      {
        status: 400,
      },
    );
  }

  const data = getProducts(result.data);

  return NextResponse.json({
    success: true,
    data,
  });
}
