import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MonthInput from './MonthInput';

describe('common/components/MonthInput', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<MonthInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should select month correctly', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <MonthInput onChange={onChange} value="2024-03" />,
    );
    const arrowPrev = getByTestId('month-input-arrow-prev');
    const arrowNext = getByTestId('month-input-arrow-next');

    fireEvent.click(arrowNext);
    expect(onChange).toHaveBeenCalledWith('2024-04');

    fireEvent.click(arrowPrev);
    expect(onChange).toHaveBeenCalledWith('2024-02');
  });

  it('should apply min month correctly', () => {
    const { getByTestId } = render(
      <MonthInput min="2024-03" value="2024-03" />,
    );
    const arrowPrev = getByTestId('month-input-arrow-prev');
    expect(arrowPrev).toBeDisabled();
  });
});
