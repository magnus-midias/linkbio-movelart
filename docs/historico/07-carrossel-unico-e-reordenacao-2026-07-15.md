# 07 — Carrossel único e reordenação dos CTAs

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (ajuste solicitado pelo usuário)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–06, arquitetura, MASTER e
override feita antes).

---

## Pedido do usuário
Reverter parcialmente o histórico 06: manter **apenas um carrossel** e mudar a
ordem dos elementos para:
1. Ver portfólio
2. Acessar o site
3. Carrossel
4. Solicitar orçamento

---

## O que foi feito

### `app/page.tsx` — nova ordem
Header → **Ver portfólio** (secundário) → **Acessar o site** (terciário) →
**Carrossel** (único, fotos 1–6) → **Solicitar orçamento** (primário, WhatsApp)
→ Redes sociais → Rodapé.

- Removido o segundo carrossel (o de baixo).
- O CTA primário (WhatsApp) passou a ser **de fechamento**: vem depois do
  carrossel, encerrando a página com a ação principal após a prova visual.
- Os dois botões de topo (portfólio/site) ficam num `<nav aria-label="Portfólio
  e site">`; o WhatsApp é um CTA isolado abaixo do carrossel.
- Variantes de cor mantidas (primário = WhatsApp, secundário = portfólio,
  terciário = site).

### Docs atualizadas
- `arquitetura.md` §3 (nova ordem, 6 seções, um carrossel).
- `MASTER.md` §5.6 ("uma única instância").
- `pages/link-na-bio.md` (ordem e componente).
- `README.md` (layout da página).

---

## Verificação
- `npx tsc --noEmit` — ✓ sem erros.
- Dev server: HTTP 200; **1** `role="group"` (um carrossel); ordem no DOM
  confirmada (portfólio → site → carrossel → orçamento → redes).

---

## Observação
Componentes `Carrossel`, `BotaoCta` etc. não mudaram — só a composição em
`page.tsx` e a documentação. Nenhum arquivo novo/removido.

## Próximo passo
Commit/push quando o usuário pedir. Depois, Fase 4 (fotos reais) ou Fase 5.
