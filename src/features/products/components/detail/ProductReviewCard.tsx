import { HugeiconsIcon } from "@hugeicons/react";
import type { Review } from "../../types/product-detail.types";
import { StarIcon } from "@hugeicons/core-free-icons";

interface ProductReviewCardProps {
  review: Review;
}

export default function ProductReviewCard({ review }: ProductReviewCardProps) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between gap-1">
        <p className="font-semibold">{review.name}</p>

        <time className="text-gray-2 text-sm">{review.date}</time>
      </div>

      <div
        className="flex items-center gap-1"
        aria-label={`امتیاز ${review.rating} از 5`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <HugeiconsIcon
            icon={StarIcon}
            key={star}
            size={18}
            className={
              star <= review.rating ? "text-yellow-400" : "text-gray-1"
            }
          />
        ))}
      </div>

      <p className="leading-7">{review.comment}</p>
    </article>
  );
}
