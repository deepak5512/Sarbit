import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sarbit",
  description:
    "A deep Tech Start up from Medical Technologies Program by IIT Jodhpur & AIIMS Jodhpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        <HeroHeader />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
