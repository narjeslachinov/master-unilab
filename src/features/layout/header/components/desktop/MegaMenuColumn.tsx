import Link from "next/link";
import { MegaSubMenuCategory } from "../../type/header.type";

type Props = {
  section: MegaSubMenuCategory;
};

export default function MegaMenuColumn({ section }: Props) {
  return (
    <div className="text-dark flex min-w-36 flex-col">
      <h4 className="pb-2text-center mb-4 border-b font-semibold">
        {section.name}
      </h4>

      <ul className="headerMenueItem animate-mega-in space-y-2">
        {section.items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="header-nav-right-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
