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
  2. Galeria — duas faixas de fotos (`size="sm"`), a de cima girando p/ esquerda
     e a de baixo p/ direita
  3. Botão "Solicitar orçamento" (primário, WhatsApp)
  4. Botão "Ver portfólio" (secundário)
  5. Botão "Acessar o site" (terciário)
  6. Ícones sociais
  7. Rodapé
- Sem scroll horizontal **na página** (o scroll horizontal é apenas dentro das
  faixas).

---

## Componentes exclusivos desta página

- **Galeria (2× `Carrossel`):** duas faixas em sentidos opostos (`direction`
  `left`/`right`), `size="sm"` (~metade). Rodam o tempo todo; arrastáveis (touch
  + mouse); pausam só no arrasto e voltam ao soltar; **não** pausam no hover;
  **não** abrem/expandem a foto. Loop infinito (2 cópias cada).
- **Stack de 3 CTAs** com hierarquia decrescente (primário WhatsApp → secundário
  portfólio → terciário site outline). Gap de 12px. Todos full-width,
  `min-h-[48px]`, `rounded-md`.

---

## Motion

- Galeria: autoplay em JS (rAF) que roda o tempo todo; pausa só durante o
  arrasto e retoma ao soltar (não pausa no hover). Faixas em sentidos opostos.
- Botões: apenas `transition-colors` + `active state` (feedback tátil mobile).
- Respeitar `prefers-reduced-motion`: sem autoplay (o arrasto manual continua).

---

## O que NÃO existe aqui (diferente do site principal)

- Sem header sticky / drawer / menu de navegação.
- Sem formulário de contato.
- Sem cards de portfólio nem seção de números.
- Sem WhatsApp flutuante (o WhatsApp é o CTA primário empilhado, não um botão
  fixo no canto).
