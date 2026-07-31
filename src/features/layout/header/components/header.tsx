"use client";

import { useState } from "react";

import TopBar from "./shared/TopBar";
import DesktopHeader from "./desktop/DesktopHeader";
// import MobileBottomNav from "./MobileBottomNav";
// import MobileMenu from "@/components/common/MobileMenu";

// import HeaderModals from "./HeaderModals";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      <TopBar />

      <DesktopHeader
        setMenuOpen={setMenuOpen}
        setAuthOpen={setAuthOpen}
        setCartOpen={setCartOpen}
        setWishlistOpen={setWishlistOpen}
      />

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
