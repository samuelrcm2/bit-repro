export interface GenericProps {
  /**
   * @TJS-ignore
   */
  className?: string;

  /**
   * @TJS-ignore
   * @TJS-type object
   */
  style?: React.CSSProperties;
}

export type PickDefaultProps<T, K extends keyof T> = Required<Pick<T, K>>;

/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
export type LiteralUnion<T extends U, U = string> = T | (U & Record<string, unknown>);
