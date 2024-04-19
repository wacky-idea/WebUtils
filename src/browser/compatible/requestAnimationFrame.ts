const methodMap = [
  'requestAnimationFrame',
  'webkitRequestAnimationFrame',
  'mozRequestAnimationFrame',
  'msRequestAnimationFrame',
  'oRequestAnimationFrame',
]

export type RequestAnimationFrameFn = | ((callback: FrameRequestCallback) => number) | ((callback: FrameRequestCallback) => number)[];

function compatibleRequestAnimationFrame(): RequestAnimationFrameFn {
  for (let i = 0; i < methodMap.length; i++) {
    const method = methodMap[i] as 'requestAnimationFrame'
    if (typeof window !== 'undefined' && method in window) {
      return window[method]
    }
  }

  return (callback: FrameRequestCallback): number => {
    return window.setTimeout(callback, 1000 / 60)
  }
}

/**
 * 动画函数 兼容方式
 */
export const requestAnimationFrame: RequestAnimationFrameFn = compatibleRequestAnimationFrame()
