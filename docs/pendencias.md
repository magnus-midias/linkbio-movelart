# Pendências — Link na Bio Movelart

O que falta para finalizar, e exatamente **onde** mexer quando os insumos
chegarem. Atualizado em 2026-07-15.

---

## 1. Fotos dos projetos (Fase 4) — depende do cliente

**Insumo necessário:** imagens dos projetos (idealmente alta resolução; serão
convertidas para WebP na proporção 4/3).

**Como concluir:**
1. Colocar os arquivos em `public/images/projetos/` (ex.: `foto-01.webp`).
2. Preencher `src` e `alt` de cada item em [`lib/projetos.ts`](../lib/projetos.ts)
   (`FAIXA_TOPO` e `FAIXA_BASE`). O `Carrossel` troca o placeholder pela imagem
   automaticamente quando há `src`.

> Enquanto não houver `src`, a galeria mostra os placeholders "Foto N".

---

## 2. Google Tag Manager (Fase 5) — depende do cliente

**Insumo necessário:** ID do container GTM (ex.: `GTM-XXXXXXX`).

**Como concluir:**
1. Definir `NEXT_PUBLIC_GTM_ID` no ambiente (ver `.env.example` / Vercel).
2. Dentro do GTM: tag GA4 (Measurement ID), trigger de pageview e trigger de
   clique usando o evento `link_click` (parâmetros `link_label` e `link_url`).

> O wiring já está pronto: `components/Analytics.tsx` carrega o GTM só quando o
> ID existe e **já empurra** os eventos `link_click` para o `dataLayer` (todos os
> CTAs têm `data-label`).

---

## 3. Domínio de produção (Fase 5/6)

- Confirmar a URL final e definir `NEXT_PUBLIC_SITE_URL`. Sem isso, o fallback é
  `https://linkbio-movelart.vercel.app` (afeta metadata/OG, sitemap e robots).

---

## 4. Content Security Policy — CSP (Fase 6)

- Adicionar CSP em `next.config.mjs` depois de definir GTM/GA (precisa liberar
  `www.googletagmanager.com`, `www.google-analytics.com` e ajustar os scripts
  inline do Next). Deixado de fora para não quebrar o app antes do tracking.

---

## 5. Imagem OG e ícones (Fase 4/6) — melhorias

- A imagem OG atual (`app/opengraph-image.png`) é **tipográfica** (branded, sem
  foto). Quando houver foto de projeto boa, vale trocar por uma versão com
  imagem real.
- Falta `favicon.ico` de fallback para navegadores legados (hoje há `icon.svg` +
  `apple-icon.png`).

---

## 6. Qualidade e deploy (Fase 6)

- Rodar **Lighthouse mobile** (meta ≥ 95; LCP < 1,8s; CLS = 0) — melhor medir com
  as fotos reais já no lugar.
- Passe dedicado de **mobile** (toque ≥ 44px, sem scroll horizontal) — já
  atendido no design, confirmar em device real.
- **Deploy na Vercel** (importar o repo; framework detectado automaticamente) e
  ativar um **uptime monitor**.

---

## Já concluído (não é pendência)
- Estrutura, design system, componentes, galeria de faixas opostas, CTAs.
- OG (1200×630) + apple-icon (180×180), `robots.txt`, `sitemap.xml`, `llms.txt`.
- Headers de segurança (menos CSP). Build de produção passando.
