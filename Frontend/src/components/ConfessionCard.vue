<script setup lang="ts">
import { addNewConfession } from '@/stores/AddConfessionStore';
const newConfession = addNewConfession();
defineProps<{
  data: {
    name: string;
    confession: string;
  };
}>();
</script>

<template>
  <div
    class="font-poppins mx-20 flex h-90 w-70 flex-none flex-col items-center justify-center rounded-md border border-gray-500/20 bg-white p-2 drop-shadow-lg drop-shadow-black/20"
  >
    <div class="h-full w-full">
      <div class="flex w-full items-center justify-between px-4">
        <header class=" ">Anonymous {{ data.name }}</header>
        <header class="text-red-500">0:00</header>
      </div>

      <div class="h-70 w-full rounded-md p-4">
        <p>{{ data.confession }}</p>
      </div>
      <div class="flex w-full items-center justify-center gap-2">
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
