import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suray.mn",
  description: "ЭЕШ Монгол хэлний тестүүд - Suray.mn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body className="scroll-smooth transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        
        {/* 🔝 Navbar */}
        <header className="w-full py-4 px-6 flex justify-between items-center backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-md fixed top-0 z-50">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-yellow-400 hover:opacity-80 transition-all">
            Suray.online
          </Link>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="/about" className="hover:text-blue-500 dark:hover:text-yellow-300 transition">
              About Us
            </Link>
            <Link href="/feedback" className="hover:text-blue-500 dark:hover:text-yellow-300 transition">
              Санал хүсэлт
            </Link>
          </nav>
        </header>

        {/* ⚡ Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950" />

        {/* 📦 Page Content */}
        <main className="pt-20 px-4">{children}</main>
      </body>
    </html>
  );
}
