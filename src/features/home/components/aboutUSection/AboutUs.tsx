"use client";

import Link from "next/link";
import AboutImages from "./AboutImages";
import AboutStats from "./AboutStats";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function AboutUs() {
  return (
    <Container>
      <section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <AboutImages />

          <div className="order-1 flex flex-col justify-center text-justify md:gap-3 lg:order-2">
            <h2 className="heading heading1">درباره یونی‌لب</h2>

            <p className="">
              شرکت <span className="font-bold">یونی لب</span> با سال‌ها تجربه در
              زمینه تأمین و تولید تجهیزات آزمایشگاهی همواره تلاش کرده است تا با
              ارائه محصولات باکیفیت و خدمات تخصصی، اعتماد دانشگاه‌ها، مراکز
              تحقیقاتی و صنایع دارویی را به دست آورد.
            </p>

            <p className="">
              مأموریت ما فراهم کردن بستری حرفه‌ای برای معرفی و عرضه تجهیزات و
              مواد آزمایشگاهی است تا پژوهشگران و دانشجویان بتوانند به‌سادگی به
              نیازهای علمی خود دسترسی پیدا کنند.
            </p>

            <AboutStats />

            <Button className="custome-link self-start">بیشتر بدانید</Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
