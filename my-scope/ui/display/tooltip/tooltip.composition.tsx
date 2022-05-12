import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';

import { Tooltip } from './index';

export const BasicTooltip = () => (
  <PlasmaThemeProvider>
    <Tooltip title="Tooltip example" placement="bottom">
      <div
        style={{
          display: 'flex',
        }}
      >
        <p
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Hover me!
        </p>
      </div>
    </Tooltip>
  </PlasmaThemeProvider>
);
