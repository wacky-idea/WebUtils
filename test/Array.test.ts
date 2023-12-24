import { ArrayUtil } from '../src';

test('ArrayUtil removeByItem', () => {
  expect(ArrayUtil.removeByItem(2, [1, 2, 3])).toEqual([1, 3])
})

test('ArrayUtil removeByIndex', () => {
  expect(ArrayUtil.removeByIndex(1, [1, 2, 3])).toEqual([1, 3])
})

test('ArrayUtil max', () => {
  expect(ArrayUtil.max([1, 2, 3])).toEqual(3)
})

test('ArrayUtil min', () => {
  expect(ArrayUtil.min([1, 2, 3])).toEqual(1)
})

test('ArrayUtil sort', () => {
  expect(ArrayUtil.sort([3, 8, 6])).toEqual([3, 6, 8])
  expect(ArrayUtil.sort([3, 8, 6], 2)).toEqual([8, 6, 3])
})
