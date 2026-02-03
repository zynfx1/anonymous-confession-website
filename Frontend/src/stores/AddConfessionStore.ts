import { defineStore } from 'pinia';
import { computed, ref, type Ref } from 'vue';
import api from '@/api/axios';
import type { confessionType } from '@/types/confession';

export const useConfessionStore = defineStore('confessionStore', () => {
  const isModalVisible = ref(false);

  const openModal = () => {
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  return { isModalVisible, openModal, closeModal };
});

export const addNewConfession = defineStore('newConfession', () => {
  const confessionList = ref<confessionType[]>([]);

  const newConfessionFunction = async (confession: confessionType) => {
    try {
      const response = await api.post('/addNewConfession', confession);
      confessionList.value = response.data.result;
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return { newConfessionFunction, confessionList };
});

export const useTimerStore = defineStore('timerStore', () => {
  const timeLeft = ref<number>(0);

  console.log(timeLeft.value);

  const formattedTime = computed(() => {
    const min = Math.floor(timeLeft.value / 60);
    const sec = timeLeft.value % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  });

  

  return { timeLeft, formattedTime, console };
});
