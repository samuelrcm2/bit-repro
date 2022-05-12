import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from './paragraph.styles';
import { ParagraphViewModel } from './paragraph.view-model';
import themes from './themes';

interface Props {
  viewModel: ParagraphViewModel;
}

function Paragraph(props: Props) {
  const { type, title, size } = props.viewModel;
  return (
    <PlasmaThemeProvider themes={themes}>
      <styled.StyledParagraphContainer type={type} size={size} {...props}>
        <styled.StyledParagraph>{title}</styled.StyledParagraph>
      </styled.StyledParagraphContainer>
    </PlasmaThemeProvider>
  );
}

export default observer(Paragraph);
