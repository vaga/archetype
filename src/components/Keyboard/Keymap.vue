<template>
  <g class="keymap">
    <g
      v-for="key in keys"
      :key="key.keymapIndex"
      class="keymap-key"
      @click="handleClick($event, key)"
    >
      <path
        :stroke="key.color"
        :d="key.path"
      />
      <key-label :options="key" />
    </g>
  </g>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import KeyLabel from './KeyLabel.vue'
import { KeyDefinition } from './types'

const keys: KeyDefinition[] = [
  {
    ledIndex: 0,
    keymapIndex: 0,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M57.1,24.8L57.1,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H62.3c-2.9,0-5.3-2.4-5.3-5.3L57.1,24.8L57.1,24.8z', 
    anchor: { x: 82.70000076293945, y: 45.25 },
  },
  {
    ledIndex: 1,
    keymapIndex: 1,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M116,24.8L116,24.8c0-2.9,2.4-5.3,5.3-5.3H162c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.8c-2.9,0-5.3-2.4-5.3-5.3L116,24.8L116,24.8z', 
    anchor: { x: 141.5999984741211, y: 45.25 },
  },
  {
    ledIndex: 2,
    keymapIndex: 2,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M174.7,24.8L174.7,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H180c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 200.3499984741211, y: 45.25 },
  },
  {
    ledIndex: 3,
    keymapIndex: 3,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M233.6,24.8L233.6,24.8c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L233.6,24.8L233.6,24.8z', 
    anchor: { x: 259.1499938964844, y: 45.25 },
  },
  {
    ledIndex: 4,
    keymapIndex: 4,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M292.3,24.8L292.3,24.8c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L292.3,24.8L292.3,24.8z', 
    anchor: { x: 317.8499755859375, y: 45.25 },
  },
  {
    ledIndex: 5,
    keymapIndex: 5,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M351.2,24.8L351.2,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 376.8500061035156, y: 45.25 },
  },
  {
    ledIndex: 6,
    keymapIndex: 6,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M410,24.8L410,24.8c0-2.9,2.4-5.3,5.3-5.3H456c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 435.6499938964844, y: 45.25 },
  },
  {
    ledIndex: 39,
    keymapIndex: 9,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M508.7,24.8L508.7,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H514c-2.9,0-5.3-2.4-5.3-5.3L508.7,24.8L508.7,24.8z', 
    anchor: { x: 534.3500061035156, y: 45.25 },
  },
  {
    ledIndex: 38,
    keymapIndex: 10,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M567.4,24.8L567.4,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 593.0500183105469, y: 45.25 },
  },
  {
    ledIndex: 37,
    keymapIndex: 11,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M626.2,24.8L626.2,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 651.8500061035156, y: 45.25 },
  },
  {
    ledIndex: 36,
    keymapIndex: 12,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M685,24.8L685,24.8c0-2.9,2.4-5.3,5.3-5.3H731c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V24.8L685,24.8L685,24.8z', 
    anchor: { x: 710.6499938964844, y: 45.25 },
  },
  {
    ledIndex: 35,
    keymapIndex: 13,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M743.8,24.8L743.8,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H749c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 769.3999938964844, y: 45.25 },
  },
  {
    ledIndex: 34,
    keymapIndex: 14,
    keycap: {
      size: '1U',
      profile: 'R4',
    },
    path: 'M802.5,24.8L802.5,24.8c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V24.8z', 
    anchor: { x: 828.1499938964844, y: 45.25 },
  },
  {
    ledIndex: 33,
    keymapIndex: 15,
    keycap: {
      size: '2U',
      profile: 'R4',
    },
    path: 'M861.3,24.8c0-2.9,2.4-5.3,5.3-5.3l0,0h98.8c2.9,0,5.3,2.4,5.3,5.3l0,0v40.9 c0,2.9-2.4,5.3-5.3,5.3l0,0h-98.8c-2.9,0-5.3-2.4-5.3-5.3l0,0V24.8z', 
    anchor: { x: 915.9999694824219, y: 45.25 },
  },
  {
    ledIndex: 7,
    keymapIndex: 16,
    keycap: {
      size: '1.5U',
      profile: 'R3',
    },
    path: 'M57.7,84.4c0-2.9,2.4-5.3,5.3-5.3h70.9c2.9,0,5.3,2.4,5.3,5.3l0,0v40.9 c0,2.9-2.4,5.3-5.3,5.3l0,0h-71c-2.9,0-5.3-2.4-5.3-5.3L57.7,84.4L57.7,84.4z', 
    anchor: { x: 98.39999771118164, y: 104.85000228881836 },
  },
  {
    ledIndex: 8,
    keymapIndex: 17,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M145.8,84.4L145.8,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H151c-2.9,0-5.3-2.4-5.3-5.3L145.8,84.4L145.8,84.4z', 
    anchor: { x: 171.4000015258789, y: 104.85000228881836 },
  },
  {
    ledIndex: 9,
    keymapIndex: 18,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M204.6,84.4L204.6,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L204.6,84.4L204.6,84.4z', 
    anchor: { x: 230.25000762939453, y: 104.85000228881836 },
  },
  {
    ledIndex: 10,
    keymapIndex: 19,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M263.5,84.4L263.5,84.4c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L263.5,84.4L263.5,84.4z', 
    anchor: { x: 289.04998779296875, y: 104.85000228881836 },
  },
  {
    ledIndex: 11,
    keymapIndex: 20,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M322.2,84.4L322.2,84.4c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L322.2,84.4L322.2,84.4z', 
    anchor: { x: 347.75, y: 104.85000228881836 },
  },
  {
    ledIndex: 12,
    keymapIndex: 21,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M381.1,84.4L381.1,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4z', 
    anchor: { x: 406.75, y: 104.85000228881836 },
  },
  {
    ledIndex: 47,
    keymapIndex: 24,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M490.7,84.4L490.7,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L490.7,84.4L490.7,84.4z', 
    anchor: { x: 516.3500061035156, y: 104.85000228881836 },
  },
  {
    ledIndex: 46,
    keymapIndex: 25,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M548.1,84.4L548.1,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4z', 
    anchor: { x: 573.7499694824219, y: 104.85000228881836 },
  },
  {
    ledIndex: 45,
    keymapIndex: 26,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M605.6,84.4L605.6,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4z', 
    anchor: { x: 631.2499694824219, y: 104.85000228881836 },
  },
  {
    ledIndex: 44,
    keymapIndex: 27,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M663,84.4L663,84.4c0-2.9,2.4-5.3,5.3-5.3H709c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4z', 
    anchor: { x: 688.6499938964844, y: 104.85000228881836 },
  },
  {
    ledIndex: 43,
    keymapIndex: 28,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M720.5,84.4L720.5,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4L720.5,84.4L720.5,84.4z', 
    anchor: { x: 746.1499938964844, y: 104.85000228881836 },
  },
  {
    ledIndex: 42,
    keymapIndex: 29,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M777.9,84.4L777.9,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4z', 
    anchor: { x: 803.5500183105469, y: 104.85000228881836 },
  },
  {
    ledIndex: 41,
    keymapIndex: 30,
    keycap: {
      size: '1U',
      profile: 'R3',
    },
    path: 'M835.4,84.4L835.4,84.4c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V84.4z', 
    anchor: { x: 861.0500183105469, y: 104.85000228881836 },
  },
  {
    ledIndex: 40,
    keymapIndex: 47,
    keycap: {
      size: '1.5U',
      profile: 'R3',
    },
    path: 'M892.8,84.4c0-2.9,2.3-5.3,5.2-5.3l0,0h67.5c2.9,0,5.2,2.4,5.2,5.3v40.9 c0,2.9-2.3,5.3-5.2,5.3l0,0H898c-2.9,0-5.2-2.4-5.2-5.3l0,0V84.4z', 
    anchor: { x: 931.75, y: 104.85000228881836 },
  },
  {
    ledIndex: 13,
    keymapIndex: 32,
    keycap: {
      size: '1.75U',
      profile: 'R2',
    },
    path: 'M57.7,144c0-2.9,2.2-5.3,4.9-5.3l0,0h79.3c2.7,0,4.9,2.4,4.9,5.3l0,0v40.9 c0,2.9-2.2,5.3-4.9,5.3l0,0H62.6c-2.7,0-4.9-2.4-4.9-5.3l0,0C57.7,184.9,57.7,144,57.7,144z', 
    anchor: { x: 102.25, y: 164.4499969482422 },
  },
  {
    ledIndex: 14,
    keymapIndex: 33,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M153.8,144L153.8,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H159c-2.9,0-5.3-2.4-5.3-5.3L153.8,144L153.8,144z', 
    anchor: { x: 179.4000015258789, y: 164.4499969482422 },
  },
  {
    ledIndex: 15,
    keymapIndex: 34,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M212.6,144L212.6,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V144z', 
    anchor: { x: 238.25, y: 164.4499969482422 },
  },
  {
    ledIndex: 16,
    keymapIndex: 35,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M271.4,144L271.4,144c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L271.4,144L271.4,144z', 
    anchor: { x: 296.9499816894531, y: 164.4499969482422 },
  },
  {
    ledIndex: 17,
    keymapIndex: 36,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M330.2,144L330.2,144c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L330.2,144L330.2,144z', 
    anchor: { x: 355.75, y: 164.4499969482422 },
  },
  {
    ledIndex: 18,
    keymapIndex: 37,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M389,144L389,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V144z', 
    anchor: { x: 414.6499938964844, y: 164.4499969482422 },
  },
  {
    ledIndex: 54,
    keymapIndex: 41,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M508.6,144L508.6,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L508.6,144L508.6,144z', 
    anchor: { x: 534.2500152587891, y: 164.4499969482422 },
  },
  {
    ledIndex: 53,
    keymapIndex: 42,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M567.4,144L567.4,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V144z', 
    anchor: { x: 593.0500183105469, y: 164.4499969482422 },
  },
  {
    ledIndex: 52,
    keymapIndex: 43,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M626.2,144L626.2,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V144z', 
    anchor: { x: 651.8500061035156, y: 164.4499969482422 },
  },
  {
    ledIndex: 51,
    keymapIndex: 44,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M684.9,144L684.9,144c0-2.9,2.4-5.3,5.3-5.3H731c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V144z', 
    anchor: { x: 710.6000061035156, y: 164.4499969482422 },
  },
  {
    ledIndex: 50,
    keymapIndex: 45,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M743.7,144L743.7,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3H749c-2.9,0-5.3-2.4-5.3-5.3V144L743.7,144L743.7,144z', 
    anchor: { x: 769.3500061035156, y: 164.4499969482422 },
  },
  {
    ledIndex: 49,
    keymapIndex: 46,
    keycap: {
      size: '1U',
      profile: 'R2',
    },
    path: 'M802.5,144L802.5,144c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V144z', 
    anchor: { x: 828.1499938964844, y: 164.4499969482422 },
  },
  {
    ledIndex: 48,
    keymapIndex: 31,
    keycap: {
      size: '2.25U',
      profile: 'R2',
    },
    path: 'M861.3,144c0-2.9,2.1-5.3,4.7-5.3l0,0h100c2.6,0,4.7,2.4,4.7,5.3l0,0v40.9 c0,2.9-2.1,5.3-4.7,5.3l0,0H866c-2.6,0-4.7-2.4-4.7-5.3l0,0V144z', 
    anchor: { x: 916, y: 164.4499969482422 },
  },
  {
    ledIndex: 19,
    keymapIndex: 48,
    keycap: {
      size: '2.25U',
      profile: 'R1',
    },
    path: 'M57.7,203.6c0-2.9,2.1-5.3,4.7-5.3h100.9c2.6,0,4.7,2.4,4.7,5.3v40.9 c0,2.9-2.1,5.3-4.7,5.3H62.4c-2.6,0-4.7-2.4-4.7-5.3V203.6z', 
    anchor: { x: 112.85000228881836, y: 224.0500030517578 },
  },
  {
    ledIndex: 21,
    keymapIndex: 50,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M175.7,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.8c-2.9,0-5.3-2.4-5.3-5.3L175.7,203.6L175.7,203.6z', 
    anchor: { x: 201.29999542236328, y: 224.0500030517578 },
  },
  {
    ledIndex: 22,
    keymapIndex: 51,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M234.5,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6z', 
    anchor: { x: 260.1499938964844, y: 224.0500030517578 },
  },
  {
    ledIndex: 23,
    keymapIndex: 52,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M293.3,203.6c0-2.9,2.4-5.3,5.3-5.3h40.6c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3L293.3,203.6L293.3,203.6z', 
    anchor: { x: 318.8499755859375, y: 224.0500030517578 },
  },
  {
    ledIndex: 24,
    keymapIndex: 53,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M352.1,203.6c0-2.9,2.4-5.3,5.3-5.3H398c2.9,0,5.3,2.4,5.3,5.3v40.9c0,2.9-2.4,5.3-5.3,5.3 h-40.7c-2.9,0-5.3-2.4-5.3-5.3L352.1,203.6L352.1,203.6z', 
    anchor: { x: 377.6499938964844, y: 224.0500030517578 },
  },
  {
    ledIndex: 25,
    keymapIndex: 54,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M411,203.6c0-2.9,2.4-5.3,5.3-5.3H457c2.9,0,5.3,2.4,5.3,5.3v40.9c0,2.9-2.4,5.3-5.3,5.3 h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6z', 
    anchor: { x: 436.6499938964844, y: 224.0500030517578 },
  },
  {
    ledIndex: 60,
    keymapIndex: 58,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M522.5,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6z', 
    anchor: { x: 548.1499938964844, y: 224.0500030517578 },
  },
  {
    ledIndex: 59,
    keymapIndex: 59,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M579.4,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6z', 
    anchor: { x: 605.0500183105469, y: 224.0500030517578 },
  },
  {
    ledIndex: 58,
    keymapIndex: 60,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M638.2,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6z', 
    anchor: { x: 663.8500061035156, y: 224.0500030517578 },
  },
  {
    ledIndex: 57,
    keymapIndex: 61,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M696.9,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6z', 
    anchor: { x: 722.5500183105469, y: 224.0500030517578 },
  },
  {
    ledIndex: 56,
    keymapIndex: 62,
    keycap: {
      size: '1U',
      profile: 'R1',
    },
    path: 'M755.7,203.6c0-2.9,2.4-5.3,5.3-5.3h40.7c2.9,0,5.3,2.4,5.3,5.3v40.9 c0,2.9-2.4,5.3-5.3,5.3h-40.7c-2.9,0-5.3-2.4-5.3-5.3V203.6L755.7,203.6L755.7,203.6z', 
    anchor: { x: 781.3500061035156, y: 224.0500030517578 },
  },
  {
    ledIndex: 55,
    keymapIndex: 63,
    keycap: {
      size: '2.75U',
      profile: 'R1',
    },
    path: 'M814.2,203.6c0-2.9,2.4-5.3,5.3-5.3l0,0h146c2.9,0,5.3,2.4,5.3,5.3l0,0v40.9 c0,2.9-2.4,5.3-5.3,5.3l0,0h-146c-2.9,0-5.3-2.4-5.3-5.3l0,0V203.6z', 
    anchor: { x: 892.5, y: 224.0500030517578 },
  },
  {
    ledIndex: 26,
    keymapIndex: 64,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M57.7,263.2c0-2.9,2.4-5.3,5.3-5.3h55.7c2.9,0,5.3,2.4,5.3,5.3v40.7c0,2.9-2.4,5.3-5.3,5.3 H62.9c-2.9,0-5.3-2.4-5.3-5.3L57.7,263.2L57.7,263.2z', 
    anchor: { x: 90.79999923706055, y: 283.5500183105469 },
  },
  {
    ledIndex: 27,
    keymapIndex: 65,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M132.7,263.2c0-2.9,2.4-5.3,5.3-5.3h55.7c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3H138c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 165.8499984741211, y: 283.5500183105469 },
  },
  {
    ledIndex: 28,
    keymapIndex: 66,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M207.7,263.2c0-2.9,2.4-5.3,5.3-5.3h55.7c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3H213c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 240.8499984741211, y: 283.5500183105469 },
  },
  {
    ledIndex: 29,
    keymapIndex: 67,
    keycap: {
      size: '1.75U',
      profile: 'R1',
    },
    path: 'M282.8,263.2c0-2.9,2.4-5.3,5.3-5.3h65.6c2.9,0,5.3,2.4,5.3,5.3l0,0v40.7 c0,2.9-2.3,5.3-5.2,5.3l0,0H288c-2.9,0-5.3-2.4-5.3-5.3l0,0L282.8,263.2L282.8,263.2z', 
    anchor: { x: 320.84999084472656, y: 283.5500183105469 },
  },
  {
    ledIndex: 30,
    keymapIndex: 68,
    keycap: {
      size: '1.5U',
      profile: 'R1',
    },
    path: 'M367.7,263.2c0-2.9,2.4-5.3,5.3-5.3h83.6c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3H373c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 414.8000030517578, y: 283.5500183105469 },
  },
  {
    ledIndex: 31,
    keymapIndex: 70,
    keycap: {
      size: '1.25U',
      profile: 'CUSTOM',
    },
    path: 'M317.1,325.7c-0.6-0.9-1-1.9-1-3c0-2.9,2.4-5.3,5.3-5.3h76.9c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3H350c-1.7,0-3.3-0.8-4.3-2.2L317.1,325.7z', 
    anchor: { x: 370.84999084472656, y: 343.0500183105469 },
  },
  {
    ledIndex: 32,
    keymapIndex: 71,
    keycap: {
      size: '1U',
      profile: 'CUSTOM',
    },
    path: 'M410.6,322.7c0-2.9,2.4-5.3,5.3-5.3h40.5c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3h-40.5c-2.9,0-5.3-2.4-5.3-5.3V322.7z', 
    anchor: { x: 436.1499938964844, y: 343.0500183105469 },
  },
  {
    ledIndex: 68,
    keymapIndex: 72,
    keycap: {
      size: '1U',
      profile: 'CUSTOM',
    },
    path: 'M508.2,322.7c0-2.9,2.4-5.3,5.3-5.3H554c2.9,0,5.3,2.4,5.3,5.3v40.7c0,2.9-2.4,5.3-5.3,5.3 h-40.5c-2.9,0-5.3-2.4-5.3-5.3L508.2,322.7L508.2,322.7z', 
    anchor: { x: 533.75, y: 343.0500183105469 },
  },
  {
    ledIndex: 67,
    keymapIndex: 73,
    keycap: {
      size: '1.25U',
      profile: 'CUSTOM',
    },
    path: 'M652.4,325.7c0.6-0.9,1-1.9,1-3c0-2.9-2.4-5.3-5.3-5.3h-76.9c-2.9,0-5.3,2.4-5.3,5.3v40.7 c0,2.9,2.4,5.3,5.3,5.3h48.3c1.7,0,3.3-0.8,4.3-2.2L652.4,325.7z', 
    anchor: { x: 598.6500244140625, y: 343.0500183105469 },
  },
  {
    ledIndex: 66,
    keymapIndex: 74,
    keycap: {
      size: '1.5U',
      profile: 'R1',
    },
    path: 'M508.6,263.2c0-2.9,2.4-5.3,5.3-5.3h83.6c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3h-83.6c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 555.6999969482422, y: 283.5500183105469 },
  },
  {
    ledIndex: 65,
    keymapIndex: 75,
    keycap: {
      size: '1.75U',
      profile: 'R1',
    },
    path: 'M609.6,263.2c0-2.9,2.4-5.3,5.3-5.3l0,0h65.6c2.9,0,5.3,2.4,5.3,5.3l0,0v40.7 c0,2.9-2.3,5.3-5.2,5.3l0,0H615c-2.9,0-5.3-2.4-5.3-5.3l0,0L609.6,263.2L609.6,263.2z', 
    anchor: { x: 647.699951171875, y: 283.5500183105469 },
  },
  {
    ledIndex: 64,
    keymapIndex: 76,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M694.3,263.2c0-2.9,2.4-5.3,5.3-5.3h55.7c2.9,0,5.3,2.4,5.3,5.3l0,0v40.7 c0,2.9-2.4,5.3-5.3,5.3l0,0h-55.7c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 727.4499816894531, y: 283.5500183105469 },
  },
  {
    ledIndex: 63,
    keymapIndex: 77,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M769.4,263.2c0-2.9,2.4-5.3,5.3-5.3h55.7c2.9,0,5.3,2.4,5.3,5.3l0,0v40.7 c0,2.9-2.4,5.3-5.3,5.3l0,0h-55.7c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 802.5500183105469, y: 283.5500183105469 },
  },
  {
    ledIndex: 62,
    keymapIndex: 78,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M844.6,263.2c0-2.9,2.4-5.3,5.3-5.3h40.5c2.9,0,5.3,2.4,5.3,5.3v40.7 c0,2.9-2.4,5.3-5.3,5.3h-40.5c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 870.1499633789062, y: 283.5500183105469 },
  },
  {
    ledIndex: 61,
    keymapIndex: 79,
    keycap: {
      size: '1.25U',
      profile: 'R1',
    },
    path: 'M904.4,263.2c0-2.9,2.4-5.3,5.3-5.3h55.7c2.9,0,5.3,2.4,5.3,5.3l0,0v40.7 c0,2.9-2.4,5.3-5.3,5.3l0,0h-55.7c-2.9,0-5.3-2.4-5.3-5.3V263.2z', 
    anchor: { x: 937.5500183105469, y: 283.5500183105469 },
  },
]

export default defineComponent({
  name: 'Keymap',

  components: {
    KeyLabel,
  },

  props: {
    keymap: {
      type: Array,
      required: true,
    },
    colormap: {
      type: Array,
      required: true,
    },
    palette: {
      type: Array,
      required: true,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const k = computed(() => keys.map(key => ({
      ...key,
      color: props.palette[props.colormap[key.ledIndex]].rgb,
      keymap: props.keymap[key.keymapIndex],
    })))
    return {
        keys: k,
        handleClick($event, key) {
          emit('click', { $event, key }) 
        },
    }
  }
})
</script>

<style lang="scss">
.keymap {
  font-family: sans-serif;
}

.keymap-key {
  fill: none;
  pointer-events: all;
  cursor: pointer;

  &:hover {
    stroke-width: 3;
  }
}
</style>
