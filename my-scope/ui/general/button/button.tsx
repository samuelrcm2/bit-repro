import React from 'react';

import { PickDefaultProps } from '@my-scope/others.types';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { observer } from 'mobx-react';

import ButtonView from './button.view';
import ButtonViewModel from './button.view-model';

type DefaultProps = PickDefaultProps<ButtonProps, 'htmlType' | 'type'>;
type Props = ButtonProps & DefaultProps;

const defaultProps: DefaultProps = {
  htmlType: 'button',
  type: 'default',
};

function Button(props: Props) {
  const viewModel = new ButtonViewModel(props);
  return <ButtonView viewModel={viewModel} />;
}

Button.defaultProps = defaultProps;

export default observer(Button);

export interface ButtonProps extends AntButtonProps {
  /**
   * The title of the button.
   *
   */
  title?: string;

  /**
   * The event type to be emitted on button click.
   *
   */
  clickEventType?: string;

  /**
   * The event type to be emitted on button click, considering that this button is inside a form context.
   *
   */
  formEvent?: 'submit' | 'reset' | 'previous';

  /**
   * The path to be redirected after button click.
   *
   */
  navigationPath?: string;

  /**
   * Option to redirect to "navigationPath" relative to the current URL path.
   *
   */
  relativeNavigation?: boolean;

  /**
   * Option to redirect to previous URL path after button click.
   *
   */
  goBack?: boolean;

  isNavigationToCreateRoute?: boolean;
}
