import type { Metadata } from "next";
import "./globals.css";
import { poppins, raleway } from "./fonts";

export const metadata: Metadata = {
  title: "Andrix Design",
  description: "Created by Andrix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
