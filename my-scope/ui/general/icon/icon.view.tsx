import React, { useCallback } from 'react';

// import { Tooltip } from '@my-scope/display.tooltip';
import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { observer } from 'mobx-react';

import * as styled from './icon.styles';
import IconViewModel from './icon.view-model';
import themes from './themes';
interface Props {
  viewModel: IconViewModel;
}

function IconView(props: Props) {
  const { viewModel } = props;
  const { handleClick, getCssStyle, getMuiIcon, ...iconProps } = viewModel;

  const Icon = getMuiIcon();
  const styles = getCssStyle();

  const handleIconClick = useCallback(
    (event) => handleClick(event),
    [handleClick]
  );

  return (
    <PlasmaThemeProvider themes={themes}>
      <styled.Icon {...iconProps}>
        <Icon
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(iconProps as any)}
          onClick={handleIconClick}
          style={styles}
        />
      </styled.Icon>
    </PlasmaThemeProvider>
  );
}

export default observer(IconView);
