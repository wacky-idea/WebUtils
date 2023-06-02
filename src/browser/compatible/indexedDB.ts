export const indexedDB = (): IDBFactory => {
  if (window) {
    //@ts-ignore
    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  }
  return null
}
