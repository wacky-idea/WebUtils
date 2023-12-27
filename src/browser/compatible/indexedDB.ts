const methodMap = [
  'indexedDB',
  'webkitIndexedDB',
  'mozIndexedDB',
  'msIndexedDB',
  'oIndexedDB',
]

function compatibleIndexedDB(): IDBFactory {
  for (let i = 0; i < methodMap.length; i++) {
    const method = methodMap[i] as 'indexedDB';
    if (window[method]) {
      return window[method];
    }
  }
  return null;
}

/**
 * indexedDB 兼容方式
 */
export const indexedDB: IDBFactory = compatibleIndexedDB()
