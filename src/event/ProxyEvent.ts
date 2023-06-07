
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
    // const keys = Object.keys(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(e)))
    const keys = ['type', 'timeStamp', 'target', 'srcElement', 'isTrusted', 'eventPhase', 'defaultPrevented', 'currentTarget', 'composed', 'cancelable', 'bubbles', 'NONE', 'CAPTURING_PHASE', 'BUBBLING_PHASE', 'AT_TARGET']
    for (key in e) {
      try {
        if (!keys.includes(key)) {
          // 无法为“AT_TARGET”赋值，因为它是只读属性。ts(2540)
          // 无法为“BUBBLING_PHASE”赋值，因为它是只读属性。ts(2540)
          // 无法为“CAPTURING_PHASE”赋值，因为它是只读属性。ts(2540)
          // 无法为“NONE”赋值，因为它是只读属性。ts(2540)
          // 无法为“bubbles”赋值，因为它是只读属性。ts(2540)
          // 无法为“cancelable”赋值，因为它是只读属性。ts(2540)
          // 无法为“composed”赋值，因为它是只读属性。ts(2540)
          // 无法为“currentTarget”赋值，因为它是只读属性。ts(2540)
          // 无法为“defaultPrevented”赋值，因为它是只读属性。ts(2540)
          // 无法为“eventPhase”赋值，因为它是只读属性。ts(2540)
          // 无法为“isTrusted”赋值，因为它是只读属性。ts(2540)
          // 无法为“srcElement”赋值，因为它是只读属性。ts(2540)
          // 无法为“target”赋值，因为它是只读属性。ts(2540)
          // 无法为“timeStamp”赋值，因为它是只读属性。ts(2540)
          // 无法为“type”赋值，因为它是只读属性。ts(2540)
          // @ts-ignore
          event[key] = e[key]
        }
      } catch (error) {
        console.warn(error)
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
  let event: Event;
  try {
    event = new Event(eventName, eventInitDict);
  } catch (error) {
    event = document.createEvent('Event');
    event.initEvent(eventName, eventInitDict.bubbles, eventInitDict.cancelable);
  }
  return event
}
