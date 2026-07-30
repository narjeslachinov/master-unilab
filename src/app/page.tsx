"use client";

import AuthModal from "@/features/auth/components/AuthModal";

export default function Home() {
  return (
    <main className="">
      <AuthModal isOpen={true} onClose={() => {}} />
    </main>
  );
}
