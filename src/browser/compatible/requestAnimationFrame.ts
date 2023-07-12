/**
 * 动画函数
 *
 */
export type RequestAnimationFrameFn =
  | ((callback: FrameRequestCallback) => number)
  | ((callback: FrameRequestCallback) => number)[];


export const requestAnimationFrame: RequestAnimationFrameFn =
  window.requestAnimationFrame ||
  // @ts-ignore
  window.webkitRequestAnimationFrame ||
  // @ts-ignore
  window.mozRequestAnimationFrame ||
  // @ts-ignore
  window.msRequestAnimationFrame ||
  // @ts-ignore
  window.oRequestAnimationFrame;

