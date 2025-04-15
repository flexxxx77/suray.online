"use client";

import Link from "next/link";
import Image from "next/image";
import { event } from "@/app/lib/gtag";

export default function Navbar() {
  const handleFeedbackClick = () => {
    event({
      action: "click_button",
      category: "navigation",
      label: "Feedback Link",
      value: 1,
    });
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-white border-b border-gray-300 fixed top-0 z-50">
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
        <Link href="/about" className="hover:underline text-black">
          Бидний Тухай
        </Link>
        <Link
          href="/feedback"
          className="hover:underline text-black"
          onClick={handleFeedbackClick}
        >
          Санал хүсэлт
        </Link>
      </div>
    </nav>
  );
}
