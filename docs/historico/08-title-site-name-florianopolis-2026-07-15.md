# 08 — Complemento do site name (título)

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (ajuste solicitado pelo usuário)
**Autor:** Claude Code
**Impacto visual:** sim, menor (título da aba do browser).

---

## Pedido do usuário
Complementar o site name para "móveis sob medida em Florianópolis".

## O que foi feito
- `app/layout.tsx`: `metadata.title` e `openGraph.title` alterados de
  "Movelart | Móveis Sob Medida" para
  **"Movelart | Móveis Sob Medida em Florianópolis"** (melhor para SEO local).

## Verificação
- Dev server: `<title>Movelart | Móveis Sob Medida em Florianópolis</title>`.

## Próximo passo
Commit/push quando o usuário pedir.
