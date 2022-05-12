import React from 'react';

import ThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from '../grid.styles';
import themes from '../themes';
import { RowViewModel } from './row.view-model';

interface Props {
  viewModel: RowViewModel;
}

function RowView(props: Props) {
  const { viewModel } = props;
  const { ...rowProps } = viewModel;
  return (
    <ThemeProvider themes={themes}>
      <styled.Row {...rowProps} />
    </ThemeProvider>
  );
}

export default observer(RowView);
