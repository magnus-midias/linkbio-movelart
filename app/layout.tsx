import type { Metadata } from "next";
import { Open_Sans, Mulish, Yantramanav } from "next/font/google";
import "./globals.css";

// Tipografia da marca (ver docs/design-system/MASTER.md §2)
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const yantramanav = Yantramanav({
  subsets: ["latin"],
  variable: "--font-yantra",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Movelart | Móveis Sob Medida",
  description:
    "Marcenaria de alto padrão na Grande Florianópolis. Projetos exclusivos sob medida. Solicite seu orçamento pelo WhatsApp.",
  openGraph: {
    title: "Movelart | Móveis Sob Medida",
    description:
      "Marcenaria de alto padrão na Grande Florianópolis. Projetos exclusivos sob medida.",
    type: "profile",
    locale: "pt_BR",
    siteName: "Movelart",
    // TODO (Fase 5): definir url canônica + images (og-image 1200x630)
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} ${mulish.variable} ${yantramanav.variable} font-sans antialiased`}
      >
        {/* Container do link na bio: centralizado, mobile-first (~420px) */}
        <div className="mx-auto flex min-h-dvh w-full max-w-[420px] flex-col px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
