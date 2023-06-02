/**
 * 是否全屏
 */
export const fullscreenElement = (): Element => {
  if (document) {
    //@ts-ignore
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  }
  return null;
}


