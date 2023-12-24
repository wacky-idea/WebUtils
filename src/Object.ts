/**
 * json 对象 clone
 *
 * @param o
 * @returns
 */
export function clone<T>(o: T): T {
  return JSON.parse(JSON.stringify(o));
}

/**
 * 获取对象key数量
 *
 * @param o
 * @returns
 */
export function size(o: object): number {
  return Object.keys(o).length;
}

/**
 * 对象浅 clone
 * @param obj
 * @returns
 */
export function shallowClone<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.slice() as unknown as T;
  }

  return { ...obj };
}

/**
 * 对象 深 clone
 * @param obj
 * @returns
 */
export function deepClone<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone) as unknown as T;
  }

  const clonedObj = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}
