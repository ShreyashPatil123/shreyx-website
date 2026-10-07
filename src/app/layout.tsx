import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyx.dev"),
  title: "ShreyX | Independent Technology Studio",
  description:
    "ShreyX is an independent technology studio founded by Shreyash Patil, building privacy-first consumer applications, autonomous media engines, and AI tools.",
  keywords: [
    "ShreyX",
    "Shreyash Patil",
    "ShreyX Music",
    "ShreyX Tube",
    "Independent Studio",
    "Privacy-first apps",
    "ExoPlayer",
    "Flutter",
    "Android",
  ],
  authors: [{ name: "Shreyash Patil", url: "https://github.com/ShreyashPatil123" }],
  creator: "Shreyash Patil",
  publisher: "ShreyX",
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    title: "ShreyX | Independent Technology Studio",
    description:
      "Building technology people actually want to use. Privacy-first consumer apps, autonomous media players, and on-device AI tools.",
    url: "https://shreyx.dev",
    siteName: "ShreyX",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 800,
        height: 800,
        alt: "ShreyX Studio Brand Mark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShreyX | Independent Technology Studio",
    description:
      "Building technology people actually want to use. Privacy-first consumer apps, autonomous media players, and on-device AI tools.",
    images: ["/images/brand/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased min-h-screen selection:bg-zinc-800 selection:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
