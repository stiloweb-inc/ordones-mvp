import Link from "next/link";
import { Label } from "../ui/label";
import Image from "next/image";
import SWLogo from "@/assets/sw.png";

export function SiteFooter() {
  return (
    <footer className="flex flex-col w-full h-[350px] border border-t-primary/10">
      <div className="grid grid-cols-6 py-12 w-full h-full">
        <div className="col-span-1 w-full h-full gap-4"></div>
        <div className="col-span-1 flex flex-col w-full h-full gap-4">
          <Label className="text-md font-semibold">Institucional</Label>
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Quem somos
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Produtos
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Suporte Técnico
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col w-full h-full gap-4">
          <Label className="text-md font-semibold">Categorias</Label>
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Camisetas
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Canecas
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Porta Copos
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col w-full h-full gap-4">
          <Label className="text-md font-semibold">Ajuda</Label>
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Política Comercial
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col w-full h-full gap-4">
          <Label className="text-md font-semibold">Atendimento</Label>
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Telefone
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              E-mail
            </Link>
            <Link
              href="#"
              className="text-sm font-normal hover:text-primary transition ease-in"
            >
              Localização
            </Link>
          </div>
        </div>
        <div className="col-span-1 w-full h-full gap-4"></div>
      </div>
      <div className="flex items-center justify-center gap-2 h-24 bg-card">
        <div className="grid grid-cols-3 w-full">
          <span className="text-xs col-start-2 text-center">
            2025 © Todos os direitos reservados a Ordones Lazer e Bordados
          </span>
          <div className="flex items-center justify-center -mb-1">
            <Image src={SWLogo} alt="developer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
