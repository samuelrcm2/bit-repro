import React from 'react';

import { Card } from './index';

export const BasicCard = () => {
  return (
    <Card
      title="Card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
      meta={{
        icon: {
          name: 'PermIdentityOutlined',
          style: { fontSize: '29px' },
        },
        title: 'Basic card',
        subtitle: 'Subtitle for basic card.',
      }}
    />
  );
};
