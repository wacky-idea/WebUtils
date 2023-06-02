import { isBoolean, isNumber, isString } from "../Type";

/**
 * 事件代理 将 current 事件代理到 target 上
 * @param current 当前事件触发对象
 * @param target 代理目标事件接受对象
 * @param eventName
 */
export function proxyEvent(current: HTMLElement | Window, target: HTMLElement | Window, eventName: keyof WindowEventMap): void {

  current.addEventListener(eventName, (e) => {
    const event = initEvent(eventName)
    let key: keyof Event
    for (key in e) {
      // 只代理 数字 字符 布尔类型
      if (isNumber(e[key]) || isString(e[key]) || isBoolean(e[key])) {
        try {
          const descriptor = Object.getOwnPropertyDescriptor(e, key);
          // 判断属性是否只读
          if (descriptor.writable) {
            // @ts-ignore
            event[key] = e[key]
          }
        } catch (error) {
          console.warn(error)
        }
      }
    }
    target.dispatchEvent(event)
  })
}

/**
 * 初始化 事件兼容写法
 * @param eventName
 * @param eventInitDict
 * @returns
 */
export function initEvent(eventName: keyof WindowEventMap, eventInitDict: EventInit = { bubbles: true, cancelable: true, composed: true }): Event {
  let event: Event = null;

  try {
    event = new Event(eventName, eventInitDict);
  } catch (error) {
    event = document.createEvent('Event');
    event.initEvent(eventName, eventInitDict.bubbles, eventInitDict.cancelable);
  }
  return event
}
