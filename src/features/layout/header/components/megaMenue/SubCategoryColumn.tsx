import Link from "next/link";

import type { MenuLink } from "../../type/header.type";
import SubCategoryLink from "./SubCategoryLink";

type Props = {
  item: MenuLink;
};

export default function SubCategoryColumn({
  item,
}: Props) {
  return (
    <li className="flex w-full min-w-40 flex-col">
      <Link href={item.href}>
        <span className="border-dark text-dark block border-b pb-2 font-semibold">
          {item.name}
        </span>
      </Link>

      {item.children && item.children.length > 0 && (
        <ul className="flex flex-col pt-2">
          {item.children.map((child) => (
            <li key={child.id}>
              <SubCategoryLink child={child} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}