import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext,
} from '@teambit/generator';

import { ComponentCreatorAspect } from './component-creator.aspect';
import {
  getBaseVVMComponentStructure,
  getBaseMVVMComponentStructure,
} from './utils';
export class ComponentCreatorMain {
  static slots = [];

  static dependencies = [GeneratorAspect];

  static runtime = MainRuntime;

  static async provider([generator]: [GeneratorMain]) {
    generator.registerComponentTemplate([
      {
        name: 'plasma-component',
        description:
          'Create a react View-ViewModel component in Plasma UI format.',
        generateFiles: (context: ComponentContext) => [
          ...getBaseVVMComponentStructure(context),
        ],
      },
      {
        name: 'plasma-component-mvvm',
        description:
          'Create a react Model-View-ViewModel component in Plasma UI format.',
        generateFiles: (context: ComponentContext) => [
          ...getBaseMVVMComponentStructure(context),
        ],
      },
    ]);

    return new ComponentCreatorMain();
  }
}

ComponentCreatorAspect.addRuntime(ComponentCreatorMain);
