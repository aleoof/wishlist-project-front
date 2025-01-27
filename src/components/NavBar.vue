<script setup lang="ts">
import NetshoesLogo from '@/assets/svg/NetshoesLogo.vue'
import WishlistIcon from '@/assets/svg/WishlistIcon.vue'
import { RouterLink } from 'vue-router'
import PageContainer from './PageContainer.vue'
import ProfileButton from '@/components/ProfileButton.vue'
</script>

<template>
  <nav>
    <PageContainer>
      <div class="navbar">
        <RouterLink to="/"><NetshoesLogo /></RouterLink>
        <span>
          <RouterLink to="/wishlist"><WishlistIcon />Wishlist</RouterLink>
          <ProfileButton />
        </span>
      </div>
    </PageContainer>
  </nav>
</template>

<style lang="css" scoped>
nav {
  background-color: var(--primary);
  padding: 2em 0;
  display: flex;
  justify-content: center;
}
.navbar {
  display: flex;
  flex: 1;
  flex-grow: 1;
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

span {
  display: flex;
  gap: 5em;
  align-items: center;
}
</style>
