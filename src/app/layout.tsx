import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artio",
  description: "Artio - Alt Rock From Up North",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
