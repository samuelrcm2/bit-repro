import React from 'react';

import { PickDefaultProps } from '@my-scope/others.types';
import { AvatarProps as AntdAvatarProps } from 'antd';
import { observer } from 'mobx-react';

import AvatarView from './avatar.view';
import AvatarViewModel from './avatar.view-model';

type DefaultProps = PickDefaultProps<AvatarProps, 'shape' | 'size'>;
type Props = AvatarProps & DefaultProps;

const defaultProps: DefaultProps = {
  shape: 'circle',
  size: 'default',
};

function Avatar(props: Props) {
  const viewModel = new AvatarViewModel(props);
  return <AvatarView viewModel={viewModel} />;
}

Avatar.defaultProps = defaultProps;

export default observer(Avatar);

export interface AvatarProps extends AntdAvatarProps {
  /**
   * Show animation effect, only valid when used avatar independently
   */
  active?: boolean;

  /**
   * Set the shape of avatar
   *
   */
  shape?: 'circle' | 'square';

  /**
   * Icon used in the avatar
   */
  icon?: JSX.Element;

  /**
   * Text to be rendered inside of the avatar
   */
  text?: string;

  /**
   * Background color used when the avatar contains text or the default icon
   */
  backgorundColor?:
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red'
    | 'orange'
    | 'lightgreen'
    | 'green';
}
