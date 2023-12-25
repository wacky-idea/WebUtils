import { exitFullscreen } from "./browser/compatible/exitFullscreen";
import { fullscreenElement } from "./browser/compatible/fullscreenElement";
import { documentElementRequestFullscreen } from "./browser/compatible/requestFullscreen";

/**
 * 开启全屏
 * @returns
 */
export function openFullScreen(): Promise<void> {
  return documentElementRequestFullscreen();
}

/**
 * 关闭全屏
 * @returns
 */
export function closeFullScreen(): Promise<void> {
  if (isFullScreen()) {
    return exitFullscreen();
  } else {
    return Promise.resolve();
  }
}

/**
 * 判断是否全屏
 * @returns
 */
export function isFullScreen(): boolean {
  if (fullscreenElement) {
    // 全屏
    return true;
  } else {
    // 不是全屏
    return false;
  }
}
