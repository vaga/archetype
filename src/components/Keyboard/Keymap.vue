<template>
  <g class="keymap">
    <keycap 
      v-for="(keycap, i) of keycaps"
      :key="i"
      :transform="`translate(${keycap.x}, ${keycap.y})`"
      :type="keycap.type"
      :color="keycap.color"
      :size="keycap.size"
      :label="keycap.label"
    />
  </g>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Keycap from './Keycap.vue'
import { KeyboardLayout, LayoutItemType } from './layout'
import { KeymapItem, KEY_SIZE } from './key'

export default defineComponent({
  name: 'Keymap',

  components: {
    Keycap,
  },

  props: {
    layout: {
      type: Array as PropType<KeyboardLayout>,
      required: true,
    },
  },

  setup(props) {
    const keycaps = computed(() => {
      return props.layout.reduce((acc: Array<KeymapItem>, line, y) => {
        let x = 0
        for (let keycap of line) {
          const size = parseFloat(keycap.size.slice(0, -1))

          if (keycap.type === LayoutItemType.Spacing) {
            x += size * KEY_SIZE
            continue
          }

          acc.push({
            ...keycap,
            x,
            y: y * KEY_SIZE,
          })

          x += size * KEY_SIZE
        }
        return acc
      }, [])
    })

    return {
      keycaps,
    }
  },
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
