import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AmountInput from './AmountInput';

describe('common/components/AmountInput', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AmountInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should format value correctly', () => {
    const { getByTestId } = render(<AmountInput />);
    const input = getByTestId('amount-input-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '1000' } });
    expect(input.value).toBe('1,000');

    fireEvent.change(input, { target: { value: '1000.00' } });
    expect(input.value).toBe('1,000.00');
  });
});
