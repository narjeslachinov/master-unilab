"use client";

import Link from "next/link";
import { useState } from "react";
import { MegaMenuSection } from "../../type/header.type";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import MegaMenuContent from "./MegaMenuContent";

type Props = {
  sections: MegaMenuSection[];
};

export default function MegaMenu({ sections }: Props) {
  const [openMega, setOpenMega] = useState<string | null>(null);

  return (
    <div className="headerMenue1 headerMenueBg1 customeSmallText invisible absolute top-full left-1/2 h-80 w-48 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li
            key={section.name}
            className="group/item relative px-2"
            onMouseEnter={() => setOpenMega(section.name)}
            onMouseLeave={() => setOpenMega(null)}
          >
            <Link
              href={section.href}
              className="hover:bg-neutral-1 hover:text-accent-1 flex cursor-pointer items-center justify-between rounded-md p-2 transition"
            >
              <span>{section.name}</span>

              {section.items && section.items.length > 0 && (
                <HugeiconsIcon aria-hidden size={20} icon={ArrowLeft01Icon} />
              )}
            </Link>

            {section.items && section.items.length > 0 && (
              <MegaMenuContent
                items={section.items}
                isOpen={openMega === section.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
