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
