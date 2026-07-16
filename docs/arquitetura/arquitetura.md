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
- Subtítulo: **"Móveis Sob Medida | Grande Florianópolis, SC"**

### [2] Galeria — duas faixas de fotos (sentidos opostos)
- **Duas faixas** empilhadas de fotos, cada uma girando em um sentido: a de cima
  para a **esquerda**, a de baixo para a **direita**.
- Fotos em **tamanho reduzido** (`h-[90px]`, ~metade). Mais fotos à mostra,
  impressão de "parede de projetos" — prova visual imediata.
- Cada faixa: **roda automaticamente o tempo todo**; ao arrastar (touch/mouse)
  ela mexe; ao soltar, volta a rodar naturalmente. **Não pausa no hover**.
  **Não abre/expande** a foto. Loop infinito (2 cópias). Respeita
  `prefers-reduced-motion`.
- Componente `Carrossel` com props `direction` e `size`. Placeholders "Foto 1–12".
- Fase posterior: substituir por `<Image>` (WebP, tamanho fixo).

### [3] Botões (CTAs empilhados — um único bloco)
Os três botões ficam **num só grupo** (`<nav>`), full-width, alinhados e com
espaçamento uniforme (`gap-3` = 12px). Vêm logo abaixo da galeria (prova visual
→ conversão, ainda perto da dobra).

| # | Tipo       | Rótulo              | Destino                                  | Detalhe                  |
| - | ---------- | ------------------- | ---------------------------------------- | ------------------------ |
| 1 | Primário   | Solicitar orçamento | https://wa.me/5548996340636              | Ícone WhatsApp à direita |
| 2 | Secundário | Ver portfólio       | https://moveismovelart.com.br/ambientes  | —                        |
| 3 | Terciário  | Acessar o site      | https://moveismovelart.com.br            | Outline menor            |

- Todos: `min-height` 48px, full-width, `rounded-md`.

### [4] Redes sociais (ícones)
- Instagram: https://www.instagram.com/movelartoficial/
- WhatsApp: https://wa.me/5548996340636
- SVG inline, 28px, cor `brand-muted`, hover `brand-accent`.
- Centralizados, `gap-6`.

### [5] Rodapé
- Linha 1: **"© 2026 Movelart. Todos os direitos reservados."**
- Linha 2: **"Desenvolvido por Magnus Mídias"** — nome com link para
  <https://magnusmidias.com> (nova aba, `rel="noopener noreferrer"`).
- Texto pequeno, `brand-muted`.

---

## 4. Estrutura de arquivos prevista (após init do Next.js)

```
app/
  layout.tsx        # fontes, metadata, container
  page.tsx          # composição da página única (2 carrosséis)
  globals.css       # base Tailwind
  icon.svg          # favicon (App Router)
components/          # Header, Carrossel, BotaoCta, RedesSociais, Rodape, icons
public/images/       # logos (e fotos de projeto na Fase 4)
tailwind.config.ts  # tokens do design system
docs/               # documentação (este diretório)
```

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
