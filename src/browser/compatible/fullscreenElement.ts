/**
 * 获取全屏ele
 * 可以判断当前是否全屏
 */
export const fullscreenElement: Element | null =
  document.fullscreenElement ||
  // @ts-ignore
  document.mozFullscreenElement ||
  // @ts-ignore
  document.webkitFullscreenElement ||
  // @ts-ignore
  document.msFullscreenElement ||
  // @ts-ignore
  document.oFullscreenElement;


