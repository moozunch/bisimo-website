import type { Metadata } from "next";
import { Nunito, Lexend, Baloo_2 } from "next/font/google"; 
import "./globals.css";
import SmoothScroll from "./components/SmoothScrolls";



const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bisimo - Bahasa Isyarat Deteksi Emosional",
  description: "Mendengar yang Tak Terucap. Memahami yang Tak Terdengar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${lexend.variable} ${nunito.variable} ${baloo.variable} font-sans antialiased bg-base-100 text-neutral`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}