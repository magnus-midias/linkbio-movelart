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
  2. Carrossel de fotos (topo) — 6 fotos
  3. CTAs empilhados (3)
  4. Carrossel de fotos (abaixo dos botões) — 6 fotos diferentes
  5. Ícones sociais
  6. Rodapé
- Sem scroll horizontal **na página** (o scroll horizontal é apenas dentro dos
  carrosséis).

---

## Componentes exclusivos desta página

- **Carrossel (`Carrossel`):** strip horizontal **arrastável nos dois sentidos**
  (touch nativo + drag no mouse), autoplay suave com pausa na interação, loop
  infinito (2 cópias). **Não abre/expande** a foto. Altura ~180px, cards 4/3.
  **Usado 2×** (topo e abaixo dos CTAs), com fotos diferentes.
- **Stack de 3 CTAs** com hierarquia decrescente (primário WhatsApp → secundário
  portfólio → terciário site outline). Gap de 12px. Todos full-width,
  `min-h-[48px]`, `rounded-md`.

---

## Motion

- Carrossel: autoplay em JS (rAF) que pausa em hover/drag/touch.
- Botões: apenas `transition-colors` + `active state` (feedback tátil mobile).
- Respeitar `prefers-reduced-motion`: sem autoplay (o arrasto manual continua).

---

## O que NÃO existe aqui (diferente do site principal)

- Sem header sticky / drawer / menu de navegação.
- Sem formulário de contato.
- Sem cards de portfólio nem seção de números.
- Sem WhatsApp flutuante (o WhatsApp é o CTA primário empilhado, não um botão
  fixo no canto).
