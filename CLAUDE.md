# CLAUDE.md — Link na Bio · Movelart

Instruções de projeto para o Claude Code. Leia este arquivo no início de cada
sessão. As regras aqui têm precedência sobre comportamentos padrão.

---

## 1. O projeto

**Nome:** Link na Bio — Movelart

**Objetivo:** página única otimizada para mobile, usada como destino do link na
bio do Instagram da Movelart. Substituir o link genérico do Instagram por uma
página que converta visitantes em leads via WhatsApp.

**Cliente:** Movelart Móveis Sob Medida — marcenaria de alto padrão, Grande
Florianópolis, SC.

**Público:** classe A/B, 30–55 anos, ciclo de decisão longo. O visitante chega
do Instagram — já conhece a marca visualmente. A página precisa reforçar
credibilidade e levar ao WhatsApp ou ao portfólio.

**Tom de voz:** consultivo e sofisticado. Sem jargão, sem exclamações excessivas.

### Links oficiais

| Recurso            | URL                                              |
| ------------------ | ------------------------------------------------ |
| Site principal     | https://moveismovelart.com.br                    |
| Portfólio          | https://moveismovelart.com.br/ambientes          |
| WhatsApp           | https://wa.me/5548996340636                      |
| Instagram          | https://www.instagram.com/movelartoficial/       |

---

## 2. Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Deploy:** Vercel (free tier)
- **Repositório:** GitHub (nome a confirmar com o usuário)

**Motivo:** mesma stack do site principal. Garante consistência de tokens e
facilidade de manutenção.

---

## 3. Convenção de nomenclatura (obrigatória, projeto inteiro)

- **Nenhum arquivo ou pasta** pode ter acentos ou caracteres especiais. Use
  **ASCII puro** e **kebab-case** em nomes compostos.
- **Textos dentro dos arquivos** podem ser em pt-BR com acentos normalmente.

---

## 4. Regra inegociável de histórico

Toda alteração relevante vira um arquivo `.md` novo em `docs/historico/`.

**Formato do nome:** `NN-descricao-curta-AAAA-MM-DD.md`
(`NN` = 2 dígitos, começa em `00`).

### Antes de qualquer alteração relevante
1. Ler todo o histórico em `docs/historico/` em ordem numérica crescente.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se houver impacto visual: ler `docs/design-system/MASTER.md` (e o override
   da página em `docs/design-system/pages/`, se existir).

### Depois de qualquer alteração relevante
1. Criar arquivo novo em `docs/historico/`.
2. Se mudou arquitetura: atualizar `docs/arquitetura/arquitetura.md`.
3. Se mudou tokens/componentes: atualizar `docs/design-system/MASTER.md`
   (ou o override da página em `docs/design-system/pages/`).

---

## 5. Mapa da documentação

| Arquivo                                   | Conteúdo                                      |
| ----------------------------------------- | --------------------------------------------- |
| `docs/framework/framework-link-bio.md`    | Framework de referência para link de bio      |
| `docs/arquitetura/arquitetura.md`         | Stack, estrutura da página, decisões técnicas |
| `docs/design-system/MASTER.md`            | Fonte da verdade: tokens, componentes, assets |
| `docs/design-system/pages/`               | Overrides visuais por página (desvios do MASTER) |
| `docs/instrucoes/instrucoes.md`           | Regras de trabalho e plano de ação em fases   |
| `docs/historico/`                         | Log cronológico de toda alteração relevante   |
| `docs/prompt-inicial/prompt-inicial.md`   | Briefing original do projeto                   |

---

## 6. Idioma

Todas as respostas ao usuário em **português do Brasil (pt-BR)**.
