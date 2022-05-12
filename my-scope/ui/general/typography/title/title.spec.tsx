import React from 'react';

import { render } from '@testing-library/react';

import Title from './title';

it('test title', () => {
  const titleText = 'Title`s text';

  render(<Title title={titleText} />);

  expect(titleText).toBeInTheDocument();
});
