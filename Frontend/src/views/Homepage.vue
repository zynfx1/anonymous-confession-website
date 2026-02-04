<script setup lang="ts">
import { useConfessionStore, addNewConfession, useTimerStore } from '@/stores/AddConfessionStore';
import api from '@/api/axios';
import type { confessionType } from '@/types/confession';
import HeaderComponents from '@/components/HeaderComponents.vue';
import ConfessionCard from '@/components/ConfessionCard.vue';
import { ref, computed, watch, nextTick, onMounted } from 'vue';
const timerStore = useTimerStore();
const confessionModal = useConfessionStore();
const newConfession = addNewConfession();
const currentUser = ref<confessionType | null>(null);
const carouselRef = ref<HTMLElement | null>(null);

// Fixed speed in pixels per second
const SPEED = 10; // Adjust this: lower = slower, higher = faster

const dynamicDuration = computed(() => {
  if (!carouselRef.value || newConfession.confessionList.length === 0) {
    return 20; // Default
  }

  // Get actual width of the carousel content (already doubled)
  const carouselWidth = carouselRef.value.scrollWidth;

  // We only need to move HALF the distance (since we duplicated)
  const halfWidth = carouselWidth / 2;

  // Duration = distance / speed
  return halfWidth / SPEED;
});

// Recalculate when items change
watch(
  () => newConfession.confessionList.length,
  async () => {
    await nextTick();
  },
);

onMounted(async () => {
  newConfession.fetchAllConfessions();
  await nextTick();
});
</script>
<template>
  <div
    class="w-max-full from-custom-purple via-custom-purple item to-custom-purple flex h-screen flex-col items-center justify-center bg-linear-to-br"
  >
    <video
      controls
      autoplay
      loop
      class="absolute inset-0 mix-blend-lighten lg:inset-y-32 lg:top-32 2xl:inset-y-31"
    >
      <source src="../assets/video/valentines.mp4" />
    </video>

    <div
      class="mt-2 flex w-full items-center justify-center overflow-hidden py-2 lg:h-full 2xl:h-full"
    >
      <div
        ref="carouselRef"
        :style="{ '--duration': `${dynamicDuration}s` }"
        class="animate-infinite-scroll-left flex w-max items-center justify-center hover:[animation-play-state:paused]"
      >
        <ConfessionCard
          v-for="(item, index) in newConfession.confessionList"
          :key="`first-${index}`"
          :data="item"
        />

        <ConfessionCard
          v-for="(item, index) in newConfession.confessionList"
          :key="`second-${index}`"
          :data="item"
        />
      </div>
    </div>

    <div class="mt-30 w-full"></div>
    <div class="absolute flex h-40 w-full items-center justify-end lg:top-170 2xl:top-233">
      <img
        src="../assets/img/plus1.png"
        alt=""
        class="mx-4 h-20 w-20 drop-shadow-lg drop-shadow-black/30 transition duration-200 ease-in-out hover:scale-105"
        @click="confessionModal.openModal"
      />
    </div>
  </div>
</template>
