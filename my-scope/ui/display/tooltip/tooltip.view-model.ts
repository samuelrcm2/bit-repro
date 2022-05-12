import { makeAutoObservable } from 'mobx';

import { TooltipProps } from './tooltip';

export interface TooltipViewModel extends TooltipProps {}

export class TooltipViewModel {
  constructor(props: TooltipProps) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}
