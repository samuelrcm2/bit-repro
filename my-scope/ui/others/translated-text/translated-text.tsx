import React from 'react';
import { useTranslation } from 'react-i18next';

import { TOptions, StringMap } from 'i18next';

function TranslatedText(props: TranslatedTextProps) {
  const { textKey, options, prefix, suffix } = props;

  const { t } = useTranslation();

  if (typeof textKey !== 'string') return <>{textKey}</>;

  return (
    <>
      {prefix}
      {t(textKey, options)}
      {suffix}
    </>
  );
}

export default TranslatedText;

export interface TranslatedTextProps {
  /**
   * If the type of `textKey` is a string then that will be i18n translation key,
   * otherwise the result will be the `textKey`
   */
  textKey?: React.ReactNode;

  /**
   * The options object that will be passed to translated function
   */
  options?: TOptions<StringMap>;

  /**
   * The prefix that will be prepend to the translated text
   */
  prefix?: string;

  /**
   * The suffix that will be append to the translated text
   */
  suffix?: string;
}
