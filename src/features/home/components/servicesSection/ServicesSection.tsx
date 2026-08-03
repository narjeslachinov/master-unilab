"use client";

import { Container } from "@/components/ui/Container";
import { services } from "../../data/home.data";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ServicesSection() {
  return (
    <Container>
      <section className="ServicesSection flex flex-col gap-8 md:gap-12">
        <div className=" text-center">
          <h2 className="heading heading1">خدمات یونی‌لب</h2>

          <p>
            ارائه‌ی کامل‌ترین خدمات و تجهیزات آزمایشگاهی برای پژوهشگران و مراکز
            تحقیقاتی
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.id} className="rotateY text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md">
                <HugeiconsIcon
                  className="rotateIcon ServicesIcon"
                  aria-hidden
                  size={35}
                  icon={service.icon}
                  strokeWidth={2}
                />
              </div>

              <h2 className="heading heading5">{service.title}</h2>

              <p className="text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
