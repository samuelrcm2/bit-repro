import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';

import { PlasmaReactAspect } from './plasma-react.aspect';
import {
  devConfigTransformer,
  buildConfigTransformer,
} from './typescript/ts-transformer';
import {
  previewConfigTransformer,
  devServerConfigTransformer,
} from './webpack/webpack-transformers';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */

export class PlasmaReactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      react.useTypescript({
        devConfig: [devConfigTransformer],
        buildConfig: [buildConfigTransformer],
      }),
      react.useWebpack({
        previewConfig: [previewConfigTransformer],
        devServerConfig: [devServerConfigTransformer],
      }),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      // react.useEslint({
      //   transformers: [ sad
      //     (config) => {
      //       config.addExtends(['@my-scope/ts-recommended/react']);
      //       // config.setPluginPath('@my-scope/eslint-config-ts-recommended/react');
      //       return config;
      //     },
      //   ],
      // }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      // react.usePrettier({
      //   transformers: [
      //     (config) => {
      //       config.setKey('tabWidth', 2);
      //       return config;
      //     },
      //   ],
      // }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        dependencies: {
          // eslint-disable-next-line prettier/prettier
          react: '-',
          // eslint-disable-next-line prettier/prettier
          color: '-',
          // eslint-disable-next-line prettier/prettier
          lodash: '-',
          'react-dom': '-',
          'react-is': '-',
          '@mui/material': '-',
          '@mui/icons-material': '-',
          'styled-components': '-',
          '@my-scope/themes.theme-provider': '-',
          // eslint-disable-next-line prettier/prettier
          i18next: '-',
          'react-i18next': '-',
          '@my-scope/contexts.plasma-i18next-provider': '-',
        },
        devDependencies: {
          // eslint-disable-next-line prettier/prettier
          react: '-',
          // eslint-disable-next-line prettier/prettier
          color: '-',
          // eslint-disable-next-line prettier/prettier
          lodash: '-',
          'react-dom': '-',
          'react-is': '-',
          '@mui/material': '-',
          '@mui/icons-material': '-',
          'styled-components': '-',
          '@my-scope/themes.theme-provider': '-',
          '@types/react-color': '-',
          // eslint-disable-next-line prettier/prettier
          i18next: '-',
          'react-i18next': '-',
          '@my-scope/contexts.plasma-i18next-provider': '-',
        },
        peerDependencies: {
          // eslint-disable-next-line prettier/prettier
          react: {
            version: '17.0.2',
            resolveFromEnv: true,
          },
          // eslint-disable-next-line prettier/prettier
          color: {
            version: '4.0.1',
            resolveFromEnv: true,
          },
          // eslint-disable-next-line prettier/prettier
          lodash: {
            version: '4.17.21',
            resolveFromEnv: true,
          },
          'react-dom': {
            version: '17.0.2',
            resolveFromEnv: true,
          },
          'react-is': {
            version: '17.0.2',
            resolveFromEnv: true,
          },
          '@mui/material': {
            version: '5.5.0',
            resolveFromEnv: true,
          },
          '@mui/icons-material': {
            version: '5.5.0',
            resolveFromEnv: true,
          },
          'styled-components': {
            version: '5.3.3',
            resolveFromEnv: true,
          },
          '@my-scope/themes.theme-provider': {
            version: 'latest',
            resolveFromEnv: true,
          },
          // eslint-disable-next-line prettier/prettier
          i18next: {
            version: '21.6.5',
            resolveFromEnv: true,
          },
          'react-i18next': {
            version: '11.15.3',
            resolveFromEnv: true,
          },
          '@my-scope/contexts.plasma-i18next-provider': {
            version: 'latest',
            resolveFromEnv: true,
          },
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new PlasmaReactMain();
  }
}

PlasmaReactAspect.addRuntime(PlasmaReactMain);
