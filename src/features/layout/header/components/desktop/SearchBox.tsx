import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "@/components/ui/Input";

import { Search02Icon } from "@hugeicons/core-free-icons";
export default function SearchBox() {
  return (
    <div className="flex items-center">
      <Input
        type="text"
        placeholder="جست و جو ..."
        startIcon={
          <HugeiconsIcon
            aria-hidden
            size={20}
            icon={Search02Icon}
            strokeWidth={2}
          />
        }
      />
    </div>
  );
}
