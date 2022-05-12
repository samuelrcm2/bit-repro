import React from 'react';

import { render } from '@testing-library/react';

import Text from './text';

it('test text', () => {
  const textText = 'Text`s text';

  render(<Text title={textText} />);

  expect(textText).toBeInTheDocument();
});
