import { menuItems } from "../../data/header.data";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav>
      <ul className="hidden items-center gap-8 lg:flex">
        {menuItems.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
}
