import { defineStore } from 'pinia';
import { computed, ref, type Ref } from 'vue';
import api from '@/api/axios';
import type { confessionType } from '@/types/confession';
import axios from 'axios';
import type { st } from 'vue-router/dist/router-CWoNjPRp.mjs';

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
  const fetchAllConfessions = async () => {
    try {
      const response = await api.get('/all-confessions');
      confessionList.value = response.data.con;
    } catch (error) {
      console.log(error);
    }
  };

  const newConfessionFunction = async (confession: confessionType) => {
    try {
      const response = await api.post('/addNewConfession', confession);
      confessionList.value = response.data.res;
      console.log(response.data.res);
    } catch (error) {
      console.log(error);
    }
  };

  const reqDeleteCardFunction = async (id: number) => {
    try {
      const response = await api.delete(`/delete-id/${id}`);
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    reqDeleteCardFunction,
    newConfessionFunction,
    confessionList,
    fetchAllConfessions,
  };
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
