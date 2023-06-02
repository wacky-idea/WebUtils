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
 * 字符串转 Uint8Array
 * @param str
 * @returns
 */
export function stringToUint8Array(str: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}
