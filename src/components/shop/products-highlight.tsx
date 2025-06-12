import { ProductCard, ProductItem } from "../product/product-card";

export function ProductsHighlight() {
  const products: ProductItem[] = [
    {
      id: "prod-1",
      name: "Nome do produto",
      value: 999.99,
      installments: 12,
      percentageSale: 80,
    },
    {
      id: "prod-2",
      name: "Nome do produto",
      value: 199.99,
      installments: 2,
      percentageSale: 80,
    },
    {
      id: "prod-3",
      name: "Nome do produto",
      value: 109.99,
      installments: 5,
      percentageSale: 80,
    },
    {
      id: "prod-4",
      name: "Nome do produto",
      value: 123.99,
      installments: 10,
      percentageSale: 80,
    },
    {
      id: "prod-5",
      name: "Nome do produto",
      value: 122.99,
      installments: 12,
      percentageSale: 80,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          value={product.value}
          installments={product.installments}
          percentageSale={product.percentageSale}
        />
      ))}
    </div>
  );
}
