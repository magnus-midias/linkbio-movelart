# 04 — Fase 2: layout e esqueleto da página

**Data:** 2026-07-15
**Fase:** 2 — Layout e container (concluída)
**Autor:** Claude Code
**Impacto visual:** sim (estrutura da página; leitura de histórico 00–03,
arquitetura, MASTER e override feita antes).

---

## O que foi feito

### Container — `app/layout.tsx`
- Adicionado wrapper centralizado mobile-first:
  `mx-auto flex min-h-dvh w-full max-w-[420px] flex-col px-4`, envolvendo
  `{children}`.

### Esqueleto — `app/page.tsx`
- Substituído o placeholder da Fase 1 pela estrutura semântica das 5 seções na
  ordem de `docs/arquitetura/arquitetura.md` §3:
  1. `<header>` — logo (placeholder) + nome + subtítulo.
  2. `<section aria-hidden>` — galeria strip (4 placeholders `aspect-[4/3]`).
  3. `<nav aria-label="Ações principais">` — 3 CTAs com `href` reais,
     `target="_blank"`, `rel="noopener noreferrer"` e `data-label` único
     (`whatsapp-orcamento`, `portfolio`, `site`).
  4. `<nav aria-label="Redes sociais">` — Instagram e WhatsApp com `aria-label`
     e `data-label`.
  5. `<footer>` — "© 2025 Movelart · São José, SC".

### O que ficou de fora (é Fase 3)
- Estilo final dos botões (variantes primário/secundário/terciário).
- Animação da galeria (`gallery-scroll`).
- Ícones SVG inline das redes.
- Logo real no header.
- Extração em componentes (`components/`).

---

## Verificação
- `npm run build` — ✓ compilado, 5 páginas estáticas, First Load JS ~87 kB.

---

## Próximo passo
Fase 3 — extrair e estilizar os componentes: `Header`, `GaleriaStrip`,
`BotaoCta` (3 variantes), `RedesSociais` (SVG inline), `Rodape`.
