import Logo from "../shared/Logo";
import SearchBox from "../shared/SearchBox";
import HeaderActions from "../shared/HeaderActions";
import Menu from "./Menu";
import { Container } from "@/components/ui/Container";

type Props = {
  setCartOpen: () => void;
  setAuthOpen: () => void;
  setWishlistOpen: () => void;
};

export default function DesktopHeader({
  setCartOpen,
  setAuthOpen,
  setWishlistOpen,
}: Props) {
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        <Logo />

        <Menu />

        <div className="flex gap-4">
          <SearchBox />

          <HeaderActions
            openCart={setCartOpen}
            openAuth={setAuthOpen}
            openWishlist={setWishlistOpen}
          />
        </div>
      </div>
    </Container>
  );
}