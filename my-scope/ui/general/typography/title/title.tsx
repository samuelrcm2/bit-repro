import React from 'react';

import { PickDefaultProps } from '@my-scope/others.types';
import { TitleProps as AntdTitleProps } from 'antd/lib/typography/Title';
import { observer } from 'mobx-react';

import TitleView from './title.view';
import { TitleViewModel } from './title.view-model';

export type TypographyBaseType =
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'regular'
  | undefined;

type DefaultProps = PickDefaultProps<TitleProps, 'type' | 'size'>;
type Props = TitleProps & DefaultProps;

const defaultProps: DefaultProps = {
  type: 'regular',
  size: 'code-01',
};

function Title(props: Props) {
  const viewModel = new TitleViewModel(props);
  return <TitleView viewModel={viewModel} />;
}

Title.defaultProps = defaultProps;

export default observer(Title);
export interface TitleProps extends Omit<AntdTitleProps, 'type' | 'size'> {
  /**
   * Define the text
   */
  title?: string;
  /**
   * Define the type of text
   */
  type?: TypographyBaseType;
  /**
   * Define the size and the font family of text
   */
  size?:
  | 'code-01'
  | 'code-02'
  | 'label-01'
  | 'helper-text-01'
  | 'body-short-01'
  | 'body-long-01'
  | 'body-short-02'
  | 'body-long-02'
  | 'productive-heading-01'
  | 'productive-heading-02'
  | 'productive-heading-03'
  | 'productive-heading-04'
  | 'productive-heading-05'
  | 'productive-heading-06'
  | 'productive-heading-07';
}
