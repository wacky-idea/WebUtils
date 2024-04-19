export type CancelAnimationFrameFn =
  | ((handle: number) => void)
  | ((handle: number) => void)[];


const methodMap = [
  'cancelAnimationFrame',
  'webkitCancelAnimationFrame',
  'mozCancelAnimationFrame',
  'msCancelAnimationFrame',
  'oCancelAnimationFrame',
]

function compatibleCancelAnimationFrame() {
  for (let i = 0; i < methodMap.length; i++) {
    const method = methodMap[i] as 'cancelAnimationFrame';
    if (typeof window !== 'undefined' && window[method]) {
      return window[method];
    }
  }
  return (handle: number) => {
    clearTimeout(handle);
  };
}


export const cancelAnimationFrame: CancelAnimationFrameFn = compatibleCancelAnimationFrame()
