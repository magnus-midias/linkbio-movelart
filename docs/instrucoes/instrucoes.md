# Instruções de trabalho — Link na Bio · Movelart

---

## 1. Regras de trabalho (inegociáveis)

### Convenção de nomenclatura
- Nenhum arquivo/pasta com acentos ou caracteres especiais. **ASCII puro**,
  **kebab-case** em nomes compostos.
- Texto dentro dos arquivos: pt-BR com acentos, normal.

### Fluxo de histórico — antes de qualquer alteração relevante
1. Ler todo o histórico em `docs/historico/` em ordem numérica crescente.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se houver impacto visual: ler `docs/design-system/MASTER.md` (e o override
   da página em `docs/design-system/pages/`, se existir).

### Fluxo de histórico — depois de qualquer alteração relevante
1. Criar arquivo novo em `docs/historico/` no formato
   `NN-descricao-curta-AAAA-MM-DD.md` (`NN` = 2 dígitos, começa em `00`).
2. Se mudou arquitetura: atualizar `docs/arquitetura/arquitetura.md`.
3. Se mudou tokens/componentes: atualizar `docs/design-system/MASTER.md`
   (ou o override da página em `docs/design-system/pages/`).

### O que conta como "alteração relevante"
Criação/remoção de componentes ou páginas, mudança de tokens, mudança de
estrutura de pastas, decisões de arquitetura, integração de deploy. Ajustes
triviais de texto de documentação não exigem novo histórico.

---

## 2. Plano de ação em fases

> **Estado atual:** Fases 4–6 executadas até onde não dependem de insumos do
> cliente. Build de produção passando. **Pendências** (fotos, GTM ID, domínio,
> CSP, Lighthouse, deploy) documentadas em `docs/pendencias.md`.

### Fase 0 — Estrutura e documentação ✅ (concluída)
- [x] Criar estrutura de pastas `docs/`.
- [x] Preencher `CLAUDE.md`.
- [x] Design system: `docs/design-system/MASTER.md` importado do site
      principal (fonte da verdade). O `design-system.md` provisório foi removido.
- [x] Criar `docs/arquitetura/arquitetura.md`.
- [x] Criar `docs/instrucoes/instrucoes.md`.
- [x] Copiar briefing para `docs/prompt-inicial/prompt-inicial.md`.
- [x] Criar `docs/historico/00-...`.
- [x] Inicializar projeto Next.js 14.
- [x] **Aprovação do usuário para seguir.**

### Fase 1 — Fundação técnica ✅ (concluída)
- [x] Configurar `tailwind.config.ts` com os tokens do `MASTER.md` (cores brand,
  fontes, `rounded-sm`/`rounded-md` = 4/8px, keyframe `gallery-scroll`).
- [x] Configurar fontes (Open Sans, Mulish, Yantramanav) via `next/font/google`
  com `display: swap` e CSS vars `--font-display`/`--font-body`/`--font-yantra`.
- [x] Definir `metadata` + Open Graph no `layout.tsx` (`lang="pt-BR"`).
- [x] Base do `globals.css` + `prefers-reduced-motion` para a galeria.
- [x] Criar `docs/design-system/pages/link-na-bio.md` com os desvios do MASTER.
- [x] Remover `pages/home.md` (override do site principal).
- [x] Promover assets: logos → `public/images/`, `favicon.svg` → `app/icon.svg`.
- [x] Placeholder mínimo em `page.tsx` (valida fontes/tokens). Build OK.

### Fase 2 — Layout e container ✅ (concluída)
- [x] `layout.tsx` com container centralizado `max-width` ~420px, mobile-first.
- [x] Esqueleto da `page.tsx` com as 5 seções na ordem correta (estrutura
  semântica + `data-label` + `aria-label`, sem estilo final).

### Fase 3 — Componentes (com placeholders) ✅ (concluída)
- [x] `Header` — logo real (`icone-vermelho.svg` via `next/image`) + nome +
  subtítulo.
- [x] `GaleriaStrip` — loop CSS contínuo (`animate-gallery-scroll`, 2 cópias),
  cards placeholder "Foto N", `aria-hidden`.
- [x] `BotaoCta` — 3 variantes (primário/secundário/terciário) + `focus-visible`.
- [x] `RedesSociais` — ícones SVG inline (Instagram + WhatsApp), 28px.
- [x] `Rodape`.
- [x] `components/icons.tsx` (Instagram/WhatsApp) + `page.tsx` recomposto.

### Fase 4 — Conteúdo real 🔶 (estrutura pronta; faltam fotos)
- [x] Logo real (`icone-vermelho.svg`) no header.
- [x] Galeria data-driven: `lib/projetos.ts` + `Carrossel` renderiza `<Image>`
  quando há `src`, senão placeholder. Pasta `public/images/projetos/` criada.
- [x] `apple-touch-icon.png` (180×180) gerado.
- [ ] **Fotos reais** dos projetos (depende do cliente) — preencher `src`/`alt`
  em `lib/projetos.ts`. Ver `docs/pendencias.md`.
- [ ] `favicon.ico` de fallback (legado).

### Fase 5 — Rastreamento e descoberta 🔶 (feito, menos GTM ID/CSP)
- [x] Wiring de tracking: `data-label` em todos os CTAs + `Analytics.tsx` empurra
  `link_click` (`link_label`, `link_url`) para o `dataLayer`. GTM carrega só com
  `NEXT_PUBLIC_GTM_ID`.
- [x] Open Graph + imagem OG 1200×630 (`app/opengraph-image.png`, auto-detectada)
  + `metadataBase`.
- [x] `robots.txt` (`app/robots.ts`), `sitemap.xml` (`app/sitemap.ts`),
  `public/llms.txt`.
- [x] Headers de segurança em `next.config.mjs` (X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy).
- [ ] **GTM ID** (cliente) e **CSP** (depende dos domínios GTM/GA).
- [ ] Confirmar **domínio** (`NEXT_PUBLIC_SITE_URL`).

### Fase 6 — Qualidade e deploy 🔶 (build OK; faltam Lighthouse e deploy)
- [x] Acessibilidade base: `aria-label` nos links, `focus-visible`,
  `prefers-reduced-motion`, container mobile-first, toques ≥ 44/48px.
- [x] Build de produção passando (9 rotas estáticas).
- [x] Repositório GitHub confirmado (`magnus-midias/linkbio-movelart`).
- [ ] **Lighthouse mobile ≥ 95** (LCP < 1,8s, CLS = 0) — medir com fotos reais.
- [ ] Passe de mobile em device real (iPhone SE / Chrome Android).
- [ ] **Deploy na Vercel** (free tier) + uptime monitor.

---

## 4. Alinhamento com o framework

Base: [`docs/framework/framework-link-bio.md`](../framework/framework-link-bio.md).

- **Stack:** o framework sugere Opção A (estático) como padrão. Aqui usamos
  **Opção B (Next.js)** por decisão explícita do briefing — consistência com o
  site principal (mesmos tokens/fontes). Versão fixada em **Next.js 14** (o
  framework cita 15) para casar com o site principal.
- **Requisitos v1 herdados do framework:** rastreamento por link, Open Graph,
  favicon + apple-touch-icon, robots/sitemap/llms, performance rigorosa
  (LCP < 1.8s, CLS = 0), acessibilidade AA. Distribuídos nas Fases 5 e 6.
- **Proibições:** sem carrossel clicável, sem scroll horizontal, sem fonte Inter
  (grita "template Linktree"), sem fontes pesadas não subsetadas.

---

## 5. Checklist de conversão (não esquecer)
- Botão primário (WhatsApp) sempre o mais visível.
- Links externos abrem de forma adequada e têm `aria-label`.
- Tom consultivo e sofisticado em todos os textos.
- Nada que distraia do objetivo: WhatsApp ou portfólio.
