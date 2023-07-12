/**
 * document 全屏
 */
export const documentElementRequestFullscreen = (options?: FullscreenOptions): Promise<void> => {
  return requestFullscreen(document.documentElement, options)
}

/**
 * 网页全屏
 * @param element 
 * @param options 
 * @returns 
 */
export const requestFullscreen = (element: HTMLElement, options?: FullscreenOptions): Promise<void> => {
  if ('requestFullscreen' in element) {
    return element.requestFullscreen(options);
  } else if ('mozRequestFullScreen' in element) {
    // @ts-ignore
    return element.mozRequestFullScreen(options);
  } else if ('webkitRequestFullscreen' in element) {
    // @ts-ignore
    return element.webkitRequestFullscreen(options);
  } else if ('msRequestFullscreen' in element) {
    // @ts-ignore
    return element.msRequestFullscreen(options);
  } else if ('oRequestFullscreen' in element) {
    // @ts-ignore
    return element.oRequestFullscreen(options);
  } else {
    // 在不支持全屏功能的情况下执行适当的操作
    return Promise.reject(new Error("Fullscreen API is not supported"));
  }
};