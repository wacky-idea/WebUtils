/**
 * 退出全屏
 *
 */
export const exitFullscreen = (): Promise<void> => {
  if (document) {
    //@ts-ignore
    const run = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
    return run()
  }
  return new Promise((resolve, reject) => { reject() })
}
