import { merge } from 'lodash';
import { makeAutoObservable } from 'mobx';

import { ModeType, SizeType } from './theme-provider';
import ThemeProviderModel from './theme-provider.model';

class ThemeProviderViewModel {
  constructor(public themeProviderModel: ThemeProviderModel) {
    makeAutoObservable(this);
  }

  getTheme = (currentThemeConfig: any) => {
    const currentMode =
      currentThemeConfig && currentThemeConfig['selectedMode']
        ? (currentThemeConfig['selectedMode'] as ModeType)
        : this.themeProviderModel.selectedMode;
    const currentSize =
      currentThemeConfig && currentThemeConfig['selectedSize']
        ? (currentThemeConfig['selectedSize'] as SizeType)
        : this.themeProviderModel.selectedSize;

    const localTheme = {
      mode: this.themeProviderModel.themes?.modes[currentMode],
      size: this.themeProviderModel.themes?.sizes[currentSize],
      selectedMode: currentMode,
      selectedSize: currentSize,
    };
    return merge(currentThemeConfig, localTheme);
  };
}

export default ThemeProviderViewModel;
