import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuLink } from "../../type/header.type";

type Props = {
  items: MenuLink[];
};

export default function DropdownMenu({ items = [] }: Props) {
  return (
    <div className="headerMenue1 headerMenueBg1 customeSmallText invisible absolute top-full left-1/2 w-40 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn("headerMenueItem", item.className)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
