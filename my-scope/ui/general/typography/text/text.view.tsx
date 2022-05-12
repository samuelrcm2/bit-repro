import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from './text.styles';
import { TextViewModel } from './text.view-model';
import themes from './themes';

interface Props {
  viewModel: TextViewModel;
}

function Text(props: Props) {
  const { type, title, size } = props.viewModel;
  return (
    <PlasmaThemeProvider themes={themes}>
      <styled.StyledTextContainer type={type} size={size} {...props}>
        <styled.StyledText>{title}</styled.StyledText>
      </styled.StyledTextContainer>
    </PlasmaThemeProvider>
  );
}

export default observer(Text);
