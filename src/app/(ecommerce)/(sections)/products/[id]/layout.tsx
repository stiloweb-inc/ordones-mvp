export default function ProductDetailsLayout({
  children,
  reviews,
  recommended,
}: {
  children: React.ReactNode;
  reviews: React.ReactNode;
  recommended: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full gap-8">
      {children}
      {reviews}
      {recommended}
    </div>
  );
}
