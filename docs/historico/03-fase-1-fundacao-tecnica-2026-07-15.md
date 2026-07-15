# 03 — Fase 1: fundação técnica

**Data:** 2026-07-15
**Fase:** 1 — Fundação técnica (concluída)
**Autor:** Claude Code
**Impacto visual:** sim (tokens, fontes e base de estilo implementados; leitura
de histórico 00/01/02, arquitetura, MASTER e override feita antes).

---

## O que foi feito

### Tokens — `tailwind.config.ts`
- Cores da marca em `theme.extend.colors.brand` (bg, surface, dark, ebony,
  muted, border, accent, accent-hover) conforme `MASTER.md` §3.
- `fontFamily`: `display` → `--font-display`, `sans` → `--font-body`,
  `yantra` → `--font-yantra`.
- `borderRadius` sobrescrito: `sm` = 4px, `md` = 8px (escala Movelart).
- Keyframe + animação `gallery-scroll` (loop `translate3d(0)` → `-50%`),
  30s linear infinite.

### Fontes — `app/layout.tsx`
- Open Sans, Mulish e Yantramanav via `next/font/google`, `display: swap`,
  subset `latin`. Yantramanav com pesos 400/500/700 (não é variable).
- CSS vars aplicadas no `<body>` + `font-sans` como padrão.

### Metadata / SEO base — `app/layout.tsx`
- `title`, `description` e `openGraph` (type `profile`, locale `pt_BR`).
- `<html lang="pt-BR">`.
- TODO deixado para Fase 5: url canônica + imagem OG 1200×630.

### Estilo base — `app/globals.css`
- Removido o boilerplate (dark mode default, Arial). Agora: `body` com
  `bg-brand-bg text-brand-dark font-sans`.
- `@media (prefers-reduced-motion: reduce)` desliga a animação da galeria.

### Assets promovidos
- `docs/design-system/logos/*.svg` → `public/images/`.
- `docs/design-system/favicon/favicon.svg` → `app/icon.svg` (detectado pelo
  App Router).
- Removidos: `app/favicon.ico` (demo do Next) e `app/fonts/` (Geist, substituídas
  pelas Google Fonts).

### Página
- `app/page.tsx` substituído por um placeholder mínimo que valida as três fontes
  e os tokens (nome + subtítulo + eyebrow). A composição real vem nas Fases 2–3.

---

## Percalço resolvido

O primeiro `npm run build` falhou com
`TypeError: Class extends value #<Object> is not a constructor` em `postcss`.
Causa: o `node_modules` havia sido movido com `rsync` entre sistemas de arquivos
(no init do projeto, histórico 00), corrompendo pacotes. **Correção:**
`rm -rf node_modules .next && npm install`. Build subsequente passou.

> Lição: nunca mover `node_modules` entre filesystems — reinstalar no destino.

---

## Verificação
- `npm run build` — ✓ compilado, tipos válidos, 5 páginas estáticas geradas,
  rota `/icon.svg` servida. First Load JS ~87 kB.

---

## Próximo passo
Fase 2 — `layout.tsx`/`page.tsx` com container ~420px e o esqueleto das 5 seções
na ordem (Header, Galeria, CTAs, Redes, Rodapé), ainda sem estilo final.
