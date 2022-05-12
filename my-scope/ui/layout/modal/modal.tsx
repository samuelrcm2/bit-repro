import React from 'react';

import { ButtonProps } from '@my-scope/general.button';
import { withComponent } from '@my-scope/others.hocs';
import { PickDefaultProps } from '@my-scope/others.types';
import { ModalFuncProps } from 'antd/lib/modal';
import { ModalProps as AntdModalProps } from 'antd/lib/modal/Modal';

import * as styled from './modal.styles';

type DefaultProps = PickDefaultProps<
  ModalProps,
  | 'cancelText'
  | 'closable'
  | 'getContainer'
  | 'keyboard'
  | 'mask'
  | 'maskClosable'
  | 'okText'
  | 'okType'
  | 'width'
  | 'zIndex'
>;
type Props = React.PropsWithChildren<ModalProps & DefaultProps>;

const defaultProps: DefaultProps = {
  cancelText: 'Cancel',
  closable: true,
  getContainer: document.body,
  keyboard: true,
  mask: true,
  maskClosable: true,
  okText: 'OK',
  okType: 'primary',
  width: 416,
  zIndex: 1000,
};

export function Modal(props: Props) {
  return <styled.Modal {...props} />;
}

Modal.defaultProps = defaultProps;

export default withComponent(Modal);

export interface ModalProps extends AntdModalProps {
  /**
   * Body style for modal body element. Such as height, padding etc
   *
   * @TJS-type string
   */
  bodyStyle?: React.CSSProperties;

  /**
   * The cancel button
   */
  cancelButtonProps?: ButtonProps;

  /**
   * Text of the Cancel button
   *
   * @default "Cancel"
   */
  cancelText?: string;

  /**
   * Centered Modal
   */
  centered?: boolean;

  /**
   * Whether a close (x) button is visible on top right of the modal dialog or not
   *
   * @default true
   */
  closable?: boolean;

  /**
   * Whether to apply loading visual effect for OK button or not
   */
  confirmLoading?: boolean;

  /**
   * Whether to unmount child components on onClose
   */
  destroyOnClose?: boolean;

  /**
   * Footer content, set as footer={null} when you don't need default buttons
   *
   * @TJS-type string
   */
  footer?: React.ReactNode;

  /**
   * Force render Modal
   */
  forceRender?: boolean;

  /**
   * Whether support press esc to close
   *
   * @default true
   */
  keyboard?: boolean;

  /**
   * Whether show mask or not
   *
   * @default true
   */
  mask?: boolean;

  /**
   * Whether to close the modal dialog when the mask (area outside the modal) is clicked
   *
   * @default true
   */
  maskClosable?: boolean;

  /**
   * Style for modal's mask element
   *
   * @TJS-type string
   */
  maskStyle?: React.CSSProperties;

  /**
   * The ok button props
   */
  okButtonProps?: ButtonProps;

  /**
   * Text of the OK button
   *
   * @default "OK"
   */
  okText?: string;

  /**
   * Button `type` of the OK button
   *
   * @default "primary"
   */
  okType?: 'default' | 'primary' | 'dashed' | 'link' | 'text';

  /**
   * The modal dialog's title
   */
  title?: string;

  /**
   * Whether the modal dialog is visible or not
   */
  visible?: boolean;

  /**
   * Width of the modal dialog
   *
   * @default 520
   *
   * @TJS-type string
   */
  width?: string | number;

  /**
   * The class name of the container of the modal dialog
   */
  wrapClassName?: string;

  /**
   * The z-index of the Modal
   *
   * @default 1000
   */
  zIndex?: number;

  /**
   * Specify a function that will be called when modal is closed completely
   *
   * @TJS-ignore
   */
  afterClose?: () => void;

  /**
   * Specify a function that will be called when a user clicks the OK button
   *
   * @TJS-ignore
   */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;

  /**
   * Specify a function that will be called when a user clicks mask, close button on top right or Cancel button
   *
   * @TJS-ignore
   */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ConfirmModalProps extends ModalFuncProps {
  /**
   * Swap buttons order and type collors
   *
   * @default false
   */
  swapButtons?: boolean;
}
