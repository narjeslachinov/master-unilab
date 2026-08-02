"use client";

import { Container } from "@/components/ui/Container";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="custom-footer bg-primary text-light px-4 text-center md:px-0">
      <Container>
        <div className="pt-6 pb-16 md:pb-6">
          <div className="flex flex-col items-center justify-around gap-4 md:flex-row">
            <FooterLinks />

            <FooterSocials />
          </div>

          <p className="footer-copy py-2 text-center">
            © {new Date().getFullYear()} یونی‌لب - تمامی حقوق محفوظ است.
          </p>
        </div>
      </Container>
    </footer>
  );
}
