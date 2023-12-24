import { UrlUtil } from ".";
import { delBase64WithPrefix } from "./Url";

/**
 * 文件转 base64
 *
 * @export
 * @param {*} file
 * @return {*}
 */
export function fileToBase64(file: File): Promise<string> {
  return blobToBase64(file.slice(0))
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
      const base64 = delBase64WithPrefix(reader.result as string)
      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error('Failed to convert Blob to Base64.'));
    };

    reader.readAsDataURL(blob);
  });
}

/**
 * 通过文件获取视频第一帧
 * 
 * @param file 
 * @returns 
 */
export function generateVideoPreview(file: File | Blob) {
  const tempUrl = URL.createObjectURL(file)
  return UrlUtil
    .generateVideoPreview(tempUrl)
    .finally(() => {
      URL.revokeObjectURL(tempUrl)
    })
}