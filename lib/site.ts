// URL de produção do link na bio. Usada em metadata/OG, sitemap e robots.
// Definir NEXT_PUBLIC_SITE_URL no deploy (ver .env.example). O padrão abaixo é
// o URL provável na Vercel — CONFIRMAR o domínio final antes de produção.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://linkbio-movelart.vercel.app";
