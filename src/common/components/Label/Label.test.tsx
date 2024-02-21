import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('common/components/Label', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Label htmlFor="sample-input">
        <input id="sample-input" />
      </Label>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
