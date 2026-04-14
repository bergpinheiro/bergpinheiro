import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Weblooks | Desenvolvimento Web e Soluções Digitais",
    template: "%s | Weblooks",
  },
  description:
    "Transformamos ideias em soluções digitais de alta performance. Desenvolvimento de sistemas web, integrações, automações e infraestrutura para o seu negócio.",
  keywords: [
    "desenvolvimento web",
    "sistemas web",
    "Next.js",
    "React",
    "TypeScript",
    "API",
    "automação",
    "WhatsApp Business",
    "Weblooks",
    "Berg Pinheiro",
  ],
  authors: [{ name: "Berg Pinheiro", url: "https://weblooks.com.br" }],
  creator: "Weblooks",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://weblooks.com.br",
    title: "Weblooks | Desenvolvimento Web e Soluções Digitais",
    description:
      "Transformamos ideias em soluções digitais de alta performance.",
    siteName: "Weblooks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weblooks - Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weblooks | Desenvolvimento Web e Soluções Digitais",
    description:
      "Transformamos ideias em soluções digitais de alta performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://weblooks.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
