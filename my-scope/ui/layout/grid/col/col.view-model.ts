import { makeAutoObservable } from 'mobx';

import { ColProps } from './col';

export interface ColViewModel extends ColProps {}

export class ColViewModel {
  constructor(props: ColProps) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
