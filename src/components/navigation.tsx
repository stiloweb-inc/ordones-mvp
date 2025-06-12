"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant={pathname === "/" ? "active" : "ghost"} asChild>
        <Link href="/">Início</Link>
      </Button>
      <Menubar className="">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Button variant={pathname === "/categories" ? "active" : "ghost"}>
              Categorias
            </Button>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Copo Térmico</MenubarItem>
            <MenubarItem>Jogo Americano</MenubarItem>
            <MenubarItem>Kits e Petisqueiras</MenubarItem>
            <MenubarItem>Bar e Restaurante</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Button variant={pathname === "/products" ? "active" : "ghost"} asChild>
        <Link href="/products">Produtos</Link>
      </Button>
      <Button variant={pathname === "/about" ? "active" : "ghost"} asChild>
        <Link href="/about">Quem Somos</Link>
      </Button>
    </div>
  );
}
