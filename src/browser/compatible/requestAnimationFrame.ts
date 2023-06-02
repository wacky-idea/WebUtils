/**
 * 动画函数
 *
 */
export const requestAnimationFrame = (callback: FrameRequestCallback): number => {
  if (window) {
    //@ts-ignore
    const run = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    return run(callback)
  }
  return 0;
}
