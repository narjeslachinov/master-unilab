"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, UserCircleIcon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  createProductReview,
  CreateReviewPayload,
} from "../../services/products.service";

interface ProductReviewModalProps {
  open: boolean;
  onClose: () => void;
  productId: number;
}

export default function ProductReviewModal({
  open,
  onClose,
  productId,
}: ProductReviewModalProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !comment.trim() || rating === 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const payload: CreateReviewPayload = {
        name: name.trim(),
        comment: comment.trim(),
        rating,
      };

      const response = await createProductReview(productId, payload);

      console.log("Review created:", response.data);

      setName("");
      setComment("");
      setRating(0);

      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : "خطا در ثبت نظر");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} className="glassBg1">
      <div className="flex items-center justify-center gap-2">
        <h2 className="heading5 text-secondary font-bold">ثبت نظر</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(event) => setName(event.target.value)}
          endIcon={
            <HugeiconsIcon aria-hidden size={20} icon={UserCircleIcon} />
          }
        />

        <Textarea
          id="review-comment"
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="نظر خود را بنویسید..."
        />

        <div className="flex items-center justify-between">
          <span className="text-dark block">امتیاز:</span>

          <div className="flex items-center gap-1 py-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                aria-label={`امتیاز ${value}`}
                disabled={isSubmitting}
                className="transition-transform duration-200 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <HugeiconsIcon
                  icon={StarIcon}
                  size={22}
                  className={
                    value <= rating ? "text-yellow-500" : "text-gray-2"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "در حال ارسال..." : "ارسال نظر"}
        </Button>
      </form>
    </Modal>
  );
}
