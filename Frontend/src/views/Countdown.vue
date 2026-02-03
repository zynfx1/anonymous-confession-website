<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';

// State
const inputMinutes = ref<number>(1);
const inputSeconds = ref<number>(30);
const timeLeft = ref<number>(0);
const isRunning = ref<boolean>(false);
let timerInterval: number | null = null;

// The "Output" - Formats total seconds back into MM:SS
const formattedTime = computed(() => {
  const m = Math.floor(timeLeft.value / 60);
  const s = timeLeft.value % 60;
  // padding start adds the "0" if the number is less than 10
  return `${m}:${s.toString().padStart(2, '0')}`;
});

const startTimer = () => {
  if (isRunning.value) return;

  // 1. Calculate total seconds
  timeLeft.value = inputMinutes.value * 60 + inputSeconds.value;

  if (timeLeft.value <= 0) return;

  isRunning.value = true;

  // 2. Start the countdown
  timerInterval = window.setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      stopTimer();
      alert('Time is up!');
    }
  }, 1000);
};

const stopTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
  isRunning.value = false;
};

// Cleanup memory if user leaves the page
onUnmounted(() => stopTimer());
</script>

<template>
  <div
    class="flex w-80 flex-col items-center gap-6 rounded-xl bg-slate-900 p-10 text-white shadow-2xl"
  >
    <h2 class="text-xl font-bold">Simple Timer</h2>

    <div class="flex gap-2 text-black">
      <input
        v-model.number="inputMinutes"
        type="number"
        placeholder="Min"
        class="w-16 rounded p-2"
      />
      <span class="text-2xl text-white">:</span>
      <input
        v-model.number="inputSeconds"
        type="number"
        placeholder="Sec"
        class="w-16 rounded p-2"
      />
    </div>

    <div class="font-mono text-6xl font-black text-emerald-400">
      {{ formattedTime }}
    </div>

    <div class="flex gap-4">
      <button
        @click="startTimer"
        :disabled="isRunning"
        class="rounded-full bg-emerald-600 px-6 py-2 hover:bg-emerald-500 disabled:opacity-50"
      >
        Start
      </button>
      <button @click="stopTimer" class="rounded-full bg-red-600 px-6 py-2 hover:bg-red-500">
        Stop
      </button>
    </div>
  </div>
</template>
