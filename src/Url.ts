import { StringUtil } from "./index"


/**
 * 获取 get 参数
 * @param key
 * @returns
 */
export const getUrlParams = (key: string) => {
  return new URL(location.href).searchParams.get(key)
}

export type GenerateVideoPreviewType = "blob" | "base64"

export interface GenerateVideoPreviewOptions {
  /** 视频文件地址 */
  url: string
  /** 预览秒数 */
  seconds?: number
  /** 超时时间 */
  timeout?: number
  /** 返回类型 */
  type?: GenerateVideoPreviewType
  /** 预览宽度 */
  width?: number
  /** 预览高度 */
  height?: number
}

/**
 * 视频预览
 *
 * @export
 * @param {GenerateVideoPreviewOptions} option
 * @return {*}  {(Promise<Blob | string>)}
 */
export function generateVideoPreview(option: GenerateVideoPreviewOptions): Promise<Blob | string> {
  let { url, seconds = 1, timeout = 3000, type = "blob", width = 0, height = 0 } = option
  return new Promise<Blob | string>((resolve, reject) => {
    let canvas = document.createElement("canvas")
    let context = canvas.getContext("2d")

    let video = document.createElement("video")
    // 浏览器仅预加载视频的元数据，不加载视频的实际数据
    video.preload = "metadata"
    video.crossOrigin = "anonymous"
    video.autoplay = true
    video.playsInline = true
    video.muted = true
    video.loop = true
    video.setAttribute("disablepictureinpicture", "true")
    video.setAttribute("playsinline", "true")
    video.setAttribute("webkit-playsinline", "true")
    video.setAttribute("x5-video-player-type", "true")
    video.setAttribute("x-webkit-airplay", "true")

    video.onerror = () => {
      reject(new Error("Video loading error."))
    }

    const loadedmetadata = () => {
      if (seconds <= video.duration) {
        if (width === 0) {
          width = video.videoWidth
        }
        if (height === 0) {
          height = video.videoHeight
        }
        canvas.width = width
        canvas.height = height
      } else {
        reject(new Error("Video duration is too short."))
      }
    }

    const canplaythrough = () => {
      video.currentTime = seconds
    }

    const timeupdate = () => {
      if (video && video.currentTime >= seconds) {
        context?.drawImage(video, 0, 0, width, height)
        if (type === "base64") {
          resolve(canvas.toDataURL())
        }
        if (type === "blob") {
          canvas.toBlob(blob => {
            if (!blob) {
              reject(new Error("Failed to generate video preview."))
            } else {
              resolve(blob)
            }
          })
        }
        destroy()
      }
    }

    video.addEventListener("loadedmetadata", loadedmetadata)
    video.addEventListener("canplaythrough", canplaythrough)
    video.addEventListener("timeupdate", timeupdate)

    const destroy = () => {
      if (video) {
        video.removeEventListener("loadedmetadata", loadedmetadata)
        video.removeEventListener("canplaythrough", canplaythrough)
        video.removeEventListener("timeupdate", timeupdate)
      }
      // 销毁释放
      context = null
      // @ts-ignore
      canvas = null
      // @ts-ignore
      video = null
    }

    video.src = url

    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId)
      reject(new Error("generate video preview timeout."))
    }, timeout)
  })
}


/**
 * url base64WithPrefix 转 blob
 *
 * 例如：
 * data:application/octet-stream;base64,MQ==
 * data:image/png;base64,MQ==
 *
 * @export
 * @param {string} base64WithPrefix url 中带有前缀的 base64 数据
 * @param {string} mimeType
 * @return {*} Blob
 */
export function base64ToBlob(base64WithPrefix: string, mimeType: string) {
  const base64 = delBase64WithPrefix(base64WithPrefix)
  return StringUtil.base64ToBlob(base64, mimeType)
}

/**
 * 删除 base64WithPrefix 前缀
 *
 * @export
 * @param {string} base64WithPrefix 携带文件协议的 base64 字符串
 * @return {*}
 */
export function delBase64WithPrefix(base64WithPrefix: string) {
  // 匹配并提取不带"data"前缀的Base64部分
  const regex = /^data:[^;]+;base64,([^\"\']*)/;
  const matches = base64WithPrefix.match(regex);
  if (matches && matches.length > 1) {
    return matches[1]
  } else {
    throw new Error('数据解析异常')
  }
}
