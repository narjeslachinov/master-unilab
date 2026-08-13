"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import ProductReviewCard from "./ProductReviewCard";
import ProductReviewPagination from "./ProductReviewPagination";

import type { Review } from "@/types/product-detail.types";
import { Button } from "@/components/ui/Button";
import ProductReviewModal from "./ProductReviewModal";
import { useProductDetail } from "./context/ProductDetailContext";

const REVIEWS_PER_PAGE = 3;

export default function ProductReviews() {
  const { product } = useProductDetail();

  const reviews = product.reviews;
  const productId = product.id;
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const paginatedReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;

    return reviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE);
  }, [reviews, currentPage]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !comment.trim() || rating === 0) {
      return;
    }

    setName("");
    setComment("");
    setRating(0);
    setShowModal(false);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="heading heading3">نظرات کاربران</h2>

        <Button type="button" onClick={() => setShowModal(true)} className="">
          ثبت نظر جدید
        </Button>
      </div>

      {paginatedReviews.length > 0 ? (
        <div className="flex flex-col gap-6">
          {paginatedReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ProductReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-gray-3 rounded-2xl border border-gray-200 p-8 text-center">
          هنوز نظری برای این محصول ثبت نشده است.
        </div>
      )}

      <ProductReviewPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <ProductReviewModal
        open={showModal}
        onClose={() => setShowModal(false)}
        productId={productId}
      />
    </section>
  );
}
