"use client";

import { TableCell, TableRow } from "../../ui/table";
import { type Row, flexRender } from "@tanstack/react-table";
import { ShippingOption } from "@/types/shipping-option";

type Props = {
  row: Row<ShippingOption>;
};

export function ShippingOptionRow({ row }: Props) {
  return (
    <>
      <TableRow key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id} className="w-1/3">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    </>
  );
}
