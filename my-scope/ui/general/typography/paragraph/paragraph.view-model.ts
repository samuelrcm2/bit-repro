import { makeAutoObservable } from 'mobx';

import { ParagraphProps } from './paragraph';

export interface ParagraphViewModel extends ParagraphProps {}

export class ParagraphViewModel {
  constructor(props: ParagraphViewModel) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
