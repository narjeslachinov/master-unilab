import { MenuLink } from "../../type/header.type";
import SubCategoryColumn from "./SubCategoryColumn";

type Props = {
  items: MenuLink[];
};

export default function SubCategoryGrid({ items }: Props) {
  return (
    <ul className="flex w-full items-center justify-start gap-8">
      {items.map((item) => (
        <SubCategoryColumn key={item.id} item={item} />
      ))}
    </ul>
  );
}
