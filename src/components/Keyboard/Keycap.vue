<template>
  <g>
    <path :d="path" fill="none" :stroke="color" />
    <text
      v-if="label"
      :x="width / 2"
      :y="height / 2"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      <tspan
        class="keycap__label"
        v-for="(line, i) in lines"
        :key="line"
        :x="width / 2"
        :dy="`${(i === 0 ? -(lines.length - 1) / 2 : 1) * 1.5}em`"
      >
        {{ line }}
      </tspan>
    </text>
  </g>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { KEY_BORDER_RADIUS, KEY_SIZE, KEY_MARGIN, KEY_TEXT_SIZES } from './key'
import { LayoutItemType } from './layout'

export default defineComponent({
  name: 'Keycap',

  props: {
    type: {
      type: Number as PropType<LayoutItemType>
    },
    size: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: null,
    },

    color: {
      type: String,
      default: 'black',
    }
  },

  setup(props) {
    const width = computed(() => KEY_SIZE * parseFloat(props.size.slice(0, -1)))
    const height = KEY_SIZE
    const path = computed(() => {
      const innerWidth = width.value - 2 * KEY_BORDER_RADIUS - 2 - KEY_MARGIN * 2
      const innerHeight = height - 2 * KEY_BORDER_RADIUS - 2 - KEY_MARGIN * 2

      if (props.type === LayoutItemType.IsoEnterKey) {
        const bottomInnerWidth = KEY_SIZE * 1.25 - 2 * KEY_BORDER_RADIUS - 2 - KEY_MARGIN * 2
        return `M${KEY_BORDER_RADIUS+KEY_MARGIN},${KEY_MARGIN}` +
          `h${innerWidth}` + // top
          `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 ${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS}` +
          `v${2 * (innerHeight + KEY_MARGIN + KEY_BORDER_RADIUS)}`  + // right
          `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 -${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS}` +
          `h-${bottomInnerWidth}` + // bottom
          `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 -${KEY_BORDER_RADIUS},-${KEY_BORDER_RADIUS}` +
          `v-${innerHeight +  2 * KEY_MARGIN}` + // upper left
          `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 0 -${KEY_BORDER_RADIUS},-${KEY_BORDER_RADIUS}` +
          `h-${innerWidth - bottomInnerWidth - 2 * KEY_BORDER_RADIUS }` + // bottom
          `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 -${KEY_BORDER_RADIUS},-${KEY_BORDER_RADIUS}` +
          `v-${innerHeight}` + // lower left
          `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 ${KEY_BORDER_RADIUS},-${KEY_BORDER_RADIUS}` +
          `z`
      }

      return `M${KEY_BORDER_RADIUS+KEY_MARGIN},${KEY_MARGIN}` +
        `h${innerWidth}` + // top
        `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 ${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS}` +
        `v${innerHeight}`  + // right
        `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 -${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS}` +
        `h-${innerWidth}` + // bottom
        `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 -${KEY_BORDER_RADIUS},-${KEY_BORDER_RADIUS}` +
        `v-${innerHeight}` + // left
        `a${KEY_BORDER_RADIUS},${KEY_BORDER_RADIUS} 0 0 1 ${KEY_BORDER_RADIUS},-${KEY_BORDER_RADIUS}` +
        `z`
    })

    const lines = computed(
      () => (props.label.length <= KEY_TEXT_SIZES[props.size]) ? [props.label] : props.label.split(' ')
    )

    return { 
        width,
        height,
        path,
        lines,
    }
  },
})
</script>

<style lang="scss">
.keycap__label {
  font-size: 2em;
  fill: black;
}
</style>
