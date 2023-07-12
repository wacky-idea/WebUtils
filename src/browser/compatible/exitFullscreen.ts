/**
 * 退出全屏
 *
 */
export const exitFullscreen = (): Promise<void> => {
  if ('exitFullscreen' in document) {
    return document.exitFullscreen();
  } else if ('mozExitFullscreen' in document) {
    // @ts-ignore
    return document.mozExitFullscreen();
  } else if ('webkitExitFullscreen' in document) {
    // @ts-ignore
    return document.webkitExitFullscreen();
  } else if ('msExitFullscreen' in document) {
    // @ts-ignore
    return document.msExitFullscreen();
  } else if ('oExitFullscreen' in document) {
    // @ts-ignore
    return document.oExitFullscreen();
  } else {
    // 在不支持退出全屏的情况下执行适当的操作
    return Promise.reject(new Error("Fullscreen API is not supported"));
  }
};