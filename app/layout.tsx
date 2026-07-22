import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Austin Felix",
  description: "Developer with passion in full-stack and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 antialiased`}
    >
      <body
        className={`${geistSans.className} ${geistMono.className} min-h-screen w-full bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen flex bg-zinc-950">
          <Sidebar />
          <div className="flex-1 md:ml-[260px]">
            <main className="min-h-screen bg-zinc-950">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
