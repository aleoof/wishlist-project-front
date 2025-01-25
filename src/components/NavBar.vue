<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Wishlist</RouterLink>
  </nav>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 2em;
}
</style>
