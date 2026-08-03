import { HugeiconsIcon } from "@hugeicons/react";
import { getHeaderActions } from "../../data/header.data";
import { GetHeaderActionsProps } from "../../type/header.type";

export default function HeaderActions(props: GetHeaderActionsProps) {
  const actions = getHeaderActions(props);

  return (
    <div className="flex gap-3">
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
