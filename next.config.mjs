/** @type {import('next').NextConfig} */

// Headers HTTP de segurança (aplicados a todas as rotas).
// Obs.: um Content-Security-Policy (CSP) restrito depende dos domínios do GTM/
// GA e de ajustes para os scripts inline do Next — deixado como pendência da
// Fase 6 para não quebrar o app antes do tracking estar definido.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
