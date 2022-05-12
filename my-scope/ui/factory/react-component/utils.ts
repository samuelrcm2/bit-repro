import { ComponentFile, ComponentContext } from '@teambit/generator';

export const getBaseVVMComponentStructure = (
  context: ComponentContext
): ComponentFile[] => [
  {
    relativePath: 'index.ts',
    isMain: true,
    content: `export { default as ${context.namePascalCase} } from './${context.name}';
export type { ${context.namePascalCase}Props } from './${context.name}';
`,
  },
  {
    relativePath: `${context.name}.tsx`,
    content: `import React from 'react';

import ${context.namePascalCase}Model from './${context.name}.model';
import ${context.namePascalCase}View from './${context.name}.view';
import ${context.namePascalCase}ViewModel from './${context.name}.view-model';

function ${context.namePascalCase}(props: ${context.namePascalCase}Props) {
  const viewModel = new ${context.namePascalCase}ViewModel( new ${context.namePascalCase}Model(props));
  return <${context.namePascalCase}View viewModel={viewModel} />;
}

export default ${context.namePascalCase};

export interface ${context.namePascalCase}Props {};
`,
  },
  {
    relativePath: `${context.name}.view-model.ts`,
    content: `import { makeAutoObservable } from 'mobx';
import { ${context.namePascalCase}Props } from './${context.name}';

export interface ${context.namePascalCase}ViewModel extends ${context.namePascalCase}Props {}

class ${context.namePascalCase}ViewModel {
  constructor(props: ${context.namePascalCase}Props) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}

export default ${context.namePascalCase}ViewModel;
`,
  },
  ...getBaseFiles(context),
  ...getThemeFiles(context),
];

export const getBaseMVVMComponentStructure = (
  context: ComponentContext
): ComponentFile[] => [
  {
    relativePath: 'index.ts',
    isMain: true,
    content: `export { default as ${context.namePascalCase} } from './${context.name}';
export type { ${context.namePascalCase}Props } from './${context.name}';
export { default as ${context.namePascalCase}Model } from './${context.name}.model';
export type { ${context.namePascalCase}Model } from './${context.name}.model';
`,
  },
  {
    relativePath: `${context.name}.tsx`,
    content: `import React from 'react';

import ${context.namePascalCase}Model from './${context.name}.model';
import ${context.namePascalCase}View from './${context.name}.view';
import ${context.namePascalCase}ViewModel from './${context.name}.view-model';

function ${context.namePascalCase}(props: ${context.namePascalCase}Props) {
  const viewModel = new ${context.namePascalCase}ViewModel( new ${context.namePascalCase}Model(props));
  return <${context.namePascalCase}View viewModel={viewModel} />;
}

export default ${context.namePascalCase};

export interface ${context.namePascalCase}Props {};
`,
  },
  {
    relativePath: `${context.name}.model.ts`,
    content: `import { makeAutoObservable } from 'mobx';
import React from 'react';

export interface ${context.namePascalCase}State { }

class ${context.namePascalCase}Model {
  constructor() {
    makeAutoObservable(this);
  }
}

export default ${context.namePascalCase}Model;
`,
  },
  {
    relativePath: `${context.name}.view-model.ts`,
    content: `import { makeAutoObservable } from 'mobx';
import { ${context.namePascalCase}Model } from './${context.name}.model';

export interface ${context.namePascalCase}ViewModel extends ${context.namePascalCase}Model {}

class ${context.namePascalCase}ViewModel {
  constructor(props: ${context.namePascalCase}Model) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}

export default ${context.namePascalCase}ViewModel;
`,
  },
  ...getBaseFiles(context),
  ...getThemeFiles(context),
];

const getBaseFiles = (context: ComponentContext): ComponentFile[] => [
  {
    relativePath: `${context.name}.docs.mdx`,
    content: `---
description: Short ${context.namePascalCase} description.

labels: [Add related labels splitted by ',']
---

import { ${context.namePascalCase} } from './${context.name}';

Explanation about the component usage.

## ${context.namePascalCase}'s basic usage

\`\`\`jsx
<${context.namePascalCase} />
\`\`\`

## ${context.namePascalCase} properties

Explain how ${context.namePascalCase} can be customized.

\`\`\`jsx
<${context.namePascalCase} />
\`\`\`
`,
  },
  {
    relativePath: `${context.name}.view.tsx`,
    content: `import React from 'react';

import ThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from './${context.name}.styles';
import ${context.namePascalCase}ViewModel from './${context.name}.view-model';
import themes from './themes';

interface Props {
  viewModel: ${context.namePascalCase}ViewModel;
}

function ${context.namePascalCase}View(props: Props) {
  return (
    <ThemeProvider themes={themes}>
      <styled.${context.namePascalCase}>{props}</styled.${context.namePascalCase}>
    </ThemeProvider>
  )
}

export default observer(${context.namePascalCase}View);
`,
  },
  {
    relativePath: `${context.name}.spec.tsx`,
    content: `import React from 'react';

import { render } from '@testing-library/react';

it('test example', () => {
  expect(true).toBeTruthy();
});
`,
  },
  {
    relativePath: `${context.name}.styles.ts`,
    content: `import styled from 'styled-components/macro';

export const ${context.namePascalCase} = styled.div\`\`;
`,
  },
  {
    relativePath: `${context.name}.composition.tsx`,
    content: `import React from 'react';

import { ${context.namePascalCase} } from './index';

export const Basic${context.namePascalCase} = () => {
  return <${context.namePascalCase} />;
};
`,
  },
];

const getThemeFiles = (context: ComponentContext): ComponentFile[] => [
  {
    relativePath: `themes/modes/dark.ts`,
    content: `import { ${context.namePascalCase}ThemeModeConfig } from './types';

const dark: ${context.namePascalCase}ThemeModeConfig = {
  ${context.nameCamelCase}: {},
};

export default dark;
`,
  },
  {
    relativePath: `themes/modes/light.ts`,
    content: `import { ${context.namePascalCase}ThemeModeConfig } from './types';

const light: ${context.namePascalCase}ThemeModeConfig = {
  ${context.nameCamelCase}: {},
};

export default light;
`,
  },
  {
    relativePath: `themes/modes/index.ts`,
    content: `export { default as light } from './light';
export { default as dark } from './dark';
`,
  },
  {
    relativePath: `themes/modes/types.ts`,
    content: `export type ${context.namePascalCase}ThemeModeConfig = {
  ${context.nameCamelCase}: Record<string, unknown>;
};
`,
  },
  {
    relativePath: `themes/sizes/large.ts`,
    content: `import { ${context.namePascalCase}ThemeSizeConfig } from './types';

const large: ${context.namePascalCase}ThemeSizeConfig = {
  ${context.nameCamelCase}: {},
};

export default large;
`,
  },
  {
    relativePath: `themes/sizes/medium.ts`,
    content: `import { ${context.namePascalCase}ThemeSizeConfig } from './types';

const medium: ${context.namePascalCase}ThemeSizeConfig = {
  ${context.nameCamelCase}: {},
};

export default medium;
`,
  },
  {
    relativePath: `themes/sizes/small.ts`,
    content: `import { ${context.namePascalCase}ThemeSizeConfig } from './types';

const small: ${context.namePascalCase}ThemeSizeConfig = {
  ${context.nameCamelCase}: {},
};

export default small;
`,
  },
  {
    relativePath: `themes/sizes/index.ts`,
    content: `export { default as large } from './large';
export { default as small } from './small';
export { default as medium } from './medium';
`,
  },
  {
    relativePath: `themes/sizes/types.ts`,
    content: `export type ${context.namePascalCase}ThemeSizeConfig = {
  ${context.nameCamelCase}: Record<string, unknown>;
};
`,
  },
  {
    relativePath: `themes/types.ts`,
    content: `import * as modes from './modes';
import * as sizes from './sizes';

export type Themes = {
  modes: typeof modes;
  sizes: typeof sizes;
};
`,
  },
  {
    relativePath: `themes/index.ts`,
    content: `import * as modes from './modes';
import * as sizes from './sizes';
import { Themes } from './types';

const themes: Themes = {
  modes,
  sizes,
};

export default themes;
`,
  },
];
