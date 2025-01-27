<script setup lang="ts">
import { ref } from 'vue'
import ProfileIcon from '@/assets/svg/ProfileIcon.vue'

const active = ref(false)
</script>

<template>
  <div @mouseenter="active = true" @mouseleave="active = false" class="dropdown">
    <button type="button" class="profile"><ProfileIcon /></button>
    <div class="card" v-if="active">
      <a href="/">Entrar</a>
      <a href="/">Minha conta</a>
      <a href="/">Endereço</a>
      <a href="/">Minha Netshoes</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dropdown {
  position: relative;
  z-index: 10;
}
.profile {
  background-color: transparent;
  border: none;
  height: 40px;
  width: 40px;
  position: relative;
}

.card {
  background-color: white;
  border-radius: 4px;
  padding: 1em;
  position: absolute;
  right: 0;
  box-shadow: 0px 0px 5px var(--grey);
  width: 200px;
  display: flex;
  flex-direction: column;
}

.card a {
  text-decoration: none;
}

.card::after {
  content: ' ';
  position: absolute;
  top: -10px;
  right: 5px;
  height: 10px;
  width: 10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
</style>
