import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lobsternization",
  description: "Discover the future of the lobster industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
