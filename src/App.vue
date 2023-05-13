<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/rockets">Rockets</router-link>
  </div>
  <RouterView />
  </div>
  
</template>

<style scoped>

</style>
