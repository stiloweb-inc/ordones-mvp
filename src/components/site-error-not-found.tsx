import Link from "next/link";
import { Button } from "./ui/button";

export default function SiteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full z-20">
        <div className="w-full space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Página Não Encontrada 😔
            </h1>
            <p className="text-gray-500">
              Desculpe, não conseguimos encontrar a página que você está
              procurando.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/">Ir para página principal</Link>
          </Button>
        </div>
      </div>
      <h5 className="text-accent/10 text-[500px] font-black leading-none text-center pointer-events-none absolute">
        404
      </h5>
    </div>
  );
}
