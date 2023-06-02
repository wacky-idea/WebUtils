/**
 * 全屏
 */
export const requestFullscreen = (options?: FullscreenOptions): Promise<void> => {
  if (document) {
    //@ts-ignore
    const run = document.documentElement.requestFullscreen || document.documentElement.msRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen;
    return run()
  }
  return new Promise((resolve, reject) => { reject() })
}
