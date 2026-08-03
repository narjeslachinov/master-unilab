import { menuItems } from "../../data/header.data";
import MenuItem from "./DesktopMenuItem";

export default function Menu() {
  return (
    <nav>
      <ul className="hidden items-center gap-4 lg:flex">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
