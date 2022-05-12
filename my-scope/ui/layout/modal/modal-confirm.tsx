import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import Modal from 'antd/lib/modal';

import { ConfirmModalProps } from './modal';

const Confirm = ({ content, swapButtons, ...props }: ConfirmModalProps) => {
  const okButtonType = swapButtons
    ? 'default'
    : props.okButtonProps?.type || 'primary';
  const cancelButtonType = swapButtons
    ? 'primary'
    : props?.okButtonProps?.type || 'default';
  const okButtonStyles: React.CSSProperties = swapButtons
    ? {
        order: -1,
        marginRight: '8px',
      }
    : {};

  return Modal.confirm({
    ...props,
    okButtonProps: {
      ...props.okButtonProps,
      type: okButtonType,
      style: {
        ...props.okButtonProps?.style,
        ...okButtonStyles,
      },
    },
    cancelButtonProps: {
      ...props.cancelButtonProps,
      type: cancelButtonType,
    },
    content: content && <PlasmaThemeProvider>{content}</PlasmaThemeProvider>,
  });
};

export default Confirm;
