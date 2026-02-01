<script setup lang="ts">
import { useConfessionStore } from '@/stores/AddConfessionStore';
import { ref } from 'vue';
import type { confessionType } from '@/types/confession';
const newConfessionName = ref('');
const newConfessionComment = ref('');

defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'confessionEnvelope', payload: confessionType): void;
  (e: 'close'): void;
}>();

const addNewConfession = () => {
  if (newConfessionComment.value === '') {
    return;
  }

  const newConfession: confessionType = {
    name: newConfessionName.value,
    confession: newConfessionComment.value,
  };
  emit('confessionEnvelope', newConfession);
};
</script>
<template>
  <Teleport to="body">
    <Transition
      name="fade"
      enter-active-class="duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-500 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 h-screen max-w-full bg-black/60"
        @click.self="emit('close')"
      >
        <div
          class="inset fixed flex flex-col items-center justify-center rounded-xl bg-white p-3 2xl:inset-x-175 2xl:inset-y-65"
        >
          <header class="font-pinlock text-cherry-rose-400 text-4xl">Anonymous Confession</header>
          <div class="font-poppins flex w-full flex-col">
            <label for="">Name:</label>
            <input
              v-model="newConfessionName"
              type="text"
              name=""
              id=""
              placeholder="Enter name..."
              class="border-cherry-rose-300 focus:outline-cherry-rose-300 w-40 rounded-sm border px-1"
            />
          </div>
          <div class="font-poppins my-2 flex w-full flex-col">
            <label for="">Timer:</label>
            <input
              type="time"
              name=""
              id=""
              class="border-cherry-rose-300 focus:outline-cherry-rose-300 w-40 rounded-sm border px-1"
            />
          </div>
          <div class="font-poppins h-full w-full">
            <label for="">Confession</label>
            <textarea
              v-model="newConfessionComment"
              name=""
              id=""
              placeholder="Write your confession here..."
              class="border-cherry-rose-300 focus:outline-cherry-rose-300 h-44 w-full resize-none rounded-sm border px-1 focus:outline"
            ></textarea>
          </div>
          <div class="flex h-20 w-full items-center justify-end gap-2">
            <button
              @click="emit('close')"
              class="border-cherry-rose-300 font-poppins text-cherry-rose-300 hover:bg-cherry-rose-300/10 rounded-sm border p-3 transition duration-200 ease-in-out"
            >
              Close
            </button>
            <button
              @click.prevent="addNewConfession"
              class="border-cherry-rose-300 font-poppins bg-cherry-rose-300 hover:bg-cherry-rose-400/80 rounded-sm border p-3 text-white transition duration-200 ease-in-out"
            >
              Add Confession
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
