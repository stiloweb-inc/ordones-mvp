import { ShippingOption } from "@/types/shipping-option";
import { floatToBrlCurrency } from "@/utils/float-to-brl-currency";
import { ColumnDef } from "@tanstack/react-table";

export const ShippingOptionsColumns: ColumnDef<ShippingOption>[] = [
  {
    id: "name",
    cell: ({ row }) => {
      const resolveOptionName = (option: string) => {
        switch (option) {
          case "pickup":
            return "Retirar na loja";
          case "sedex":
            return "SEDEX";
          case "pac":
            return "PAC";
          default:
            return "-";
        }
      };

      return (
        <span className="flex items-center justify-center text-sm font-semibold bg-accent px-2 py-1 rounded">
          {resolveOptionName(row.original.name)}
        </span>
      );
    },
  },
  {
    id: "time",
    cell: ({ row }) => (
      <span className="flex items-center justify-center text-sm font-normal">
        em até {row.original.time} dias úteis
      </span>
    ),
  },
  {
    id: "value",
    cell: ({ row }) => {
      return (
        <>
          {row.original.value === 0 ? (
            <span className="flex items-center justify-center bg-green-500/10 text-green-500 text-xs uppercase font-semibold font-mono rounded px-2 py-1">
              Grátis
            </span>
          ) : (
            <span className="flex items-center justify-center bg-accent text-primary text-xs uppercase font-semibold font-mono rounded px-2 py-1">
              {floatToBrlCurrency(row.original.value)}
            </span>
          )}
        </>
      );
    },
  },
];
