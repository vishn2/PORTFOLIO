import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vishnu Vardhan — IT Professional Portfolio",
  description:
    "Portfolio of Vishnu Vardhan, an Information Technology professional specializing in system architecture, cybersecurity, and enterprise solutions. Architecting resilient systems and crafting precise code.",
  keywords: [
    "Vishnu Vardhan",
    "IT Professional",
    "Portfolio",
    "System Architecture",
    "Cybersecurity",
    "Full Stack Developer",
  ],
  authors: [{ name: "Vishnu Vardhan" }],
  openGraph: {
    title: "Vishnu Vardhan — IT Professional Portfolio",
    description:
      "Architecting resilient systems and crafting precise code. A disciplined approach to modern IT infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${hanken.variable} dark`}>
      <body className="bg-black text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
