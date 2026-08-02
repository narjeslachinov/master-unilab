"use client";

import { Container } from "@/components/ui/Container";
import { brands } from "../../data/home.data";
import BrandSlider from "./BrandSlider";

export default function BrandsSection() {
  return (
    <Container>
      <section className="relative space-y-10 py-18">
        <div className="space-y-3 text-center">
          <h2 className="heading heading1">برندها و تأمین‌کنندگان معتبر</h2>

          <p>همکاری با معتبرترین برندهای جهانی در حوزه تجهیزات آزمایشگاهی</p>
        </div>

        <BrandSlider brands={brands} />
      </section>
    </Container>
  );
}
