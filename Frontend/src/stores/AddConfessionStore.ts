import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfessionStore = defineStore('confessionStore', () => {
  const isModalVisible = ref(false)

  const openModal = () => {
    isModalVisible.value = true
  }

  const closeModal = () => {
    isModalVisible.value = false
  }

  return { isModalVisible, openModal, closeModal }
})
