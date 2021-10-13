<template>
    Name:
    <input type="text" v-model="inputs.name" />
    Author:
    <input type="text" v-model="inputs.author" />
    Config (layers.json)
    <textarea v-model="inputs.layers"></textarea>
    <button @click="onSubmit">Upload</button>
    <div v-for="profile in profiles" :key="profile.ref.value.id">
      <router-link :to="'/' + profile.ref.value.id">{{ profile.data.name }} by {{ profile.data.author }}</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAPI } from '../api'

export default defineComponent({
  name: 'HomeView',

  setup() {
    const inputs = reactive({
      name: '',
      author: '',
      layers: '{}',
    })

    const api = useAPI()
    const router = useRouter()
    const profiles = ref([])

    api.getLatestProfile().then((data) => profiles.value = data)

    return {
      inputs,
      profiles,
      onSubmit: async () => {
        try {
          const profile = {
            name: inputs.name,
            author: inputs.author,
            layers: JSON.parse(`${inputs.layers}`)
          }

          if (!api.validate(profile)) {
            return
          }

          api.create(profile).then((response) => {
            router.push('/' + response.ref.value.id)
          })
        } catch(e) {
          console.error(e)
        }
      },
    }
  },
})
</script>

<style lang="scss">
</style>
