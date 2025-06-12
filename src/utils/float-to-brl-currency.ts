/**
 * Converts a float number to Brazilian Real (BRL) currency format
 * @param value - The float number to be formatted (e.g. 999.99)
 * @returns The formatted currency string (e.g. "R$ 999,99")
 */
export function floatToBrlCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
