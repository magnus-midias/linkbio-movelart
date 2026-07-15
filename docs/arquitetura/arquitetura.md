# Arquitetura — Link na Bio · Movelart

---

## 1. Stack

| Camada       | Tecnologia                     |
| ------------ | ------------------------------ |
| Framework    | Next.js 14 (App Router)        |
| UI           | React 18                       |
| Linguagem    | TypeScript                     |
| Estilo       | Tailwind CSS                   |
| Deploy       | Vercel (free tier)             |
| Repositório  | GitHub (nome a confirmar)      |

**Motivo da escolha:** mesma stack do site principal
(https://moveismovelart.com.br). Garante consistência de tokens e facilidade de
manutenção.

---

## 2. Princípios

- **Mobile-first.** O tráfego vem do link na bio do Instagram.
- **Página única.** Sem menu de navegação, sem formulário, sem seções longas.
- **Conversão como meta.** Todo elemento serve para levar ao WhatsApp ou ao
  portfólio.
- **Cabe em 1–2 scrolls** no celular.
- Container centralizado, `max-width` ~420px.

---

## 3. Estrutura da página (de cima para baixo)

### [1] Header
- Logo da Movelart (SVG). Assets oficiais já disponíveis em
  `docs/design-system/logos/` (`icone-vermelho.svg` para fundo claro,
  `icone-branco.svg` para fundo escuro). Serão promovidos para `public/images/`
  na Fase 1.
- Nome: **"Movelart"**
- Subtítulo: **"Móveis Sob Medida · Grande Florianópolis, SC"**

### [2] Galeria rotativa (strip de fotos de projetos)
- Carrossel horizontal automático, sem pausa, sem controles, sem clique.
- Apenas visual — convence sem distrair.
- Loop contínuo via CSS animation (`translate3d`).
- Placeholder: retângulos `aspect-ratio` 4/3, fundo `brand-surface`, texto
  "Foto X".
- Fase posterior: substituir por `<Image>` reais.
- Altura da strip: ~180px. Sem bordas arredondadas extremas.

### [3] Botões principais (CTAs empilhados, centralizados)
| # | Tipo        | Rótulo                | Destino                                  | Detalhe                 |
| - | ----------- | --------------------- | ---------------------------------------- | ----------------------- |
| 1 | Primário    | Solicitar orçamento   | https://wa.me/5548996340636              | Ícone WhatsApp à direita|
| 2 | Secundário  | Ver portfólio         | https://moveismovelart.com.br/ambientes  | —                       |
| 3 | Terciário   | Acessar o site        | https://moveismovelart.com.br            | Outline menor           |

- Todos: `min-height` 48px, full-width, `rounded-md`.
- Gap entre botões: 12px.

### [4] Redes sociais (ícones)
- Instagram: https://www.instagram.com/movelartoficial/
- WhatsApp: https://wa.me/5548996340636
- SVG inline, 28px, cor `brand-muted`, hover `brand-accent`.
- Centralizados, `gap-6`.

### [5] Rodapé mínimo
- Texto: **"© 2025 Movelart · São José, SC"**
- Texto pequeno, `brand-muted`.

---

## 4. Estrutura de arquivos prevista (após init do Next.js)

```
app/
  layout.tsx        # fontes, metadata, container
  page.tsx          # composição da página única
  globals.css       # base Tailwind + keyframes da galeria
components/          # Header, GaleriaStrip, BotaoCta, RedesSociais, Rodape
public/              # fotos de projeto, logo, favicon
tailwind.config.ts  # tokens do design system
docs/               # documentação (este diretório)
```

> Componentes ainda **não** foram criados. Estrutura acima é o alvo da fase de
> build, sujeita a aprovação do plano de ação.

---

## 5. Design system e assets

- Fonte da verdade visual: [`docs/design-system/MASTER.md`](../design-system/MASTER.md),
  importado do site principal. Desvios específicos do link-na-bio irão para
  `docs/design-system/pages/link-na-bio.md` (Fase 1).
- Assets de marca já disponíveis: `logos/` (3 variantes) e `favicon/favicon.svg`.
- Destinos de promoção (Fase 1): logos → `public/images/`,
  `favicon.svg` → `app/icon.svg` (detectado automaticamente pelo App Router).

---

## 6. Decisões técnicas registradas

- Nenhuma decisão de implementação tomada além da stack. Build aguarda
  aprovação do plano de ação (ver `docs/instrucoes/instrucoes.md`).
