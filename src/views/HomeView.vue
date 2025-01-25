<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main>
    <PageContainer>
      <div class="content">
        <div class="breadcrumb">Home</div>
        <div class="list-items">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </PageContainer>
  </main>
</template>

<style lang="css" scoped>
.breadcrumb {
  border-bottom: 1px solid var(--grey);
  width: 100%;
  padding: 1.5em 0;
  font-weight: 600;
  color: var(--primary);
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.list-items {
  padding: 1.5em 4em;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5em;
  max-width: 1048px;
  align-self: center;
}
</style>
