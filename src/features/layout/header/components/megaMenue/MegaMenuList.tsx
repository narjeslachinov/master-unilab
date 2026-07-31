import { MenuLink } from "../../type/header.type";
import MegaMenuItem from "./MegaMenuItem";

type Props = {
  items: MenuLink[];
};

export default function MegaMenuList({ items }: Props) {
  return (
    <ul className="flex w-full items-center justify-start gap-8">
      {items.map((item) => (
        <MegaMenuItem key={item.href} item={item} />
      ))}
    </ul>
  );
}
