import { EventListener } from './types';

class EventEmitter {
  private events: Record<string, EventListener[]> = {};

  constructor() {
    this.events = {};
  }

  /**
   * Appends an event `listener` for events whose type attribute value is `type`.
   *
   * @param type The `type` of the event.
   * @param listener The `listener` callback that will be invoked when the event is dispatched.
   * @returns A function to unregister the listener.
   */
  on(type: string, listener: EventListener) {
    if (!this.events[type]) this.events[type] = [];
    this.events[type].push(listener as EventListener);
    return () => this.off(type, listener);
  }

  /**
   * Removes the event `listener` in target's event listener list with the same `type` and `listener` callback.
   *
   * @param type The `type` of the event.
   * @param listener The `listener` callback that will be invoked when the event is dispatched.
   */
  off(type: string, listener: EventListener) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter((l) => l !== listener);
    }
  }

  /**
   * Dispatches a event of type `type` with some optional `data`.
   *
   * @param type The `type` of the event.
   * @param data The `data` that will be sent with the event.
   */
  async emit<T>(type: string, data?: T) {
    if (this.events[type]) return await Promise.all(this.events[type].map((callback) => callback(data)));
  }
}

export default new EventEmitter();
