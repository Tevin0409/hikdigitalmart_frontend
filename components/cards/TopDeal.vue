<template>
  <div class="flex md:flex-row w-full p-6">
    <!-- Hot Deals Card -->
    <div
      class="w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"
    >
      <div
        class="text-lg font-semibold mb-2 border-b flex justify-between items-center"
      >
        <span class="text-gray-500 pl-4">Hot Deals</span>
      </div>

      <div>
        <Carousel
          :d_circular="true"
          :autoplayInterval="10000"
          :value="products"
          :numVisible="1"
          :numScroll="1"
          orientation="horizontal"
          containerClass="flex items-center justify-center"
          :showIndicators="false"
          :showNavigators="false"
        >
          <template #item="slotProps">
            <div>
              <div class="mb-4">
                <div class="relative mx-auto">
                  <img
                    :src="slotProps.data.image"
                    :alt="slotProps.data.name"
                    class="object-cover rounded"
                    style="max-width: 100%"
                  />
                </div>
              </div>

              <div class="mb-4 font-medium flex justify-around">
                {{ slotProps.data.name }}
              </div>
              <div
                class="flex justify-between items-center flex justify-around"
              >
                <div
                  class="mt-0 font-semibold text-xl flex justify-around py-4"
                >
                  {{ slotProps.data.price }}
                </div>
              </div>

              <div
                class="stock flex items-center text-sm text-gray-600 mb-6 flex justify-around"
              >
                <div
                  v-for="(label, index) in ['DAYS', 'HOURS', 'MINS', 'SEC']"
                  :key="index"
                  class="flex flex-col items-center"
                >
                  <div
                    class="flex items-center justify-center bg-orange-500 text-white rounded-full text-base md:text-lg font-bold"
                  >
                    {{ index === 0 ? 21 : "00" }}
                  </div>
                  <span class="text-xs mt-1 text-gray-400 font-bold">{{
                    label
                  }}</span>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <!-- Monthly Featured Items Section -->
    <div class="p-6">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold">
          <span class="text-red-500">Monthly Featured Items</span>
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
                ? 'border-b-2 border-primary text-orange-500'
                : 'text-gray-600',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="gap-6 mt-4">
        <div class="flex justify-between space-x-4">
          <!-- Left Products -->
          <div class="flex flex-col space-y-4 w-1/3">
            <div
              v-for="item in featuredProducts.slice(0, 2)"
              :key="item.name"
              class="border rounded-sm p-4 shadow-sm flex-1"
            >
              <div class="flex items-center">
                <img
                  :src="item.image"
                  class="w-28 h-28 object-cover rounded-md"
                />
                <div class="ml-4 flex flex-col">
                  <div class="flex items-center mt-1">
                    <span v-for="star in 5" :key="star" class="text-yellow-400">
                      <i
                        :class="{
                          'pi pi-star-fill': star <= item.rating,
                          'pi pi-star': star > item.rating,
                        }"
                      ></i>
                    </span>
                    <!-- <span class="text-gray-500 ml-2">({{ item.reviews }})</span> -->
                  </div>
                  <h3 class="text-lg font-medium">{{ item.name }}</h3>
                  <div class="mt-2 text-primary font-bold text-lg">
                    <!-- <span class="line-through text-gray-400">{{
                      item.oldPrice
                    }}</span> -->
                    <span class="ml-2"
                      >Ksh {{ formattedPrice(item.price) }}</span
                    >
                  </div>
                  <p class="text-gray-500 mt-1">
                    Available: <strong>{{ item.stock }}</strong>
                  </p>
                  <div class="w-full bg-primary h-2 mt-2 rounded-full">
                    <div
                      class="h-2 bg-orange-500 rounded-full"
                      :style="{ width: `${item.stock / 5}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Center Product -->
          <div class="flex-1 h-full">
            <div
              v-for="item in featuredProducts.slice(2, 3)"
              :key="item.name"
              class="border rounded-sm p-4 shadow-sm h-full"
            >
              <div class="flex flex-col items-center h-full">
                <img :src="item.image" class="object-cover rounded-md" />
                <div class="text-center items-center pt-4 flex flex-col">
                  <div class="flex items-center mt-1">
                    <span v-for="star in 5" :key="star" class="text-yellow-400">
                      <i
                        :class="{
                          'pi pi-star-fill': star <= item.rating,
                          'pi pi-star': star > item.rating,
                        }"
                      ></i>
                    </span>
                    <!-- <span class="text-gray-500 ml-2">({{ item.reviews }})</span> -->
                  </div>
                  <h3 class="text-lg font-medium">{{ item.name }}</h3>
                  <div class="mt-2 text-orange-500 font-bold text-lg">
                    <span class="line-through text-gray-400"
                      >Ksh {{ item.oldPrice }}</span
                    >
                    <span class="ml-2"
                      >Ksh{{ formattedPrice(item.price) }}</span
                    >
                  </div>
                  <p class="text-gray-500 mt-1">
                    Available: <strong>{{ item.stock }}</strong>
                  </p>
                  <div class="w-full bg-gray-300 h-2 mt-2 rounded-full">
                    <div
                      class="h-2 bg-orange-500 rounded-full"
                      :style="{ width: `${item.stock / 5}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Products -->
          <div class="flex flex-col space-y-4 w-1/3">
            <div
              v-for="item in featuredProducts.slice(3, 5)"
              :key="item.name"
              class="border rounded-sm p-4 shadow-sm flex-1"
            >
              <div class="flex items-center">
                <img
                  :src="item.image"
                  class="w-28 h-28 object-cover rounded-md"
                />
                <div class="ml-4 flex flex-col">
                  <div class="flex items-center mt-1">
                    <span v-for="star in 5" :key="star" class="text-yellow-400">
                      <i
                        :class="{
                          'pi pi-star-fill': star <= item.rating,
                          'pi pi-star': star > item.rating,
                        }"
                      ></i>
                    </span>
                    <!-- <span class="text-gray-500 ml-2">({{ item.reviews }})</span> -->
                  </div>
                  <h3 class="text-lg font-medium truncate">{{ item.name }}</h3>
                  <div class="mt-2 text-orange-500 font-bold text-lg">
                    <!-- <span class="line-through text-gray-400"
                      >${{ item.oldPrice }}</span
                    > -->
                    <span class="ml-2"
                      >Ksh{{ formattedPrice(item.price) }}</span
                    >
                  </div>
                  <p class="text-gray-500 mt-1">
                    Available: <strong>{{ item.stock }}</strong>
                  </p>
                  <div class="w-full bg-gray-300 h-2 mt-2 rounded-full">
                    <div
                      class="h-2 bg-orange-500 rounded-full"
                      :style="{ width: `${item.stock / 5}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Carousel from "primevue/carousel";
import { useProductStore } from "@/stores/productStore";

export default {
  components: { Carousel },
  setup() {
    const tabs = ref([
      "Recent",
      "Best Seller",
      "Top",
      "New Arrivals",
      "Top Rating",
    ]);
    const carousel = ref(null);
    const products = ref([
      {
        image:
          "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Amazon Basics Window Air",
        rating: 3,
        reviews: 26,
        oldPrice: 28.52,
        price: 3052,
      },
      {
        image:
          "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Amazon Basics Wall Light",
        rating: 4,
        reviews: 42,
        oldPrice: 19.53,
        price: 2153,
      },
    ]);
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = price => {
      return $formatPrice(price);
    };

    const featuredProducts = computed(() => productStore.products);

    return { products, featuredProducts, carousel, tabs, formattedPrice };
  },
};
</script>

<style>
.pi-star-fill {
  color: gold;
}
</style>
