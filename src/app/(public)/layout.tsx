import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/shared/Footer";
// import Navbar from "@/components/layout/Navbar/Navbar";

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

      <div className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
   
  );
}