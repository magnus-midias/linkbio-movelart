import Image from "next/image";

// Header do link na bio: logo (icone-vermelho para fundo claro) + nome +
// subtítulo. Ver docs/design-system/MASTER.md §5.5.
export function Header() {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src="/images/icone-vermelho.svg"
        alt=""
        width={48}
        height={56}
        priority
        className="h-14 w-auto"
      />
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-bold text-brand-dark">
          Movelart
        </h1>
        <p className="font-sans text-sm text-brand-muted">
          Móveis Sob Medida | Grande Florianópolis, SC
        </p>
      </div>
    </header>
  );
}
