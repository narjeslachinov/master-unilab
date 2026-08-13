import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-neutral-2 flex min-h-screen items-center justify-center px-4">
      <section className="glassBg1 max-w-xl rounded-xl p-10 text-center md:p-16">
        <h1 className="heading heading1 mb-5 text-8xl text-red-500">404</h1>

        <h2 className="heading heading3 mb-3">صفحه پیدا نشد</h2>

        <p className="customeSmallText text-gray-2 mb-8">
          آدرسی که وارد کرده‌اید وجود ندارد یا منتقل شده است.
        </p>

        <Button
          asChild
          className="bg-primary text-light inline-flex rounded-xl px-8 py-3"
        >
          <Link href="/"> بازگشت به خانه</Link>
        </Button>
      </section>
    </main>
  );
}
