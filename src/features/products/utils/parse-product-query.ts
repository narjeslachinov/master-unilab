import type {
  ProductQueryParams,
  ProductSortOption,
} from "../types/product-filter.types";

type ParseResult =
  | {
      success: true;
      data: ProductQueryParams;
    }
  | {
      success: false;
      error: string;
    };

const validSortOptions: ProductSortOption[] = [
  "newest",
  "price-asc",
  "price-desc",
  "rating-desc",
];

function parsePositiveNumber(
  value: string | null,
  fieldName: string,
): number | undefined {
  if (value === null || value === "") {
    return undefined;
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 0) {
    throw new Error(`Invalid ${fieldName}`);
  }

  return parsed;
}

function parseArray(value: string | null): string[] | undefined {
  if (!value) {
    return undefined;
  }

  const items = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return items.length > 0 ? items : undefined;
}

export function parseProductQuery(searchParams: URLSearchParams): ParseResult {
  try {
    const page = parsePositiveNumber(searchParams.get("page"), "page");

    const limit = parsePositiveNumber(searchParams.get("limit"), "limit");

    const minPrice = parsePositiveNumber(
      searchParams.get("minPrice"),
      "minPrice",
    );

    const maxPrice = parsePositiveNumber(
      searchParams.get("maxPrice"),
      "maxPrice",
    );

    const sortValue = searchParams.get("sort");

    if (
      sortValue &&
      !validSortOptions.includes(sortValue as ProductSortOption)
    ) {
      return {
        success: false,
        error: "Invalid sort value",
      };
    }

    return {
      success: true,
      data: {
        search: searchParams.get("search") || undefined,
        category: searchParams.get("category") || undefined,
        brand: parseArray(searchParams.get("brand")),
        volume: parseArray(searchParams.get("volume")),
        minPrice,
        maxPrice,
        sort: sortValue as ProductSortOption | undefined,
        page,
        limit,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Invalid product query",
    };
  }
}
