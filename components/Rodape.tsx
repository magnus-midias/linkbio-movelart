// Rodapé mínimo. Ver docs/design-system/MASTER.md §5.8.
export function Rodape() {
  return (
    <footer className="mt-auto flex flex-col gap-1 pt-4 text-center">
      <p className="font-yantra text-xs text-brand-muted">
        © 2026 Movelart. Todos os direitos reservados.
      </p>
      <p className="font-yantra text-xs text-brand-muted">
        Desenvolvido por{" "}
        <a
          href="https://magnusmidias.com"
          target="_blank"
          rel="noopener noreferrer"
          data-label="magnus-midias"
          className="font-medium underline decoration-brand-border underline-offset-2 transition-colors hover:text-brand-accent"
        >
          Magnus Mídias
        </a>
      </p>
    </footer>
  );
}
