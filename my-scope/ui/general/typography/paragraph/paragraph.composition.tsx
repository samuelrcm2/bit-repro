import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';

import { Paragraph } from './index';

export const Types = () => {
  return (
    <PlasmaThemeProvider>
      <div>
        <div>
          <Paragraph title={'Paragraph danger'} type="danger" size="code-02" />
        </div>
        <br />
        <div>
          <Paragraph
            title={'Paragraph success'}
            type="success"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Paragraph
            title={'Paragraph warning'}
            type="warning"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Paragraph
            title={'Paragraph regular'}
            type="regular"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Paragraph
            title={'Paragraph secondary'}
            type="secondary"
            size="code-02"
          />
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
          <Paragraph title={'Paragraph danger'} type="danger" size="code-01" />
        </div>
        <br />
        <div>
          <Paragraph
            title={'Paragraph success'}
            type="success"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Paragraph
            title={'Paragraph warning'}
            type="warning"
            size="body-short-02"
          />
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
          <Paragraph
            title={
              '<Paragraph title={\'Paragraph danger\'} type="danger" size="code-01" />'
            }
            type="danger"
            size="code-01"
          />
        </div>
        <br />
        <div>
          <Paragraph
            title={
              '<Paragraph title={\'Paragraph danger\'} type="success" size="code-02" />'
            }
            type="success"
            size="code-02"
          />
        </div>
        <br />
        <div>
          <Paragraph
            title={
              '<Paragraph title={\'Paragraph danger\'} type="warning" size="body-short-02" />'
            }
            type="warning"
            size="body-short-02"
          />
        </div>
      </div>
    </PlasmaThemeProvider>
  );
};
