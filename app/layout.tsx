"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metadata: Metadata = {
  title: "One Signature Developments",
  description: "We Build Communities Worth Coming Home To",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
