import type {
  ProductQueryParams,
  ProductSortOption,
} from "../types/product-query.types";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 6;

const validSortOptions: ProductSortOption[] = [
  "default",
  "price-asc",
  "price-desc",
  "rating-desc",
];

function parsePositiveNumber(value: string | undefined): number | undefined {
  if (!value) {
    return undefined;
  }

  const number = Number(value);

  if (!Number.isFinite(number) || number < 0) {
    return undefined;
  }

  return number;
}

function parsePositiveInteger(
  value: string | undefined,
  fallback: number,
): number {
  if (!value) {
    return fallback;
  }

  const number = Number(value);

  if (!Number.isInteger(number) || number < 1) {
    return fallback;
  }

  return number;
}

function parseSort(value: string | undefined): ProductSortOption {
  if (value && validSortOptions.includes(value as ProductSortOption)) {
    return value as ProductSortOption;
  }

  return "default";
}

export function parseProductQuery(
  searchParams: URLSearchParams,
): ProductQueryParams {
  const search = searchParams.get("search")?.trim();
  const category = searchParams.get("category")?.trim();
  const brand = searchParams.get("brand")?.trim();
  const volume = searchParams.get("volume")?.trim();

  return {
    search: search || undefined,
    category: category || undefined,
    brand: brand || undefined,
    volume: volume || undefined,

    minPrice: parsePositiveNumber(searchParams.get("minPrice") ?? undefined),

    maxPrice: parsePositiveNumber(searchParams.get("maxPrice") ?? undefined),

    sort: parseSort(searchParams.get("sort") ?? undefined),

    page: parsePositiveInteger(
      searchParams.get("page") ?? undefined,
      DEFAULT_PAGE,
    ),

    limit: parsePositiveInteger(
      searchParams.get("limit") ?? undefined,
      DEFAULT_LIMIT,
    ),
  };
}
