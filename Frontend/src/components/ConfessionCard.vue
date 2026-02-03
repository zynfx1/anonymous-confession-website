<script setup lang="ts">
import { addNewConfession, useTimerStore } from '@/stores/AddConfessionStore';

const newConfession = addNewConfession();
const timerStore = useTimerStore();
defineProps<{
  data: {
    name: string;
    confession: string;
  };
}>();
</script>

<template>
  <div
    class="font-poppins mx-20 flex flex-none flex-col items-center justify-center rounded-md border border-gray-500/20 bg-white p-2 drop-shadow-lg drop-shadow-black/20 lg:h-90 lg:w-80 2xl:h-120 2xl:w-100"
  >
    <div class="h-full w-full">
      <div class="flex w-full items-center justify-between px-4">
        <header class=" ">Anonymous {{ data.name }}</header>
        <header class="text-red-500">{{ timerStore.formattedTime }}</header>
      </div>

      <div class="flex flex-wrap truncate rounded-md p-4 lg:h-68 2xl:h-95">
        <p class="text-wrap lg:line-clamp-10 2xl:line-clamp-13">{{ data.confession }}</p>
      </div>
      <div class="mt-2 flex w-full items-center justify-center gap-2">
        <button class="rounded-sm bg-blue-800/80 px-12 py-2">
          <img src="../assets/img/heart.png" alt="" class="h-5 w-5" />
        </button>
        <button class="bg-cherry-rose-500 rounded-sm px-12 py-2">
          <img src="../assets/img/broken-heart.png" alt="" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>
