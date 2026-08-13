import { NextResponse } from "next/server";

import { productDetails } from "@/data/product-details.data";
interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;

  const product = productDetails.find((product) => product.id === Number(id));

  if (!product) {
    return NextResponse.json(
      {
        message: "محصول مورد نظر پیدا نشد.",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    data: product,
  });
}
