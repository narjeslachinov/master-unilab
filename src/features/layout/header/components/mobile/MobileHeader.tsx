"use client";

import { useState } from "react";
import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";

import { Modal } from "@/components/ui/Modal";
import { useProducts } from "@/features/products/hooks/useProducts";

import { getHeaderActions } from "../../data/header.data";
import { useMegaMenu } from "../../hooks/useMegaMenu";
import { MobileBottomNavProps } from "../../type/header.type";

const categoryLinkClassName =
  "block rounded-xl px-4 py-3 text-center transition hover:bg-white/50";

export default function MobileBottomNav({
  openAuth,
  openCart,
  openWishlist,
}: MobileBottomNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { products } = useProducts();
  const { sections } = useMegaMenu(products);

  const actions = getHeaderActions({
    openAuth,
    openCart,
    openWishlist,
  });

  return (
    <div className="fixed inset-x-2 bottom-2 z-40 flex justify-around rounded-full bg-white p-3 shadow-lg md:hidden">
      {/* Categories */}
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="headerIcon cursor-pointer transition"
        aria-label="دسته‌بندی محصولات"
      >
        <HugeiconsIcon
          aria-hidden
          size={22}
          icon={Menu01Icon}
          strokeWidth={2.5}
        />
      </button>

      {/* Wishlist / Cart / Auth */}
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          onClick={action.onClick}
          className="headerIcon cursor-pointer transition"
          aria-label={action.name}
        >
          <HugeiconsIcon
            aria-hidden
            size={22}
            icon={action.icon}
            strokeWidth={2.5}
          />
        </button>
      ))}

      {/* Categories modal */}
      <Modal open={menuOpen} onClose={() => setMenuOpen(false)}>
        <h2 className="heading5 text-secondary text-center font-bold">
          دسته‌بندی محصولات
        </h2>

        <nav
          aria-label="دسته‌بندی محصولات"
          className="flex max-h-[60vh] flex-col gap-1 overflow-y-auto"
        >
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className={categoryLinkClassName}
          >
            همه محصولات
          </Link>

          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              onClick={() => setMenuOpen(false)}
              className={categoryLinkClassName}
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </Modal>
    </div>
  );
}
