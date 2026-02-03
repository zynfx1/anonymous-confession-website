<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderComponents from './components/HeaderComponents.vue';
import FooterComponents from './components/FooterComponents.vue';
import AddConfession from './components/AddConfession.vue';
import { useConfessionStore, addNewConfession } from './stores/AddConfessionStore.ts';

import ConfessionCard from './components/ConfessionCard.vue';

const confessionModal = useConfessionStore();
const newConfession = addNewConfession();
</script>

<template>
  <div class="bg-white">
    <HeaderComponents class="m-1"></HeaderComponents>

    <AddConfession
      :show="confessionModal.isModalVisible"
      @close="confessionModal.closeModal"
      @confessionEnvelope="newConfession.newConfessionFunction"
    ></AddConfession>
    <RouterView></RouterView>
    <FooterComponents></FooterComponents>
  </div>
</template>

<style scoped></style>
