// Galeria rotativa (strip). Loop contínuo via CSS (keyframe gallery-scroll,
// translate3d 0 → -50%). Duas cópias idênticas da lista fazem a emenda ser
// contínua. Decorativa (aria-hidden). Ver MASTER.md §5.6 e §6.
//
// Fase 4: substituir os placeholders por <Image> com as fotos reais.
const FOTOS = [1, 2, 3, 4, 5, 6];

function Card({ n }: { n: number }) {
  return (
    <div className="mr-3 flex aspect-[4/3] h-[180px] shrink-0 items-center justify-center rounded-sm bg-brand-surface">
      <span className="font-yantra text-xs uppercase tracking-widest text-brand-muted">
        Foto {n}
      </span>
    </div>
  );
}

export function GaleriaStrip() {
  return (
    <section aria-hidden="true" className="-mx-4 overflow-hidden">
      <div className="flex w-max animate-gallery-scroll">
        {[0, 1].map((copia) => (
          <div className="flex shrink-0" key={copia}>
            {FOTOS.map((n) => (
              <Card key={`${copia}-${n}`} n={n} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
