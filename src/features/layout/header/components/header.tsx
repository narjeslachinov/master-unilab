"use client";

import { useState } from "react";

import TopBar from "./shared/TopBar";
import DesktopHeader from "./desktop/DesktopHeader";
import AuthModal from "@/features/AuthModal/components/AuthModal";
import MobileHeader from "./mobile/MobileHeader";
import WishlistModal from "@/features/wishlistModal/components/WishlistModal";
import ShoppingCartModal from "@/features/shoppingCartModal/components/ShoppingCartModal";

export default function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [ShoppingCartOpen, setShoppingCartOpen] = useState(false);

  const openAuth = () => setAuthOpen(true);
  const openWishlist = () => setWishlistOpen(true);
  const openShoppingCart = () => setShoppingCartOpen(true);

  const openMenu = () => {
    console.log("Open Cart");
  };

  const openSearch = () => {
    console.log("Open Wishlist");
  };
  return (
    <header className="bg-neutral-2 fixed inset-x-0 top-0 h-12 w-full shadow-sm md:h-28">
      <TopBar />
      <DesktopHeader
        openAuth={openAuth}
        openCart={openShoppingCart}
        openWishlist={openWishlist}
      />
      <MobileHeader
        openAuth={openAuth}
        openCart={openShoppingCart}
        openWishlist={openWishlist}
        openMenu={openMenu}
        openSearch={openSearch}
      />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />
      <ShoppingCartModal
        isOpen={ShoppingCartOpen}
        onClose={() => setShoppingCartOpen(false)}
      />
    </header>
  );
}
