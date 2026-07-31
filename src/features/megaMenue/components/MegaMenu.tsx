import { MegaSubMenuCategory } from "../type/header.type";
import { cn } from "@/lib/utils";
import MegaMenuColumn from "./MegaMenuColumn";

type Props = {
  sections: MegaSubMenuCategory[];
  open: boolean;
};

export default function MegaMenu({ sections, open }: Props) {
  return (
    <div
      className={cn(
        "headerMenueBg1 absolute top-0 right-full z-50 flex min-w-3xs gap-6 rounded-xl p-5 shadow-xl transition-all duration-500",
        open ? "animate-mega-in" : "animate-mega-out pointer-events-none",
      )}
    >
      {sections.map((section) => (
        <MegaMenuColumn key={section.name} section={section} />
      ))}
    </div>
  );
}
