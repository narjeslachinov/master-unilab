import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="primaryColor text-2xl font-bold">
      Uni
      <span className="text-orange-400">Lab</span>
    </Link>
  );
}
