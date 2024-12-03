import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { initialize } from "@capacitor-community/safe-area";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Venture Vox",
    template: "%s | Venture Vox",
  },
  description: "Prediction market for startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  initialize();

  return (
    <html lang="en">
      <meta name="viewport" content="viewport-fit=cover" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-[#fff4ec] h-dvh relative`}
      >
        <div className="h-16 bg-white block md:hidden" />
        <Header />
        <div className="h-[calc(75%-5rem)]">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
