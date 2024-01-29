import { ReactNode } from "react";
import type { Metadata } from "next";
import { lato } from "@/shared/fonts";
import "@/app/index.scss";

export const metadata: Metadata = {
  title: "Supercademy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>{children}</body>
    </html>
  );
}
