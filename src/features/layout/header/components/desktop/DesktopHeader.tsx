import Logo from "../shared/Logo";
import SearchBox from "./SearchBox";
import HeaderActions from "./HeaderActions";
import Menu from "./DesktopMenu";
import { Container } from "@/components/ui/Container";

interface Props {
  openAuth: () => void;
  openCart: () => void;
  openWishlist: () => void;
}

export default function DesktopHeader({
  openAuth,
  openCart,
  openWishlist,
}: Props) {
  return (
    <Container>
      <div className="hidden items-center justify-between py-3 md:flex">
        <Logo />

        <Menu />

        <div className="flex gap-4">
          <SearchBox />

          <HeaderActions
            openAuth={openAuth}
            openCart={openCart}
            openWishlist={openWishlist}
          />
        </div>
      </div>
    </Container>
  );
}
