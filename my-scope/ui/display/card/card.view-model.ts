import { makeAutoObservable } from 'mobx';

import { CardProps } from './card';

interface CardViewModel extends CardProps {}

class CardViewModel {
  constructor(props: CardViewModel) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}

export default CardViewModel;
