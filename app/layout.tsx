import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bouncing Dots",
  description: "Homepage animation preview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
