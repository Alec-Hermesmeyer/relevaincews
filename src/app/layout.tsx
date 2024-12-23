import type { Metadata } from "next";
import type { Viewport } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RelevAInce - Transform Complexity to Clarity",
  description: "RelevAInce is a unique software platform for gleaning truth and leveraging insight with vast quantities of data at remarkable speed.",
  openGraph: {
    title: "RelevAInce - Transform Complexity to Clarity",
    description: "RelevAInce is a unique software platform for gleaning truth and leveraging insight with vast quantities of data at remarkable speed.",
    url: "https://www.relevaince.ai",
    images: [
      {
        url: "/LogoBlack.png",
        width: 800,
        height: 600,
        alt: "RelevAInce Logo",
      },
    ],
    siteName: "RelevAInce",
  },
  
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/apple-touch-icon.png", sizes: "180x180", rel: "apple-touch-icon" },
    ],
  },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
