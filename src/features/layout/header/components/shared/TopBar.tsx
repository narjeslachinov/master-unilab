import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, TelephoneIcon } from "@hugeicons/core-free-icons";

import { Container } from "@/components/ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function TopBar() {
  return (
    <div className="customeSmallText text-light bg-primary">
      <Container>
        <div className="flex h-12 items-center justify-between">
          <div className="header-top-right hidden items-center justify-between gap-4 md:flex">
            <div className="flex items-center gap-1">
              <HugeiconsIcon aria-hidden size={18} icon={TelephoneIcon} />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>

            <div className="flex items-center gap-1">
              <HugeiconsIcon aria-hidden size={18} icon={Mail01Icon} />
              <span>info@unilab.ir</span>
            </div>
          </div>

          <div className="md:hidden">
            <Logo />
          </div>

          <LanguageSwitcher />
        </div>
      </Container>
    </div>
  );
}
