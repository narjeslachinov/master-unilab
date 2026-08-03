
"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/Modal";

import { wishlistItems } from "../data/wishlist.data";
import {
  WishlistItem as WishlistItemType,
  WishlistModalProps,
} from "../type/wishlist.type";

import WishlistItem from "./WishlistItem";
import { Button } from "@/components/ui/Button";

export default function WishlistModal({
  isOpen,
  onClose,
}: WishlistModalProps) {
  const [wishlist, setWishlist] =
    useState<WishlistItemType[]>(wishlistItems);

  const handleRemove = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      {/* Header */}
      <div className="flex items-center justify-center">
        <h2 className="heading5 font-bold text-secondary">
          لیست علاقه‌مندی‌ها
        </h2>
      </div>

      {/* Wishlist */}
      {wishlist.length > 0 ? (
        <>
          <div className="max-h-80 space-y-4 overflow-y-auto px-2">
            {wishlist.map((item) => (
              <WishlistItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
              />
            ))}
          </div>

          {/* View All */}
          <div className="mt-2">
            <Button
             className="w-full"
            >
              مشاهده همه علاقه‌مندی‌ها
            </Button>
          </div>
        </>
      ) : (
        <div className="py-10 text-center textGray2">
          هنوز هیچ محصولی در لیست علاقه‌مندی شما نیست.
        </div>
      )}
    </Modal>
  );
}
