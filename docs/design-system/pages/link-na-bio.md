# Design System — Override: Link na Bio (`/`)

Desvios específicos da página do link na bio em relação ao `MASTER.md`. Como o
projeto é uma página única, este override concentra os detalhes de layout que
não fazem parte do sistema genérico de marca.

> Substitui o antigo `home.md` (que descrevia a Home do site principal e não se
> aplica a este projeto).

---

## Layout

- **Container:** `mx-auto max-w-[420px] px-4` — mobile-first, centralizado.
- **Fluxo vertical único**, sem grid de colunas. Ordem fixa:
  1. Header (logo + nome + subtítulo)
  2. Galeria rotativa (strip)
  3. CTAs empilhados (3)
  4. Ícones sociais
  5. Rodapé
- A página deve caber em **1–2 scrolls** no celular. Sem scroll horizontal.

---

## Componentes exclusivos desta página

- **Galeria rotativa (strip):** carrossel horizontal automático em loop
  contínuo (CSS `translate3d`, keyframe `gallery-scroll`), sem controles, sem
  clique, `aria-hidden`. Altura ~180px, cards `aspect-ratio` 4/3. Não existe em
  nenhum outro contexto da marca.
- **Stack de 3 CTAs** com hierarquia decrescente (primário WhatsApp → secundário
  portfólio → terciário site outline). Gap de 12px. Todos full-width,
  `min-h-[48px]`, `rounded-md`.

---

## Motion

- Galeria em loop `linear` infinito.
- Botões: apenas `transition-colors` + `active state` (feedback tátil mobile).
- Respeitar `prefers-reduced-motion`: galeria estática quando ativo.

---

## O que NÃO existe aqui (diferente do site principal)

- Sem header sticky / drawer / menu de navegação.
- Sem formulário de contato.
- Sem cards de portfólio nem seção de números.
- Sem WhatsApp flutuante (o WhatsApp é o CTA primário empilhado, não um botão
  fixo no canto).
