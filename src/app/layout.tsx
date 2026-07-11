import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Micro Learning Hub",
    template: "%s | Micro Learning Hub",
  },
  description:
    "A modern online learning platform for schools and colleges.",
  keywords: [
    "Micro Learning Hub",
    "Online Learning",
    "School",
    "College",
    "Education",
    "Courses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar/>
        {children}

      </body>
    </html>
  );
}