"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/app/lib/gtag";

export default function ClientWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}
