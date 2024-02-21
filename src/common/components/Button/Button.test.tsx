import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('common/components/Button', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button>Sample</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with given style', () => {
    Object.values(Button.Variant).forEach((variant) => {
      const { asFragment } = render(<Button variant={variant}>Sample</Button>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should render correctly with fullWidth', () => {
    const { asFragment } = render(<Button fullWidth>Sample</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger onClick when passed', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Sample</Button>);
    fireEvent.click(getByText('Sample'));
    expect(onClick).toHaveBeenCalled();
  });
});
