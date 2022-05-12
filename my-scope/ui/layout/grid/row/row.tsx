import React from 'react';

import { RowProps as AntdRowProps } from 'antd';

import RowView from './row.view';
import { RowViewModel } from './row.view-model';

function Row(props: RowProps) {
  const viewModel = new RowViewModel(props);
  return <RowView viewModel={viewModel} />;
}

export default Row;

export interface RowProps extends AntdRowProps {}
