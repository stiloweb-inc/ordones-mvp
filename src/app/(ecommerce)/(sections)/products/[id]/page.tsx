import ProductDetails from "@/components/product/product-details";
import data from "../data.json";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;

  const product = data.products.find(
    (_, index) => (index + 1).toString() === productId
  );

  if (!product) {
    return null;
  }

  return (
    <ProductDetails
      title={product.name}
      description={product.description || ""}
      price={product.price}
    />
  );
}
