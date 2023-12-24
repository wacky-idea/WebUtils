import { GeometryUtil } from '../src';

test('GeometryUtil pointInsideCircle', () => {
  expect(GeometryUtil.pointInsideCircle({ x: 10, y: 5 }, { x: 5, y: 5 }, 5)).toEqual(true)
})


