<template>
  <div v-if="error !== null">
    The configuration is not found or not valid... {{ error }}
  </div>
  <div v-else-if="profile === null">
    Loading...
  </div>
  <div v-else>
    <h1>{{ profile.name }} by {{ profile.author }}</h1>
    <select
      class="app-select"
      v-model="layerIndex"
    >
      <option
        v-for="index in layerIndexes"
        :key="index"
        :value="index"
      >
        Layer {{ index }}
      </option>
    </select>
    <div class="app-keyboard">
      <keyboard
        :keymap="profile.layers.keymap.custom[layerIndex]"
        :colormap="profile.layers.colormap[layerIndex]"
        :palette="profile.layers.palette"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Keyboard from '../components/Keyboard'
import { useAPI } from '../api'

export default defineComponent({
  name: 'App',

  components: {
    Keyboard,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const api = useAPI()
    const profile = ref(null)
    const error = ref(null)
    const layerIndex = ref<number>(0)
    const layerIndexes = computed(() => [...Array(10).keys()])

    api.getById(props.id).then((data) => {
      if (!api.validate(data)) {
        error.value = 'not-valid'
      }
      profile.value = data
    }).catch(() => {
      error.value = 'not-found'
    })

    return {
      profile,
      error,
      layerIndex,
      layerIndexes,
    }
  },
})
</script>

<style lang="scss">
.app-select {
  margin: 16px;
}

.app-keyboard {
  width: 900px;
  padding: 32px;
  margin: 16px;
  border: 1px solid #000;
}
</style>
