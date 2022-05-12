import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { NodeAspect, NodeMain } from '@teambit/node';
import {
  TsConfigTransformer,
  TypescriptConfigMutator,
} from '@teambit/typescript';

const tsconfig = require('./tsconfig.json');

const transformer: TsConfigTransformer = (config: TypescriptConfigMutator) => {
  config
    .mergeTsConfig(tsconfig)
    .setArtifactName('declaration')
    .setDistGlobPatterns(['dist/**/*.d.ts'])
    .setShouldCopyNonSupportedFiles(false);
  return config;
};

export class PlasmaNodeExtension {
  constructor(private node: NodeMain) {}

  static dependencies: any = [EnvsAspect, NodeAspect];

  static async provider([envs, node]: [EnvsMain, NodeMain]) {
    const PlasmaNodeEnv = node.compose([
      node.useTypescript({ buildConfig: [transformer] }),
    ]);

    envs.registerEnv(PlasmaNodeEnv);

    return new PlasmaNodeExtension(node);
  }
}
