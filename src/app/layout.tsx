"use client";

import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/NavBar";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/app/lib/gtag";

export const metadata: Metadata = {
  title: "Suray.online",
  description: "Хэл бичгийн тест - Suray.online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return (
    <html lang="mn" suppressHydrationWarning>
      <head>
        {/* 📊 Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RMX1N907MW"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RMX1N907MW');
            `,
          }}
        />
      </head>
      <body className="scroll-smooth transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* 🔝 Navbar */}
        <Navbar />

        {/* ⚡ Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950" />

        {/* 📦 Page Content */}
        <main className="pt-24 px-4">{children}</main>
      </body>
    </html>
  );
}
