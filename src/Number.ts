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
    return NaN;
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

/**
 * float32 To uint8Array
 * @param value
 * @returns
 */
export function f32ToU8(value: number): Uint8Array {
  return new Uint8Array(new Float32Array([value]).buffer);
}

/**
 * uint8Array To float32
 * @param u8
 * @returns
 */
export function u8ToF32(u8: Uint8Array): number {
  return new Float32Array(u8.buffer)[0];
}

/**
 * float64 To uint8Array
 * @param value
 * @returns
 */
export function f64ToU8(value: number): Uint8Array {
  return new Uint8Array(new Float64Array([value]).buffer);
}

/**
 * uint8Array To float64
 * @param u8
 * @returns
 */
export function u8ToF64(u8: Uint8Array): number {
  return new Float64Array(u8.buffer)[0];
}
