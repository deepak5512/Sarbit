import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { Github, Twitter } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Sarbit Innovations",
    template: "%s - Sarbit Innovations",
  },
  description:
    "A deep Tech Start up from Medical Technologies Program by IIT Jodhpur & AIIMS Jodhpur",
  openGraph: {
    title: "Sarbit Innovations - A Deep Tech Start Up",
    description:
      "A deep Tech Start up from Medical Technologies Program by IIT Jodhpur & AIIMS Jodhpur",
    url: "https://www.sarbit.in/",
    siteName: "Sarbit Innovations",
    images: [
      {
        url: "https://www.sarbit.in/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sarbit Innovations - A Deep Tech Start Up",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarbit Innovations - A Deep Tech Start Up",
    description:
      "A deep Tech Start up from Medical Technologies Program by IIT Jodhpur & AIIMS Jodhpur",
    images: ["https://www.sarbit.in/opengraph-image.png"],
    creator: "Deepak Bhatter",
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Deepak Bhatter" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
          <div className="mx-auto max-w-6xl px-6">
            <FooterSection
              logo={<LogoIcon />}
              brandName="Sarbit Innovations"
              socialLinks={[
                {
                  icon: <Twitter className="h-5 w-5" />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com",
                  label: "GitHub",
                },
              ]}
              mainLinks={[
                { href: "/products", label: "Products" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ]}
              legalLinks={[{ href: "/terms", label: "Terms & Conditions" }]}
              copyright={{
                text: "© 2025 Sarbit Innovations",
                license: "All rights reserved",
              }}
            />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
