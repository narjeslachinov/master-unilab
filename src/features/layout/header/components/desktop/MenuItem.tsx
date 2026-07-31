import Link from "next/link";
import { MenuItem as MenuItemType } from "../../type/header.type";
import { megaMenu } from "../../data/header.data";
import DropdownMenu from "./DropdownMenu";
import MegaMenu from "../megaMenue/MegaMenu";

type Props = {
  item: MenuItemType;
};

export default function MenuItem({ item }: Props) {
  return (
    <li className="group relative">
      <Link
        href={item.href}
        className="hover:text-primary relative px-2 py-1 font-normal transition"
      >
        {item.name}
        <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all group-hover:w-full" />
      </Link>

      {item.megaMenuKey && megaMenu[item.megaMenuKey] ? (
        <MegaMenu sections={megaMenu[item.megaMenuKey]} />
      ) : item.children ? (
        <DropdownMenu items={item.children} />
      ) : null}
    </li>
  );
}
