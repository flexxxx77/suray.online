import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-black shadow fixed top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="Suray.mn logo"
          width={160}
          height={48}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/about" className="hover:underline text-black dark:text-white">
          About Us
        </Link>
        <Link href="/feedback" className="hover:underline text-black dark:text-white">
          Санал хүсэлт
        </Link>
      </div>
    </nav>
  );
}
