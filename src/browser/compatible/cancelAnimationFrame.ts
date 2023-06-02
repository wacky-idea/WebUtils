/**
 * 取消动画函数
 *
 */
export const cancelAnimationFrame = (handle: number): void => {
  if (window) {
    //@ts-ignore
    const run = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.cancelRequestAnimationFrame;
    run(handle)
  }
}
