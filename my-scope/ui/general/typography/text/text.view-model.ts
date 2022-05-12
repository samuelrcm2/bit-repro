import { makeAutoObservable } from 'mobx';

import { TextProps } from './text';

export interface TextViewModel extends TextProps {}

export class TextViewModel {
  constructor(props: TextViewModel) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
