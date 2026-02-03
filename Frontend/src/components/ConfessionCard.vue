<script setup lang="ts">
import { addNewConfession, useTimerStore } from '@/stores/AddConfessionStore';
import type { confessionType } from '@/types/confession';
import { onMounted, ref, computed } from 'vue';
import type { st } from 'vue-router/dist/router-CWoNjPRp.mjs';
const confessionStore = addNewConfession();
const timeLeft = ref<number>(0);
let timerInterval: number | null = null;

const props = defineProps<{
  data: {
    id: number;
    name: string;
    confession: string;
    minutes: number;
    seconds: number;
  };
}>();

const handleDelete = () => {
  confessionStore.reqDeleteCardFunction(props.data.id);
};

const formattedTime = computed(() => {
  const min = Math.floor(timeLeft.value / 60);
  const sec = timeLeft.value % 60;
  return `${min}:${sec.toString().padStart(2, '0')}`;
});
const startTimer = () => {
  timeLeft.value = props.data.minutes * 60 + props.data.seconds;

  timerInterval = window.setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      stopTimer();
      handleDelete();
      window.location.reload();
    }
  }, 1000);
};

const stopTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
};

onMounted(() => {
  startTimer();
});
</script>

<template>
  <div
    class="font-poppins mx-20 flex flex-none flex-col items-center justify-center rounded-md border border-gray-500/20 bg-white p-2 drop-shadow-lg drop-shadow-black/20 lg:h-90 lg:w-80 2xl:h-120 2xl:w-100"
  >
    <div class="h-full w-full">
      <div class="flex w-full items-center justify-between px-4">
        <header class=" ">Anonymous {{ data.name }}</header>
        <header class="text-red-500">{{ formattedTime }}</header>
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
