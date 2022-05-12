import React from 'react';

import { PickDefaultProps } from '@my-scope/others.types';
import { TextProps as AntdTextProps } from 'antd/lib/typography/Text';
import { observer } from 'mobx-react';

import TextView from './text.view';
import { TextViewModel } from './text.view-model';

export type TypographyBaseType =
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'regular'
  | undefined;

type DefaultProps = PickDefaultProps<TextProps, 'type' | 'size'>;
type Props = TextProps & DefaultProps;

const defaultProps: DefaultProps = {
  type: 'regular',
  size: 'code-01',
};

function Text(props: Props) {
  const viewModel = new TextViewModel(props);
  return <TextView viewModel={viewModel} />;
}

Text.defaultProps = defaultProps;

export default observer(Text);
export interface TextProps extends Omit<AntdTextProps, 'type' | 'size'> {
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
