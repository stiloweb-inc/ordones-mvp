/**
 * Calculates a new value based on a given percentage of the base value.
 * @param baseValue - The original value to calculate from
 * @param percentage - The percentage to apply (as an integer, e.g., 50 for 50%)
 * @returns The calculated value as a float
 * @example
 * calculateValueByPercentage(100, 50) // returns 50
 * calculateValueByPercentage(200, 25) // returns 50
 * calculateValueByPercentage(100, -10) // returns -10
 */
export function calculateValueByPercentage(
  baseValue: number,
  percentage: number
): number {
  const decimalPercentage = percentage / 100;

  return baseValue * decimalPercentage;
}
