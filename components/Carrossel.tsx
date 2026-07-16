"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Foto } from "@/lib/projetos";

// Carrossel arrastável (strip). Roda automaticamente o tempo todo; só pausa
// enquanto o usuário arrasta (drag no mouse ou touch) e volta a rodar ao soltar.
// NÃO pausa no hover.
//
// A posição do giro é controlada por uma variável própria (`pos`, float) que
// SÓ escreve em `scrollLeft` durante o autoplay; quando o usuário arrasta, a
// gente lê `scrollLeft` de volta. Isso evita o travamento por arredondamento do
// navegador (que acontecia no sentido "right") e funciona igual nos dois lados.
//
// `direction` define o sentido; loop infinito via 2 cópias idênticas. Não
// abre/expande a foto. Respeita prefers-reduced-motion.
// Cada foto mostra a imagem real (quando há `src`) ou um placeholder "Foto N".
// Ver docs/design-system/MASTER.md §5.6 e §6.
type CarrosselProps = {
  fotos: Foto[];
  ariaLabel: string;
  direction?: "left" | "right";
  size?: "sm" | "md";
};

function Card({ foto, size }: { foto: Foto; size: "sm" | "md" }) {
  const altura = size === "sm" ? "h-[90px]" : "h-[180px]";
  const [w, h] = size === "sm" ? [120, 90] : [240, 180];

  if (foto.src) {
    return (
      <div
        className={`mr-3 ${altura} aspect-[4/3] shrink-0 overflow-hidden rounded-sm`}
      >
        <Image
          src={foto.src}
          alt={foto.alt ?? ""}
          width={w}
          height={h}
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`mr-3 flex ${altura} aspect-[4/3] shrink-0 select-none items-center justify-center rounded-sm bg-brand-surface`}
    >
      <span className="font-yantra text-[10px] uppercase tracking-widest text-brand-muted">
        {foto.label}
      </span>
    </div>
  );
}

export function Carrossel({
  fotos,
  ariaLabel,
  direction = "left",
  size = "md",
}: CarrosselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, lastX: 0 });
  const paused = useRef(false);
  const pos = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const speed = direction === "right" ? -0.5 : 0.5;

    let raf = 0;
    const tick = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (paused.current || prefersReduced) {
          // Usuário no controle (arrasto) ou sem autoplay: acompanha a posição.
          pos.current = el.scrollLeft;
        } else {
          pos.current += speed;
          // normaliza para [0, half) → loop infinito nos dois sentidos
          if (pos.current < 0) pos.current += half;
          else if (pos.current >= half) pos.current -= half;
          el.scrollLeft = pos.current;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

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

  // Solta o arrasto e volta a rodar naturalmente do ponto onde parou.
  const endInteraction = () => {
    drag.current.active = false;
    paused.current = false;
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
      onPointerLeave={endInteraction}
      className="-mx-4 flex cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain focus-visible:outline-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {[0, 1].map((copia) => (
        <div className="flex shrink-0" key={copia} aria-hidden={copia === 1}>
          {fotos.map((foto, i) => (
            <Card key={`${copia}-${i}`} foto={foto} size={size} />
          ))}
        </div>
      ))}
    </div>
  );
}
