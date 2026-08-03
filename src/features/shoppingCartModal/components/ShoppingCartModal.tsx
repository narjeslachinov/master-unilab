"use client";

import { useState } from "react";
import Link from "next/link";

import { Modal } from "@/components/ui/Modal";

import { cartItems } from "../data/shoppingCart.data";
import {
  CartItem as CartItemType,
  CartModalProps,
} from "../type/shoppingCart.type";

import ShoppingCartItem from "./ShoppingCartItem";
import { Button } from "@/components/ui/Button";

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const [items, setItems] = useState<CartItemType[]>(cartItems);

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, type: "increase" | "decrease") => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Modal open={isOpen} onClose={onClose}>
      {/* Header */}
      <div className="flex items-center justify-center gap-2">
        <h2 className="heading5 text-secondary font-bold">سبد خرید شما</h2>
      </div>

      {/* Cart */}
      {items.length > 0 ? (
        <>
          <div className="max-h-80 space-y-4 overflow-y-auto px-2">
            {items.map((item) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          {/* Total */}
          <div className="heading6 mt-2 flex items-center justify-between font-semibold">
            <span>جمع کل:</span>

            <span>{total.toLocaleString()} تومان</span>
          </div>

          {/* Checkout */}
          <Button className="block w-full text-center">
            ادامه خرید / پرداخت
          </Button>
        </>
      ) : (
        <div className="text-gray-2 py-10 text-center">
          سبد خرید شما خالی است.
        </div>
      )}
    </Modal>
  );
}
