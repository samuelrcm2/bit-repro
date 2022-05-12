import { useEffect, useReducer } from 'react';

import { ResolvedData, Action, Data, DataSource, ErrorResponse } from './types';
import { resolveDataSource } from './utils';

/**
 * The reducer to control `useDataSource` state.
 */
const reducer = <T>(
  state: ResolvedData<T>,
  action: Action<T>
): ResolvedData<T> => {
  switch (action.type) {
    case 'loading':
      return { loading: true, refetch: action.refetch };
    case 'success':
      return {
        ...state,
        loading: false,
        ok: true,
        data: action.data as Data<T>,
      };
    case 'failure':
      return {
        ...state,
        loading: false,
        ok: false,
        error: action.error,
      };
    default:
      return state;
  }
};

/**
 * A data fetcher hook that will resolve generic `dataSource` types (function or promises).
 *
 * @param dataSource The `dataSource` should be a function or a promise that returns the data.
 * @param deps If present, refetch will only execute if the values in the `deps` list change.
 * @returns The result containing the resolved `data` or `error`.
 */
const useDataSource = <Result>(
  dataSource: DataSource<Result>,
  deps: React.DependencyList
) => {
  const [result, dispatch] = useReducer<
    React.Reducer<ResolvedData<Result>, Action<Result>>
  >(reducer, {
    loading: true,
  });

  useEffect(() => {
    let isCancelled = false;

    const refetch = async () => {
      try {
        dispatch({ type: 'loading', refetch });

        // extract data from dataSource
        const { ok, data, error } = await resolveDataSource(dataSource);

        if (!isCancelled) {
          if (ok) dispatch({ type: 'success', data });
          else dispatch({ type: 'failure', error });
        }
      } catch (error) {
        if (!isCancelled)
          dispatch({
            type: 'failure',
            error: (error as ErrorResponse).message,
          });
      }
    };

    refetch();

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return result;
};

export default useDataSource;
