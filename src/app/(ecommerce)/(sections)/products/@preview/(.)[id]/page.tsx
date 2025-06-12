import { DialogWrapper } from "@/components/dialog-wrapper";
import ProductDetails from "@/components/product/product-details";
import data from "../../data.json";

export default async function ProductDetailsPreview({
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
    <DialogWrapper>
      <ProductDetails
        title={product.name}
        description={product.description || ""}
        price={product.price}
      />
    </DialogWrapper>
  );
}
