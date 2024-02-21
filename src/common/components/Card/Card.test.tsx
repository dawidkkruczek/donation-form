import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('common/components/Card', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with header', () => {
    const { asFragment } = render(
      <Card
        headerProps={{
          icon: () => <svg />,
          onClose: () => {},
          subtitle: 'Subtitle',
          title: 'Title',
        }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
