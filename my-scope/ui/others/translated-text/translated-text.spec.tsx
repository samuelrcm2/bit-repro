import React from 'react';

import { PlasmaI18NextProvider } from '@my-scope/contexts.plasma-i18next-provider';
import { render, screen } from '@testing-library/react';

import TranslatedText from './translated-text';

it('test translation', () => {
  const message = 'ui.commons.status';
  render(
    <PlasmaI18NextProvider>
      <TranslatedText textKey={message} />
    </PlasmaI18NextProvider>
  );

  const translatedText = screen.getByText('Status');
  expect(translatedText).toBeInTheDocument();
});
