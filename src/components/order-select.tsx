import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

export function OrderSelect() {
  return (
    <div className="flex items-center gap-2">
      <Label className="font-semibold">Ordenar por:</Label>
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="highlight">Mais vendidos</SelectItem>
            <SelectItem value="title-desc">Título A-Z</SelectItem>
            <SelectItem value="title-asc">Título Z-A</SelectItem>
            <SelectItem value="price-desc">Maior preço</SelectItem>
            <SelectItem value="price-asc">Menor preço</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
