import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('common/components/Input', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});
