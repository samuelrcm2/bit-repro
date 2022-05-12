import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';

import Icon from './icon';

export const BasicIcon = () => (
  <PlasmaThemeProvider>
    <div
      style={{
        display: 'flow-root',
        margin: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            justifyContent: 'space-around',
          }}
        >
          <Icon
            name="Home"
            fontSize="small"
            color="primary"
            title="Small Home Icon"
          />
          <Icon
            name="Home"
            fontSize="inherit"
            color="primary"
            title="Inherit Home Icon"
          />
          <Icon
            name="Home"
            fontSize="medium"
            color="primary"
            title="Medium Home Icon"
          />
          <Icon
            name="Home"
            fontSize="large"
            color="primary"
            title="Large Home Icon"
          />
        </div>
      </div>
      <div
        style={{
          justifyContent: 'space-around',
        }}
      >
        <Icon
          name="Delete"
          fontSize="small"
          color="primary"
          title="Small Delete Icon"
        />
        <Icon
          name="Delete"
          fontSize="inherit"
          color="primary"
          title="Inherit Delete Icon"
        />
        <Icon
          name="Delete"
          fontSize="medium"
          color="primary"
          title="Medium Delete Icon"
        />
        <Icon
          name="Delete"
          fontSize="large"
          color="primary"
          title="Large Delete Icon"
        />
      </div>
      <div
        style={{
          justifyContent: 'space-around',
        }}
      >
        <Icon
          name="Add"
          fontSize="small"
          color="secondary"
          title="Small Add Icon"
        />
        <Icon
          name="Add"
          fontSize="inherit"
          color="secondary"
          title="Inherit Add Icon"
        />
        <Icon
          name="Add"
          fontSize="medium"
          color="secondary"
          title="Medium Add Icon"
        />
        <Icon
          name="Add"
          fontSize="large"
          color="secondary"
          title="Large Add Icon"
        />
      </div>
    </div>
  </PlasmaThemeProvider>
);
