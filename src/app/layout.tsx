import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Skin \u2013 G&M | Cl\u00ednica de Est\u00e9tica em Amadora",
  description:
    "Cl\u00ednica de est\u00e9tica especializada em depila\u00e7\u00e3o a laser em peles negras, cuidados de pele, unhas e muito mais. Fundada por Gelsa Furtado e Marta Alexandra em Amadora, Portugal.",
  keywords: [
    "depila\u00e7\u00e3o a laser peles negras",
    "cl\u00ednica est\u00e9tica Amadora",
    "limpeza de pele",
    "brow lamination",
    "lifting de pestanas",
    "Bella Skin",
  ],
  openGraph: {
    title: "Bella Skin \u2013 G&M | Cl\u00ednica de Est\u00e9tica em Amadora",
    description:
      "Especialistas em depila\u00e7\u00e3o a laser em peles negras, cuidados de pele e beleza. Marque via WhatsApp.",
    type: "website",
    locale: "pt_PT",
    siteName: "Bella Skin \u2013 G&M",
  },
  robots: { index: true, follow: true },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u2728</text></svg>"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
