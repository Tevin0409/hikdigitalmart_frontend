<template>
  <div class="container mx-auto p-4">
    <!-- <h1 class="text-2xl font-bold mb-4 ">Category</h1> -->
    <div class="flex gap-3">
      <div class="flex flex-col w-1/4 border rounded-lg dark:border-orange-600">
        <h4 class="font-bold px-4 py-4 border-b">Available Categories</h4>
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="p-4 rounded-lg hover:bg-[#f44336] hover:text-white transition duration-300 cursor-pointer"
        >
          <h5 class="font-semibold">{{ category.name }}</h5>
        </div>
      </div>

      <div class="border rounded-lg border-primary w-3/4 p-3">
        <h2 class="text-xl font-bold mb-4">Trending Products</h2>
        <Carousel
          :d_circular="true"
          circular
          :autoplayInterval="3000"
          :value="chunkedProducts"
          :numVisible="1"
          :numScroll="1"
          orientation="horizontal"
          containerClass="flex items-center"
          :showIndicators="false"
          :showNavigators="false"
        >
          <template #item="slotProps">
            <!-- Wrapper for the grid layout -->
            <div class="grid grid-cols-4 gap">
              <div
                v-for="(product, index) in slotProps.data"
                :key="index"
                class="p-4 border-gray-500 rounded-lg bg-white shadow"
              >
                <div class="relative">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="object-cover rounded mb-2"
                    style="max-width: 100%; height: 150px"
                  />
                </div>
                <div class="font-medium text-center mb-2">
                  {{ product.name }}
                </div>
                <div class="font-semibold text-xl text-center text-primary">
                  {{ product.price }}
                </div>
                <div class="stock text-sm text-gray-600 mt-4">
                  <div class="relative">
                    <div class="h-2 bg-primary rounded">
                      <div
                        class="h-2 bg-primary rounded"
                        style="width: 65%"
                      ></div>
                    </div>
                    <div class="flex justify-between text-xs mt-2">
                      <span>Available: 334</span>
                      <span>Stock: 180</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useProductStore } from "@/stores/productStore";

export default {
  components: {
    DataTable,
    Column,
  },
  setup() {
    const categories = ref([]);
    const productStore = useProductStore();
    const products = computed(() => productStore.products);

    const chunkedProducts = computed(() => {
      const chunkSize = 8;
      const chunks = [];
      for (let i = 0; i < products.value.length; i += chunkSize) {
        chunks.push(products.value.slice(i, i + chunkSize));
      }
      return chunks;
    });

    const getCategories = async () => {
      const productStore = useProductStore();
      try {
        await productStore.getCategories(); // Calls the store action to fetch categories
        categories.value = productStore.categories; // Retrieves categories from store
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    onMounted(() => {
      getCategories();
    });

    return {
      products,
      categories,
      chunkedProducts,
      getCategories,
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
