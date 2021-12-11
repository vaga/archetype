<template>
  <div v-if="error !== null">
    The configuration is not found or not valid... {{ error }}
  </div>
  <div v-else-if="profile === null">
    Loading...
  </div>
  <section v-else>
    <header class="profile-header">
      <h3>{{ profile.name }} by {{ profile.author }}</h3>
      <select
        class="profile-select"
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
    </header>
    <div class="profile-keyboard">
      <svg viewBox="0 0 2400 900" width="100%">
        <keymap :layout="layout" />
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Keyboard from '../components/Keyboard'
import Keymap from '../components/Keyboard/Keymap.vue'
import { useAPI } from '../api'
import { getLayout, LayoutItemType, KeyboardLayoutType } from '../components/Keyboard/layout'

export default defineComponent({
  name: 'App',

  components: {
    Keyboard,
    Keymap,
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

    const layout = computed(() => {
      const layout = getLayout(KeyboardLayoutType.Ansi)
      return layout.map(line => line.map(keycap => {
        if (keycap.type === LayoutItemType.Spacing) {
          return keycap
        }

        return {
          ...keycap,
          label: profile.value?.layers.keymap.custom[layerIndex.value][keycap.id].label,
        }
      }))
    })


    return {
      profile,
      error,
      layerIndex,
      layerIndexes,
      layout,
    }
  },
})
</script>

<style lang="scss">
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.profile-keyboard {
  padding: 32px;
  border: 1px solid #ddd;
}
</style>
