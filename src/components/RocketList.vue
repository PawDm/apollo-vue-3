<template>
  <div v-if="loading">Loading...</div>

<ul v-else-if="result && result.rockets">
  <li v-for="rocket of result.rockets" :key="rocket.id">
    <router-link :to="{name: 'rocket', params: { id: rocket.id}}">{{ rocket.name }}</router-link>
  </li>
</ul>
<button @click="refetch">refetch</button>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { GET_ROCKETS } from '@/queries/rockets.js'

const { result, loading, refetch } = GET_ROCKETS()

</script>

<style lang="scss" scoped>

</style>