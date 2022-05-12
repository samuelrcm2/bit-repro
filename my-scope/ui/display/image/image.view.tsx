import React from 'react';

import { observer } from 'mobx-react';

import * as styled from './image.styles';
import { ImageViewModel } from './image.view-model';

interface Props {
  viewModel: ImageViewModel;
}

export function Image(props: Props) {
  const { viewModel } = props;
  const { ...imageProps } = viewModel;
  return <styled.Image data-testid="image" {...imageProps} />;
}

export default observer(Image);
