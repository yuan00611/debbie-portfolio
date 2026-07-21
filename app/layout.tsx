import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Debbie Chen — Senior Frontend Engineer",
  description: "Debbie Chen — frontend engineer & design technologist building interfaces that make complex systems easier to use, understand, and trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inline script runs before paint to apply saved theme and prevent FOUC */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){try{
            var t=localStorage.getItem('theme');
            var d=window.matchMedia('(prefers-color-scheme:dark)').matches;
            if(t==='dark'||(t===null&&d))document.documentElement.classList.add('dark');
          }catch(e){}}());
        ` }} />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
