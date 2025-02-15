<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import ProductCard from '@/components/ProductCard.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { API } from '../api/api.js'
import { ref, onMounted, watch } from 'vue'
import { useProductStore } from '@/stores/wishlist'

const products = ref([])
const { wishlist } = useProductStore()

const fetchData = async () => {
  try {
    const response = await API.get('/products')
    products.value = response.data.products
    products.value = products.value.filter((product) =>
      wishlist.some((wish) => product.code === wish),
    )
  } catch (error) {
    console.error(error)
  }
}

watch(wishlist, () => {
  products.value = products.value.filter((product) =>
    wishlist.some((wish) => wish === product.code),
  )
  localStorage.setItem('wishlist', wishlist)
})

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
            :available="product.available"
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
