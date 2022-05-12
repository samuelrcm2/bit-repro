import React, { ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import uiTranslations from '@my-scope/config.i18n';
import i18next, { InitOptions } from 'i18next';

const i18nextConfig: InitOptions = {
  resources: {},
  lng: 'en_US',
  fallbackLng: 'en_US',
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
};

const I18nextInstance = i18next.use(initReactI18next);
I18nextInstance.init(i18nextConfig);

const addResourceBundle = (
  translations: Record<string, Record<string, string>>
) =>
  Object.entries(translations).forEach(([key, value]) =>
    i18next.addResourceBundle(key, 'translation', value)
  );

export type I18NextProviderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

const I18NextProvider = ({ children }: I18NextProviderProps) => {
  addResourceBundle(uiTranslations);
  return <I18nextProvider i18n={I18nextInstance}>{children}</I18nextProvider>;
};

export default I18NextProvider;
