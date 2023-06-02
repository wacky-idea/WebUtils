/**
 * 坐标点
 */
export interface Point {
  x: number
  y: number
}

/**
 * 判断一个点是否在圆的内部
 * @param point  测试点坐标
 * @param circle 圆心坐标
 * @param r 圆半径
 * 返回true为在园内，false为不在圆内
 */
export function pointInsideCircle(point: Point, circle: Point, r: number) {
  if (r === 0) return false
  var dx = circle.x - point.x
  var dy = circle.y - point.y
  return dx * dx + dy * dy <= r * r
}

/**
 * 坐标系：WGS84 纬度 转 瓦片编号
 *
 * @export
 * @param {*} lat 纬度
 * @param {*} z 墨卡托投影 级别
 * @returns y 纵向瓦片编号
 */
export function lat2Y(lat: number, z: number) {
  return Math.floor(2 ** (z - 1) * (1 - Math.log(Math.tan((Math.PI * lat) / 180) + 1 / Math.cos((Math.PI * lat) / 180)) / Math.PI))
}

/**
 * 坐标系：WGS84 瓦片编号  转 经度
 *
 *
 * @export
 * @param {*} x 横向瓦片编号
 * @param {*} z 墨卡托投影 级别
 * @param {number} [w=0] 像素偏移
 * @returns lng
 */
export function x2Lng(x: number, z: number, w = 0) {
  return (2 ** (1 - z) * (x + w / 256) - 1) * 180;
}

/**
 * 坐标系：WGS84 瓦片编号  转 纬度
 *
 * @export
 * @param {*} y 纵向瓦片编号
 * @param {*} z 墨卡托投影 级别
 * @param {number} [h=0] 像素偏移
 * @returns lat
 */
export function y2Lat(y: number, z: number, h = 0) {
  return (360 * Math.atan(Math.E ** ((1 - 2 ** (1 - z) * (y + h / 256)) * Math.PI))) / Math.PI - 90;
}

/**
 * 坐标系：WGS84 瓦片编号  转 经纬度
 *
 * @export
 * @param {*} x 横向瓦片编号
 * @param {*} y 纵向瓦片编号
 * @param {*} z 墨卡托投影 级别
 * @returns 经纬度
 */
export function XY2LngLat(x: number, y: number, z: number) {
  return {
    lng: x2Lng(x, z),
    lat: y2Lat(y, z)
  };
}

/**
 * 坐标系：WGS84 经纬度 转 瓦片编号
 *
 * @export
 * @param {*} lng 经度
 * @param {*} lat 纬度
 * @param {*} z 墨卡托投影 级别
 * @returns 瓦片编号
 */
export function lngLat2XY(lng: number, lat: number, z: number) {
  return {
    x: lng2X(lng, z),
    y: lat2Y(lat, z)
  };
}

/**
 * 坐标系：WGS84 经度 转 瓦片编号
 *
 * @export
 * @param {*} lng 经度
 * @param {*} z 墨卡托投影 级别
 * @returns x 横向瓦片编号
 */
export function lng2X(lng: number, z: number) {
  return Math.floor(2 ** (z - 1) * (lng / 180 + 1));
}
