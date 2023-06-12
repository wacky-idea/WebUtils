/**
 * 通过 数组 元素删除
 *
 * @param item
 * @param array
 * @returns
 */
export function removeByItem(item: any, array: any[]): any[] {
  var index = array.indexOf(item)
  if (index > -1) {
    array.splice(index, 1)
  }
  return array
}

/**
 * 通过 数组 下标删除
 * @param index
 * @param array
 * @returns
 */
export function removeByIndex(index: number, array: any[]): any[] {
  array.splice(index, 1)
  return array
}

export type ArraySortType = 1 | 2 | 3

/**
 * 排序
 *
 * @param array
 * @param type  1：从小到大   2：从大到小   3：随机
 * @returns
 */
export function sort(array: number[] | string[], type: ArraySortType = 1): any[] {
  //@ts-ignore
  return array.sort((a, b) => {
    switch (type) {
      case 1:
        //@ts-ignore
        return a - b
      case 2:
        //@ts-ignore
        return b - a
      case 3:
        return Math.random() - 0.5
      default:
        return array
    }
  })
}
/**
 * 最大值
 *
 * @param array
 * @returns
 */
export function max(array: number[]): number {
  return Math.max.apply(null, array)
}

/**
 * 最小值
 *
 * @param array
 * @returns
 */
export function min(array: number[]): number {
  return Math.min.apply(null, array)
}
