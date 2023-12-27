export interface GpuInfo {
  /** 显卡渲染器 */
  renderer: string;
  /** 显卡厂商 */
  vendor: string;
}
/**
 * 设备 gpu 信息
 */
export function gpuInfo(): Promise<GpuInfo> {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      // @ts-ignore
      const extension = gl.getExtension("WEBGL_debug_renderer_info");
      if (extension) {
        // @ts-ignore
        const renderer = gl.getParameter(extension.UNMASKED_RENDERER_WEBGL);
        // @ts-ignore
        const vendor = gl.getParameter(extension.UNMASKED_VENDOR_WEBGL);

        resolve({
          renderer,
          vendor,
        });
      } else {
        reject("无法获取显卡信息");
      }
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });
}

export interface GeolocationInfo {
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
  /** 精确度 */
  accuracy: number;
}

/**
 * 获取地理位置信息
 * @returns
 */
export function geolocationInfo(): Promise<GeolocationInfo> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const latitude = position.coords.latitude; // 纬度
        const longitude = position.coords.longitude; // 经度
        const accuracy = position.coords.accuracy; // 精确度
        resolve({
          latitude,
          longitude,
          accuracy,
        });
      },
      (error: GeolocationPositionError) => {
        reject(error.message);
      }
    );
  });
}
