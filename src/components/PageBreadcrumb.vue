<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => route.meta.breadcrumb)
</script>

<template>
  <div class="breadcrumb">
    <RouterLink
      v-for="breadcrumb of breadcrumbs"
      v-bind:key="breadcrumb.name"
      v-bind:to="breadcrumb.link ?? ''"
    >
      {{ breadcrumb.name }}
    </RouterLink>
  </div>
</template>

<style scoped lang="css">
.breadcrumb {
  border-bottom: 1px solid var(--grey);
  width: 100%;
  padding: 1.5em 0;
  display: flex;
  gap: 0.5em;
}

.breadcrumb a {
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}

.breadcrumb a::after {
  content: '/';
  padding-left: 0.5em;
}
.breadcrumb a:last-child:after {
  content: '';
}

.breadcrumb a:last-child {
  cursor: default;
}
</style>
