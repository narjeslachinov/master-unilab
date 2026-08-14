import type { Dispatch, SetStateAction } from "react";

import type { MegaMenuSection } from "../../type/header.type";
import CategoryItem from "./CategoryItem";

type Props = {
  sections: MegaMenuSection[];
  openMega: string | null;
  setOpenMega: Dispatch<SetStateAction<string | null>>;
};

export default function CategoryList({
  sections,
  openMega,
  setOpenMega,
}: Props) {
  return (
    <ul className="space-y-2">
      {sections.map((section) => (
        <CategoryItem
          key={section.id}
          section={section}
          isOpen={openMega === String(section.id)}
          onOpen={() => setOpenMega(String(section.id))}
          onClose={() => setOpenMega(null)}
        />
      ))}
    </ul>
  );
}
