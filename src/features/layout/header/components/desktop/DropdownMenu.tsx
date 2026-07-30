import Link from "next/link";

import { SubMenuItem } from "../../type/header.type";
import { megaSubMenu } from "../../data/header.data";

type Props = {
  items: SubMenuItem[];
};

export default function DropdownMenu({ items = [] }: Props) {
  return (
    <div className="headerMenue1 headerMenueBg1 customeSmallText invisible top-full mt-2 flex flex-col opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
      <ul>
        {items.map((item) => {
          const hasMega = !!megaSubMenu[item.name];

          return (
            <li key={item.name} className="">
              <Link
                href={item.href}
                className="headerMenueItem header-nav-right-link flex items-center justify-between"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
