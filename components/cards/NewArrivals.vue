<template>
  <div class="mx-auto">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold">
        Hot <span class="text-red-500">New Arrival</span> You May Like
      </h2>
      <!-- Tabs -->
      <div class="flex space-x-4 border-b">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selectedTab = tab"
          :class="[
            'px-4 py-2 text-sm font-semibold',
            selectedTab === tab
              ? 'border-b-2 border-orange-500 text-orange-500'
              : 'text-gray-600',
          ]"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Product Carousel -->
    <Carousel
      :value="productsWithRecent"
      :numVisible="5"
      :numScroll="1"
      class="mt-4"
      :showIndicators="false"
      :showNavigators="false"
    >
      <template #item="slotProps">
        <div
          class="border-r border-gray-200 rounded-lg p-4 text-center bg-white shadow-md relative group"
        >
          <!-- New Tag -->
          <Tag
            value="NEW"
            class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs"
          />

          <!-- Product Image -->
          <img
            :src="slotProps.data.image"
            class="h-32 mx-auto mb-2 transition-transform group-hover:scale-105"
            alt="Product Image"
          />

          <!-- Product Name -->
          <div class="flex flex-col items-center text-center p-2">
            <h3 class="text-md font-medium truncate">
              {{ slotProps.data.product.name }}
              <br />
              <span class="text-sm font-regular">
                {{ slotProps.data.name }}
              </span>
            </h3>

            <!-- Rating -->
            <div class="flex justify-center mt-1">
              <span v-for="star in 5" :key="star" class="text-yellow-400">
                <i
                  :class="{
                    'pi pi-star-fill': star <= slotProps.data.rating,
                    'pi pi-star': star > slotProps.data.rating,
                  }"
                ></i>
              </span>
              <!-- <span class="text-gray-500 ml-2"
                >({{ slotProps.data.reviews }})</span
              > -->
            </div>

            <!-- Price -->
            <p class="text-red-500 font-semibold">
              {{ formattedPrice(slotProps.data.price) }}
              <span class="line-through text-gray-400">{{
                formattedPrice(slotProps.data.oldPrice)
              }}</span>
            </p>
          </div>

          <!-- Hover Buttons -->
          <div
            class="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button class="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <i class="pi pi-shopping-cart text-gray-600"></i>
            </button>
            <button class="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <i class="pi pi-heart text-gray-600"></i>
            </button>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const store = useProductStore();
const selectedTab = ref("Recent");

const tabs = ref([
  "Recent",
  "Best Seller",
  "Top",
  "New Arrivals",
  "Top Rating",
]);

const { $formatPrice } = useNuxtApp();
const formattedPrice = price => {
  return $formatPrice(price);
};

// Fetch products when the component mounts
onMounted(async () => {
  await store.getProducts(); // Assuming `getProducts` is an async action in your store
});

// Computed property for processing product data
const productsWithRecent = computed(() => {
  return store.products;

  // product =>
  //   product.map(model => ({
  //     id: model.id,
  //     name: `${product.name} - ${model.name}`, // Include both product and model names
  //     category: "Recent",
  //     subCategory: product.subCategory,
  //     price: model.price,
  //     oldPrice: model.price * 1.2, // Example discount (modify as needed)
  //     rating: 4, // You can modify this based on real data
  //     reviews: 10, // Example static review count
  //     image:
  //       model.images.find(img => img.isPrimary)?.uploadUrl ||
  //       "default-image.jpg",
  //   }))
  //
});

// Filtered products based on selected tab
// const filteredProducts = computed(() =>
//   productsWithRecent.value.filter(
//     product =>
//       product.subCategory.category.name === selectedTab.value ||
//       selectedTab.value === "Recent"
//   )
// );
</script>

<style scoped>
/* Custom styling */
</style>
