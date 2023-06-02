import { stringToUint8Array } from "./String";

/**
 * base64 转 blob
 *
 * @param base64
 * @returns
 */
export function base64ToBlob(base64: string, mimeType: string): Blob {
  const decodedData = atob(base64);
  // const arrayBuffer = new ArrayBuffer(decodedData.length);
  // const uint8Array = new Uint8Array(arrayBuffer);

  // for (let i = 0; i < decodedData.length; i++) {
  //   uint8Array[i] = decodedData.charCodeAt(i);
  // }

  return new Blob([stringToUint8Array(decodedData)], { type: mimeType });
}

/**
 * blob 转 base64
 * @param blob
 * @returns
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1]; // 移除 data URL 的前缀部分

      resolve(base64Data);
    };

    reader.onerror = () => {
      reject(new Error('Failed to convert Blob to Base64.'));
    };

    reader.readAsDataURL(blob);
  });
}

/**
 * 获取 get 参数
 * @param key
 * @returns
 */
export const getUrlParams = (key: string) => {
  return new URL(location.href).searchParams.get(key)
}
