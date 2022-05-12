import React from 'react';

import { Card } from '@my-scope/display.card';
import Button from '@my-scope/general.button';

import { CardList } from './index';

const dataSource = [
  {
    title: 'App 1',
    icon: 'coffee',
    url: '',
    subtitle: 'Sub 1',
    environment: 'Dev',
  },
  {
    title: 'App 2',
    icon: 'coffee',
    url: '',
    subtitle: 'Sub 2',
    environment: 'Dev',
  },
  {
    title: 'App 3',
    icon: 'coffee',
    url: '',
    subtitle: 'Sub 3',
    environment: 'Dev',
  },
];

export const BasicCardList = () => {
  return <CardList renderItem={renderItem} dataSource={dataSource} />;
};

const renderItem = (app: Application) => (
  <Card
    title="Card"
    meta={{
      title: app.title,
      icon: { name: app.icon, style: { fontSize: '29px' } },
      subtitle: app.subtitle,
    }}
    actions={[<Button key="access" type="primary" title="Enter" />]}
    extra={<>{undefined}</>}
    className="application-card"
  />
);

interface Application {
  title: string;
  subtitle?: string;
  icon: string;
  url: string;
  environment: string;
}
