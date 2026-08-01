import Logo from "../shared/Logo";
import SearchBox from "../shared/SearchBox";
import HeaderActions from "../shared/HeaderActions";
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
      <div className="flex items-center justify-between py-3">
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
