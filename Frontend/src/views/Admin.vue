<script setup lang="ts">
import ConfessionCard from '@/components/ConfessionCard.vue';
import { useConfessionStore, addNewConfession } from '@/stores/AddConfessionStore';
import { ref, computed, onMounted, watch, nextTick } from 'vue';

const confessionModal = useConfessionStore();
const newConfession = addNewConfession();
const carouselRef = ref<HTMLElement | null>(null);

// Fixed speed in pixels per second
const SPEED = 20; // Adjust this: lower = slower, higher = faster

const dynamicDuration = computed(() => {
  if (!carouselRef.value || newConfession.confessionList.length === 0) {
    return 20; // Default
  }

  // Get actual width of the carousel content
  const carouselWidth = carouselRef.value.scrollWidth;
  const viewportWidth = window.innerWidth;

  // Total distance = viewport width + carousel width
  const totalDistance = viewportWidth + carouselWidth;

  // Duration = distance / speed
  return totalDistance / SPEED;
});

// Recalculate when items change
watch(
  () => newConfession.confessionList.length,
  async () => {
    await nextTick();
    // Force recalculation by triggering the computed property
    if (carouselRef.value) {
      carouselRef.value.style.animationDuration = `${dynamicDuration.value}s`;
    }
  },
);

onMounted(() => {
  window.stop();
  newConfession.fetchAllConfessions();
  if (carouselRef.value) {
    carouselRef.value.style.animationDuration = `${dynamicDuration.value}s`;
  }
});
</script>

<template>
  <div class="font-poppins flex h-150 w-full overflow-hidden bg-[#0f172a] py-10">
    <div class="flex h-full w-full items-center justify-center">
      <div
        class="bg-cherry-rose-500 inset-0 flex flex-col items-center justify-center rounded-md text-white lg:h-3/5 lg:w-3/8"
      >
        <header
          class="font-pinlock mt-5 flex w-full items-end justify-center p-2 text-center text-4xl"
        >
          Admin
        </header>
        <div class="flex h-full w-full flex-col items-center">
          <p>Total Confession Card:</p>
          <p class="text-2xl font-bold">{{ newConfession.confessionList.length }}</p>
        </div>
      </div>
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
