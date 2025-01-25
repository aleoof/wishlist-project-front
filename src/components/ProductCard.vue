<script setup lang="ts">
import LikeProduct from '@/assets/svg/LikeProduct.vue'
import RatingStars from './RatingStars.vue'

defineProps<{
  title?: string
  rating?: number
  originarPrice?: string
  price?: string
}>()
</script>

<template>
  <div class="card">
    <div class="image">
      <div class="add-wish">
        <LikeProduct />
      </div>
    </div>
    <div class="content">
      <h4 class="title">Title title title title asuidiasdij disjijsd</h4>
      <div class="rating"><RatingStars /> 5.0</div>
      <p class="original-price">R$123.12</p>
      <p class="price">R$123.12</p>
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
  background-image: url(https://placehold.co/200x150);
  background-repeat: no-repeat;
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
