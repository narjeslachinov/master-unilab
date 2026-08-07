import { NextResponse } from "next/server";

import { products } from "@/features/products/data/products.data";

export async function GET() {
  return NextResponse.json({
    data: {
      items: products,
      pagination: {
        page: 1,
        limit: products.length,
        total: products.length,
        totalPages: 1,
      },
    },
  });
}