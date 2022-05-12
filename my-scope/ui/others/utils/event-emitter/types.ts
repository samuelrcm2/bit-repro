// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventListener = (data?: any) => void;

export interface EventListenerProps {
  /**
   * The type of the event
   */
  type: string;

  /**
   * The listener callback that will be invoked when the event is dispatched
   */
  listener: EventListener;
}
