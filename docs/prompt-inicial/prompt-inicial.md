# Prompt inicial — Link na Bio · Movelart

> Briefing original do projeto, copiado na íntegra para referência histórica.
> Data de registro: 2026-07-15.

---

Você vai me ajudar a criar o link na bio da Movelart. Antes de qualquer código,
configure a estrutura padrão de documentação e já preencha tudo com o contexto
do projeto que vou te passar aqui mesmo. Não preciso de uma segunda mensagem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 1 — ESTRUTURA DE PASTAS (criar agora)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Na raiz do projeto, crie:

docs/
  arquitetura/
  instrucoes/
  historico/
  design-system/
    logos/
    icones/
    favicon/
  prompt-inicial/
CLAUDE.md

Convencao de nomenclatura obrigatória e válida para o projeto inteiro:
- Nenhum arquivo ou pasta pode ter acentos ou caracteres especiais. Use ASCII
  puro e kebab-case em nomes compostos.
- Textos dentro dos arquivos podem ser em pt-BR com acentos normalmente.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 2 — O PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nome: Link na Bio — Movelart
Objetivo: página única otimizada para mobile, usada como destino do link na bio
do Instagram da Movelart. Substituir o link genérico do Instagram por uma página
que converta visitantes em leads via WhatsApp.

Cliente: Movelart Móveis Sob Medida — marcenaria de alto padrão, Grande
Florianópolis, SC. Público: classe A/B, 30–55 anos, ciclo de decisão longo.
O visitante chega do Instagram — já conhece a marca visualmente. A página
precisa reforçar credibilidade e levar ao WhatsApp ou ao portfólio.

Site principal (já existe, em produção): https://moveismovelart.com.br
Portfólio do site: https://moveismovelart.com.br/ambientes
WhatsApp: https://wa.me/5548996340636
Instagram: https://www.instagram.com/movelartoficial/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 3 — STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS
Deploy: Vercel (free tier)
Repositório: GitHub (confirmar nome com o usuário)

Motivo: mesma stack do site principal. Garante consistência de tokens e
facilidade de manutenção.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 4 — IDENTIDADE VISUAL (tokens definitivos)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Paleta (idêntica ao site principal):

  brand-bg:           #FFFFFF   — fundo geral
  brand-surface:      #F5F5F5   — superfícies elevadas
  brand-dark:         #0D1B2A   — texto principal, fundos escuros
  brand-ebony:        #5B5941   — acento secundário
  brand-muted:        #6B6854   — texto secundário
  brand-border:       #E5E5E4   — bordas
  brand-accent:       #801611   — CTAs, botão primário
  brand-accent-hover: #6B1210   — hover do acento

Tipografia (Google Fonts, mesmas do site):

  Open Sans      → font-display  → títulos, CTAs
  Mulish         → font-sans     → corpo de texto
  Yantramanav    → font-yantra   → eyebrows, labels, dados

Border radius: rounded-sm (4px) para tags/inputs, rounded-md (8px) para
botões e cards. Sem valores maiores.

Tom de voz: consultivo e sofisticado. Sem jargão, sem exclamações excessivas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 5 — ESTRUTURA DA PÁGINA (o que construir)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Página única, mobile-first, max-width ~420px centralizado. Estrutura de cima
para baixo:

[1] HEADER
    Logo da Movelart (SVG — placeholder por ora, virá em docs/design-system/logos/)
    Nome: "Movelart"
    Subtítulo: "Móveis Sob Medida · Grande Florianópolis, SC"

[2] GALERIA ROTATIVA (strip de fotos de projetos)
    Carrossel horizontal automático, sem pausa, sem controles, sem clique.
    Apenas visual — convence sem distrair.
    Loop contínuo via CSS animation (translate3d).
    Placeholder: retângulos com aspect-ratio 4/3, fundo brand-surface,
    texto "Foto X". Fase posterior: substituir por <Image> reais.
    Altura da strip: ~180px. Sem bordas arredondadas extremas.

[3] BOTÕES PRINCIPAIS (CTAs empilhados, centralizados)
    Botão 1 — primário — "Solicitar orçamento" → wa.me/5548996340636
              Ícone do WhatsApp à direita
    Botão 2 — secundário — "Ver portfólio" → moveismovelart.com.br/ambientes
    Botão 3 — terciário (outline menor) — "Acessar o site" → moveismovelart.com.br

    Todos com min-height 48px, full-width, rounded-md.
    Gap entre botões: 12px.

[4] REDES SOCIAIS (ícones)
    Instagram: https://www.instagram.com/movelartoficial/
    WhatsApp:  https://wa.me/5548996340636
    Ícones SVG inline, 28px, cor brand-muted, hover brand-accent.
    Centralizados horizontalmente, gap-6.

[5] RODAPÉ MÍNIMO
    Texto: "© 2025 Movelart · São José, SC"
    Texto pequeno, brand-muted.

Não há menu de navegação. Não há formulário. Não há seções longas.
A página inteira deve caber em 1–2 scrolls no celular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 6 — REGRA INEGOCIÁVEL DE HISTÓRICO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Toda alteração relevante vai para docs/historico/ como arquivo .md novo.
Formato do nome: NN-descricao-curta-AAAA-MM-DD.md (NN = 2 dígitos, começa
em 00).

Antes de qualquer alteração relevante:
1. Ler todo o histórico em docs/historico/ em ordem numérica crescente.
2. Ler docs/arquitetura/arquitetura.md.
3. Se impacto visual: ler docs/design-system/design-system.md.

Depois de qualquer alteração relevante:
1. Criar arquivo novo em docs/historico/.
2. Se mudou arquitetura: atualizar docs/arquitetura/arquitetura.md.
3. Se mudou tokens/componentes: atualizar docs/design-system/design-system.md.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 7 — O QUE FAZER AGORA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Criar as pastas da Parte 1.
2. Preencher CLAUDE.md com tudo da Parte 2, 3 e a regra da Parte 6.
3. Criar docs/design-system/design-system.md com os tokens reais da Parte 4
   (não deixar campos pendentes — já temos tudo).
4. Criar docs/arquitetura/arquitetura.md com a stack da Parte 3 e a
   estrutura de página da Parte 5.
5. Criar docs/instrucoes/instrucoes.md com as regras de trabalho da Parte 6
   e um plano de ação em fases para a build da página.
6. Copiar este prompt para docs/prompt-inicial/prompt-inicial.md.
7. Criar docs/historico/00-criacao-estrutura-docs-AAAA-MM-DD.md.
8. Inicializar o projeto Next.js 14 se ainda não existir (npx create-next-app).
9. Me avisar quando terminar para eu aprovar o plano de ação antes de
   começar a construção.

Não crie nenhum componente nem página ainda. Só estrutura e documentação.
