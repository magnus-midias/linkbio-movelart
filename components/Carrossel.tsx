"use client";

import { useEffect, useRef } from "react";

// Carrossel arrastável (strip). O usuário pode arrastar nos dois sentidos:
// touch nativo no mobile + drag com o mouse no desktop. Não abre/expande a foto.
// Autoplay suave que pausa durante a interação e respeita prefers-reduced-motion.
// Duas cópias idênticas da lista garantem o loop infinito nos dois lados.
// Ver docs/design-system/MASTER.md §5.6 e §6.
//
// Fase 4: substituir os placeholders por <Image> com as fotos reais.
type CarrosselProps = {
  fotos: number[];
  ariaLabel: string;
};

function Card({ n }: { n: number }) {
  return (
    <div className="mr-3 flex aspect-[4/3] h-[180px] shrink-0 select-none items-center justify-center rounded-sm bg-brand-surface">
      <span className="font-yantra text-xs uppercase tracking-widest text-brand-muted">
        Foto {n}
      </span>
    </div>
  );
}

export function Carrossel({ fotos, ariaLabel }: CarrosselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, lastX: 0 });
  const paused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    const tick = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (!paused.current && !prefersReduced) {
          el.scrollLeft += 0.5;
        }
        // loop infinito nos dois sentidos
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft <= 0) el.scrollLeft += half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    paused.current = true;
    // Drag manual só no mouse; no touch o scroll nativo cuida do arrasto.
    if (e.pointerType === "mouse") {
      drag.current.active = true;
      drag.current.lastX = e.clientX;
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !ref.current) return;
    e.preventDefault();
    ref.current.scrollLeft -= e.clientX - drag.current.lastX;
    drag.current.lastX = e.clientX;
  };

  const endInteraction = () => {
    drag.current.active = false;
    paused.current = false;
  };

  const onPointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") paused.current = true;
  };

  return (
    <div
      ref={ref}
      role="group"
      aria-label={ariaLabel}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endInteraction}
      onPointerCancel={endInteraction}
      onPointerEnter={onPointerEnter}
      onPointerLeave={endInteraction}
      className="-mx-4 flex cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 focus-visible:outline-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {[0, 1].map((copia) => (
        <div className="flex shrink-0" key={copia} aria-hidden={copia === 1}>
          {fotos.map((n) => (
            <Card key={`${copia}-${n}`} n={n} />
          ))}
        </div>
      ))}
    </div>
  );
}
