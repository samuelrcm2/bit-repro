import React from 'react';

import { PlasmaI18NextProvider } from '@my-scope/contexts.plasma-i18next-provider';

import TranslatedText from './translated-text';

export const BasicTranslatedText = () => {
  const message = 'ui.commons.pageUnderConstruction';
  return (
    <PlasmaI18NextProvider>
      <p style={{ fontWeight: 'bold', padding: 0 }}>Raw text: {message}</p>
      <div style={{ padding: '5px 0' }}>
        <TranslatedText textKey={message} />
      </div>
      <p style={{ fontWeight: 'bold', padding: 0 }}>With Prefix: Just a </p>
      <div style={{ padding: '5px 0' }}>
        <TranslatedText textKey={message} prefix="Just a " />
      </div>
      <p style={{ fontWeight: 'bold', padding: 0 }}>With Sufix: Sorry...</p>
      <div style={{ padding: '5px 0' }}>
        <TranslatedText textKey={message} suffix=" Sorry..." />
      </div>
    </PlasmaI18NextProvider>
  );
};
