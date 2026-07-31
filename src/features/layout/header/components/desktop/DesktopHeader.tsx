import Logo from "../shared/Logo";
import SearchBox from "../shared/SearchBox";
import HeaderActions from "../shared/HeaderActions";
import Menu from "./Menu";
import { Container } from "@/components/ui/Container";

type Props = {
  setAuthOpen: () => void;
};

export default function DesktopHeader({ setAuthOpen }: Props) {
  return (
    <Container>
      <div className="flex items-center justify-between py-3">
        <Logo />

        <Menu />

        <div className="flex gap-4">
          <SearchBox />

          <HeaderActions openAuth={setAuthOpen} />
        </div>
      </div>
    </Container>
  );
}
