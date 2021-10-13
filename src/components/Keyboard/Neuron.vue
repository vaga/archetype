<template>
  <g class="neuron">
    <path
      class="neuron-outline"
      fill="none"
      stroke="#b4b4b4"
      stroke-width="1.5"
      d="M474.8,610.2c-1,2.4-3.8,3.6-6.2,2.5c-0.1,0-0.1-0.1-0.2-0.1l-48.5-23 c-7.2-3.4-10.3-12-6.9-19.3l29.4-63.2c2.8-6,4.2-12.5,4.2-19.1v-31c0-5.8,4.7-10.5,10.5-10.5l0,0h55.4c5.8,0,10.5,4.7,10.5,10.5l0,0 v31c0,6.6,1.4,13.1,4.2,19.1l29.4,63.2c3.4,7.2,0.3,15.8-6.9,19.3l-48.5,23c-2.4,1.1-5.2,0.1-6.3-2.3c0-0.1-0.1-0.1-0.1-0.2l0,0 c-2.3-5.5-8.6-8.1-14.1-5.8C477.9,605.5,475.9,607.6,474.8,610.2L474.8,610.2z"
    />
    <path
      class="neuron-led"
      :fill="color"
      stroke="#b4b4b4"
      stroke-width="1.5"
      d="M454.5,510c-0.2-0.6,0.2-1.2,0.7-1.3l28.6-9.8c0.2-0.1,0.5-0.1,0.7,0l29.7,9.8 c0.6,0.2,0.9,0.8,0.7,1.3l-7.5,26.9c0,0.2-0.1,0.3-0.2,0.4L485,561.9c-0.4,0.5-1.1,0.5-1.6,0.1l-0.1-0.1l-21.1-24.6 c-0.1-0.1-0.2-0.3-0.2-0.4L454.5,510L454.5,510z M465.2,514.6c-0.1-0.5,0.2-1.1,0.7-1.3l18.1-6c0.2-0.1,0.5-0.1,0.7,0l18.8,6 c0.5,0.2,0.9,0.7,0.8,1.3l-3.7,19.6c0,0.3-0.2,0.5-0.4,0.7l-15.1,12c-0.4,0.3-1,0.3-1.4,0l-14.3-12c-0.2-0.2-0.3-0.4-0.4-0.6 L465.2,514.6L465.2,514.6z"
    />
  </g>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

const NEURON_LED_INDEX = 131

export default defineComponent({
  name: 'Neuron',

  props: {
    colormap: {
      type: Array,
      required: true,
    },
    palette: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    return {
      color: computed(() => props.palette[props.colormap[NEURON_LED_INDEX]].rgb),
    }
  },
})
</script>
