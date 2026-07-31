import Link from "next/link";
import { MegaSubMenuCategory } from "../type/header.type";

type Props = {
  section: MegaSubMenuCategory;
};

export default function MegaMenuColumn({ section }: Props) {
  return (
    <div className="text-dark flex min-w-48 flex-col">
      <h4 className="mb-4 border-b pb-2 text-center font-semibold text-gray-800">
        {section.name}
      </h4>

      <ul className="headerMenueItem animate-mega-in space-y-2">
        {section.items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="headerMenueItem header-nav-right-link"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
