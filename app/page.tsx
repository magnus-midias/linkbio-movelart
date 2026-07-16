import { Header } from "@/components/Header";
import { Carrossel } from "@/components/Carrossel";
import { BotaoCta } from "@/components/BotaoCta";
import { RedesSociais } from "@/components/RedesSociais";
import { Rodape } from "@/components/Rodape";
import { IconWhatsApp } from "@/components/icons";
import { FAIXA_TOPO, FAIXA_BASE } from "@/lib/projetos";

// Composição do link na bio. Ordem das seções: docs/arquitetura §3.
// Header → galeria (2 faixas opostas) → orçamento → portfólio/site → redes → rodapé.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-8 py-8">
      <Header />

      {/* Galeria: duas faixas de fotos girando em sentidos opostos */}
      <div className="flex flex-col gap-3">
        <Carrossel
          fotos={FAIXA_TOPO}
          direction="left"
          size="sm"
          ariaLabel="Fotos de projetos da Movelart"
        />
        <Carrossel
          fotos={FAIXA_BASE}
          direction="right"
          size="sm"
          ariaLabel="Mais fotos de projetos da Movelart"
        />
      </div>

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
