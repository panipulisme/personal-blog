import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "nama.dev — catatan, proyek, dan pikiran",
    template: "%s · nama.dev",
  },
  description:
    "Blog pribadi tentang statistika, machine learning, marketing, dan kehidupan sehari-hari. Gratis, bebas algoritma.",
  metadataBase: new URL("https://nama.dev"),
  openGraph: {
    title: "nama.dev",
    description: "Catatan, proyek, dan pikiran.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
