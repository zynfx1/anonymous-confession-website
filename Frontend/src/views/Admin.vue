<script setup lang="ts">
import ConfessionCard from "@/components/ConfessionCard.vue";
import { useConfessionStore } from "@/stores/AddConfessionStore";
const confessionModal = useConfessionStore();
</script>

<template>
  <div class="h-150 w-full overflow-hidden bg-[#0f172a] py-10">
    <div class="animate-infinite-scroll-left flex w-max hover:[animation-play-state:paused]">
      <ConfessionCard></ConfessionCard>
    </div>
  </div>
  <div class="flex h-40 w-full items-center justify-end bg-[#0f172a] 2xl:top-233">
    <img
      src="../assets/img/plus1.png"
      alt=""
      class="mx-4 h-20 w-20 drop-shadow-lg drop-shadow-black/30 transition duration-200 ease-in-out hover:scale-105"
      @click="confessionModal.openModal"
    />
  </div>
</template>
