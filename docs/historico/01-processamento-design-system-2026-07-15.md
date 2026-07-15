# 01 — Processamento do design system importado

**Data:** 2026-07-15
**Fase:** 0 → transição para Fase 1
**Autor:** Claude Code
**Impacto visual:** sim (leitura de MASTER, design-system, arquitetura e
histórico feita antes da alteração, conforme regra).

---

## Contexto

O usuário importou para `docs/design-system/` o design system real da Movelart
(vindo do site principal `site-movelart`), com tokens canônicos, assets de marca
e documentação. Solicitou "processar essa pasta".

### Conteúdo recebido
- `MASTER.md` — design system canônico completo da marca.
- `logos/` — `icone-branco.svg` (`#FBFBFB`), `icone-preto.svg` (`#0E1116`),
  `icone-vermelho.svg` (`#801611`) + `README.md`.
- `favicon/favicon.svg` (fundo `#FBFBFB`, ícone `#801611`) + `README.md`.
- `icones/README.md` (sem ícones ainda).
- `pages/home.md` — override da Home do **site principal**.

---

## O que foi feito

1. **`MASTER.md` adotado como fonte única da verdade** do design system.
2. **Removido `docs/design-system/design-system.md`** (provisório, criado a
   partir do briefing) — totalmente superado pelo `MASTER.md`.
3. **Referências atualizadas** de `design-system.md` → `MASTER.md` em:
   - `CLAUDE.md` (regra de histórico + mapa da documentação).
   - `docs/instrucoes/instrucoes.md` (regras + plano de fases).
   - `docs/arquitetura/arquitetura.md` (nova seção "Design system e assets").
4. **Convenção de overrides adotada:** desvios por página vão em
   `docs/design-system/pages/` (padrão do próprio MASTER).
5. **Limpeza:** removidos arquivos `.DS_Store`; `.DS_Store` adicionado ao
   `.gitignore`.

> **Nenhum asset foi promovido ao app** (`public/`, `app/icon.svg`) e nenhum
> componente/página foi criado. A construção segue aguardando aprovação.

---

## Pendências sinalizadas ao usuário

1. **`pages/home.md`** descreve a Home do site principal (hero, depoimentos,
   grid de ambientes) — não se aplica ao link-na-bio. Recomendação: remover ou
   substituir por `pages/link-na-bio.md` na Fase 1.
2. **`MASTER.md` cobre o site inteiro** (formulário `/api/contato`, header
   sticky, WhatsApp flutuante, cards de portfólio). Mantido intacto como
   referência de marca; o link-na-bio usará apenas o subconjunto relevante,
   documentado no override de página.
3. **Divergência de cor:** `MASTER.md` §7.1 lista `icone-preto.svg` como
   `#0D1B2A`, mas o arquivo real é `#0E1116`. Confirmar o valor correto.

---

## Próximo passo
Aguardar aprovação para iniciar a Fase 1 (fundação técnica), que inclui criar
`pages/link-na-bio.md`, promover assets e configurar tokens/fontes.
