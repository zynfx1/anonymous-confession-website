<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponents from './components/HeaderComponents.vue'
</script>

<template>
  <div class="bg-white">
    <HeaderComponents class="m-2"></HeaderComponents>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
