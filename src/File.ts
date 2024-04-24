import { GenerateVideoPreviewOptions as UrlGenerateVideoPreviewOptions, delBase64WithPrefix } from "./Url";
import { UrlUtil } from "./index";

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
 *
 * @export
 * @param {Blob} blob
 * @param {boolean} [delPrefix=false]
 * @return {*}  {Promise<string>}
 */
export function blobToBase64(blob: Blob, delPrefix = false): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      let base64 = ''
      if (delPrefix) {
        base64 = delBase64WithPrefix(reader.result as string)
      } else {
        base64 = reader.result as string
      }
      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error('Failed to convert Blob to Base64.'));
    };

    reader.readAsDataURL(blob);
  });
}


export interface GenerateVideoPreviewOptions {
  /** 视频文件 */
  file: File | Blob;
}
/**
 * 通过文件获取视频第一帧
 *
 * @param file
 * @returns
 */
export function generateVideoPreview(option: GenerateVideoPreviewOptions & Omit<UrlGenerateVideoPreviewOptions, 'url'>) {
  const { file } = option
  const tempUrl = URL.createObjectURL(file)
  return UrlUtil
    .generateVideoPreview({ ...option, url: tempUrl })
    .finally(() => {
      URL.revokeObjectURL(tempUrl)
    })
}
