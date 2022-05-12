import { PlasmaI18NextProvider } from '@my-scope/contexts.plasma-i18next-provider';
import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';

import { PlasmaReactAspect } from './plasma-react.aspect';

export class ThemedReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const themedReactPreviewMain = new ThemedReactPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([PlasmaThemeProvider, PlasmaI18NextProvider]);
    return themedReactPreviewMain;
  }
}

PlasmaReactAspect.addRuntime(ThemedReactPreviewMain);
