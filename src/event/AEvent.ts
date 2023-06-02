
export class AEvent<EventList extends { [key: string]: Function[] }, Context extends any = any> {

  public eventList: EventList;

  /**
   * @description: 触发事件
   * @param {EventName} eventName
   * @param {Model} arg
   * @return {void}
   */
  emit(eventName: keyof EventList, arg: Context): void {
    if (eventName in this.eventList) {
      for (var fun of this.eventList[eventName]) {
        fun(arg);
      }
    }
  }

  /**
   * @description: 获取 eventlist 所有key
   * @return {string[]}
   */
  get events(): string[] {
    return Object.keys(this.eventList);
  }

  /**
   * 监听事件
   *
   * @param {String} eventName
   * @param {Function} fun
   * @memberof AEvent
   */
  on(eventName: keyof typeof this.eventList, fun: (data: Context) => void) {
    // 不在直接return
    if (!(eventName in this.eventList)) {
      return;
    }
    // 添加
    this.eventList[eventName].push(fun);
  }

  /**
   * 解绑事件
   *
   * @param {String} eventName
   * @param {Function} fun
   * @memberof AEvent
   */
  off(eventName: keyof typeof this.eventList, fun: (data: Context) => void): void {
    // 不在直接return
    if (!(eventName in this.eventList)) {
      return;
    }
    const eventList = this.eventList[eventName];

    for (var i = 0; i < eventList.length; i++) {
      if (eventList[i] === fun) {
        eventList.splice(i, 1);
      }
    }
  }
}
