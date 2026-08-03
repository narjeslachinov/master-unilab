"use client";

import { useState } from "react";

import TopBar from "./shared/TopBar";
import DesktopHeader from "./desktop/DesktopHeader";
import AuthModal from "@/features/auth/components/AuthModal";
import MobileHeader from "./mobile/MobileHeader";
import WishlistModal from "@/features/wishlistModal/components/WishlistModal";
// import MobileMenu from "./mobile/MobileMenu";
// import MobileBottomNav from "./MobileBottomNav";
// import MobileMenu from "@/components/common/MobileMenu";

// import HeaderModals from "./HeaderModals";

export default function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const openAuth = () => setAuthOpen(true);
  const openWishlist = () => setWishlistOpen(true);

  const openCart = () => {
    console.log("Open Cart");
  };


  const openMenu = () => {
    console.log("Open Cart");
  };

  const openSearch = () => {
    console.log("Open Wishlist");
  };
  return (
    <header className="bg-neutral-2 fixed inset-x-0 top-0 h-28 w-full shadow-sm">
      <TopBar />
      <DesktopHeader
        openAuth={openAuth}
        openCart={openCart}
        openWishlist={openWishlist}
      />
      <MobileHeader
        openAuth={openAuth}
        openCart={openCart}
        openWishlist={openWishlist}
        openMenu={openMenu}
        openSearch={openSearch}
      />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        <WishlistModal
  isOpen={wishlistOpen}
  onClose={() => setWishlistOpen(false)}
/>

      {/* 
  <MobileMenu        openAuth={openAuth}
        openCart={openCart}
        openWishlist={openWishlist}
         /> */}
      {/*          
      <MobileBottomNav
        setMenuOpen={setMenuOpen}
        setAuthOpen={setAuthOpen}
        setCartOpen={setCartOpen}
      />

      <HeaderModals
        authOpen={authOpen}
        cartOpen={cartOpen}
        wishlistOpen={wishlistOpen}
        setAuthOpen={setAuthOpen}
        setCartOpen={setCartOpen}
        setWishlistOpen={setWishlistOpen}
      /> */}
    </header>
  );
}
