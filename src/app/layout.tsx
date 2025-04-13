import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/NavBar";


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
        <Navbar />

        {/* ⚡ Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950" />

        {/* 📦 Page Content */}
        <main className="pt-24 px-4">{children}</main>
        </body>
    </html>
  );
}
