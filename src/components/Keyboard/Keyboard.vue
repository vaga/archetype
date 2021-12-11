<template>
  <svg
    viewBox="0 0 1029 634"
    fill-rule="evenodd"
  >
    <keymap
      :keymap="keymap"
      :colormap="colormap"
      :palette="palette"
    />
    <underglow
      :colormap="colormap"
      :palette="palette"
    />
    <neuron
      :colormap="colormap"
      :palette="palette"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Neuron from './Neuron.vue'
import Underglow from './Underglow.vue'
import Keymap from './Keymap.vue'

export default defineComponent({
    name: 'Keyboard',
    components: {
      Neuron,
      Underglow,
      Keymap,
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
})
</script>
