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
    default: "Berg Pinheiro — Dev Full Stack",
    template: "%s | Berg Pinheiro",
  },
  description:
    "Portfólio de Berg Pinheiro, Dev Full Stack especializado em Next.js, React, Node.js, integrações e automações. Fundador da Weblooks.",
  keywords: [
    "Berg Pinheiro",
    "Dev Full Stack",
    "desenvolvedor web",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Weblooks",
    "Fortaleza",
    "portfólio",
    "freelancer",
  ],
  authors: [{ name: "Berg Pinheiro", url: "https://github.com/bergpinheiro" }],
  creator: "Berg Pinheiro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bergpinheiro.dev",
    title: "Berg Pinheiro — Dev Full Stack",
    description:
      "Portfólio de Berg Pinheiro — Dev Full Stack, especialista em sistemas web, integrações e automações.",
    siteName: "Berg Pinheiro",
    images: [
      {
        url: "/berg-pinheiro.png",
        width: 800,
        height: 900,
        alt: "Berg Pinheiro — Dev Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berg Pinheiro — Dev Full Stack",
    description:
      "Portfólio de Berg Pinheiro — Dev Full Stack, especialista em sistemas web, integrações e automações.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://bergpinheiro.dev"),
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
