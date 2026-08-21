import { ApiError } from "./api-error";
import type { ApiErrorResponse } from "./api-types";

async function parseResponseBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    return null;
  }

  return response.json();
}

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  const body = await parseResponseBody(response);

  if (!response.ok) {
    const errorBody = body as ApiErrorResponse | null;

    throw new ApiError(
      errorBody?.message ?? "خطایی در درخواست رخ داده است.",
      response.status,
      errorBody?.details,
    );
  }

  return body as T;
}

export function apiGet<T>(url: string, options?: RequestInit): Promise<T> {
  return request<T>(url, {
    ...options,
    method: "GET",
  });
}

export function apiPost<TResponse, TBody>(
  url: string,
  body: TBody,
  options?: RequestInit,
): Promise<TResponse> {
  return request<TResponse>(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function apiPatch<TResponse, TBody>(
  url: string,
  body: TBody,
  options?: RequestInit,
): Promise<TResponse> {
  return request<TResponse>(url, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

export function apiDelete<TResponse>(
  url: string,
  options?: RequestInit,
): Promise<TResponse> {
  return request<TResponse>(url, {
    ...options,
    method: "DELETE",
  });
}
