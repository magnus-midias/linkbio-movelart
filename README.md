# Link na Bio — Movelart

Página única (mobile-first) usada como destino do **link na bio do Instagram da
Movelart**. Substitui o link genérico por uma página própria, com a identidade
da marca, que converte visitantes em leads via **WhatsApp** e direciona ao
**portfólio**.

> **Cliente:** Movelart Móveis Sob Medida — marcenaria de alto padrão na Grande
> Florianópolis (SC). Público classe A/B, ciclo de decisão longo. A página
> reforça credibilidade e leva à ação em poucos segundos.

**Site principal:** <https://moveismovelart.com.br> · **Instagram:**
[@movelartoficial](https://www.instagram.com/movelartoficial/)

---

## Sumário

- [Stack](#stack)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar](#como-rodar)
- [Scripts](#scripts)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Design system](#design-system)
- [Documentação e processo](#documentação-e-processo)
- [Deploy](#deploy)
- [Convenções](#convenções)
- [Status do projeto](#status-do-projeto)
- [Licença](#licença)

---

## Stack

| Camada       | Tecnologia                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 14 (App Router)             |
| UI           | React 18                            |
| Linguagem    | TypeScript 5                        |
| Estilo       | Tailwind CSS                        |
| Fontes       | Open Sans, Mulish, Yantramanav (`next/font/google`) |
| Deploy       | Vercel                              |

**Por quê Next.js** (e não uma página estática, mais comum para link de bio):
consistência de tokens e fontes com o site principal, que também é Next.js —
facilita manutenção conjunta. Ver a justificativa em
[`docs/instrucoes/instrucoes.md`](docs/instrucoes/instrucoes.md) e o guia de
referência em [`docs/framework/framework-link-bio.md`](docs/framework/framework-link-bio.md).

---

## Pré-requisitos

- **Node.js 18.18+** (recomendado 20 LTS ou superior)
- **npm** (ou pnpm/yarn — os exemplos usam npm)

---

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento (http://localhost:3000)
npm run dev

# 3. Build de produção + execução local
npm run build
npm start
```

> **Atenção:** não rode `npm run build` com o `npm run dev` ativo no mesmo
> diretório — ambos escrevem em `.next` e o build falha. Pare o dev antes de
> buildar.

---

## Scripts

| Script          | O que faz                                   |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento (hot reload)    |
| `npm run build` | Build de produção otimizado                 |
| `npm start`     | Serve o build de produção                   |
| `npm run lint`  | ESLint (regras do Next.js)                  |

---

## Estrutura do projeto

```
.
├── app/
│   ├── layout.tsx        # fontes, metadata/OG, container ~420px
│   ├── page.tsx          # composição da página única
│   ├── globals.css       # base Tailwind
│   └── icon.svg          # favicon (App Router)
├── components/
│   ├── Header.tsx        # logo + nome + subtítulo
│   ├── Carrossel.tsx     # strip de fotos arrastável (client)
│   ├── BotaoCta.tsx      # CTA com 3 variantes
│   ├── RedesSociais.tsx  # ícones Instagram / WhatsApp
│   ├── Rodape.tsx
│   └── icons.tsx         # SVGs inline
├── public/images/        # logos da marca (fotos de projeto na Fase 4)
├── docs/                 # documentação viva (ver abaixo)
└── tailwind.config.ts    # tokens do design system
```

### Layout da página (topo → base)

1. **Header** — logo, nome e subtítulo
2. **Galeria** — duas faixas de fotos girando em sentidos opostos
3. **Solicitar orçamento** — CTA primário (WhatsApp)
4. **Ver portfólio** e **Acessar o site** (CTAs secundário/terciário)
5. **Redes sociais** — Instagram e WhatsApp
6. **Rodapé**

A **Galeria** usa o componente `Carrossel` em duas instâncias (sentidos
opostos): roda automaticamente o tempo todo, pode ser arrastada (touch nativo e
drag no mouse) pausando só durante o arrasto, respeita `prefers-reduced-motion`
e **não** abre/expande a foto.

---

## Design system

Tokens herdados do site principal para consistência de marca. Fonte da verdade:
[`docs/design-system/MASTER.md`](docs/design-system/MASTER.md).

**Cores** (`theme.extend.colors.brand` no Tailwind):

| Token           | Hex       | Uso                          |
| --------------- | --------- | ---------------------------- |
| `brand-bg`      | `#FFFFFF` | Fundo                        |
| `brand-surface` | `#F5F5F5` | Superfícies / placeholders   |
| `brand-dark`    | `#0D1B2A` | Texto principal              |
| `brand-ebony`   | `#5B5941` | Acento secundário            |
| `brand-muted`   | `#6B6854` | Texto secundário / ícones    |
| `brand-border`  | `#E5E5E4` | Bordas                       |
| `brand-accent`  | `#801611` | CTAs / acento primário       |
| `brand-accent-hover` | `#6B1210` | Hover/active do acento  |

**Tipografia:** `font-display` (Open Sans) para títulos/CTAs, `font-sans`
(Mulish) para corpo, `font-yantra` (Yantramanav) para labels. **Raios:**
`rounded-sm` = 4px, `rounded-md` = 8px.

---

## Documentação e processo

A pasta [`docs/`](docs/) é documentação viva e faz parte da entrega:

| Local | Conteúdo |
| ----- | -------- |
| [`docs/arquitetura/`](docs/arquitetura/) | Stack, estrutura da página, decisões |
| [`docs/design-system/`](docs/design-system/) | `MASTER.md` (tokens), overrides por página e assets |
| [`docs/framework/`](docs/framework/) | Guia de referência para páginas de link de bio |
| [`docs/instrucoes/`](docs/instrucoes/) | Regras de trabalho e plano de ação em fases |
| [`docs/historico/`](docs/historico/) | Log cronológico de toda alteração relevante |
| [`docs/prompt-inicial/`](docs/prompt-inicial/) | Briefing original |

**Regra de histórico:** toda alteração relevante é registrada em
`docs/historico/` como um arquivo `NN-descricao-AAAA-MM-DD.md`, e a documentação
de arquitetura/design é atualizada junto. Isso mantém o rastro de decisões
legível para quem chega depois. Detalhes em [`CLAUDE.md`](CLAUDE.md).

---

## Deploy

Projeto pensado para a **Vercel** (integração nativa com Next.js):

1. Importar o repositório na Vercel.
2. Framework detectado automaticamente (Next.js) — sem configuração extra.
3. Cada push na `main` gera um deploy de produção; PRs geram previews.

Antes de produção (ver checklist na
[`docs/instrucoes/instrucoes.md`](docs/instrucoes/instrucoes.md), Fase 6):
Lighthouse mobile ≥ 95, LCP < 1,8s, CLS = 0, acessibilidade AA.

---

## Convenções

- **Nomes de arquivos/pastas:** ASCII puro, `kebab-case`, sem acentos. O texto
  *dentro* dos arquivos é em pt-BR normalmente.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/)
  (`feat:`, `fix:`, `docs:`, `chore:`…).
- **Idioma:** documentação e UI em português do Brasil.

---

## Status do projeto

| Fase | Descrição | Status |
| ---- | --------- | ------ |
| 0 | Estrutura e documentação | ✅ |
| 1 | Fundação técnica (tokens, fontes, metadata) | ✅ |
| 2 | Layout e container | ✅ |
| 3 | Componentes | ✅ |
| 4 | Conteúdo real (fotos dos projetos) | ⬜ |
| 5 | Rastreamento e descoberta (GTM, OG, robots/sitemap/llms) | ⬜ |
| 6 | Qualidade e deploy | ⬜ |

Placeholders de foto ("Foto N") serão substituídos pelas imagens reais dos
projetos na Fase 4.

---

## Licença

Projeto proprietário da **Movelart Móveis Sob Medida**. Uso, cópia ou
distribuição apenas com autorização do detentor dos direitos.
