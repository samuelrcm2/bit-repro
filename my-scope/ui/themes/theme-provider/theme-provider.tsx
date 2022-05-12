import React, { ReactNode } from 'react';

import { Translations } from '@my-scope/config.i18n';

import ThemeProviderModel from './theme-provider.model';
import ThemeProviderView from './theme-provider.view';
import ThemeProviderViewModel from './theme-provider.view-model';

export type ModeType = 'light' | 'dark';
export type SizeType = 'large' | 'small' | 'medium';
export type Theme = {
  mode: ModeType;
  size: SizeType;
};

export type Themes = {
  modes: {
    dark: Record<string, unknown>;
    light: Record<string, unknown>;
  };
  sizes: {
    small: Record<string, unknown>;
    medium: Record<string, unknown>;
    large: Record<string, unknown>;
  };
};

export interface BasicThemeProviderProps {
  translations?: Translations;
  themes?: Themes;
  selectedMode?: ModeType;
  selectedSize?: SizeType;
}

export interface ThemeProviderProps extends BasicThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...themeProviderProps } = props;
  const viewModel = new ThemeProviderViewModel(
    new ThemeProviderModel(themeProviderProps)
  );
  return (
    <ThemeProviderView viewModel={viewModel}>{children}</ThemeProviderView>
  );
}
