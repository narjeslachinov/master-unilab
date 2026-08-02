import Link from "next/link";
import { footerLinks } from "../data/footer.data";

export default function FooterLinks() {
  return (
    <ul className="footer-links flex flex-col gap-2 text-center md:flex-row md:gap-6">
      {footerLinks.map((link) => (
        <li key={link.id} className="hover:text-accent-1">
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
