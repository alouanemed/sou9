import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ReduxProvider } from "@/providers/redux-provider";

import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOU9-FPK",
  description:
    "A modern, responsive e-commerce application using Next.js, Tailwind CSS, and React technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classes = clsx(
    geistSans.variable,
    geistMono.variable,
    "antialiased min-h-screen flex flex-col",
  );

  return (
    <html lang="en">
      <ReduxProvider>
        <body className={classes}>
          <div className="flex flex-1 flex-col">{children}</div>
          <div className="flex-shrink-0">
            <Footer />
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
