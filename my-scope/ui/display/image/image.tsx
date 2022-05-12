import React from 'react';

import { PickDefaultProps } from '@my-scope/others.types';
import { ImageProps as AntdImageProps } from 'antd/lib/image';

import ImageView from './image.view';
import { ImageViewModel } from './image.view-model';

type DefaultProps = PickDefaultProps<ImageProps, 'preview'>;
type Props = ImageProps & DefaultProps;

const defaultProps: DefaultProps = {
  preview: true,
};

function Image(props: Props) {
  const viewModel = new ImageViewModel(props);
  return <ImageView viewModel={viewModel} />;
}

Image.defaultProps = defaultProps;

export default Image;

export interface ImageProps extends AntdImageProps {
  /**
   * Image description
   */
  alt?: string;

  /**
   * Load failure fault-tolerant src
   */
  fallback?: string;

  /**
   * Image height
   */
  height?: string | number;

  /**
   * Load placeholder, use default placeholder when set `true`
   */
  placeholder?: React.ReactNode;

  /**
   * preview config, disabled when `false`
   */
  preview?: boolean;

  /**
   * Image path
   */
  src?: string;

  /**
   * Image width
   */
  width?: string | number;
}
