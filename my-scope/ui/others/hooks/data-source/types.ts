type Refetch = () => Promise<void>;
export type Data<T> = T extends ApiResponse<infer U> ? U : T;
export type DataSource<Result, Params extends unknown[] = []> =
  | ((...args: Params) => Promise<ApiResponse<Result>> | undefined)
  | ((...args: Params) => Promise<Result> | undefined)
  | ((...args: Params) => Promise<boolean> | undefined)
  | ((...args: Params) => Result | undefined)
  | (Promise<ApiResponse<Result>> | undefined)
  | (Promise<Result> | undefined)
  | (Result | undefined);
export type DataAction<Params extends unknown[] = []> = DataSource<
  void,
  Params
>;

export type ResolvedData<T> = {
  loading: boolean;
  data?: Data<T>;
  ok?: boolean;
  error?: string;
  refetch?: Refetch;
};

export type Action<T> =
  | { type: 'loading'; refetch?: Refetch }
  | { type: 'success'; data?: T }
  | { type: 'failure'; error?: string };

export interface ApiResponse<T> {
  ok: boolean;
  problem: string | null;
  originalError: Error | null;
  data?: T;
}

export interface ErrorResponse {
  message?: string;
}
