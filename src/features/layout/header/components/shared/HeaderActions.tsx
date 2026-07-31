import { HugeiconsIcon } from "@hugeicons/react";

import {
  FavouriteIcon,
  ShoppingCart02Icon,
  User03Icon,
} from "@hugeicons/core-free-icons";

interface Props {
  openAuth: () => void;
}
export default function HeaderActions({ openAuth }: Props) {
  return (
    <div className="flex gap-3">
      <button
        onClick={openAuth}
        className="headerIcon cursor-pointer transition"
      >
        <HugeiconsIcon
          aria-hidden
          size={22}
          icon={FavouriteIcon}
          strokeWidth={2.5}
        />
      </button>

      <button
        onClick={openAuth}
        className="headerIcon cursor-pointer transition"
      >
        <HugeiconsIcon
          aria-hidden
          size={22}
          icon={ShoppingCart02Icon}
          strokeWidth={2.5}
        />
      </button>

      <button
        onClick={openAuth}
        className="headerIcon cursor-pointer transition"
      >
        <HugeiconsIcon
          aria-hidden
          size={22}
          icon={User03Icon}
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
}
