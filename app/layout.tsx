import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.demidovs.com"),
  title: "Artyom Demidov | Full Stack Developer",
  description:
    "Portfolio website for a full stack developer building websites, dashboards, APIs, and admin panels.",
  applicationName: "Artyom Demidov Portfolio",
  openGraph: {
    url: "https://www.demidovs.com",
    title: "Artyom Demidov | Full Stack Developer",
    description:
      "Portfolio website for a full stack developer building websites, dashboards, APIs, and admin panels.",
    type: "website",
    siteName: "Artyom Demidov Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Artyom Demidov | Full Stack Developer",
    description:
      "Portfolio website for a full stack developer building websites, dashboards, APIs, and admin panels.",
  },
  icons: {
    icon: "/branding/demidovs-mark.svg",
    shortcut: "/branding/demidovs-mark.svg",
    apple: "/branding/demidovs-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
