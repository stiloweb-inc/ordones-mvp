import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
};

export default function ProductsLayout({
  preview,
  children,
  filters,
  products,
}: {
  preview: React.ReactNode;
  children: React.ReactNode;
  filters: React.ReactNode;
  products: React.ReactNode;
}) {
  return (
    <>
      {preview}
      <div className="flex flex-col w-full h-full gap-4 p-6">
        {children}
        <div className="grid grid-cols-12 w-full h-full gap-4">
          <div className="col-span-2">{filters}</div>
          <div className="col-span-10">{products}</div>
        </div>
      </div>
    </>
  );
}
