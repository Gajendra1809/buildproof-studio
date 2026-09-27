import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuildProof Studio — Prove your software idea before you build it",
    template: "%s · BuildProof Studio",
  },
  description:
    "BuildProof Studio turns software ideas into working prototypes in 14–21 days, so you can test the concept with real people before investing in a full product.",
  keywords: [
    "software prototype",
    "MVP",
    "startup prototype",
    "idea validation",
    "BuildProof Studio",
    "BuildProof Sprint",
  ],
  authors: [{ name: "BuildProof Studio" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BuildProof Studio",
    title: "Have a software idea? Prove it before you build it.",
    description:
      "Working software prototypes in 14–21 days. Test the concept before spending big on a full product.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildProof Studio — Prove your software idea before you build it",
    description:
      "Working software prototypes in 14–21 days. Test the concept before spending big on a full product.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-ink-950 text-ink-50">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
