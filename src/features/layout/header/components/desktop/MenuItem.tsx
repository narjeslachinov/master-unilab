import Link from "next/link";
import { MenuItem as MenuItemType } from "../../type/header.type";
import SubMenu from "./SubMenu";

type Props = {
  item: MenuItemType;
};

export default function MenuItem({ item }: Props) {
  return (
    <li className="group relative">
      <Link
        href={item.href}
        className="hover:text-primary relative px-2 py-1 transition"
      >
        {item.name}
        <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
      </Link>

      {item.subMenu && <SubMenu items={item.subMenu} />}
    </li>
  );
}
