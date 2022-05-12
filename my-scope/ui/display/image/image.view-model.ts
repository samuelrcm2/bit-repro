import { makeAutoObservable } from 'mobx';

import { ImageProps } from './image';

export interface ImageViewModel extends ImageProps {}

export class ImageViewModel {
  constructor(props: ImageViewModel) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
