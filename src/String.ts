/**
 * 字符串转 charCode 数组
 * @param value
 * @returns
 */
export function stringToCharCodes(value: string): number[] {
  var char = [];
  for (var item of value) {
    char.push(item.charCodeAt(0));
  }
  return char;
}

/**
 * 兼容函数
 * 字符串转 Uint8Array
 * Text编解码不能使用时采用 unicode 两字节实现中文编码
 * @param str
 * @returns
 */
export function stringToUint8Array(str: string): Uint8Array {
  if (TextEncoder && TextDecoder) {
    const encoder = new TextEncoder();
    return encoder.encode(str);
  } else {
    // 使用两字节兼容大部常用中文
    return new Uint8Array(new Uint16Array(stringToCharCodes(str)).buffer)
  }

}

/**
 * 兼容函数
 * Uint8Array 转 字符串
 * Text编解码不能使用时采用 unicode 两字节实现中文编码
 * @param u8
 * @returns
 */
export function uint8ArrayToString(u8: Uint8Array): string {
  if (TextEncoder && TextDecoder) {
    const decoder = new TextDecoder()
    return decoder.decode(u8)
  } else {
    return String.fromCharCode(...new Uint16Array(u8.buffer))
  }
}


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

  return new Blob([new Uint8Array(stringToCharCodes(decodedData))], { type: mimeType });
}

/**
 * 复制到剪切板
 *
 * @export
 * @param {string} text
 * @return {*}  {Promise<void>}
 */
export function copyTextToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text)
  } else {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.value = text;
      input.style.position = 'absolute';
      input.style.zIndex = '-9999';
      document.body.appendChild(input);
      input.select();
      const result = document.execCommand('copy');
      if (result) {
        resolve();
      } else {
        reject();
      }
      document.body.removeChild(input);
    })
  }
}
