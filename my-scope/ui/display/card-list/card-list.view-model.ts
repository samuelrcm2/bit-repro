import { makeAutoObservable } from 'mobx';

import { CardListProps } from './card-list';

interface CardListViewModel<T> extends CardListProps<T> {}

class CardListViewModel<T> {
  constructor(props: CardListViewModel<T>) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }
}

export default CardListViewModel;
