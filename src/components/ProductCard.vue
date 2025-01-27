<script setup lang="ts">
import LikeProduct from '@/assets/svg/LikeProduct.vue'
import CloseIcon from '@/assets/svg/CloseIcon.vue'
import RatingStars from './RatingStars.vue'

import { useProductStore } from '@/stores/wishlist'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

defineProps<{
  id?: string
  title?: string
  rating?: number
  originalPrice?: string
  price?: string
  image?: string
}>()

const route = useRoute()

const path = computed(() => route.name)

const { wishlist, removeFromList, addToList } = useProductStore()

const priceToBRL = (value) => {
  return (parseInt(value) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

const addToWishlist = (value) => {
  if (wishlist?.some((item) => item === value)) {
    removeFromList(value)
  } else {
    addToList(value)
  }
  localStorage.setItem('wishlist', wishlist)
}
</script>

<template>
  <div class="card">
    <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }">
      <button
        type="button"
        v-if="path !== 'wishlist'"
        class="add-wish"
        @click="addToWishlist(id)"
        :style="{ backgroundColor: wishlist?.some((item) => item === id) ? 'red' : 'var(--grey)' }"
      >
        <LikeProduct />
      </button>
      <button type="button" class="remove-wish" v-else @click="removeFromList(id)">
        <CloseIcon />
      </button>
    </div>
    <div class="content">
      <h4 class="title">{{ title }}</h4>
      <div class="rating"><RatingStars :rating="rating" /> {{ rating }}</div>
      <p class="original-price">
        {{ priceToBRL(originalPrice) }}
      </p>
      <p class="price">{{ priceToBRL(price) }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  height: 300px;
  width: 200px;
  box-shadow: 5px 0px 20px var(--grey);
}
.image {
  height: 50%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.content {
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  font-size: 16px;
  line-height: 1.2;
  text-overflow: ellipsis;
  height: 2.5em;
  box-orient: vertical;
  overflow: hidden;
}

.original-price {
  text-decoration: line-through;
  color: var(--grey);
  line-height: 1.2;
}

.price {
  font-weight: 800;
  font-size: 24px;
  line-height: 1.2;
  color: var(--primary);
}

.add-wish {
  position: absolute;
  right: 1em;
  top: 0.5em;
  background-color: var(--grey);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 5px;
}

.remove-wish {
  position: absolute;
  right: 1em;
  top: 0.5em;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
}

.add-wish:hover {
  background-color: red;
}

.rating {
  display: flex;
  height: 16px;
  align-content: center;
  gap: 5px;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
