import React, { useEffect } from 'react';

import { withComponent } from '@my-scope/others.hocs';

import { EventEmitter } from '.';
import { EventListenerProps } from './types';

export function EventListener(props: EventListenerProps) {
  const { type, listener } = props;

  useEffect(() => EventEmitter.on(type, listener), [listener, type]);

  return <></>;
}

export default withComponent(EventListener);
