import { NextResponse } from "next/server";

import { productDetails } from "@/data/product-details.data";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

interface CreateReviewBody {
  name: string;
  comment: string;
  rating: number;
}

export async function POST(request: Request, { params }: RouteContext) {
  const { id } = await params;

  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return NextResponse.json(
      {
        message: "شناسه محصول نامعتبر است.",
      },
      {
        status: 400,
      },
    );
  }

  const product = productDetails.find((product) => product.id === productId);

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

  const body: CreateReviewBody = await request.json();

  const { name, comment, rating } = body;

  if (!name?.trim() || !comment?.trim() || !rating) {
    return NextResponse.json(
      {
        message: "نام، متن نظر و امتیاز الزامی هستند.",
      },
      {
        status: 400,
      },
    );
  }

  if (rating < 1 || rating > 5) {
    return NextResponse.json(
      {
        message: "امتیاز باید بین 1 تا 5 باشد.",
      },
      {
        status: 400,
      },
    );
  }

  const newReview = {
    id:
      product.reviews.length > 0
        ? Math.max(...product.reviews.map((review) => review.id)) + 1
        : 1,
    name: name.trim(),
    rating,
    comment: comment.trim(),
    date: new Intl.DateTimeFormat("fa-IR").format(new Date()),
  };

  product.reviews.push(newReview);

  product.reviewCount += 1;

  return NextResponse.json(
    {
      data: newReview,
    },
    {
      status: 201,
    },
  );
}
