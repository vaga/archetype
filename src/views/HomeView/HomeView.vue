<template>
  <share-form />
  <section>
    <h3>Latest layers</h3>
    <div class="profiles">
      <router-link
        class="profile-link"
        v-for="profile in profiles"
        :key="profile.ref.value.id"
        :to="'/' + profile.ref.value.id"
      >
        <b>{{ profile.data.name }}</b> by <b>{{ profile.data.author }}</b>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAPI } from '../../api'
import ShareForm from './ShareForm.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    ShareForm,
  },

  setup() {
    const api = useAPI()
    const profiles = ref([])

    api.getLatestProfile().then((data) => profiles.value = data)

    return {
      profiles,
    }
  },
})
</script>

<style lang="scss">
.profiles {
  column-count: 2;
}

.profile-link {
  display: block;
  margin: 4px;
}
</style>
