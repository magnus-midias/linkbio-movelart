# 00 — Criação da estrutura de documentação

**Data:** 2026-07-15
**Fase:** 0 — Estrutura e documentação
**Autor:** Claude Code

---

## O que foi feito

Criação da estrutura padrão de pastas e da documentação inicial do projeto
"Link na Bio — Movelart", a partir do briefing enviado pelo usuário (registrado
em `docs/prompt-inicial/prompt-inicial.md`).

### Pastas criadas
```
docs/
  arquitetura/
  instrucoes/
  historico/
  design-system/
    logos/
    icones/
    favicon/
  prompt-inicial/
```

### Arquivos criados
- `CLAUDE.md` — contexto do projeto, stack, convenção de nomenclatura e regra
  de histórico.
- `docs/design-system/design-system.md` — tokens definitivos (paleta,
  tipografia, raios, especificação de componentes).
- `docs/arquitetura/arquitetura.md` — stack e estrutura da página (5 seções).
- `docs/instrucoes/instrucoes.md` — regras de trabalho + plano de ação em fases.
- `docs/prompt-inicial/prompt-inicial.md` — cópia integral do briefing.
- `docs/historico/00-criacao-estrutura-docs-2026-07-15.md` — este arquivo.

### Limpeza
Removidas pastas provisórias criadas antes do briefing definitivo
(`assets/`, `css/`, `js/`), substituídas pela estrutura canônica acima.

---

## Decisões
- Nomenclatura ASCII puro + kebab-case aplicada a todos os arquivos/pastas.
- Nenhum componente ou página criado — conforme instrução explícita do briefing.

---

## Próximo passo
Inicializar o projeto Next.js 14 e aguardar aprovação do usuário para o plano de
ação (Fase 1). Ver `docs/instrucoes/instrucoes.md`.
