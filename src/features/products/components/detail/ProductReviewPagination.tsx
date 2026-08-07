"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProductReviewPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductReviewPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductReviewPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="صفحه‌بندی نظرات"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="rounded-xl border border-white bg-white/30 p-2 backdrop-blur-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="صفحه قبل"
      >
        <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`rounded-lg px-3 py-1 transition ${
              currentPage === page
                ? "bg-primary text-light"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="rounded-xl border border-white bg-white/30 p-2 backdrop-blur-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="صفحه بعد"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
      </button>
    </nav>
  );
}
