import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Gloock, Onest } from "next/font/google";
import "./globals.css";

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Debbie Chen — Senior Frontend Engineer",
  description: "Debbie Chen's portfolio showcasing her work in designing and building intuitive, scalable, and accessible interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gloock.variable} ${onest.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
