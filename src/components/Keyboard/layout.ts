export enum KeyboardLayoutType {
  Ansi = 0,
  Iso,
}

export enum LayoutItemType {
  Spacing = 0,
  Key,
  IsoEnterKey,
}

export interface LayoutKeyItem {
    type: LayoutItemType.Key | LayoutItemType.IsoEnterKey,
    id: number,
    size: string,
    label?: string,
    color?: string,
}

interface LayoutSpacingItem {
    type: LayoutItemType.Spacing,
    size: string,
}

type LayoutItem = LayoutKeyItem | LayoutSpacingItem

export type KeyboardLayout = Array<Array<LayoutItem>>

export function getLayout(type: KeyboardLayoutType): KeyboardLayout {
    return [
        // Row 1
        [
            { type: LayoutItemType.Key, id: 0,  size: '1U' },
            { type: LayoutItemType.Key, id: 1,  size: '1U' },
            { type: LayoutItemType.Key, id: 2,  size: '1U' },
            { type: LayoutItemType.Key, id: 3,  size: '1U' },
            { type: LayoutItemType.Key, id: 4,  size: '1U' },
            { type: LayoutItemType.Key, id: 5,  size: '1U' },
            { type: LayoutItemType.Key, id: 6,  size: '1U' },
            { type: LayoutItemType.Spacing, size: '1U' },
            { type: LayoutItemType.Key, id: 9,  size: '1U' },
            { type: LayoutItemType.Key, id: 10, size: '1U' },
            { type: LayoutItemType.Key, id: 11, size: '1U' },
            { type: LayoutItemType.Key, id: 12, size: '1U' },
            { type: LayoutItemType.Key, id: 13, size: '1U' },
            { type: LayoutItemType.Key, id: 14, size: '1U' },
            { type: LayoutItemType.Key, id: 15, size: '2U' },
        ],
        // Row 2 
        [
            { type: LayoutItemType.Key, id: 16, size: '1.5U' },
            { type: LayoutItemType.Key, id: 17, size: '1U' },
            { type: LayoutItemType.Key, id: 18, size: '1U' },
            { type: LayoutItemType.Key, id: 19, size: '1U' },
            { type: LayoutItemType.Key, id: 20, size: '1U' },
            { type: LayoutItemType.Key, id: 21, size: '1U' },
            { type: LayoutItemType.Spacing, size: '1U' },
            { type: LayoutItemType.Key, id: 24, size: '1U' },
            { type: LayoutItemType.Key, id: 25, size: '1U' },
            { type: LayoutItemType.Key, id: 26, size: '1U' },
            { type: LayoutItemType.Key, id: 27, size: '1U' },
            { type: LayoutItemType.Key, id: 28, size: '1U' },
            { type: LayoutItemType.Key, id: 29, size: '1U' },
            { type: LayoutItemType.Key, id: 30, size: '1U' },
            ...(type === KeyboardLayoutType.Iso
              ? [{ type: LayoutItemType.IsoEnterKey, id: 31, size: '1.5U' }]
              : [{ type: LayoutItemType.Key,         id: 47, size: '1.5U' }]),
        ],
        // Row 3
        [
            { type: LayoutItemType.Key, id: 32, size: '1.75U' },
            { type: LayoutItemType.Key, id: 33, size: '1U' },
            { type: LayoutItemType.Key, id: 34, size: '1U' },
            { type: LayoutItemType.Key, id: 35, size: '1U' },
            { type: LayoutItemType.Key, id: 36, size: '1U' },
            { type: LayoutItemType.Key, id: 37, size: '1U' },
            { type: LayoutItemType.Spacing, size: '1U' },
            { type: LayoutItemType.Key, id: 41, size: '1U' },
            { type: LayoutItemType.Key, id: 42, size: '1U' },
            { type: LayoutItemType.Key, id: 43, size: '1U' },
            { type: LayoutItemType.Key, id: 44, size: '1U' },
            { type: LayoutItemType.Key, id: 45, size: '1U' },
            { type: LayoutItemType.Key, id: 46, size: '1U' },
            ...(type === KeyboardLayoutType.Iso
              ? [{ type: LayoutItemType.Key, id: 47, size: '1U' }]
              : [{ type: LayoutItemType.Key, id: 31, size: '2.25U' }]),
        ],
        // Row 4
        [
            { type: LayoutItemType.Key, id: 48, size: (type === KeyboardLayoutType.Iso ? '1.25U' : '2.25U') },
            ...(type === KeyboardLayoutType.Iso
                ? [{ type: LayoutItemType.Key, id: 49, size: '1U' }]
                : []),
            { type: LayoutItemType.Key, id: 50, size: '1U' },
            { type: LayoutItemType.Key, id: 51, size: '1U' },
            { type: LayoutItemType.Key, id: 52, size: '1U' },
            { type: LayoutItemType.Key, id: 53, size: '1U' },
            { type: LayoutItemType.Key, id: 54, size: '1U' },
            { type: LayoutItemType.Spacing, size: '1U' },
            { type: LayoutItemType.Key, id: 58, size: '1U' },
            { type: LayoutItemType.Key, id: 59, size: '1U' },
            { type: LayoutItemType.Key, id: 60, size: '1U' },
            { type: LayoutItemType.Key, id: 61, size: '1U' },
            { type: LayoutItemType.Key, id: 62, size: '1U' },
            { type: LayoutItemType.Key, id: 63, size: '2.75U' },
        ],
        // Row 5
        [
            { type: LayoutItemType.Key, id: 64, size: '1.25U' },
            { type: LayoutItemType.Key, id: 65, size: '1.25U' },
            { type: LayoutItemType.Key, id: 66, size: '1.25U' },
            { type: LayoutItemType.Key, id: 67, size: '1.75U' },
            { type: LayoutItemType.Key, id: 68, size: '1.5U' },
            { type: LayoutItemType.Spacing, size: '1U' },
            { type: LayoutItemType.Key, id: 74, size: '1.25U' },
            { type: LayoutItemType.Key, id: 75, size: '1.75U' },
            { type: LayoutItemType.Key, id: 76, size: '1.25U' },
            { type: LayoutItemType.Key, id: 77, size: '1.25U' },
            { type: LayoutItemType.Key, id: 78, size: '1.25U' },
            { type: LayoutItemType.Key, id: 79, size: '1.25U' },
        ],
        // Row 6
        [
            { type: LayoutItemType.Spacing, size: '4.75U' },
            { type: LayoutItemType.Key, id: 70, size: '1.25U' },
            { type: LayoutItemType.Key, id: 71, size: '1U' },
            { type: LayoutItemType.Spacing, size: '1U' },
            { type: LayoutItemType.Key, id: 72, size: '1U' },
            { type: LayoutItemType.Key, id: 73, size: '1.25U' },
        ],
    ]
}
