import type { Metadata } from "next/types";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yadav Finance | Digital Lending & Financial Solutions",
  description: "Yadav Finance offers next-gen digital lending, personal credit, and MSME growth capital with a focus on transparency and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />

      </body>
    </html>
  );
}
