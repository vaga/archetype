import { LayoutKeyItem } from "./layout"

export const KEY_SIZE = 150
export const KEY_BORDER_RADIUS = 10
export const KEY_MARGIN = 5

export const KEY_TEXT_SIZES: {[key: string]: number} = {
  '1U': 7,
  '1.25U': 9,
  '1.5U': 11,
  '1.75U': 13,
  '2U': 15,
  '2.25U': 17,
  '2.75U': 19,
}

export interface KeymapItem extends LayoutKeyItem {
    x: number,
    y: number,
}
