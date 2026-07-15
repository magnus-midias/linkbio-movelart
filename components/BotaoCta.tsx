import type { ReactNode } from "react";

// CTA do link na bio. Variantes conforme docs/design-system/MASTER.md §5.2–5.4.
type Variant = "primario" | "secundario" | "terciario";

type BotaoCtaProps = {
  href: string;
  label: string;
  variant: Variant;
  dataLabel: string;
  icon?: ReactNode;
};

const base =
  "flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md px-4 font-display font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primario:
    "bg-brand-accent text-white hover:bg-brand-accent-hover active:bg-brand-accent-hover",
  secundario:
    "border-2 border-brand-ebony text-brand-ebony hover:bg-brand-ebony hover:text-white",
  terciario:
    "border border-brand-border text-brand-muted hover:border-brand-ebony hover:text-brand-dark",
};

export function BotaoCta({
  href,
  label,
  variant,
  dataLabel,
  icon,
}: BotaoCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-label={dataLabel}
      className={`${base} ${variants[variant]}`}
    >
      {label}
      {icon}
    </a>
  );
}
