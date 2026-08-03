import { HugeiconsIcon } from "@hugeicons/react";

import { getHeaderActions } from "../../data/header.data";
import { GetHeaderActionsProps } from "../../type/header.type";
export default function MobileBottomNav(props: GetHeaderActionsProps) {
  const actions = getHeaderActions(props);
  return (
    <div className="fixed right-2 bottom-0 left-2 flex w-full justify-around bg-white p-3 shadow-lg md:hidden">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={action.onClick}
          className="headerIcon cursor-pointer transition"
          aria-label={action.name}
        >
          <HugeiconsIcon
            aria-hidden
            size={22}
            icon={action.icon}
            strokeWidth={2.5}
          />
        </button>
      ))}
    </div>
  );
}
