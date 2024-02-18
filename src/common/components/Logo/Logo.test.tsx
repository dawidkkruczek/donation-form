import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('common/components/Logo', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
