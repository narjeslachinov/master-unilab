export default function Loading() {
  return (
    <main className="bg-neutral-2 flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="bg-neutral-2 absolute inset-0 scale-150 rounded-full blur-3xl" />

        <div className="glassBg1 relative flex flex-col items-center gap-5 rounded-xl px-12 py-10">
          <div className="border-primary/20 border-t-primary h-16 w-16 animate-spin rounded-full border-4" />

          <p className="customeSmallText text-secondary">در حال بارگذاری...</p>
        </div>
      </div>
    </main>
  );
}
