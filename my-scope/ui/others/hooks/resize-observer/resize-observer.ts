import { useState, useEffect, useCallback, useRef } from 'react';

import { isEqual } from 'lodash';
import ResizeObserver from 'resize-observer-polyfill';

import { Data } from './types';

const useResizeObserver = (element?: Element | null) => {
  const [data, setData] = useState<Data>();
  const dataRef = useRef<Data>();

  const callback = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries || [undefined];
    const rect = entry.contentRect;
    const newData: Data = {
      width: rect.width,
      height: rect.height,
    };
    if (!isEqual(dataRef.current, newData)) {
      dataRef.current = newData;
      setData(newData);
    }
  }, []);

  useEffect(() => {
    if (!element) return undefined;

    const observer = new ResizeObserver(callback);
    observer.observe(element);

    return () => observer.disconnect();
  }, [callback, element]);

  return data;
};

export default useResizeObserver;
