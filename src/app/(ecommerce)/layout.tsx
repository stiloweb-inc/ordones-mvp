import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function ShopLayout({
  children,
  preview,
}: {
  children: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SiteHeader />
      <div className="flex flex-1 flex-col w-full justify-center h-full">
        {preview}
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
