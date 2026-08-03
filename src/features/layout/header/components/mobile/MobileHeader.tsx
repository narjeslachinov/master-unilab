"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Search01Icon } from "@hugeicons/core-free-icons";

import { getHeaderActions } from "../../data/header.data";
import { MobileBottomNavProps } from "../../type/header.type";

export default function MobileBottomNav({
  openAuth,
  openCart,
  openWishlist,
  openMenu,
  openSearch,
}: MobileBottomNavProps) {
  const actions = getHeaderActions({
    openAuth,
    openCart,
    openWishlist,
  });

  return (
    <div className="fixed inset-x-2 bottom-2 z-40 flex justify-around rounded-full bg-white p-3 shadow-lg md:hidden">
      {/* Menu */}
      <button
        type="button"
        onClick={openMenu}
        className="headerIcon cursor-pointer transition"
        aria-label="منو"
      >
        <HugeiconsIcon
          aria-hidden
          size={22}
          icon={Menu01Icon}
          strokeWidth={2.5}
        />
      </button>

      {/* Search */}
      <button
        type="button"
        onClick={openSearch}
        className="headerIcon cursor-pointer transition"
        aria-label="جستجو"
      >
        <HugeiconsIcon
          aria-hidden
          size={22}
          icon={Search01Icon}
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
    </div>
  );
}
