export const amountStringToNumber = (amount: string): number => {
  return parseFloat(amount.replace(/,/g, ''));
};

export const amountNumberToString = (amount: number): string => {
  return amount
    .toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
    .replace(/\.00$/, '');
};
