import React from 'react';

import { render, screen } from '@testing-library/react';

import { BasicImage } from './image.composition';
import { Image } from './index';

it('test image renderization', () => {
  render(<BasicImage />);
  const image = screen.getByTestId('image');

  expect(image).toBeInTheDocument();
});

it('test image preview', () => {
  render(<BasicImage />);
  const image = screen.getByText('Preview');
  expect(image).toBeInTheDocument();
});

it('test image width', () => {
  render(
    <Image
      width={500}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );

  const image = screen.getByTestId('image');
  expect(image.style.width === '500px').toBeTruthy();
});
