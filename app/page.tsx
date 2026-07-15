import { Header } from "@/components/Header";
import { Carrossel } from "@/components/Carrossel";
import { BotaoCta } from "@/components/BotaoCta";
import { RedesSociais } from "@/components/RedesSociais";
import { Rodape } from "@/components/Rodape";
import { IconWhatsApp } from "@/components/icons";

// Composição do link na bio. Ordem das seções: docs/arquitetura §3.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-8 py-8">
      <Header />

      <Carrossel
        fotos={[1, 2, 3, 4, 5, 6]}
        ariaLabel="Fotos de projetos da Movelart"
      />

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

      <Carrossel
        fotos={[7, 8, 9, 10, 11, 12]}
        ariaLabel="Mais fotos de projetos da Movelart"
      />

      <RedesSociais />

      <Rodape />
    </main>
  );
}
