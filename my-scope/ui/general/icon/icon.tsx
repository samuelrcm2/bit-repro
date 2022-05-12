import React from 'react';

import { IconProps as MaterialIconProps } from '@mui/material/Icon';
// import { PickDefaultProps } from '@my-scope/others.types';
import { observer } from 'mobx-react';

import IconView from './icon.view';
import IconViewModel from './icon.view-model';

export type Placement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export interface IconProps extends MaterialIconProps {
  /**
   * Click event type
   */
  clickEventType?: string;

  /**
   * The name of the icon
   */
  name: string;

  /**
   * Icon placement
   */
  placement?: Placement;

  /**
   * Icon title
   */
  title?: string;

  /**
   * Click handler
   *
   * @TJS-ignore
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// type DefaultProps = PickDefaultProps<IconProps, 'name'>;
type Props = IconProps; // & DefaultProps;

const defaultProps: Props = {
  name: 'DeleteIcon',
};
function Icon(props: Props) {
  const viewModel = new IconViewModel(props);
  return <IconView viewModel={viewModel} />;
}

Icon.defaultProps = defaultProps;

export default observer(Icon);
