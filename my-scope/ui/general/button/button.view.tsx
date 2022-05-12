import React from 'react';

import { TranslatedText } from '@my-scope/others.translated-text';
import { observer } from 'mobx-react';

import * as styled from './button.styles';
import ButtonViewModel from './button.view-model';

interface Props {
  viewModel: ButtonViewModel;
}

function ButtonView(props: Props) {
  const { viewModel } = props;
  const { handleClick, title, type, ...buttonProps } = viewModel;

  return (
    <styled.Button type={type} onClick={handleClick} {...buttonProps}>
      {title && <TranslatedText textKey={title} />}
    </styled.Button>
  );
}

export default observer(ButtonView);
