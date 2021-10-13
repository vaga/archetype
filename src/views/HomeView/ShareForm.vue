<template>
  <section class="share-form">
    <h3>Share your layers</h3>
    <div v-show="error" class="error">
      Oops... something went wrong...
    </div>
    <div v-show="loading" class="valid">
     uploading... 
    </div>
    <div class="fieldgroup">
      <div class="field">
        <label>Name</label>
        <input type="text" v-model="inputs.name" />
      </div>
      <div class="field">
        <label>Author:</label>
        <input type="text" v-model="inputs.author" />
      </div>
    </div>
    <div class="field">
      <label>Copy/paste your layers.json</label>
      <textarea v-model="inputs.layers"></textarea>
    </div>
    <div class="buttons">
      <button @click="onSubmit">Upload</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAPI } from '../../api'

export default defineComponent({
  name: 'ShareForm',

  setup() {
    const api = useAPI()
    const router = useRouter()

    const inputs = reactive({
      name: '',
      author: '',
      layers: '{}',
    })

    const error = ref(false)
    const loading = ref(false)

    const onSubmit = () => {
      if (loading.value) { 
        return
      }

      loading.value = true
      error.value = false

      try {
        const profile = {
          name: inputs.name,
          author: inputs.author,
          layers: JSON.parse(`${inputs.layers}`)
        }

        if (!api.validate(profile)) {
          error.value = true 
          loading.value = false
          return
        }

        api.create(profile).then((response) => {
          loading.value = false
          router.push('/' + response.ref.value.id)
        })
      } catch (err) {
        console.error(err)
        error.value = true
        loading.value = false
      }
    }

    return {
      inputs,
      onSubmit,
      loading,
      error,
    }
  }
})
</script>

<style lang="scss">
.error {
  border: 1px solid #fb5151;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
}
.valid {
  border: 1px solid green;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
}
.share-form {
  margin-bottom: 16px;
}
.fieldgroup {
  display: flex;

  .field {
    flex: 1;
  }

  .field:not(:last-child) {
    margin-right: 16px;
  }
}

.field {
  margin-bottom: 16px;

  label {
    display: block;
  }
  input[type=text], textarea {
    border: 1px solid #ddd;
    padding: 8px 16px;
    width: 100%
  }

  textarea {
    height: 200px;
  }
}

.buttons {
  text-align: center;

  button {
    background: linear-gradient(90deg, rgba(254,18,124,1) 0%, rgba(107,26,247,1) 100%); 
    border: 0;
    padding: 16px;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
