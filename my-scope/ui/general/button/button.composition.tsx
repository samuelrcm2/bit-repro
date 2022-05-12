import React from 'react';

import { Icon } from '@my-scope/general.icon';
import PlasmaThemeProvider from '@my-scope/themes.theme-provider';

import Button from './index';

export const Types = () => (
  <PlasmaThemeProvider>
    <div>
      <div>
        <Button title={'Custom Theme Provider Button'} type="primary" />
      </div>
      <br />
      <div>
        <Button title={'Default Button'} />
      </div>
      <br />
      <div>
        <Button title={'Dashed Button'} type="dashed" />
      </div>
      <br />
      <div>
        <Button title={'Link Button'} type="link" />
      </div>
      <br />
      <div>
        <Button title={'Text Button'} type="text" />
      </div>
    </div>
  </PlasmaThemeProvider>
);

export const GhostButton = () => (
  <PlasmaThemeProvider>
    <div style={{ background: 'gray' }}>
      <Button title={'Ghost Button'} ghost />
    </div>
  </PlasmaThemeProvider>
);

export const Sizes = () => (
  <PlasmaThemeProvider>
    <div>
      <div>
        <Button title={'Small Button'} size="small" />
      </div>
      <br />
      <div>
        <Button title={'Middle Button'} size="middle" />
      </div>
      <br />
      <div>
        <Button title={'Large Button'} size="large" />
      </div>
    </div>
  </PlasmaThemeProvider>
);

export const Shapes = () => (
  <PlasmaThemeProvider>
    <div>
      <div>
        <Button icon={<Icon name="download" />} shape="circle" />
      </div>
      <br />
      <div>
        <Button title={'Rounded'} shape="round" />
      </div>
    </div>
  </PlasmaThemeProvider>
);

export const DisabledButton = () => (
  <PlasmaThemeProvider>
    <Button title={'Disabled Button'} disabled />;
  </PlasmaThemeProvider>
);

export const DangerButton = () => (
  <PlasmaThemeProvider>
    <Button title={'Danger Button'} danger />;
  </PlasmaThemeProvider>
);

export const BlockButton = () => (
  <PlasmaThemeProvider>
    <Button title={'Block Button'} block />;
  </PlasmaThemeProvider>
);

export const LoadingButton = () => (
  <PlasmaThemeProvider>
    <Button title={'ui.commons.loading'} loading />;
  </PlasmaThemeProvider>
);

export const CustomButtons = () => (
  <PlasmaThemeProvider>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Button.Delete />
      <Button.Cancel />
      <Button.Edit />
      <Button.New />
      <Button.Reset />
      <Button.Save />
    </div>
  </PlasmaThemeProvider>
);
