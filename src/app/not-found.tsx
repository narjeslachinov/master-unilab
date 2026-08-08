import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      bg-neutral-2
    ">

      <section className="
        glassBg1
        rounded-xl
        p-10 md:p-16
        text-center
        max-w-xl
      ">

        <h1 className="
          heading
          heading1
          text-red-500
          text-8xl
          mb-5
        ">
          404
        </h1>


        <h2 className="
          heading
          heading3
          mb-3
        ">
          صفحه پیدا نشد
        </h2>


        <p className="
          customeSmallText
          text-gray-2
          mb-8
        ">
          آدرسی که وارد کرده‌اید وجود ندارد
          یا منتقل شده است.
        </p>


        <Button
          className="
            inline-flex
            bg-primary
            text-light
            px-8
            py-3
            rounded-xl
          "
        >
          بازگشت به خانه
        </Button>

      </section>

    </main>
  )
}