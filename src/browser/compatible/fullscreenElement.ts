const methodMap = [
  'fullscreenElement',
  'webkitFullscreenElement',
  // Old WebKit
  'webkitCurrentFullScreenElement',
  'mozFullscreenElement',
  'msFullscreenElement',
  'oFullscreenElement',
]

function compatibleFullscreenElement(): Element | null {
  for (let i = 0; i < methodMap.length; i++) {
    const method = methodMap[i] as 'fullscreenElement'
    if (document[method]) {
      return document[method]
    }
  }
  return null;
}

/**
 * 全屏函数 兼容方式
 */
export const fullscreenElement: Element | null = compatibleFullscreenElement()


