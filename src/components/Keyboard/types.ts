export interface UnderglowDefinition {
  ledIndex: number,
  points: string,
}

export type Point = {
  x: number,
  y: number,
}

export interface KeycapDefinition {
  size: string,
  profile: string,
}

export interface KeyDefinition {
  ledIndex: number,
  keymapIndex: number,
  keycap: KeycapDefinition,
  path: string,
  anchor: Point,
}

export type ColormapConfig = Array<number>

export interface PaletteConfig {
  r: number,
  g: number,
  b: number,
  rgb: string,
}
