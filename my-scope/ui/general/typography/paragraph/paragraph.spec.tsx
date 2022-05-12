import React from 'react';

import { render } from '@testing-library/react';

import Paragraph from './paragraph';

it('test paragraph', () => {
  const paragraphText = 'Paragraph`s text';

  render(<Paragraph title={paragraphText} />);

  expect(paragraphText).toBeInTheDocument();
});
