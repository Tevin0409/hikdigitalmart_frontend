<template>
  <div
    class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2"
    @click="goToProductPage(product)"
  >
    <div class="relative">
      <img
        :src="product.images[0]?.uploadUrl"
        :alt="product.name"
        class="w-full h-36 object-cover rounded-md p-2"
      />
    </div>
    <div class="mt-2">
      <h4 class="text-xs text-gray-600 truncate">
        {{ product.product.name }}
      </h4>
      <h3 class="text-sm font-medium truncate">
        {{ product.name }}
      </h3>
      <p class="text-lg font-semibold text-gray-900">
        {{ getPrice(product) }}
      </p>
      <p class="text-gray-500 text-xs line-through" v-if="product.oldPrice">
        {{ product.oldPrice }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
  goToProductPage: {
    type: Function,
    required: true,
  },
  formatPrice: {
    type: Function,
    required: true,
  },
});
const { $getProductPrice } = useNuxtApp();

const getPrice = (item) => {
  return $getProductPrice(item);
};
</script>
