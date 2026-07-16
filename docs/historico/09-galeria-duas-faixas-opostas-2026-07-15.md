# 09 — Galeria de duas faixas opostas + autoplay contínuo

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (evolução de UX a pedido do usuário + recomendação técnica)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–08, arquitetura, MASTER e
override feita antes).

---

## Contexto
O usuário pediu opinião técnica e três mudanças:
1. Carrossel rodando automaticamente enquanto a pessoa navega; arrasta → mexe;
   solta → volta a rodar.
2. Fotos em ~metade do tamanho.
3. Um segundo carrossel, também com fotos na metade, girando no sentido oposto.

Recomendação técnica adotada (registrada aqui): mover o CTA primário (WhatsApp)
para **logo abaixo da galeria** — não no rodapé —, porque o público tem ciclo de
decisão longo (prova visual primeiro, conversão logo em seguida, ainda perto da
dobra).

---

## O que foi feito

### `components/Carrossel.tsx`
- **Removida a pausa no hover.** Agora roda o tempo todo; pausa **apenas durante
  o arrasto** (drag no mouse ou touch) e retoma ao soltar.
- Nova prop **`direction`** (`"left" | "right"`): sentido do giro. O `"right"`
  inicia no meio (`scrollWidth/2`) para não dar salto na 1ª volta.
- Nova prop **`size`** (`"sm" | "md"`): `h-[90px]` (metade) / `h-[180px]`.
- Loop infinito, `prefers-reduced-motion`, a11y e scrollbar oculta mantidos.

### `app/page.tsx` — nova ordem e galeria de 2 faixas
Header → **Galeria** (2× `Carrossel`, `size="sm"`: faixa de cima `left`, faixa de
baixo `right`, agrupadas com `gap-3`) → **Solicitar orçamento** (primário) →
**Ver portfólio** (secundário) → **Acessar o site** (terciário) → Redes → Rodapé.

### Docs atualizadas
- `arquitetura.md` §3 (nova ordem; galeria de duas faixas).
- `MASTER.md` §5.6 (props `direction`/`size`, autoplay sem pausa no hover) e §6.
- `pages/link-na-bio.md` (ordem, componente, motion).
- `README.md` (layout da página).

---

## Verificação
- `npx tsc --noEmit` — ✓ sem erros.
- Dev server: **2** `role="group"` (duas faixas), cards `h-[90px]` (metade),
  ordem no DOM confirmada (galeria → orçamento → portfólio → site → redes).

---

## Próximo passo
Commit/push quando o usuário pedir (há mudanças acumuladas dos históricos 07–09).
Depois, Fase 4 (fotos reais nas duas faixas).
