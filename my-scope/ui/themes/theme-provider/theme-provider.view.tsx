import React, { ReactNode } from 'react';

import { observer } from 'mobx-react';
import { ThemeProvider, useTheme } from 'styled-components';

import ThemeProviderViewModel from './theme-provider.view-model';

interface ThemeProviderViewProps {
  children?: ReactNode;
  viewModel: ThemeProviderViewModel;
}

function ThemeProviderView({ viewModel, children }: ThemeProviderViewProps) {
  const { getTheme } = viewModel;

  const currentTheme = useTheme();

  return (
    <ThemeProvider theme={getTheme(currentTheme) || {}}>
      {children}
    </ThemeProvider>
  );
}

export default observer(ThemeProviderView);
