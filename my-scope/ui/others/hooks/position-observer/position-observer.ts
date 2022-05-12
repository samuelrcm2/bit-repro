import { useState, useEffect, useRef } from 'react';

import { isEqual } from 'lodash';

import { Data } from './types';

const usePositionObserver = (element?: Element | null) => {
  const [data, setData] = useState<Data>();
  const dataRef = useRef<Data>();

  useEffect(() => {
    if (!element) return undefined;

    // TODO: Check performance "getBoundingClientRect()"
    const interval = setInterval(() => {
      const rect = element.getBoundingClientRect();
      const newData: Data = {
        x: rect.x,
        y: rect.y,
      };
      if (!isEqual(dataRef.current, newData)) {
        dataRef.current = newData;
        setData(newData);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [element]);

  return data;
};

export default usePositionObserver;
