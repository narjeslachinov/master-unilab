"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, UserCircleIcon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

interface ProductReviewModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductReviewModal({
  open,
  onClose,
}: ProductReviewModalProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !comment.trim() || rating === 0) {
      return;
    }

    // فعلاً فقط UI داریم.
    // در مرحله API اینجا request ارسال خواهد شد.

    setName("");
    setComment("");
    setRating(0);

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className="glassBg1">
      {/* Header */}
      <div className="flex items-center justify-center gap-2">
        <h2 className="heading5 text-secondary font-bold">ثبت نظر</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="نام"
          endIcon={
            <HugeiconsIcon aria-hidden size={20} icon={UserCircleIcon} />
          }
        />
        <Textarea
          id="review-comment"
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
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
                className="transition-transform duration-200 hover:scale-110"
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

        <Button type="submit" className="w-full">
          ارسال نظر
        </Button>
      </form>
    </Modal>
  );
}
