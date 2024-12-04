import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "@capacitor-community/safe-area";
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
    default: "Venture Vox - Prediction Market for Startups",
    template: "%s | Venture Vox",
  },
  description: "Prediction market for startups",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  initialize();

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-[#fff4ec] min-h-screen py-20`}
      >
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
