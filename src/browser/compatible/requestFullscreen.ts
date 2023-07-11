/**
 * 全屏
 */
export const requestFullscreen = (options?: FullscreenOptions): Promise<void> => {
  const dELE = document.documentElement
    if ('requestFullscreen' in dELE) {
      document.documentElement.requestFullscreen()
    } else if ('msRequestFullscreen' in dELE) {
      // @ts-ignore
      document.documentElement['msRequestFullscreen']()
    } else if ('mozRequestFullScreen' in dELE) {
      // @ts-ignore
      document.documentElement['mozRequestFullScreen']()
    } else if ('webkitRequestFullscreen' in dELE) {
      // @ts-ignore
      document.documentElement['webkitRequestFullscreen']()
    }
}
