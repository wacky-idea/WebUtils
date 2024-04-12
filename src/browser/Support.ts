/**
 * 判断浏览器是否支持文件
 * @returns
 */
export function isFile(): boolean {
  return !!(window.File && window.FileReader && window.FileList && window.Blob);
}

/**
 * 判断浏览器是否支持地理位置
 * @returns
 */
export function isGeolocation(): boolean {
  if (window) {
    return "geolocation" in navigator;
  } else {
    return false
  }
}

/**
 * 判断浏览器是否支持存储 (LocalStorage)
 * @returns
 */
export function isLocalStorage(): boolean {
  var key = (+new Date()).toString();
  try {
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * 判断浏览器是否支持 Worker
 * @returns
 */
export function isWorker(): boolean {
  return !!window.Worker;
}

/**
 * 判断浏览器是否支持 WebSocket
 * @returns
 */
export function isWebsocket(): boolean {
  return "WebSocket" in window || "MozWebSocket" in window;
}

/**
 * 判断浏览器是否支持 svg
 * @returns
 */
export function isSvg(): boolean {
  return (
    !!document.createElementNS &&
    !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
  );
}

/**
 * 判断浏览器是否支持 canvas
 * @returns
 */
export function isCanvas(): boolean {
  var elem = document.createElement("canvas");
  return !!(elem.getContext && elem.getContext("2d"));
}

/**
 * 判断浏览器是否支持 webgl
 * @returns
 */
export function isWebgl(): boolean {
  var elem = document.createElement("canvas");
  return !!(
    window.WebGLRenderingContext &&
    (elem.getContext("webgl") || elem.getContext("experimental-webgl"))
  );
}

