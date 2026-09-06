import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${siteConfig.name} | Stronger Than Yesterday`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Focus Fitness is a premium strength and performance gym in New Sangavi, Pune — modern equipment, certified trainers, and personalized training programs.",
  openGraph: {
    title: `${siteConfig.name} | Stronger Than Yesterday`,
    description:
      "A premium strength and performance gym in New Sangavi, Pune, Maharashtra.",
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Stronger Than Yesterday`,
    description:
      "A premium strength and performance gym in New Sangavi, Pune, Maharashtra.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
