import { ProductCard } from "@/components/product/product-card";
import { ProductPagination } from "@/components/product/product-pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data from "../data.json";

export default async function Products() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="grid grid-cols-5 gap-4">
        {data.products.map((product, index) => (
          <ProductCard
            key={index}
            id={(index + 1).toString()}
            name={product.name}
            value={product.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-between w-full">
        <Select defaultValue="all">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Items por página" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">10</SelectItem>
              <SelectItem value="highlight">20</SelectItem>
              <SelectItem value="title-desc">30</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}
