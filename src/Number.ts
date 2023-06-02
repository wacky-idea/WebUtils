/**
 * 范围随机
 *
 * @param min
 * @param max
 * @returns
 */
export function random(min: number, max: number): number {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}

/**
 * 将值控制在 区间内
 * @param value
 * @param min
 * @param max
 * @returns
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
