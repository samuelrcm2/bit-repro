import { DataSource, ApiResponse, DataAction, ErrorResponse } from './types';

/**
 * Resolves the `dataSource` recursively to extract the data.
 *
 * @param dataSource The `dataSource` should be a function or a promise that returns the data.
 * @param params A list of parameters that will be passed to the function.
 */
export const resolveDataSource = async <Result, Params extends unknown[] = []>(
  dataSource?: DataSource<Result | boolean, Params>,
  ...params: Params
): Promise<{ ok: boolean; data?: Result; error?: string }> => {
  try {
    if (typeof dataSource === 'boolean') return { ok: dataSource, data: undefined };
    if (!dataSource) return { ok: true, data: undefined };
    if (dataSource instanceof Function) return resolveDataSource(dataSource(...params));
    if (dataSource instanceof Promise) return resolveDataSource((await dataSource) as Result);

    // apisauce error treatment
    if (typeof dataSource === 'object' && 'ok' in dataSource && 'data' in dataSource) {
      const apiResponse = (dataSource as unknown) as ApiResponse<Result>;

      if (apiResponse.ok) return { ok: true, data: apiResponse.data };

      const errorData = (apiResponse.data as unknown) as { message: string } | undefined;
      const errorMessage = errorData?.message;
      const originalError = apiResponse.originalError?.message;

      return { ok: false, error: errorMessage || originalError };
    }

    return { ok: true, data: dataSource };
  } catch (error) {
    return { ok: false, error: (error as ErrorResponse).message };
  }
};

/**
 * Resolves the `dataAction` recursively.
 *
 * @param dataAction The `dataAction` should be a function or a promise that returns void.
 * @param params A list of parameters that will be passed to the function.
 */
export const resolveDataAction = async <Params extends unknown[] = []>(
  dataAction?: DataAction<Params>,
  ...params: Params
): Promise<{ ok: boolean; error?: string }> => resolveDataSource(dataAction, ...params);
