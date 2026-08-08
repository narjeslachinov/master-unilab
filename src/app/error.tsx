"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
} from '@hugeicons/core-free-icons';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      bg-neutral-2
    ">

      <div className="
        glassBg1
        rounded-2xl
        p-10
        text-center
        max-w-lg
      ">

        <div className="
          text-6xl
          mb-5
 w-full mx-auto
 text-yellow-500
        ">
          <HugeiconsIcon icon={Alert02Icon} size={50} className="w-full"/>
        </div>


        <h1 className="
          heading
          heading2
          mb-4
        ">
          مشکلی پیش آمد
        </h1>


        <p className="
          customeSmallText
          text-gray-2
          mb-8
        ">
          خطایی رخ داده است.
          لطفاً دوباره تلاش کنید.
        </p>


        <button
          onClick={() => reset()}
          className="
            bg-primary
            text-light
            px-8
            py-3
            rounded-xl
            hover:scale-105
            transition
          "
        >
          تلاش دوباره
        </button>

      </div>

    </main>
  )
}