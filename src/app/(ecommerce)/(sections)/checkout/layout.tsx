import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutLayout({
  children,
  steps,
}: {
  children: React.ReactNode;
  steps: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex items-center justify-center w-full">{children}</div>
      <div className="flex flex-1 flex-col w-full h-full">{steps}</div>
    </div>
  );
}
