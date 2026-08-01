import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-primary text-2xl font-bold">
      Uni
      <span className="text-accent-3">Lab</span>
    </Link>
  );
}
