<template>
  <div>
{{ result?.rocket }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { GET_ROCKET } from '@/queries/rockets.js'

const route = useRoute()

const { result } = GET_ROCKET(route.params.id)
</script>

<style>

</style>