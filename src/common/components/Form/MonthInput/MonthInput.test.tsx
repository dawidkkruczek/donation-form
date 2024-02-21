import React from 'react';
import { render } from '@testing-library/react';
import MonthInput from './MonthInput';

describe('common/components/MonthInput', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<MonthInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
