import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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
  title: "Bharat Mishra — Creative Developer & Interaction Engineer",
  description:
    "Portfolio of Bharat Mishra — Senior Creative Developer crafting high-performance interactive web experiences, cinematic scrollytelling, WebGL shaders, and design engineering systems.",
  keywords: [
    "Bharat Mishra",
    "Creative Developer",
    "Creative Technologist",
    "Scrollytelling",
    "Next.js 14",
    "Framer Motion",
    "HTML5 Canvas",
    "WebGL",
    "Awwwards",
    "Interaction Design",
  ],
  authors: [{ name: "Bharat Mishra" }],
  openGraph: {
    title: "Bharat Mishra — Creative Developer & Interaction Engineer",
    description:
      "Explore the interactive scrollytelling portfolio of Bharat Mishra. High-performance canvas scrubbers, dual-tone lighting aesthetics, and award-winning web mechanics.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#030f14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#030f14] text-slate-100 antialiased selection:bg-orange-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}