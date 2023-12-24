import { ColorUtil } from '../src';

test('ColorUtil hexToRgb', () => {
  expect(ColorUtil.hexToRgb('#4b977d')).toEqual({ r: 75, g: 151, b: 125 })
})

test('ColorUtil rgbToHex', () => {
  expect(ColorUtil.rgbToHex({ r: 75, g: 151, b: 125 })).toEqual('#4b977d')
})
