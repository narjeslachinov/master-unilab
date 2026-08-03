import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-light md:text-primary text-xl font-bold md:text-2xl"
    >
      Uni
      <span className="text-accent-3">Lab</span>
    </Link>
  );
}
