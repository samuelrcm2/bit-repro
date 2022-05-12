import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import themes from './themes';
import * as styled from './title.styles';
import { TitleViewModel } from './title.view-model';

interface Props {
  viewModel: TitleViewModel;
}

function Title(props: Props) {
  const { type, title, size } = props.viewModel;
  return (
    <PlasmaThemeProvider themes={themes}>
      <styled.StyledTitleContainer type={type} size={size} {...props}>
        <styled.StyledTitle>{title}</styled.StyledTitle>
      </styled.StyledTitleContainer>
    </PlasmaThemeProvider>
  );
}

export default observer(Title);
