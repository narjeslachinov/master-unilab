"use client";

import { useState } from "react";
import { MegaMenuSection } from "../../type/header.type";
import CategoryList from "./CategoryList";

type Props = {
  sections: MegaMenuSection[];
};

export default function MegaMenu({ sections }: Props) {
  const [openMega, setOpenMega] = useState<string | null>(null);

  return (
    <div className="headerMenue1 headerMenueBg1 customeSmallText invisible absolute top-full left-1/2 h-80 w-48 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
      <CategoryList
        sections={sections}
        openMega={openMega}
        setOpenMega={setOpenMega}
      />
    </div>
  );
}
