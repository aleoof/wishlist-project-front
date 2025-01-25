<script setup lang="ts">
import NetshoesLogo from '@/assets/svg/NetshoesLogo.vue'
import WishlistIcon from '@/assets/svg/WishlistIcon.vue'
import { RouterLink } from 'vue-router'
import PageContainer from './PageContainer.vue'
</script>

<template>
  <nav>
    <PageContainer>
      <div class="navbar">
        <RouterLink to="/"><NetshoesLogo /></RouterLink>
        <RouterLink to="/wishlist"><WishlistIcon />Wishlist</RouterLink>
      </div>
    </PageContainer>
  </nav>
</template>

<style lang="css" scoped>
nav {
  background-color: var(--primary);
  padding: 2em 0;
}
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

a {
  display: flex;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  font-weight: 600;
  color: var(--white);
  font-size: 14px;
}
</style>
