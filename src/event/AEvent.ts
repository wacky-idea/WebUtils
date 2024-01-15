export class AEvent<T> {

  /**
   * 事件列表
   *
   * @private
   * @memberof AEvent
   */
  private eventListeners: Map<string, ((data: T) => void)[]>;

  constructor() {
    this.eventListeners = new Map();
  }

  /**
   * 监听事件
   *
   * @param {string} eventName
   * @param {(data: T) => void} handler
   * @memberof AEvent
   */
  on(eventName: string, handler: (data: T) => void): void {
    if (!this.eventListeners.has(eventName)) {
      this.eventListeners.set(eventName, []);
    }
    this.eventListeners.get(eventName)?.push(handler);
  }

  /**
   * 单次监听
   *
   * @param {string} eventName
   * @param {(data: T) => void} handler
   * @memberof AEvent
   */
  once(eventName: string, handler: (data: T) => void): void {
    const onceTimeHandler = (data: T) => {
      handler(data);
      this.off(eventName, onceTimeHandler);
    };
    this.on(eventName, onceTimeHandler);
  }

  /**
   * 取消监听
   *
   * @param {string} eventName
   * @param {(data: T) => void} handler
   * @memberof AEvent
   */
  off(eventName: string, handler: (data: T) => void): void {
    const listeners = this.eventListeners.get(eventName);
    if (listeners) {
      const index = listeners.indexOf(handler);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  /**
   * 触发事件
   *
   * @param {string} eventName
   * @param {T} data
   * @memberof AEvent
   */
  emit(eventName: string, data: T): void {
    const listeners = this.eventListeners.get(eventName);
    if (listeners) {
      listeners.forEach(handler => handler(data));
    }
  }
}
