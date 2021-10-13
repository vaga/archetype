<template>
  <text
    class="key-label"
    :x="options.anchor.x"
    :y="options.anchor.y"
    text-anchor="middle"
    dominant-baseline="middle"
  >
    <tspan
      v-for="(line, i) in lines"
      :key="line"
      :x="options.anchor.x"
      :dy="`${(i === 0 ? -(lines.length - 1) / 2 : 1) * 1.5}em`"
    >
      {{ line }}
    </tspan>
  </text>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

const keycapsSize = {
  '1U': 7,
  '1.25U': 9,
  '1.5U': 11,
  '1.75U': 13,
  '2U': 15,
  '2.25U': 17,
  '2.75U': 19,
}

export default defineComponent({
  name: 'KeyLabel',

  props: {
    options: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const lines = computed(() => {
      let l = props.options.keymap.label
      if (props.options.keymap.extraLabel) {
        l = props.options.keymap.extraLabel + ' ' + l
      }
      if (l.length <= keycapsSize[props.options.keycap.size]) {
        return [l]
      } else {
        return l.split(' ')
      }
    })

    return {
      lines,
    }
  },
})
</script>

<style lang="scss">
.key-label {
  font-size: 0.6em;
  fill: black;
}
</style>
