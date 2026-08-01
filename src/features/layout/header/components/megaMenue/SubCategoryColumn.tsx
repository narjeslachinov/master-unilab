import Link from "next/link";
import { MenuLink } from "../../type/header.type";
import SubCategoryLink from "./SubCategoryLink";

type Props = {
  item: MenuLink;
};

export default function SubCategoryColumn({ item }: Props) {
  return (
    <li className="flex w-full flex-col">
      <Link href={item.href}>
        <span className="border-dark text-dark mb-3 block border-b pb-2 font-semibold">
          {item.name}
        </span>
      </Link>

      {item.children && item.children.length > 0 && (
        <ul className="mt-2 flex flex-col gap-2">
          {item.children.map((child) => (
            <li key={child.href}>
              <SubCategoryLink child={child} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
