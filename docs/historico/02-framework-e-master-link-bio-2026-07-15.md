# 02 — Framework de link de bio + MASTER reescopado

**Data:** 2026-07-15
**Fase:** 0 (documentação) → prepara Fase 1
**Autor:** Claude Code
**Impacto visual:** sim (MASTER e override de página alterados; leitura de
histórico 00/01, arquitetura e MASTER feita antes).

---

## Contexto

O usuário forneceu o `framework-link-bio.md` (guia de referência para páginas de
link de bio) e pediu para: (1) guardá-lo em `docs/framework/`, (2) apagar
`pages/home.md` e substituí-lo por `pages/link-na-bio.md`, (3) resolver a
divergência de cor usando o valor do asset real do outro projeto, (4) ajustar o
`MASTER.md` — que descrevia o site inteiro — para o escopo do link na bio.

---

## O que foi feito

1. **`docs/framework/framework-link-bio.md`** criado com o conteúdo do framework,
   **recodificado para UTF-8 limpo** (o texto original veio com acentos
   quebrados / mojibake). Conteúdo preservado, apenas encoding corrigido.

2. **`pages/home.md` removido** (era override da Home do site principal) e
   **`pages/link-na-bio.md` criado** com os desvios reais desta página única:
   container ~420px, fluxo vertical, galeria strip, stack de 3 CTAs, e a lista do
   que **não** existe aqui (header sticky, formulário, cards de portfólio,
   WhatsApp flutuante).

3. **Divergência de cor resolvida:** `icone-preto.svg` documentado como
   **`#0E1116`** no `MASTER.md` §7.1 — valor real do arquivo/asset usado no outro
   projeto (antes o doc dizia `#0D1B2A`). Decisão do usuário: usar o que já está
   em uso.

4. **`MASTER.md` reescopado para o link na bio:**
   - Retitulado para "MASTER — Link na Bio (Movelart)".
   - Mantidos intactos: marca, tipografia, paleta, raios (tokens herdados).
   - Seção de componentes reescrita para os do link na bio (3 CTAs, header,
     galeria strip, ícones sociais, rodapé, rastreamento por `data-label`).
   - Animações: keyframe `gallery-scroll` (loop da strip) + regra de
     `prefers-reduced-motion`; removido o padrão de WhatsApp flutuante do site.
   - `$10K Checklist` trocado pela versão **link de bio** (do framework §6).
   - Removidos do escopo: formulário de contato, header sticky/drawer, cards de
     portfólio, seção de números, cores de erro/sucesso/aviso.

5. **Integração nas instruções e no mapa de docs:**
   - `CLAUDE.md`: framework adicionado ao mapa da documentação.
   - `instrucoes.md`: plano expandido com requisitos do framework
     (Fase 5 = rastreamento/OG/robots/sitemap/llms/headers; Fase 6 = qualidade
     AA + performance + deploy) e nova seção "Alinhamento com o framework".

---

## Decisões registradas

- **Stack:** mantida Opção B (Next.js) do framework, fixada em **Next.js 14**
  (framework cita 15) por consistência com o site principal — decisão do
  briefing original.
- **Proibições adotadas do framework:** sem carrossel clicável, sem scroll
  horizontal, sem fonte Inter, sem fontes pesadas não subsetadas.

---

## Próximo passo
Aguardar aprovação para iniciar a Fase 1 (fundação técnica): tokens no Tailwind,
fontes, metadata/OG e promoção de assets.
