import { cn } from "@/lib/utils";
import { MenuLink } from "../../type/header.type";
import MegaMenuList from "./MegaMenuList";

type Props = {
  items: MenuLink[];
  isOpen: boolean;
};

export default function MegaMenuContent({ items, isOpen }: Props) {
  return (
    <div
      className={cn(
        "headerMenueBg1 absolute top-0 right-full z-50 flex min-w-96 gap-6 rounded-xl p-5 shadow-xl transition-all duration-500",
        isOpen ? "animate-mega-in" : "animate-mega-out pointer-events-none",
      )}
    >
      <MegaMenuList items={items} />
    </div>
  );
}
