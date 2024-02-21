export const amountStringToNumber = (amount: string): number => {
  return parseFloat(amount.replace(/,/g, ''));
};
