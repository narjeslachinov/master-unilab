import Link from "next/link";
import { MenuLink } from "../../type/header.type";

type Props = {
  child: MenuLink;
};

export default function SubCategoryLink({ child }: Props) {
  return (
    <Link
      href={child.href}
      className="headerMenueItem header-nav-right-link text-gray-3 min-w-36"
    >
      {child.name}
    </Link>
  );
}
