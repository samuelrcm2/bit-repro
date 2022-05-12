import React from 'react';

import { useDataSource } from '@my-scope/others.hooks';
import { observer } from 'mobx-react';

import * as styled from './card-list.styles';
import CardListViewModel from './card-list.view-model';

interface Props<T> {
  viewModel: CardListViewModel<T>;
}

export function CardList<T>(props: Props<T>) {
  const { dataSource, renderItem, first, last, title } = props.viewModel;

  const { data } = useDataSource(dataSource, [dataSource]);

  return (
    <styled.CardList>
      {title && <styled.CardTitle>{title}</styled.CardTitle>}
      {first && <styled.CardItem>{first}</styled.CardItem>}
      {data?.map((item: T, idx: number) => (
        <styled.CardItem key={idx.toString()}>
          {renderItem(item)}
        </styled.CardItem>
      ))}
      {last && <styled.CardItem>{last}</styled.CardItem>}
    </styled.CardList>
  );
}

export default observer(CardList);
