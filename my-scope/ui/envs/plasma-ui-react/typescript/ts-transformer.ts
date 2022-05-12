import {
  TsConfigTransformer,
  TypescriptConfigMutator,
} from '@teambit/typescript';
import * as path from 'path';

const tsConfig = {
  compilerOptions: {
    target: 'es6',
    module: 'esnext',
    moduleResolution: 'node',
    lib: ['dom', 'dom.iterable', 'esnext'],
    strict: true,
    skipLibCheck: true,
    esModuleInterop: true,
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
    forceConsistentCasingInFileNames: true,
    isolatedModules: true,
    declaration: true,
    jsx: 'react',
    outDir: 'lib',
  },
};

export const commonTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator
) => {
  const newConfig = config.addTypes([path.join(__dirname, 'styles.d.ts')]);
  newConfig.mergeTsConfig(tsConfig);
  // Some examples of other built in mutator functions:
  //newConfig.addExclude(['someExclude']);
  //newConfig.setCompileJs(true)
  return newConfig;
};

/**
 * Transformation for the dev config only
 * @param config
 * @param context
 * @returns
 */
export const devConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator
) => {
  const newConfig = commonTransformer(config, {});
  return newConfig;
};

/**
 * Transformation for the build only
 * @param config
 * @param context
 * @returns
 */
export const buildConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator
) => {
  const newConfig = commonTransformer(config, {});
  newConfig.mergeTsConfig(tsConfig);
  return newConfig;
};
