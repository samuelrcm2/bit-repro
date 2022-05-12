import React from 'react';

import { ColProps as AntdColProps } from 'antd';

import ColView from './col.view';
import { ColViewModel } from './col.view-model';

type Props = React.PropsWithChildren<ColProps>;

function Col(props: Props) {
  const viewModel = new ColViewModel(props);
  return <ColView viewModel={viewModel} />;
}

export default Col;

export interface ColProps extends AntdColProps {}
