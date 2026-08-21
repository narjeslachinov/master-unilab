import type { Product } from "../types/product.types";
import type { ProductDetail } from "../types/product-detail.types";
import { apiGet, apiPost } from "@/lib/api-client";

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ProductsData {
  items: Product[];
  pagination: Pagination;
}

export interface GetProductsResponse {
  data: ProductsData;
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
    comment: string;
    rating: number;
    date: string;
  };
}

export function getProducts(): Promise<GetProductsResponse> {
  return apiGet<GetProductsResponse>("/api/products");
}

export function getProduct(id: number): Promise<GetProductResponse> {
  return apiGet<GetProductResponse>(`/api/products/${id}`);
}

export function getRelatedProducts(
  productId: number,
): Promise<GetProductsResponse> {
  return apiGet<GetProductsResponse>(`/api/products/${productId}/related`);
}

export function createProductReview(
  productId: number,
  payload: CreateReviewPayload,
): Promise<CreateReviewResponse> {
  return apiPost<CreateReviewResponse, CreateReviewPayload>(
    `/api/products/${productId}/reviews`,
    payload,
  );
}
