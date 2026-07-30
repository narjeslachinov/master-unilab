import { Button } from "@/components/ui/Button";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  FavouriteIcon,
  ShoppingCart02Icon,
  User03Icon,
} from "@hugeicons/core-free-icons";
interface Props {
  openCart: () => void;
  openAuth: () => void;
  openWishlist: () => void;
}

export default function HeaderActions({
  openCart,
  openAuth,
  openWishlist,
}: Props) {
  return (
    <div className="flex gap-4">
      <Button onClick={openWishlist}>
        <HugeiconsIcon aria-hidden size={20} icon={FavouriteIcon} />
      </Button>

      <Button onClick={openCart}>
        <HugeiconsIcon aria-hidden size={20} icon={ShoppingCart02Icon} />
      </Button>

      <Button onClick={openAuth}>
        <HugeiconsIcon aria-hidden size={20} icon={User03Icon} />
      </Button>
    </div>
  );
}
