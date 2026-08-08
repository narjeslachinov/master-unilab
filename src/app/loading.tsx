export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-2 overflow-hidden">

      <div className="relative">

        <div
          className="
            absolute
            inset-0
             bg-neutral-2
            blur-3xl
            rounded-full
            scale-150
          "
        />

        <div
          className="
            relative
            glassBg1
            rounded-xl
            px-12
            py-10
            flex
            flex-col
            items-center
            gap-5
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-full
              border-4
              border-primary/20
              border-t-primary
              animate-spin
            "
          />

          <p className="customeSmallText text-secondary">
            در حال بارگذاری...
          </p>

        </div>

      </div>

    </main>
  )
}