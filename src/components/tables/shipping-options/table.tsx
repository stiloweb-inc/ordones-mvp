"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ShippingOptionsColumns as columns } from "./columns";
import { ShippingOption } from "@/types/shipping-option";
import { Table, TableBody } from "@/components/ui/table";
import { ShippingOptionRow } from "./rows";

export const ShippingOptionTable = ({ data }: { data: ShippingOption[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // if (props.accounts.length === 0) {
  // 	return (
  // 		<Card>
  // 			<CardHeader>
  // 				<AccountsEmptyState />
  // 			</CardHeader>
  // 		</Card>
  // 	)
  // }

  return (
    <Table className="table-fixed">
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <ShippingOptionRow key={row.id} row={row} />
        ))}
      </TableBody>
    </Table>
  );
};
