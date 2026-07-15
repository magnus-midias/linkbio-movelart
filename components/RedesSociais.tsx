import { IconInstagram, IconWhatsApp } from "./icons";

// Ícones das redes. 28px, cor brand-muted, hover brand-accent.
// aria-label na âncora; SVG interno com aria-hidden. Ver MASTER.md §5.7.
const REDES = [
  {
    href: "https://www.instagram.com/movelartoficial/",
    label: "Instagram da Movelart",
    dataLabel: "instagram",
    Icon: IconInstagram,
  },
  {
    href: "https://wa.me/5548996340636",
    label: "WhatsApp da Movelart",
    dataLabel: "whatsapp-social",
    Icon: IconWhatsApp,
  },
];

export function RedesSociais() {
  return (
    <nav
      aria-label="Redes sociais"
      className="flex items-center justify-center gap-6"
    >
      {REDES.map(({ href, label, dataLabel, Icon }) => (
        <a
          key={dataLabel}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          data-label={dataLabel}
          className="text-brand-muted transition-colors hover:text-brand-accent focus-visible:text-brand-accent focus-visible:outline-none"
        >
          <Icon className="h-7 w-7" />
        </a>
      ))}
    </nav>
  );
}
