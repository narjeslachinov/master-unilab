import { HugeiconsIcon } from "@hugeicons/react";

import { Mail01Icon, TelephoneIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopBar() {
  return (
    <div className="customeSmallText text-light bg-primary">
      <Container>
        <div className="hidden items-center justify-between py-3 md:flex">
          <div className="header-top-right flex items-center gap-4">
            <div className="flex items-center gap-1">
              <HugeiconsIcon aria-hidden size={18} icon={TelephoneIcon} />{" "}
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>
            <div className="flex items-center gap-1">
              <HugeiconsIcon aria-hidden size={18} icon={Mail01Icon} />{" "}
              <span>info@unilab.ir</span>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </Container>
    </div>
  );
}
