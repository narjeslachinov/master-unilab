import Link from "next/link";
import { MenuItem as MenuItemType } from "../../type/header.type";
import DropDown from "./DropdownMenu";
import SubMenu from "@/features/megaMenue/components/SubMenu";

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

      {item.subMenu && <DropDown items={item.subMenu} />}
      {/* {item.subMenu &&
        (item.name === "دسته بندی" ? (
          <SubMenu items={item.subMenu} />
        ) : (
          <DropDown items={item.subMenu} />
        ))} */}
    </li>
  );
}
