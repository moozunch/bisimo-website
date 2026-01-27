import type { Metadata } from "next";
import { Nunito, Lexend, Baloo_2 } from "next/font/google"; 
import "./globals.css";

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
    // 'scroll-smooth' agar saat klik menu navigasi, scroll-nya halus
    <html lang="id" className="scroll-smooth">
      <body
        // Masukkan variable font ke sini.
        // 'font-sans' akan otomatis menggunakan Lexend karena kita sudah setting di tailwind.config.ts
        className={`${lexend.variable} ${nunito.variable} ${baloo.variable} font-sans antialiased bg-base-100 text-neutral`}
      >
        {children}
      </body>
    </html>
  );
}