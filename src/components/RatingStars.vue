<script setup lang="ts">
import EmptyStar from '@/assets/svg/EmptyStar.vue'
import FullStar from '@/assets/svg/FullStar.vue'
import HalfStar from '@/assets/svg/HalfStar.vue'

defineProps<{
  rating?: number
}>()
</script>

<template>
  <div>
    <FullStar v-for="star of Math.trunc(rating)" v-bind:key="star" />
    <HalfStar v-if="rating % 1 !== 0" />
    <EmptyStar v-for="star of 5 - Math.ceil(rating)" v-bind:key="star" />
  </div>
</template>
