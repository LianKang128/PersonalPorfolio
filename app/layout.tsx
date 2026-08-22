import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee Lian Kang · Full Stack Developer",
  description:
    "Full-stack developer in Kuala Lumpur building thoughtful web products, APIs, and interactive game systems.",
  applicationName: "Lian Kang Portfolio",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Game Developer",
    "Kuala Lumpur",
  ],
  openGraph: {
    title: "Lee Lian Kang · Full Stack Developer",
    description:
      "Web products, backend systems, and interactive game experiences built with care.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={display.variable + " " + mono.variable}>
      <body>{children}</body>
    </html>
  );
}
