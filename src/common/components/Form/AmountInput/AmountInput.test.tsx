import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AmountInput from './AmountInput';

describe('common/components/AmountInput', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AmountInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should set formatted value correctly', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<AmountInput onChange={onChange} />);
    const input = getByTestId('amount-input-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '1000' } });

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: '1,000.00',
        }),
      }),
    );
  });
});
