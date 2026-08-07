"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-neutral-1 px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 text-5xl">⚠️</div>

        <h1 className="mb-3 text-2xl font-semibold text-dark">
          مشکلی پیش آمده است
        </h1>

        <p className="mb-6 text-gray-3">
          متأسفانه هنگام دریافت اطلاعات مشکلی رخ داد.
          لطفاً دوباره تلاش کنید.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-accent-1 px-6 py-3 text-white transition-opacity hover:opacity-90"
        >
          تلاش مجدد
        </button>
      </div>
    </main>
  );
}