import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export function SearchInput() {
  return (
    <div className="relative w-full">
      <Input
        data-slot="sidebar-input"
        data-sidebar="input"
        className={cn("bg-background h-8 w-full shadow-none pl-8")}
        placeholder="O que você está buscando?"
      />
      <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
    </div>
  );
}
