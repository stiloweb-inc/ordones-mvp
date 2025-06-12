import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
};

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
