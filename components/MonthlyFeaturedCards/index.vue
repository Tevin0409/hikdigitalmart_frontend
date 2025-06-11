<template>
  <div class="lg:flex sm:flex-co items-center">
    <img
      :src="item.image"
      style="object-fit: fit; width: 100%; min-height: 160px; min-width: 160px"
      class="w-40 h-40 object-cover rounded-md"
    />

    <div @click="goToPage(item)" class="ml-4 flex flex-col w-full mt-1">
      <h3 class="text-xs font-medium">
        {{ item.product.name }}
      </h3>
      <span class="text-xs">
        {{ item.name }}
      </span>
      <div
        class="mt-2hover:text-primary transitin-colors duration-200 text-primary font-bold text-sm"
      >
        <span>{{ formattedPrice(item.price) }}</span>
      </div>
      <p class="text-gray-500 mt-1 text-xs">
        <strong>
          {{ item.features.map((feat) => feat.description).join(", ") }}
        </strong>
      </p>
      <div class="flex mt-1 text-center">
        <Rating :reviews="item.Review" />
      </div>

      <!-- Image Thumbnails Carousel -->
      <div class="carousel flex items-center mt-2 space-x-4">
        <div class="flex items-center space-x-2 overflow-x-auto">
          <img
            v-for="(image, index) in item.images"
            :key="index"
            :src="image.uploadUrl"
            :alt="'Product ' + (index + 1)"
            @click="selectImage(item, image.uploadUrl)"
            class="w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointerhover:border-orange-500"
            :class="{
              'border-orange-500': item.image === image,
            }"
          />
        </div>
      </div>
    </div>

    <!-- Favorite & Cart Buttons -->
    <div class="gap-5 ml-4 relative left-0 top-0 align-start justify-end">
      <button @click="addToFavorites(item)" :loading="loadingWish">
        <i
          v-if="!isInWishList(item)"
          class="pi pi-heart cursor-pointer mr-2"
          style="font-size: 1.3rem"
        ></i>
        <i
          v-else
          class="pi pi-heart-fill cursor-pointer mr-2"
          style="font-size: 1.3rem; color: red"
        ></i>
      </button>
      <button class="rounded-full transition-colors" @click="addToCart(item)">
        <i class="pi pi-shopping-cart text- pt-4" style="font-size: 1.3rem"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import Rating from "../ratings/index.vue";
defineProps({
  item: Object,
  loadingWish: Boolean,
  goToPage: Function,
  selectImage: Function,
  addToFavorites: Function,
  addToCart: Function,
  isInWishList: Function,
  formattedPrice: Function,
});
</script>
