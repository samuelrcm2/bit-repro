import { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function withComponent<T extends React.ComponentType<any>>(WrappedComponent: T) {
  return (memo(WrappedComponent) as unknown) as T;
}
