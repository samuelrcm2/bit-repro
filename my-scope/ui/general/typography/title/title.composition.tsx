import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';

import { Title } from './index';

export const Types = () => {
  return (
    <PlasmaThemeProvider>
      <div>
        <div>
          <Title title={'Title danger'} type="danger" size="code-02" />
        </div>
        <br />
        <div>
          <Title title={'Title success'} type="success" size="code-02" />
        </div>
        <br />
        <div>
          <Title title={'Title warning'} type="warning" size="code-02" />
        </div>
        <br />
        <div>
          <Title title={'Title regular'} type="regular" size="code-02" />
        </div>
        <br />
        <div>
          <Title title={'Title secondary'} type="secondary" size="code-02" />
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
          <Title title={'Title danger'} type="danger" size="code-01" />
        </div>
        <br />
        <div>
          <Title title={'Title success'} type="success" size="code-02" />
        </div>
        <br />
        <div>
          <Title title={'Title warning'} type="warning" size="body-short-02" />
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
          <Title
            title={
              '<Title title={\'Title danger\'} type="danger" size="code-01" />'
            }
            type="danger"
            size="code-01"
          />
        </div>
        <br />
        <div>
          <Title
            title={
              '<Title title={\'Title danger\'} type="success" size="code-02" />'
            }
            type="success"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Title
            title={
              '<Title title={\'Title danger\'} type="warning" size="body-short-02" />'
            }
            type="warning"
            size="body-short-02"
          />
        </div>
      </div>
    </PlasmaThemeProvider>
  );
};
