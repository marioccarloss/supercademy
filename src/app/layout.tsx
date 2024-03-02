import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import { lato } from "@/shared/fonts";
import "@/app/index.scss";

export const metadata: Metadata = {
  title: "Supercademy",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <NextTopLoader
          color="#64ee85"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0.125rem 0.5625rem 2.975rem 0 rgba(0, 9, 13, 0.59)"
        />
        {children}
      </body>
    </html>
  );
}
