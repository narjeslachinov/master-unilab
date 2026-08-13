"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-neutral-2 flex min-h-screen items-center justify-center px-4">
      <div className="glassBg1 max-w-lg rounded-2xl p-10 text-center">
        <div className="mx-auto mb-5 w-full text-6xl text-yellow-500">
          <HugeiconsIcon icon={Alert02Icon} size={50} className="w-full" />
        </div>

        <h1 className="heading heading2 mb-4">مشکلی پیش آمد</h1>

        <p className="customeSmallText text-gray-2 mb-8">
          خطایی رخ داده است. لطفاً دوباره تلاش کنید.
        </p>

        <button
          onClick={() => reset()}
          className="bg-primary text-light rounded-xl px-8 py-3 transition hover:scale-105"
        >
          تلاش دوباره
        </button>
      </div>
    </main>
  );
}
