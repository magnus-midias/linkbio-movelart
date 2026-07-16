# 10 — Fix: faixa de baixo travada (sentido direita)

**Data:** 2026-07-15
**Fase:** pós-Fase 3 (correção de bug)
**Autor:** Claude Code
**Impacto visual:** sim (leitura de histórico 00–09, arquitetura, MASTER e
override feita antes).

---

## Problema
A faixa de cima (sentido "left") girava normalmente, mas a de baixo (sentido
"right") ficava **parada**.

## Causa
O autoplay acumulava a posição **lendo `scrollLeft` de volta** a cada frame e
somando a velocidade. No sentido negativo, o arredondamento/clamp do `scrollLeft`
pelo navegador prendia o valor no limite, e a faixa "empacava". Também havia um
init frágil (`el.scrollLeft = scrollWidth/2`) só para o sentido "right".

## Correção — `components/Carrossel.tsx`
- Introduzida uma **posição controlada em memória** (`pos`, float como `useRef`).
  - Durante o autoplay: `pos += speed`, normaliza para `[0, half)` e **escreve**
    em `el.scrollLeft` (não lê de volta).
  - Durante o arrasto (paused) ou com `prefers-reduced-motion`: **lê**
    `el.scrollLeft` para `pos`, deixando o usuário/nativo no controle.
- Removido o init `el.scrollLeft = scrollWidth/2` (desnecessário — como há 2
  cópias idênticas, qualquer offset é visualmente equivalente; sem salto).
- Resultado: giro contínuo e simétrico nos dois sentidos; arrasto e retomada
  seguem funcionando.

## Verificação
- `npx tsc --noEmit` — ✓ sem erros.
- Dev server: HTTP 200, recompilado. (Animação em si depende de verificação
  visual no navegador.)

## Doc
- `MASTER.md` §5.6 atualizado (posição controlada; removida a nota do init).

## Próximo passo
Commit/push quando o usuário pedir (mudanças acumuladas dos históricos 07–10).
