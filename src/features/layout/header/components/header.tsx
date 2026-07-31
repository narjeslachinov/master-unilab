"use client";

import { useState } from "react";

import TopBar from "./shared/TopBar";
import DesktopHeader from "./desktop/DesktopHeader";
import AuthModal from "@/features/auth/components/AuthModal";
// import MobileBottomNav from "./MobileBottomNav";
// import MobileMenu from "@/components/common/MobileMenu";

// import HeaderModals from "./HeaderModals";

export default function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  return (
    <header className="w-full shadow-sm">
      <TopBar />

      <DesktopHeader setAuthOpen={() => setAuthOpen(true)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />

      {/*          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

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
