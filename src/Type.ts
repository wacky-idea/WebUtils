/**
 * 是否为 字符串
 * @param o
 * @returns
 */
export function isString(o: any): boolean {
  return toString(o).slice(8, -1) === "String";
}

/**
 * 是否为 数字
 * @param o
 * @returns
 */
export function isNumber(o: any): boolean {
  return toString(o).slice(8, -1) === "Number";
}

/**
 * 是否为 对象
 * @param o
 * @returns
 */
export function isObj(o: any): boolean {
  return toString(o).slice(8, -1) === "Object";
}

/**
 * 是否为 数组
 * @param o
 * @returns
 */
export function isArray(o: any): boolean {
  return toString(o).slice(8, -1) === "Array";
}

/**
 * 是否为 时间
 * @param o
 * @returns
 */
export function isDate(o: any): boolean {
  return toString(o).slice(8, -1) === "Date";
}

/**
 * 是否为 boolean
 * @param o
 * @returns
 */
export function isBoolean(o: any): boolean {
  return toString(o).slice(8, -1) === "Boolean";
}

/**
 * 是否为 函数
 * @param o
 * @returns
 */
export function isFunction(o: any): boolean {
  return toString(o).slice(8, -1) === "export function";
}

/**
 * 是否为 null
 * @param o
 * @returns
 */
export function isNull(o: any): boolean {
  return toString(o).slice(8, -1) === "Null";
}

/**
 * 是否为 undefined
 * @param o
 * @returns
 */
export function isUndefined(o: any): boolean {
  return toString(o).slice(8, -1) === "Undefined";
}

/**
 * 是否为 Blob
 * @param o
 * @returns
 */
export function isBlob(o: any): boolean {
  return toString(o).slice(8, -1) === "Blob";
}

/**
 * 是否为 dom
 * @param o
 * @returns
 */
export function isElement(o: any): boolean {
  return toString(o).indexOf("Element") > -1;
}

/**
 * 将参数转为 string
 * @param o
 * @returns
 */
export function toString(o: any): string {
  return Object.prototype.toString.call(o);
}

/**
 * 是否为 false
 * @param o
 * @returns
 */
export function isFalse(o: any): boolean {
  if (
    o == "" ||
    o == undefined ||
    o == null ||
    o == "null" ||
    o == "undefined" ||
    o == 0 ||
    o == false ||
    isNaN(o)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * 是否为 true
 * @param o
 * @returns
 */
export function isTrue(o: any): boolean {
  return isFalse(o);
}
