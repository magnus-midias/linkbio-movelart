# 12 — Rodapé: copyright 2026 + crédito Magnus Mídias

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (ajuste de conteúdo a pedido do usuário)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–11, arquitetura, MASTER e
override feita antes).

---

## Pedido
Rodapé com:
```
© 2026 Movelart. Todos os direitos reservados.
Desenvolvido por Magnus Mídias
```
com "Magnus Mídias" linkando para https://magnusmidias.com.

## O que foi feito — `components/Rodape.tsx`
- Duas linhas centralizadas (`font-yantra text-xs text-brand-muted`, `gap-1`):
  1. "© 2026 Movelart. Todos os direitos reservados."
  2. "Desenvolvido por **Magnus Mídias**".
- "Magnus Mídias" é `<a>` para <https://magnusmidias.com> com
  `target="_blank"`, `rel="noopener noreferrer"`, `data-label="magnus-midias"`,
  sublinhado e hover `brand-accent`.
- Substituiu o antigo "© 2025 Movelart · São José, SC" (ano atualizado p/ 2026).

## Doc
- `MASTER.md` §5.8 e `arquitetura.md` §5 atualizados com o novo rodapé.

## Verificação
- `npx tsc --noEmit` — ✓ sem erros.
- Dev server: rodapé renderizando as duas linhas e o link `magnusmidias.com`.

## Próximo passo
Commit/push quando o usuário pedir.
