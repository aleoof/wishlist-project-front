<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import ProductCard from '@/components/ProductCard.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { API } from '../api/api.js'
import { ref, onMounted } from 'vue'

const products = ref([])

const fetchData = async () => {
  try {
    const response = await API.get('/products')
    products.value = response.data.products
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <main>
    <PageContainer>
      <div class="content">
        <PageBreadcrumb />
        <div class="list-items">
          <ProductCard
            v-for="product of products"
            :key="product.code"
            :title="product.details.name"
            :rating="product.rating"
            :originalPrice="product.fullPriceInCents"
            :price="product.salePriceInCents"
            :image="product.image"
            :id="product.code"
          />
        </div>
      </div>
    </PageContainer>
  </main>
</template>

<style lang="css" scoped>
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
  align-self: flex-start;
}
</style>
