import React from 'react';

import { PickDefaultProps } from '@my-scope/others.types';
import { ParagraphProps as AntdParagraphProps } from 'antd/lib/typography/Paragraph';
import { observer } from 'mobx-react';

import ParagraphView from './paragraph.view';
import { ParagraphViewModel } from './paragraph.view-model';

export type TypographyBaseType =
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'regular'
  | undefined;

type DefaultProps = PickDefaultProps<ParagraphProps, 'type' | 'size'>;
type Props = ParagraphProps & DefaultProps;

const defaultProps: DefaultProps = {
  type: 'regular',
  size: 'code-01',
};

function Paragraph(props: Props) {
  const viewModel = new ParagraphViewModel(props);
  return <ParagraphView viewModel={viewModel} />;
}

Paragraph.defaultProps = defaultProps;

export default observer(Paragraph);
export interface ParagraphProps
  extends Omit<AntdParagraphProps, 'type' | 'size'> {
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
