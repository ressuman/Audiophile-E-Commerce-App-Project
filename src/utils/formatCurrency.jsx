// export function formatCurrency(amount) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(amount);
// }

// export function formatCurrency(amount) {
//   // Round off the amount
//   const roundedAmount = Math.round(amount * 100) / 100;

//   // Format the rounded amount as currency
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 0, // Remove decimals if they are .00
//     maximumFractionDigits: 2, // Ensure a maximum of 2 decimal places
//   }).format(roundedAmount);
// }

export function formatCurrency(amount) {
  // Round off the amount to the nearest whole number
  const roundedAmount = Math.round(amount);

  // Format the rounded amount as currency
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // Remove decimals
    maximumFractionDigits: 0, // Ensure no decimal places
  }).format(roundedAmount);
}
