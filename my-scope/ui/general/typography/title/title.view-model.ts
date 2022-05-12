import { makeAutoObservable } from 'mobx';

import { TitleProps } from './title';

export interface TitleViewModel extends TitleProps {}

export class TitleViewModel {
  constructor(props: TitleViewModel) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
