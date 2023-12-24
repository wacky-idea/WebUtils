export interface RGB {
  r: number;
  g: number;
  b: number;
}
/**
 * #ffffff -> rgb
 *
 * @param value
 * @returns
 */
export function hexToRgb(value: string): RGB {
  var hex = parseInt(value.indexOf("#") > -1 ? value.slice(1) : value, 16);
  var r = (hex >> 16) & 255;
  var g = (hex >> 8) & 255;
  var b = (hex >> 0) & 255;
  return {
    r,
    g,
    b,
  };
}

/**
 * rgb -> #ffffff
 * @param rgb
 * @returns
 */
export function rgbToHex(rgb: RGB): string {
  const valueR: number = (rgb.r & 255) << 16;
  const valueG: number = (rgb.g & 255) << 8;
  const valueB: number = rgb.b & 255;
  return `#${(valueR + valueG + valueB).toString(16).padStart(6, "0")}`;
}
