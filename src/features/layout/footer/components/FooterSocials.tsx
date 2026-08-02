import Link from "next/link";
import { footerSocials } from "../data/footer.data";
import { HugeiconsIcon } from "@hugeicons/react";

export default function FooterSocials() {
  return (
    <div className="flex gap-4">
      {footerSocials.map(({ id, href, icon: Icon }) => (
        <Link
          key={id}
          href={href}
          aria-label="social"
          className="text-accent-1 hover:text-light hover:scale-110"
        >
          <HugeiconsIcon size={20} icon={Icon} />
        </Link>
      ))}
    </div>
  );
}
