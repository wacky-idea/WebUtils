const methodMap = [
  'exitFullscreen',
  'webkitExitFullscreen',
  // Old WebKit
  'webkitCancelFullScreen',
  'mozExitFullscreen',
  'msExitFullscreen',
  'oExitFullscreen',
]

/**
 * 退出全屏
 *
 * @export
 * @return {*}  {Promise<void>}
 */
export function exitFullscreen(): Promise<void> {

  for (let i = 0; i < methodMap.length; i++) {
    const method = methodMap[i] as 'exitFullscreen';
    if (method in document) {
      return document[method]();
    }
  }

  // 在不支持退出全屏的情况下执行适当的操作
  return Promise.reject(new Error("Fullscreen API is not supported"));
};
