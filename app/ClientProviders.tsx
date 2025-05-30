"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return <>{children}</>;
}
