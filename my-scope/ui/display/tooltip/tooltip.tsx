import React from 'react';

import { PickDefaultProps, GenericProps } from '@my-scope/others.types';

import 'antd/dist/antd.css';
import TooltipView from './tooltip.view';
import { TooltipViewModel } from './tooltip.view-model';

type DefaultProps = PickDefaultProps<
  TooltipProps,
  | 'autoAdjustOverflow'
  | 'mouseEnterDelay'
  | 'mouseLeaveDelay'
  | 'placement'
  | 'trigger'
>;
type Props = React.PropsWithChildren<TooltipProps & DefaultProps>;

const defaultProps: DefaultProps = {
  autoAdjustOverflow: true,
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  placement: 'top',
  trigger: 'hover',
};

function Tooltip(props: Props) {
  const viewModel = new TooltipViewModel(props);
  return <TooltipView viewModel={viewModel} />;
}

Tooltip.defaultProps = defaultProps;

export default Tooltip;

type ActionType = 'hover' | 'focus' | 'click' | 'contextMenu';
export type TooltipPlacement =
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

interface AdjustOverflow {
  adjustX?: 0 | 1;
  adjustY?: 0 | 1;
}

interface AlignType {
  /**
   * move point of source node to align with point of target node.
   * Such as ['tr','cc'], align top right point of source node with center point of target node.
   * Point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)
   *
   * @TJS-type string
   */
  points?: string[];
  /**
   * offset source node by offset[0] in x and offset[1] in y.
   * If offset contains percentage string value, it is relative to sourceNode region.
   *
   * @TJS-type string
   */
  offset?: number[];
  /**
   * offset target node by offset[0] in x and offset[1] in y.
   * If targetOffset contains percentage string value, it is relative to targetNode region.
   *
   * @TJS-type string
   */
  targetOffset?: number[];
  /**
   * If adjustX field is true, will adjust source node in x direction if source node is invisible.
   * If adjustY field is true, will adjust source node in y direction if source node is invisible.
   */
  overflow?: {
    adjustX?: boolean | number;
    adjustY?: boolean | number;
  };
  /**
   * Whether use css right instead of left to position
   */
  useCssRight?: boolean;
  /**
   * Whether use css bottom instead of top to position
   */
  useCssBottom?: boolean;
  /**
   * Whether use css transform instead of left/top/right/bottom to position if browser supports.
   * Defaults to false.
   */
  useCssTransform?: boolean;
  ignoreShake?: boolean;
}

export declare type TooltipProps = TooltipPropsWithTitle;

export interface TooltipPropsWithTitle extends TooltipBaseProps {
  /**
   * The text shown in the tooltip
   *
   * @TJS-type string
   */
  title: React.ReactNode | (() => React.ReactNode);

  /**
   * The container of the tooltip
   *
   * @TJS-type string
   */
  overlay?: React.ReactNode | (() => React.ReactNode);
}

export interface TooltipPropsWithOverlay extends TooltipBaseProps {
  /**
   * The text shown in the tooltip
   *
   * @TJS-type string
   */
  title?: React.ReactNode | (() => React.ReactNode);

  /**
   * The container of the tooltip
   *
   * @TJS-type string
   */
  overlay: React.ReactNode | (() => React.ReactNode);
}

export interface TooltipBaseProps extends GenericProps {
  /**
   * This value will be merged into placement's config, please refer to the settings `rc-tooltip`
   */
  align?: AlignType;

  /**
   * Whether the arrow is pointed at the center of target
   */
  arrowPointAtCenter?: boolean;

  /**
   * Whether to adjust popup placement automatically when popup is off screen
   *
   * @default true
   *
   * @TJS-type string
   */
  autoAdjustOverflow?: boolean | AdjustOverflow;

  /**
   * The background color
   */
  color?: string;

  /**
   * Whether the floating tooltip card is visible by default
   */
  defaultVisible?: boolean;

  /**
   * Whether destroy tooltip when hidden, parent container of tooltip will be destroyed when `keepParent` is false
   */
  destroyTooltipOnHide?: boolean | { keepParent?: boolean };

  /**
   * Delay in seconds, before tooltip is shown on mouse enter
   *
   * @default 0.1
   */
  mouseEnterDelay?: number;

  /**
   * Delay in seconds, before tooltip is hidden on mouse leave
   *
   * @default 0.1
   */
  mouseLeaveDelay?: number;

  /**
   * Class name of the tooltip card
   */
  overlayClassName?: string;

  /**
   * Style of the tooltip card
   *
   * @TJS-type string
   */
  overlayStyle?: React.CSSProperties;

  /**
   * The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`
   *
   * @default "top"
   */
  placement?: TooltipPlacement;

  /**
   * Tooltip trigger mode. Could be multiple by passing an array
   *
   * @default "hover"
   *
   * @TJS-type string
   */
  trigger?: ActionType | ActionType[];

  /**
   * Whether the floating tooltip card is visible or not
   */
  visible?: boolean;

  /**
   * Callback executed when visibility of the tooltip card is changed
   *
   * @TJS-ignore
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   *  The DOM container of the tip, the default behavior is to create a div element in body
   */
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
}

export interface AbstractTooltipProps {
  afterVisibleChange?: (visible: boolean) => void;
  align?: AlignType;
  arrowContent?: React.ReactNode;
  arrowPointAtCenter?: boolean;
  autoAdjustOverflow?: boolean | AdjustOverflow;
  builtinPlacements?: BuildInPlacements;
  children?: React.ReactNode;
  className?: string;
  color?: LiteralUnion<PresetColorType, string>;
  defaultVisible?: boolean;
  destroyTooltipOnHide?:
    | boolean
    | {
        keepParent?: boolean;
      };
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  id?: string;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  openClassName?: string;
  overlay?: (() => React.ReactNode) | React.ReactNode;
  overlayClassName?: string;
  overlayInnerStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  placement?: TooltipPlacement;
  popupVisible?: boolean;
  prefixCls?: string;
  style?: React.CSSProperties;
  transitionName?: string;
  trigger?: ActionType | ActionType[];
  visible?: boolean;
  onPopupAlign?: (element: HTMLElement, align: AlignType) => void;
  onVisibleChange?: (visible: boolean) => void;
}

interface BuildInPlacements {
  [placement: string]: AlignType;
}

declare const PresetColorTypes: [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
];
declare type PresetColorType = ElementOf<typeof PresetColorTypes>;
declare type ElementOf<T> = T extends (infer E)[]
  ? E
  : T extends readonly (infer F)[]
  ? F
  : never;
declare type LiteralUnion<T extends U, U> = T | (U & unknown);
