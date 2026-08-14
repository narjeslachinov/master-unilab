import { cn } from "@/lib/utils";

import type { MenuLink } from "../../type/header.type";
import SubCategoryGrid from "./SubCategoryGrid";

type Props = {
  items: MenuLink[];
  isOpen: boolean;
};

export default function MegaMenuPanel({
  items,
  isOpen,
}: Props) {
  return (
    <div
      className={cn(
        "headerMenueBg1 absolute top-0 right-full z-50 flex min-w-2xl gap-6 rounded-xl p-5 shadow-xl transition-all duration-500",
        isOpen
          ? "animate-mega-in"
          : "pointer-events-none animate-mega-out",
      )}
    >
      <SubCategoryGrid items={items} />
    </div>
  );
}