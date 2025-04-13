import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-black shadow">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Suray.mn logo"
          width={150}
          height={50}
          className="h-10 object-contain"
        />
      </Link>
      <div className="flex items-center space-x-4 text-sm">
        <Link href="/about" className="hover:underline text-black dark:text-white">
          About Us
        </Link>
        <Link href="/contact" className="hover:underline text-black dark:text-white">
          Санал хүсэлт
        </Link>
      </div>
    </nav>
  );
}
