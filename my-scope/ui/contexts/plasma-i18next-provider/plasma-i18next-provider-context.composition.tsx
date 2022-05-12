import React from 'react';
import { useTranslation } from 'react-i18next';

import PlasmaI18NextProviderProvider from './plasma-i18next-provider-context-provider';
// import

export function MockComponent() {
  const { t } = useTranslation();
  const exampleKey = 'ui.commons.help';
  return (
    <div>
      <p>{`Translation key: ${exampleKey}`}</p>
      <p>{`Value: ${t(exampleKey)}`}</p>
    </div>
  );
}

export const BasicThemeUsage = () => {
  return (
    <PlasmaI18NextProviderProvider>
      <MockComponent />
    </PlasmaI18NextProviderProvider>
  );
};
