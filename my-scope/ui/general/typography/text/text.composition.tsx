import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';

import { Text } from './index';

export const Types = () => {
  return (
    <PlasmaThemeProvider>
      <div>
        <div>
          <Text title={'Text danger'} type="danger" size="code-02" />
        </div>
        <br />
        <div>
          <Text title={'Text success'} type="success" size="code-02" />
        </div>
        <br />
        <div>
          <Text title={'Text warning'} type="warning" size="code-02" />
        </div>
        <br />
        <div>
          <Text title={'Text regular'} type="regular" size="code-02" />
        </div>
        <br />
        <div>
          <Text title={'Text secondary'} type="secondary" size="code-02" />
        </div>
        <br />
      </div>
    </PlasmaThemeProvider>
  );
};

export const Sizes = () => {
  return (
    <PlasmaThemeProvider>
      <div>
        <div>
          <Text title={'Text danger'} type="danger" size="code-01" />
        </div>
        <br />
        <div>
          <Text title={'Text success'} type="success" size="code-02" />
        </div>
        <br />
        <div>
          <Text title={'Text warning'} type="warning" size="body-short-02" />
        </div>
      </div>
    </PlasmaThemeProvider>
  );
};

export const Usage = () => {
  return (
    <PlasmaThemeProvider>
      <div>
        <div>
          <Text
            title={
              '<Text title={\'Text danger\'} type="danger" size="code-01" />'
            }
            type="danger"
            size="code-01"
          />
        </div>
        <br />
        <div>
          <Text
            title={
              '<Text title={\'Text danger\'} type="success" size="code-02" />'
            }
            type="success"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Text
            title={
              '<Text title={\'Text danger\'} type="warning" size="body-short-02" />'
            }
            type="warning"
            size="body-short-02"
          />
        </div>
      </div>
    </PlasmaThemeProvider>
  );
};
