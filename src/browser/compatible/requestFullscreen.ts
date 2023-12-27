const methodMap = [
  'requestFullscreen',
  'webkitRequestFullscreen',
  'mozRequestFullScreen',
  'msRequestFullscreen',
  'oRequestFullscreen'
]

/**
 * document 全屏函数 兼容方式
 *
 * @export
 * @param {FullscreenOptions} [options]
 * @return {*}  {Promise<void>}
 */
export function documentElementRequestFullscreen(options?: FullscreenOptions): Promise<void> {
  return requestFullscreen(document.documentElement, options)
}

/**
 * element 全屏函数 兼容方式
 *
 * @export
 * @param {HTMLElement} element
 * @param {FullscreenOptions} [options]
 * @return {*}  {Promise<void>}
 */
export function requestFullscreen(element: HTMLElement, options?: FullscreenOptions): Promise<void> {

  for (let i = 0; i < methodMap.length; i++) {
    const method = methodMap[i] as 'requestFullscreen';
    if (method in element) {
      return element[method](options);
    }
  }

  // 在不支持全屏功能的情况下执行适当的操作
  return Promise.reject(new Error("Fullscreen API is not supported"));
};
