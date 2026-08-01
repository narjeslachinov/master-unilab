import { Dispatch, SetStateAction } from "react";
import { MegaMenuSection } from "../../type/header.type";
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
          key={section.name}
          section={section}
          isOpen={openMega === section.name}
          onOpen={() => setOpenMega(section.name)}
          onClose={() => setOpenMega(null)}
        />
      ))}
    </ul>
  );
}
