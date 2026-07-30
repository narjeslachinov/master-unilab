"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

import { SubMenuItem } from "../../type/header.type";
import { megaSubMenu } from "../../data/header.data";
import MegaMenu from "./MegaMenu";

type Props = {
  items: SubMenuItem[];
};

export default function SubMenu({ items }: Props) {
  const [openMega, setOpenMega] = useState<string | null>(null);

  return (
    <div className="headerMenue1 headerMenueBg1 glassBg1 customeSmallText invisible top-full mt-2 flex h-80 flex-col opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
      <ul>
        {items.map((item) => {
          const hasMega = !!megaSubMenu[item.name];

          return (
            <li
              key={item.name}
              className="hover:bg-neutral-1 hover:text-primary relative mx-1 my-2 cursor-pointer rounded-md px-3 py-1 transition"
              onMouseEnter={() => hasMega && setOpenMega(item.name)}
              onMouseLeave={() => hasMega && setOpenMega(null)}
            >
              <Link
                href={item.href}
                className="flex items-center justify-between"
              >
                {item.name}

                {hasMega && (
                  <HugeiconsIcon aria-hidden size={18} icon={ArrowLeft01Icon} />
                )}
              </Link>

              {hasMega && (
                <MegaMenu
                  sections={megaSubMenu[item.name]}
                  open={openMega === item.name}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
