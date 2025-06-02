import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import ClientProviders from "./ClientProviders";

export const metadata: Metadata = {
  title: "One Signature Developments",
  description: "We Build Communities Worth Coming Home To",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <ClientProviders>{children}</ClientProviders>

        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
