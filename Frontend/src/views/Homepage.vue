<script setup lang="ts">
import { useConfessionStore } from "@/stores/AddConfessionStore";
import ConfessionCard from "@/components/ConfessionCard.vue";

const confessionModal = useConfessionStore();
</script>
<template>
  <div
    class="w-max-full from-custom-purple via-custom-purple item to-custom-purple flex h-screen flex-col items-center justify-center bg-linear-to-br"
  >
    <div class="mt-2 h-94 w-full overflow-hidden py-2">
      <div class="animate-infinite-scroll-left flex w-max hover:[animation-play-state:paused]">
        <!--<ConfessionCard></ConfessionCard>-->
      </div>
    </div>
    <div class="mt-10 h-94 w-full overflow-hidden py-2">
      <div class="animate-infinite-scroll-right flex w-max hover:[animation-play-state:paused]">
        <!-- <ConfessionCard></ConfessionCard>-->
      </div>
    </div>
    <div class="mt-30 w-full"></div>
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
