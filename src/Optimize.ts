/**
 * 防抖
 * @param func
 * @param delay
 * @returns
 */
export function debounce(func: Function, delay: number): Function {
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 节流
 * @param func
 * @param delay
 * @returns
 */
export function throttle(func: Function, delay: number): Function {
  let lastTime = 0;
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    const currentTime = Date.now();
    const remainingTime = delay - (currentTime - lastTime);

    clearTimeout(timerId);

    if (remainingTime <= 0) {
      func.apply(this, args);
      lastTime = currentTime;
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args);
        lastTime = Date.now();
      }, remainingTime);
    }
  };
}
