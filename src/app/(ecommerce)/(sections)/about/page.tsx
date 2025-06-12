import { Label } from "@/components/ui/label";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full gap-4 p-6">
      <div className="flex flex-col items-center justify-center w-full h-[450px] gap-4">
        <Label variant="h1" className="text-primary font-bold">
          Sobre nós
        </Label>
        <span className="w-2/3 leading-7 text-md select-none text-center">
          Somos uma empresa genuinamente goiana, especializada em corte a laser
          de alta precisão para diversos materiais como tecidos, couro,
          materiais sintéticos, acrílico e MDF. Atendemos desde pequenas
          confecções até grandes indústrias, oferecendo soluções personalizadas
          que unem tecnologia, eficiência e acabamento impecável.
        </span>
      </div>
      <div className="grid grid-cols-2 w-full h-[450px] bg-primary p-6 rounded-xl">
        <div className="flex flex-col justify-center items-end gap-4 w-full text-right">
          <Label variant="h1" className="text-secondary font-bold">
            Nosso compromisso
          </Label>
          <span className="w-2/3 leading-7 text-md select-none text-accent">
            Nosso compromisso vai além do fornecimento de produtos: buscamos
            entregar valor, confiança e tranquilidade a cada cliente.
            Trabalhamos com prazos curtos, processos otimizados e atenção
            especial a cada detalhe do projeto, sempre com foco na excelência.
          </span>
        </div>
        <div className="flex flex-col w-full h-full px-12">
          <div className="w-full h-full bg-muted rounded-xl"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full h-[450px]">
        <div className="flex flex-col w-full h-full px-12">
          <div></div>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          <Label variant="h1" className="text-primary font-bold">
            Nossos diferenciais
          </Label>
          <ul className="list-disc space-y-2">
            <li>
              Equipamentos modernos e calibrados para cortes de alta precisão;
            </li>
            <li>Equipe qualificada e em constante aperfeiçoamento;</li>
            <li>
              Atendimento humanizado e flexível, com suporte técnico durante
              todas as etapas;
            </li>
            <li>
              Capacidade de atender grandes volumes com agilidade e qualidade;
            </li>
            <li>Controle rigoroso de qualidade e acabamento profissional.</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full h-[450px] bg-primary p-6 rounded-xl">
        <div className="flex flex-col w-full h-full px-12">
          <div className="w-full h-full bg-muted rounded-xl"></div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 w-full text-right">
          <Label variant="h1" className="text-secondary font-bold">
            Nossa missão
          </Label>
          <span className="w-2/3 leading-7 text-md select-none text-accent text-left">
            Ser referência em corte a laser em Goiás e em todo o Brasil, levando
            soluções inteligentes e personalizadas para os mais diversos
            segmentos do mercado.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[450px] gap-4">
        <Label variant="h1" className="text-primary font-bold">
          Nosso maior diferencial
        </Label>
        <span className="w-1/3 leading-7 text-center text-md select-none">
          <strong>JESUS CRISTO</strong> é o nosso maior diferencial. É Ele quem
          nos guia, fortalece e abençoa cada passo da nossa jornada. Atuamos com
          ética, responsabilidade e propósito, honrando a confiança que cada
          cliente deposita em nós.
        </span>
      </div>
    </div>
  );
}
