export class AEvent<T> {
  private eventListeners: Map<string, ((data: T) => void)[]>;

  constructor() {
    this.eventListeners = new Map();
  }

  on(eventName: string, handler: (data: T) => void): void {
    if (!this.eventListeners.has(eventName)) {
      this.eventListeners.set(eventName, []);
    }
    this.eventListeners.get(eventName)?.push(handler);
  }

  off(eventName: string, handler: (data: T) => void): void {
    const listeners = this.eventListeners.get(eventName);
    if (listeners) {
      const index = listeners.indexOf(handler);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  emit(eventName: string, data: T): void {
    const listeners = this.eventListeners.get(eventName);
    if (listeners) {
      listeners.forEach(handler => handler(data));
    }
  }
}
