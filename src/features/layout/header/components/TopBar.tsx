import { HugeiconsIcon } from "@hugeicons/react";

import { Mail01Icon, TelephoneIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/ui/Container";

export default function TopBar() {
  return (
    <div className="customeSmallText text-light bg-primary hidden justify-between py-3 md:flex">
      <Container>
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <HugeiconsIcon aria-hidden size={18} icon={TelephoneIcon} />
            <span className="font-semibold">021-12345678</span>
          </div>

          <div className="flex items-center gap-1">
            <HugeiconsIcon aria-hidden size={18} icon={Mail01Icon} />
            <span className="font-semibold">info@unilab.ir</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
