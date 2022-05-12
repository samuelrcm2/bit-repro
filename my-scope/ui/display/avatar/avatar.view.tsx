import React from 'react';

import { Icon } from '@my-scope/general.icon';
import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from './avatar.styles';
import AvatarViewModel from './avatar.view-model';
import themes from './themes';

interface Props {
  viewModel: AvatarViewModel;
}

export function Avatar(props: Props) {
  const { viewModel } = props;
  const { getCssStyles, text, icon, ...avatarProps } = viewModel;

  const content = text || icon || (
    <Icon name="PersonOutlined" style={{ color: 'white' }} />
  );
  return (
    <PlasmaThemeProvider themes={themes}>
      <styled.Avatar
        data-testid="avatar"
        style={{ verticalAlign: 'middle', ...getCssStyles() }}
        {...avatarProps}
      >
        {content}
      </styled.Avatar>
    </PlasmaThemeProvider>
  );
}

export default observer(Avatar);
