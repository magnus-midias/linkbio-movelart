import { Header } from "@/components/Header";
import { GaleriaStrip } from "@/components/GaleriaStrip";
import { BotaoCta } from "@/components/BotaoCta";
import { RedesSociais } from "@/components/RedesSociais";
import { Rodape } from "@/components/Rodape";
import { IconWhatsApp } from "@/components/icons";

// Composição do link na bio. Ordem das 5 seções: docs/arquitetura §3.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-8 py-8">
      <Header />

      <GaleriaStrip />

      <nav aria-label="Ações principais" className="flex flex-col gap-3">
        <BotaoCta
          href="https://wa.me/5548996340636"
          label="Solicitar orçamento"
          variant="primario"
          dataLabel="whatsapp-orcamento"
          icon={<IconWhatsApp className="h-5 w-5" />}
        />
        <BotaoCta
          href="https://moveismovelart.com.br/ambientes"
          label="Ver portfólio"
          variant="secundario"
          dataLabel="portfolio"
        />
        <BotaoCta
          href="https://moveismovelart.com.br"
          label="Acessar o site"
          variant="terciario"
          dataLabel="site"
        />
      </nav>

      <RedesSociais />

      <Rodape />
    </main>
  );
}
