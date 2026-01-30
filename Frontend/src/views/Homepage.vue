<script setup lang="ts">
import { useConfessionStore } from '@/stores/AddConfessionStore'

const confessionModal = useConfessionStore()
</script>
<template>
  <div
    class="w-max-full from-cherry-rose-500 via-cherry-rose-200 item flex h-screen flex-col items-center justify-center bg-linear-to-br to-white"
  >
    <div class="max-h-500 w-full overflow-y-hidden bg-amber-500"></div>
    <div class="absolute flex h-40 w-full items-center justify-end 2xl:top-233">
      <img
        src="../assets/img/plus1.png"
        alt=""
        class="mx-4 h-20 w-20 drop-shadow-lg drop-shadow-black/30 transition duration-200 ease-in-out hover:scale-105"
      @click="confessionModal.openModal"
      />
    </div>
  </div>
</template>
