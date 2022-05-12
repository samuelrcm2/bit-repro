import { makeAutoObservable } from 'mobx';

import { RowProps } from './row';

export interface RowViewModel extends RowProps {}

export class RowViewModel {
  constructor(props: RowProps) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
