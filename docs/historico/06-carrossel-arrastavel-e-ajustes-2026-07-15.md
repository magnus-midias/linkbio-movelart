# 06 — Carrossel arrastável, 2º carrossel e separadores

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (ajustes solicitados pelo usuário)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–05, arquitetura, MASTER e
override feita antes).

---

## Pedido do usuário
1. Trocar o separador `·` por `|` na aba do browser e no subtítulo do header.
2. Manter as 6 fotos do carrossel, mas permitir o usuário **arrastar nos dois
   sentidos** (sem abrir/expandir a foto).
3. Adicionar **um segundo carrossel** com 6 fotos diferentes **abaixo dos 3
   botões**.
4. Mover os **ícones sociais** para **abaixo** desse segundo carrossel.

---

## O que foi feito

### Separadores `·` → `|`
- `app/layout.tsx`: `metadata.title` e `openGraph.title` →
  "Movelart | Móveis Sob Medida".
- `components/Header.tsx`: subtítulo → "Móveis Sob Medida | Grande
  Florianópolis, SC".
- Rodapé **mantido** com `·` (o pedido foi só aba + início).

### Novo componente `components/Carrossel.tsx` (client)
- Substitui `GaleriaStrip` (removido).
- Arrastável nos dois sentidos: touch nativo (mobile) + drag com mouse (desktop,
  Pointer Events, só `pointerType === "mouse"`).
- Autoplay em JS (`requestAnimationFrame`, `scrollLeft += 0.5`) que pausa em
  hover/drag/touch; respeita `prefers-reduced-motion` (sem autoplay, arrasto
  segue funcionando).
- Loop infinito nos dois lados via 2 cópias idênticas (wrap por `scrollWidth/2`).
- Sem expandir foto (cards são `div`, sem link/clique).
- A11y: `role="group"`, `aria-label`, `tabIndex={0}`; 2ª cópia `aria-hidden`.
  Scrollbar oculta; `overscroll-x-contain`.
- Reutilizável: recebe `fotos` e `ariaLabel`.

### Composição — `app/page.tsx`
Nova ordem: Header → **Carrossel (fotos 1–6)** → 3 CTAs → **Carrossel (fotos
7–12)** → Redes sociais → Rodapé.

### Limpeza
- Removido keyframe/animation `gallery-scroll` do `tailwind.config.ts`.
- Removido o bloco `@media (prefers-reduced-motion)` de `globals.css`
  (agora tratado no JS do carrossel).
- Removido `components/GaleriaStrip.tsx`.

### Docs atualizadas
- `arquitetura.md` §3 (nova ordem, 6 seções) e §4 (árvore de arquivos).
- `MASTER.md` §5.6 (carrossel arrastável) e §6 (autoplay em JS).
- `pages/link-na-bio.md` (ordem, componente, motion).

---

## Verificação
- `npx tsc --noEmit` — ✓ sem erros de tipo.
- Dev server: HTTP 200; ordem confirmada por offset
  (Fotos → Ações → Mais fotos → Redes); título e subtítulo com `|`;
  2 grupos `role="group"`.

> Build de produção não rodado aqui para não conflitar com o `.next` do dev
> server (lição do histórico 05). Rodar antes do deploy.

---

## Próximo passo
Seguir para Fase 4 (fotos reais nos carrosséis) ou Fase 5, conforme o usuário.
Commit/push destes ajustes quando o usuário pedir.
