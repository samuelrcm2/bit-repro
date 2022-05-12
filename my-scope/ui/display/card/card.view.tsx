import React from 'react';

import { Icon } from '@my-scope/general.icon';
import { TranslatedText } from '@my-scope/others.translated-text';
import { observer } from 'mobx-react';

import * as styled from './card.styles';
import CardViewModel from './card.view-model';

interface Props {
  viewModel: CardViewModel;
}

export function Card(props: Props) {
  const { meta, title, ...cardProps } = props.viewModel;

  return (
    <styled.Card
      title={title && <TranslatedText textKey={title} />}
      {...cardProps}
      data-testid="basic-card"
    >
      {meta && (
        <styled.CardMeta
          avatar={meta.icon && <Icon {...meta.icon} data-testid="card-icon" />}
          title={
            meta.title && (
              <TranslatedText textKey={meta.title} data-testid="card-title" />
            )
          }
          description={
            meta.subtitle && (
              <TranslatedText
                textKey={meta.subtitle}
                data-testid="card-description"
              />
            )
          }
        />
      )}
    </styled.Card>
  );
}

export default observer(Card);
