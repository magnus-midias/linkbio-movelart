"use client";

import Script from "next/script";
import { useEffect } from "react";

// Rastreamento plugável.
// - Captura de cliques: escuta cliques em <a data-label> e empurra o evento
//   `link_click` (com link_label e link_url) para o dataLayer. Funciona mesmo
//   sem GTM (só acumula no array) — quando o GTM for configurado, os eventos já
//   estarão lá.
// - GTM: carrega só se NEXT_PUBLIC_GTM_ID estiver definido (ver .env.example).
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[data-label]");
      if (!link) return;
      const w = window as DataLayerWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "link_click",
        link_label: link.getAttribute("data-label"),
        link_url: link.href,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        />
      </noscript>
    </>
  );
}
