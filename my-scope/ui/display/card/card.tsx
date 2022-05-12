import { IconProps } from '@my-scope/general.icon';
import { PickDefaultProps } from '@my-scope/others.types';
import { CardProps as AntCardProps } from 'antd/lib/card';
import { observer } from 'mobx-react';
import React from 'React';

import CardView from './card.view';
import CardViewModel from './card.view-model';

type DefaultProps = PickDefaultProps<
  React.PropsWithChildren<CardProps>,
  'bordered'
>;

const defaultProps: DefaultProps = {
  bordered: true,
};

function Card(props: CardProps) {
  const viewModel = new CardViewModel(props);
  return <CardView viewModel={viewModel} />;
}

Card.defaultProps = defaultProps;

export default observer(Card);

export interface CardProps extends AntCardProps {
  /**
   * The action list, shows at the bottom of the Card
   *
   */
  actions?: React.ReactNode[];

  /**
   * Current TabPane's key
   */
  activeTabKey?: string;

  /**
   * Inline style to apply to the card content
   *
   */
  bodyStyle?: React.CSSProperties;

  /**
   * Toggles rendering of the border around the card
   *
   */
  bordered?: boolean;

  /**
   * Card cover
   *
   */
  cover?: React.ReactNode;

  /**
   * Initial active TabPane's key, if activeTabKey is not set
   */
  defaultActiveTabKey?: string;

  /**
   * Content to render in the top-right corner of the card
   *
   */
  extra?: React.ReactNode;

  /**
   * Inline style to apply to the card head
   *
   */
  headStyle?: React.CSSProperties;

  /**
   * Lift up when hovering card
   */
  hoverable?: boolean;

  /**
   * Shows a loading indicator while the contents of the card are being fetched
   */
  loading?: boolean;

  /**
   * Define card meta props
   */
  meta?: CardMetaProps;

  /**
   * Extra content in tab bar
   *
   */
  tabBarExtraContent?: React.ReactNode | null;

  /**
   * List of TabPane's head
   *
   */
  tabList?: CardTabListType[];

  /**
   * Card title
   *
   */
  title?: React.ReactNode;

  /**
   * Card style type, can be set to inner or not set
   */
  type?: CardType;

  /**
   * Callback when tab is switched
   */
  onTabChange?: (key: string) => void;
}

export interface CardMetaProps {
  /**
   * Icon properties
   */
  icon?: IconProps;

  /**
   * The className of container
   */
  className?: string;

  /**
   * Description content
   *
   */
  subtitle?: React.ReactNode;

  /**
   * The style object of container
   */
  style?: React.CSSProperties;

  /**
   * The style object of the icon
   */
  iconStyle?: React.CSSProperties;
  /**
   * Title content
   */
  title?: React.ReactNode;
}

declare type CardType = 'inner';

interface CardTabListType {
  key: string;
  tab: React.ReactNode;
  disabled?: boolean;
}
