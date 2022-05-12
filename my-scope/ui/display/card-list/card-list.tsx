import React from 'react';

import { DataSource } from '@my-scope/others.hooks';
import { observer } from 'mobx-react';

import CardListView from './card-list.view';
import CardListViewModel from './card-list.view-model';

function CardList<T>(props: CardListProps<T>) {
  const viewModel = new CardListViewModel<T>(props);
  return <CardListView viewModel={viewModel} />;
}

export default observer(CardList);

export interface CardListProps<T> {
  /**
   * Card list data source
   */
  dataSource: DataSource<T[]>;

  /**
   * Render list item
   *
   */
  renderItem: (item: T) => React.ReactNode;

  /**
   * First item
   *
   */
  first?: React.ReactNode;

  /**
   * Last item
   *
   */
  last?: React.ReactNode;

  /**
   * Card list title
   */
  title?: string;
}
