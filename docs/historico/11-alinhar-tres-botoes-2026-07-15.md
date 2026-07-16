# 11 — Alinhar os três botões (grupo único)

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (ajuste de layout a pedido do usuário)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–10, arquitetura, MASTER e
override feita antes).

---

## Problema
Os três botões estavam **desalinhados/desespaçados**: o "Solicitar orçamento"
era filho direto do `<main>` (separado por `gap-8`), enquanto "Ver portfólio" e
"Acessar o site" estavam juntos em outro `<nav>` (`gap-3`). Resultado:
espaçamento desigual entre o 1º e os outros dois.

## Correção — `app/page.tsx`
- Os **três botões** passaram para **um único** `<nav aria-label="Ações
  principais">` com `flex flex-col gap-3`.
- Espaçamento uniforme (12px) e todos full-width, alinhados.
- Ordem mantida: Solicitar orçamento → Ver portfólio → Acessar o site.

## Doc
- `arquitetura.md` §3: seções de botões unificadas num só bloco; renumeração
  (Redes = [4], Rodapé = [5]).

## Verificação
- `npx tsc --noEmit` — ✓ sem erros.
- Dev server: os 3 botões em sequência dentro de "Ações principais"; HTTP 200.

## Próximo passo
Commit/push do acumulado (históricos 07–11).
