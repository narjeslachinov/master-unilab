import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

import { MegaMenuSection } from "../../type/header.type";
import MegaMenuPanel from "./MegaMenuPanel";

type Props = {
  section: MegaMenuSection;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function CategoryItem({
  section,
  isOpen,
  onOpen,
  onClose,
}: Props) {
  return (
    <li
      className="group/item relative px-2"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
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
        <MegaMenuPanel items={section.items} isOpen={isOpen} />
      )}
    </li>
  );
}
