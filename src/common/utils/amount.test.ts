import { amountNumberToString, amountStringToNumber } from './amount';

describe('common/utils/amount', () => {
  describe('amountStringToNumber', () => {
    it('should convert amount string to a number', () => {
      expect(amountStringToNumber('1,000')).toBe(1000);
      expect(amountStringToNumber('999.99')).toBe(999.99);
      expect(amountStringToNumber('1,000,000')).toBe(1000000);
    });
  });

  describe('amountNumberToString', () => {
    it('should convert amount number to a string', () => {
      expect(amountNumberToString(1000)).toBe('1,000');
      expect(amountNumberToString(999.99)).toBe('999.99');
      expect(amountNumberToString(1000000)).toBe('1,000,000');
    });
  });
});
