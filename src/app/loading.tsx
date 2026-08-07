export default function Loading() {
  return (
    <main className="min-h-[9vh] bg-neutral-1">
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-accent-1" />

          <p className="text-sm text-gray-3">
            در حال دریافت اطلاعات...
          </p>
        </div>
      </div>
    </main>
  );
}