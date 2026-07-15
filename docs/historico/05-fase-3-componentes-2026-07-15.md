# 05 — Fase 3: componentes estilizados

**Data:** 2026-07-15
**Fase:** 3 — Componentes (concluída)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–04, arquitetura, MASTER e
override feita antes).

---

## O que foi feito

Criado o diretório `components/` e extraídos/estilizados os componentes,
consumindo os tokens do `MASTER.md`.

### Componentes
- **`components/icons.tsx`** — `IconInstagram` (estilo Feather, stroke) e
  `IconWhatsApp` (glifo oficial, fill). `currentColor` + `aria-hidden`.
- **`components/Header.tsx`** — logo real `icone-vermelho.svg` via `next/image`
  (`priority`, `h-14`), nome e subtítulo. Logo com `alt=""` (decorativo; o nome
  está no `<h1>`).
- **`components/GaleriaStrip.tsx`** — strip com loop CSS contínuo
  (`animate-gallery-scroll`). Duas cópias idênticas da lista de 6 cards para a
  emenda ser perfeita (translate3d 0 → -50%). `-mx-4` (full-bleed),
  `aria-hidden`. Cards `aspect-[4/3] h-[180px]` `bg-brand-surface`, placeholder
  "Foto N".
- **`components/BotaoCta.tsx`** — 3 variantes (MASTER §5.2–5.4):
  - primário: `bg-brand-accent` → hover/active `brand-accent-hover`, texto branco.
  - secundário: outline `brand-ebony`, preenche no hover.
  - terciário: outline `brand-border` discreto.
  - `min-h-[48px]`, full-width, `rounded-md`, `focus-visible:ring`.
- **`components/RedesSociais.tsx`** — Instagram + WhatsApp, ícones 28px,
  `brand-muted` → hover `brand-accent`, `aria-label` na âncora.
- **`components/Rodape.tsx`** — "© 2025 Movelart · São José, SC".

### Composição
- `app/page.tsx` recomposto usando os componentes (alias `@/components/*`).
  CTA primário recebe o ícone do WhatsApp à direita.

---

## Percalço resolvido

`npm run build` inicial falhou com `MODULE_NOT_FOUND` / "Failed to collect page
data" — o **dev server em background e o build escreviam na mesma pasta `.next`**
simultaneamente, corrompendo-a. Correção: parar o dev (`pkill -f "next dev"`),
`rm -rf .next` e rebuildar. Build passou (página = 5.34 kB, First Load 92.6 kB).

> Lição: não rodar `next build` com o `next dev` ativo no mesmo projeto.

---

## Verificação
- `npm run build` — ✓ compilado, tipos válidos, 5 páginas estáticas.
- Dev server (`http://localhost:3000`) renderizando as variantes de botão,
  galeria animada, ícones das redes e o logo real.

---

## Próximo passo
Fase 4 — conteúdo real: substituir os placeholders da galeria por fotos reais
dos projetos (`<Image>`, WebP), e adicionar `apple-touch-icon` + `.ico` de
fallback. (Logo real já foi aplicado nesta fase.)
