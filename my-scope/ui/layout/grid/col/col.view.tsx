import React from 'react';

import ThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from '../grid.styles';
import themes from '../themes';
import { ColViewModel } from './col.view-model';

interface Props {
  viewModel: ColViewModel;
}

function ColView(props: Props) {
  const { viewModel } = props;
  const { ...colProps } = viewModel;

  return (
    <ThemeProvider themes={themes}>
      <styled.Col {...colProps} />
    </ThemeProvider>
  );
}

export default observer(ColView);
