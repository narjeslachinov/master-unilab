import type { Product } from "../types/product.types";
import type { ProductDetail } from "../types/product-detail.types";

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface GetProductsResponse {
  data: {
    items: Product[];
    pagination: Pagination;
  };
}

export interface GetProductResponse {
  data: ProductDetail;
}

export interface CreateReviewPayload {
  name: string;
  comment: string;
  rating: number;
}

export interface CreateReviewResponse {
  data: {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  };
}

export async function getProducts(): Promise<GetProductsResponse> {

  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات");
  }

  return response.json();
}

export async function getProduct(id: number): Promise<GetProductResponse> {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("محصول مورد نظر پیدا نشد.");
    }

    throw new Error("خطا در دریافت جزئیات محصول");
  }

  return response.json();
}
export async function getRelatedProducts(
  productId: number,
): Promise<GetProductsResponse> {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}/related`,
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات مرتبط");
  }

  return response.json();
}
export async function createProductReview(
  productId: number,
  payload: CreateReviewPayload,
): Promise<CreateReviewResponse> {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "خطا در ثبت نظر");
  }

  return response.json();
}
