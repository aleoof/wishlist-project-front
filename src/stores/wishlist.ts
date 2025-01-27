import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('wishlist', () => {
  const list = localStorage.getItem('wishlist')

  const wishlist = ref(list?.split(','))

  function addToList(id: string) {
    wishlist?.value?.push(id)
  }

  function removeFromList(id: string) {
    wishlist?.value?.splice(wishlist.value.indexOf(id), 1)
  }

  return { wishlist, addToList, removeFromList }
})
