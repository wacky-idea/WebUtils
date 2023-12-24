export const indexedDB: IDBFactory =
  window.indexedDB ||
  // @ts-ignore
  window.mozIndexedDB ||
  // @ts-ignore
  window.webkitIndexedDB ||
  // @ts-ignore
  window.msIndexedDB ||
  // @ts-ignore
  window.oIndexedDB;