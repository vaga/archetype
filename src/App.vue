<template>
  <header class="app-header">
    <router-link :to="{ name: 'home' }">
      <svg xmlns="http://www.w3.org/2000/svg" height="75" viewBox="0 0 67.777 74.128">
        <defs>
          <linearGradient id="gradient" x1="-0.621" y1="0.407" x2="1.648" y2="0.409" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#fe127c"/>
            <stop offset="1" stop-color="#6b1af7"/>
          </linearGradient>
        </defs>
        <path d="M0,0,29.663,19.34V74.128L0,54.788Z" fill="#fe007c"/>
        <path d="M0,0,29.663,19.34V74.128L0,54.788Z" transform="translate(19.057)" fill="url(#gradient)"/>
        <path d="M0,0,29.663,19.34V74.128L0,54.788Z" transform="translate(38.113)" fill="#6b14f9"/>
      </svg>
    </router-link>
    <div>
      <h1 class="app-title">Archetype</h1>
      <h2 class="app-subtitle">Share your Dygma Raise layers</h2>
    </div>
  </header>
  <router-view />
  <footer class="app-footer">
    Project on
    <a href="https://github.com/vaga/archetype">Github</a>
    - 2021
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: #fff;
  line-height: 1.4;
}

h1, h2, h3 {
  margin: 0;
  font-weight: normal;
}

h3 {
  font-weight: bold;
  font-size: 24px;
  margin: 8px 0;
}

a {
  color: black;
  text-decoration-color: #6b1af7;
  text-decoration-thickness: .05em;
  text-underline-offset: 5px;

  &:hover, &:active {
    color: #FE127C;
    text-decoration-color: #FE127C;
  }
}

#app {
  width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  flex-direction: column;
}

.app {
  &-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 64px 0;
    line-height: 1;
  }

  &-title {
    font-size: 41px;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 16px;
  }

  &-subtitle {
    font-size: 18px;
    margin-left: 16px;
  }

  &-footer {
    margin-top: 64px;
    text-align: right;
  }
}
</style>
