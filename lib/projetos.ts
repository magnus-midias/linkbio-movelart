// Dados das fotos dos carrosséis (galeria).
//
// FASE 4 — quando as fotos reais chegarem:
//   1. Colocar os arquivos em `public/images/projetos/` (WebP, proporção 4/3).
//   2. Preencher `src` (ex.: "/images/projetos/foto-01.webp") e `alt`
//      (descrição real da foto) em cada item abaixo.
//   O `Carrossel` troca automaticamente o placeholder pela imagem quando há
//   `src`. Enquanto estiver vazio, mostra o placeholder "Foto N".
export type Foto = {
  /** Caminho em /public quando a foto real existir. */
  src?: string;
  /** Texto alternativo descritivo (obrigatório quando houver `src`). */
  alt?: string;
  /** Rótulo do placeholder enquanto não há foto real. */
  label: string;
};

export const FAIXA_TOPO: Foto[] = [
  { label: "Foto 1" },
  { label: "Foto 2" },
  { label: "Foto 3" },
  { label: "Foto 4" },
  { label: "Foto 5" },
  { label: "Foto 6" },
];

export const FAIXA_BASE: Foto[] = [
  { label: "Foto 7" },
  { label: "Foto 8" },
  { label: "Foto 9" },
  { label: "Foto 10" },
  { label: "Foto 11" },
  { label: "Foto 12" },
];
