/**
 * 取消动画函数
 *
 */
export type CancelAnimationFrameFn =
  | ((handle: number) => void)
  | ((handle: number) => void)[];


export const cancelAnimationFrame: CancelAnimationFrameFn =
  window.cancelAnimationFrame ||
  // @ts-ignore
  window.webkitCancelAnimationFrame ||
  // @ts-ignore
  window.mozCancelAnimationFrame ||
  // @ts-ignore
  window.msCancelAnimationFrame ||
  // @ts-ignore
  window.oCancelAnimationFrame;