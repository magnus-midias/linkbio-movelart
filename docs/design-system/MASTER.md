# Design System — MASTER — Link na Bio (Movelart)

Identidade visual e tokens de UI **do link na bio da Movelart**. Os tokens de
marca (cores, tipografia, raios) são herdados do site principal `site-movelart`
para garantir consistência; os componentes e padrões descritos aqui são apenas
os usados **nesta página única**.

**Regra:** qualquer alteração com impacto visual deve ler este arquivo antes e
atualizá-lo depois se introduzir ou alterar um token.

**Overrides por página:** desvios específicos vão em
`docs/design-system/pages/nome-da-pagina.md`. Ver
[`pages/link-na-bio.md`](pages/link-na-bio.md).

> **Escopo.** Este é um link na bio (página única mobile-first), não o site
> institucional. Padrões do site que **não** se aplicam aqui: header sticky com
> drawer, formulário de contato, cards de portfólio, seção de números. O que
> vale é o subconjunto abaixo.

---

## 1. Sobre a marca

**Movelart** — móveis planejados de alto padrão para residências na Grande
Florianópolis (SC).

- **Posicionamento:** projetos exclusivos, instalação própria, atendimento
  consultivo. Foco em exclusividade, acabamento e personalização. Público
  classe A/B, ticket médio elevado, ciclo de decisão longo.
- **Tom de voz:** consultivo e sofisticado. Transmite experiência, credibilidade
  e atenção ao detalhe. Sem jargão, sem exageros.
- **Personalidade visual:** fundo off-white limpo sobre texto quase preto, acento
  em vermelho escuro (sóbrio, não gritante), tipografia variada por papel
  (display sans, corpo humanista, acento geométrico). Premium sem poluição visual.
- **Referência visual:** imobal.com.br
- **Papel do link na bio:** elo entre o Instagram e o WhatsApp/portfólio. O
  visitante já conhece a marca visualmente — a página reforça credibilidade e
  leva à ação em menos de 10 segundos.

---

## 2. Tipografia

Três fontes do Google Fonts, cada uma com papel distinto. Carregadas em
`app/layout.tsx` via `next/font/google` com `display: swap`. Expostas como CSS
variables e consumidas via classes Tailwind.

| Fonte | CSS Variable | Classe Tailwind | Papel |
|---|---|---|---|
| `Open Sans` | `--font-display` | `font-display` | Títulos, nome da marca, texto dos CTAs |
| `Mulish` | `--font-body` | `font-sans` (padrão do body) | Bio, subtítulo, corpo |
| `Yantramanav` | `--font-yantra` | `font-yantra` | Eyebrows, labels, rodapé |

### Hierarquia no link na bio

| Uso | Tailwind | Peso | Observação |
|---|---|---|---|
| Nome da marca | `text-2xl` | `font-bold` (700) | `font-display` |
| Subtítulo (localização) | `text-sm` | `font-normal` (400) | `font-sans`, `brand-muted` |
| Texto dos botões (CTA) | `text-base` | `font-semibold` (600) | `font-display` |
| Rodapé | `text-xs` | `font-normal` (400) | `font-yantra`, `brand-muted` |

> Mínimo de 16px no body é obrigatório — evita zoom automático do iOS.
> **Proibido usar Inter** — grita "template Linktree".

---

## 3. Paleta de cores

Tokens definidos em `tailwind.config.ts` em `theme.extend.colors.brand`. Paleta
definitiva da marca (confirmada em 2026-06-12).

### 3.1 Cores de marca (referência canônica)

| Nome | HEX | Token | Uso |
|---|---|---|---|
| White | `#FFFFFF` | `brand-bg` | Fundo geral da página |
| Light gray | `#F5F5F5` | `brand-surface` | Cards, placeholders da galeria, superfícies |
| Ink Black | `#0D1B2A` | `brand-dark` | Texto principal, fundos escuros |
| Ebony | `#5B5941` | `brand-ebony` | Acento secundário — botão outline, eyebrows |
| Muted Warm | `#6B6854` | `brand-muted` | Texto secundário, ícones sociais, labels |
| Border Neutral | `#E5E5E4` | `brand-border` | Bordas de cards, divisores |
| Crushed Berry | `#801611` | `brand-accent` | CTA primário, ícone do logo, acento |
| Crushed Berry Dark | `#6B1210` | `brand-accent-hover` | Estado hover/active do acento |

> As cores `brand-error`, `brand-success` e `brand-warning` do site principal
> não são usadas aqui (não há formulário). Mantidas no `tailwind.config.ts` por
> herança, mas fora de escopo neste projeto.

### 3.2 Regras de uso (link na bio)

| Contexto | Background | Texto / Elementos |
|---|---|---|
| Página | `brand-bg` | `brand-dark`, `brand-muted` |
| Placeholder da galeria | `brand-surface` | `brand-muted` |
| CTA primário (WhatsApp) | `brand-accent` → hover/active `brand-accent-hover` | `text-white` |
| CTA secundário (portfólio) | `brand-bg` → hover `brand-ebony` | `border-brand-ebony text-brand-ebony` → hover `text-white` |
| CTA terciário (site) | transparente, outline menor | `border-brand-border text-brand-muted` → hover `brand-dark` |
| Ícones sociais | — | `brand-muted` → hover `brand-accent` |

### 3.3 Bordas e transparências

- Cards/placeholders: `border border-brand-border`
- Divisores sutis: `border-brand-border/30`

---

## 4. Border radius e espaçamentos

Escala Movelart: **`4 / 8 px`** (sem lg).

| Classe | Valor | Uso |
|---|---|---|
| `rounded-sm` | `4px` | tags, badges, cards da galeria |
| `rounded-md` | `8px` | botões (CTAs) |

- **Sem valores maiores que 8px** em nenhum elemento (regra do briefing).
- Container: centralizado, `max-width` ~420px, `px-4` no mobile.
- Gap entre CTAs empilhados: `12px`.

---

## 5. Componentes e padrões (link na bio)

### 5.1 Container
- Centralizado, mobile-first: `mx-auto max-w-[420px] px-4`.
- A página inteira deve caber em 1–2 scrolls no celular.

### 5.2 CTA primário (WhatsApp)
```
bg-brand-accent hover:bg-brand-accent-hover active:bg-brand-accent-hover
text-white font-display font-semibold w-full min-h-[48px] rounded-md
flex items-center justify-center gap-2 transition-colors
```
- Rótulo: "Solicitar orçamento". Ícone do WhatsApp à direita.
- Destino: `https://wa.me/5548996340636`.

### 5.3 CTA secundário (portfólio)
```
bg-brand-bg border-2 border-brand-ebony text-brand-ebony
hover:bg-brand-ebony hover:text-white font-display font-semibold
w-full min-h-[48px] rounded-md transition-colors
```
- Rótulo: "Ver portfólio". Destino: `https://moveismovelart.com.br/ambientes`.

### 5.4 CTA terciário (site)
```
border border-brand-border text-brand-muted hover:text-brand-dark
hover:border-brand-ebony font-display w-full min-h-[48px] rounded-md
transition-colors
```
- Rótulo: "Acessar o site". Destino: `https://moveismovelart.com.br`.
- Outline menor, hierarquia visual abaixo dos outros dois.

### 5.5 Header
- Logo (SVG) + nome "Movelart" + subtítulo
  "Móveis Sob Medida · Grande Florianópolis, SC".
- Centralizado. Sem sticky, sem menu, sem drawer.

### 5.6 Carrossel de fotos (strip arrastável) — componente `Carrossel`
- **Roda automaticamente o tempo todo** (rAF, ~0,5px/frame). **Não pausa no
  hover** — a ideia é seguir girando enquanto a pessoa navega. Só pausa
  **enquanto o usuário arrasta**; ao soltar, volta a rodar naturalmente.
- **Arrastável nos dois sentidos:** touch nativo (mobile) + drag com o mouse
  (desktop, via Pointer Events). **Não abre/expande** a foto no clique.
- Respeita `prefers-reduced-motion` (sem autoplay; o arrasto segue). Loop
  infinito nos dois lados via 2 cópias idênticas.
- A posição do giro é controlada por uma variável própria (`pos`, float) que só
  escreve em `scrollLeft` durante o autoplay e lê de volta durante o arrasto —
  evita o travamento por arredondamento do navegador no sentido "right".
- Props:
  - `direction`: `"left" | "right"` — sentido do giro.
  - `size`: `"sm" | "md"` — altura do card (`h-[90px]` / `h-[180px]`),
    `aspect-ratio` 4/3.
- Cards: `bg-brand-surface`, `rounded-sm`, `select-none`.
- Região rolável com `aria-label` e `tabIndex={0}` (teclado); a 2ª cópia é
  `aria-hidden`. Scrollbar oculta.
- **Uso atual:** duas instâncias empilhadas formando uma galeria — faixa de cima
  `direction="left"`, faixa de baixo `direction="right"`, ambas `size="sm"`.
  Ver `pages/link-na-bio.md`.
- Fase posterior: substituir placeholders por `<Image>` (WebP, tamanho fixo,
  `draggable={false}`).

### 5.7 Ícones sociais
- Instagram e WhatsApp, SVG inline, 28px.
- Cor `brand-muted`, hover `brand-accent`.
- Centralizados, `gap-6`.
- `aria-label` na tag `<a>`; SVG interno com `aria-hidden="true"`.

### 5.8 Rodapé
- Texto: "© 2025 Movelart · São José, SC".
- `text-xs font-yantra text-brand-muted`, centralizado.

### 5.9 Rastreamento de cliques
- Cada link/CTA recebe um `data-label` único para o GTM
  (ex: `whatsapp-orcamento`, `portfolio`, `site`, `instagram`).
- Evento GA4: `link_click` com parâmetros `link_label` e `link_url`.

---

## 6. Animações

| Nome | Técnica | Velocidade | Uso |
|---|---|---|---|
| Autoplay do carrossel | JS (`requestAnimationFrame`, `scrollLeft += 0.5`) | ~30px/s | Rolagem contínua das strips, com pausa na interação |

- **Autoplay do carrossel:** implementado em JS (não em CSS) porque o carrossel
  também é arrastável. Roda o tempo todo; pausa **apenas durante o arrasto**
  (não no hover) e retoma ao soltar. Respeita `prefers-reduced-motion` (sem
  autoplay; o arrasto manual continua funcionando).
- **Padrão de hover/active em botões:** `transition-colors duration-200`. Sem
  bounce, sem translate vertical. Active state obrigatório (feedback tátil no
  mobile): escurece para `brand-accent-hover`.

---

## 7. Assets

Organizados em subpastas de `docs/design-system/`:

### 7.1 Ícone da marca — [`logos/`](logos/)

| Arquivo | Cor | Uso |
|---|---|---|
| `icone-branco.svg` | `#FBFBFB` | sobre fundos escuros (`brand-dark`, `brand-accent`) |
| `icone-preto.svg` | `#0E1116` | sobre fundos claros (uso interno) |
| `icone-vermelho.svg` | `#801611` | Header do link na bio (fundo claro) |

Para o link na bio (fundo claro), usar **`icone-vermelho.svg`** no header.
Promoção prevista para `public/images/` na Fase 1.

### 7.2 Favicon — [`favicon/`](favicon/)

- `favicon.svg` — versão canônica (fundo `#FBFBFB`, ícone `#801611`).
- Será promovido para `app/icon.svg` (detectado automaticamente pelo App Router).
- **Débito:** falta `.ico` de fallback e `apple-touch-icon.png` — resolver na
  fase de finalização (obrigatório para link na bio: OG + apple-touch-icon).

### 7.3 Ícones funcionais
- SVGs inline nos componentes (WhatsApp, Instagram), estilo Feather
  (`viewBox 0 0 24 24`, `stroke: currentColor`, `strokeWidth={2}`).

### 7.4 Foto de projetos / OG
- Galeria: placeholders ativos, substituídos por fotos reais dos projetos.
- Imagem Open Graph (1200×630) pré-gerada — necessária, pois a URL será
  compartilhada no WhatsApp.

---

## 8. $10K Checklist — Link de Bio (verificação antes de entregar)

Adaptado da seção 6 do `docs/framework/framework-link-bio.md`.

| # | Critério | Status | Observação |
|---|---|---|---|
| 01 | Identidade reconhecível (< 2s) | ⬜ | Cor, fonte e logo casam com o Instagram da Movelart |
| 02 | Um botão, uma ação | ⬜ | CTA claro e distinto por link |
| 03 | Hierarquia visual de prioridade | ⬜ | WhatsApp em destaque > portfólio > site |
| 04 | Botão com área de toque ≥ 44px | ⬜ | Padrão do projeto: `min-h-[48px]` |
| 05 | Feedback tátil ao toque (active state) | ⬜ | `active:bg-brand-accent-hover` |
| 06 | Fundo intencional | ✅ | `brand-bg` off-white da marca (não branco por default) |
| 07 | Foto de perfil/assets carregam rápido | ⬜ | WebP, `loading=eager` acima do fold |
| 08 | Tudo invisível funcionando | ⬜ | < 1s LCP, WCAG AA, OG real, favicon, apple-touch-icon |

---

## 9. Referências cruzadas

- Framework do projeto: [`docs/framework/framework-link-bio.md`](../framework/framework-link-bio.md)
- Override da página: [`pages/link-na-bio.md`](pages/link-na-bio.md)
- Tokens de cor e fonte: [`tailwind.config.ts`](../../tailwind.config.ts)
- CSS global (bg, scroll, keyframes): [`app/globals.css`](../../app/globals.css)
- Carga de fontes + metadata: [`app/layout.tsx`](../../app/layout.tsx)
- Arquitetura: [`docs/arquitetura/arquitetura.md`](../arquitetura/arquitetura.md)
- Histórico de alterações: [`docs/historico/`](../historico/)
- Instruções do agente: [`CLAUDE.md`](../../CLAUDE.md)
