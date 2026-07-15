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

> **Estado atual:** Fase 3 concluída (componentes estilizados). Build de
> produção passando. Próximo: Fase 4 (conteúdo real — logo já aplicado; faltam
> fotos reais e favicon/apple-touch).

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

### Fase 4 — Conteúdo real
- Substituir logo placeholder pelo `icone-vermelho.svg` oficial.
- Substituir cards placeholder por fotos reais dos projetos via `<Image>`
  (WebP, `loading="eager"` nas primeiras — estão acima do fold).
- Favicon (`app/icon.svg`), `apple-touch-icon.png` e `.ico` de fallback.

### Fase 5 — Rastreamento e descoberta (do framework)
- GTM instalado; evento `link_click` com `link_label` e `link_url` por CTA
  (`data-label` único em cada link).
- Open Graph completo + imagem OG 1200×630 pré-gerada (a URL será compartilhada
  no WhatsApp).
- `robots.txt` (via `app/robots.ts`), `sitemap.xml` (via `app/sitemap.ts`) e
  `llms.txt`.
- Headers HTTP de segurança (`vercel.json`): CSP, X-Frame-Options,
  X-Content-Type-Options. Links externos com `rel="noopener noreferrer"`.

### Fase 6 — Qualidade e deploy
- Acessibilidade (WCAG AA): contraste ≥ 4.5:1, focus ring, `aria-label` nos
  links, `prefers-reduced-motion` na galeria.
- Mobile dedicado: iPhone SE (375px), toque ≥ 44px, sem scroll horizontal,
  corpo ≥ 16px. Testar iOS Safari + Chrome Android.
- Performance: Lighthouse mobile ≥ 95, LCP < 1.8s, CLS = 0.
- Confirmar nome do repositório GitHub com o usuário.
- Deploy na Vercel (free tier) + uptime monitor.

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
