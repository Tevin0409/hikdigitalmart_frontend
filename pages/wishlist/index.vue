<template>
  <div class="p-6 container mx-auto">
    <!-- Cart Empty Card -->
    <div
      class="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 mb-6"
      v-if="wishList.length < 1"
    >
      <img
        src="@/assets/images/wish-list.png"
        alt="Empty Cart"
        class="w-20 h-20 mb-4"
      />
      <h2 class="text-xl font-semibold text-gray-700">
        Your wishlist is empty!
      </h2>
      <p class="text-gray-500 text-sm mb-4">
        Browse our categories and discover our best deals!
      </p>
      <NuxtLink to="/dashboard">
        <button
          class="bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"
        >
          Start Shopping
        </button>
      </NuxtLink>
    </div>

    <!-- Recently Viewed Section -->
    <div class="p-6 container mx-auto" v-else>
      <h2 class="text-2xl font-bold mb-4">Wishlist ({{ wishList.length }})</h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6"
      >
        <div
          v-for="(item, index) in wishList"
          :key="index"
          class="bg-white border rounded-lg shadow-sm overflow-hidden"
        >
          <div class="relative">
            <img
              :src="
                item.productModel?.images?.find(image => image.isPrimary)
                  ?.uploadUrl
              "
              :alt="item.productModel?.name || 'Product Image'"
              class="w-full h-40 object-cover"
            />

            <span
              v-if="item.discount"
              class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
            >
              -{{ item.discount }}%
            </span>
            <button
              class="absolute top-2 right-2 rounded-full p-1 hover:text-red-500"
              @click="removeFromWishlist(item)"
            >
              <i class="pi pi-trash text-red-700" style="font-size: 1.4rem"></i>
              <!-- <i class="pi pi-heart-fill text-red-600"></i> -->
            </button>
          </div>
          <div class="p-4">
            <h3 class="text-md font-semibold truncate">
              {{ item.productModel?.name }}
              <br />
              <span class="text-md font-light">
                {{ item.productModel?.product?.name }}
              </span>
            </h3>

            <p class="text-gray-500 mb-2">
              <span class="text-red-500 font-bold">
                <i class="pi pi-wallet"></i>
                Ksh {{ formattedPrice(item.productModel?.price) }}
              </span>

              <span
                v-if="item?.originalPrice"
                class="line-through text-sm ml-2 text-gray-400"
              >
                Ksh{{ item?.originalPrice }}
              </span>
            </p>
            <button
              class="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              @click="addToCart(item)"
            >
              Move To Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <!-- <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800" @click="moveAllToCart">
          Move All To Bag
        </button> -->
      </div>
    </div>

    <div class="bg-white border rounded-lg p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-700">Recently Viewed</h3>
        <NuxtLink to="/cart">
          <a
            href="#"
            class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
          >
            See All <i class="ml-1 pi pi-angle-right"></i>
          </a>
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="(item, index) in randomizedProducts(products)"
          :key="index"
          class="border rounded-lg p-3 cursor-pointer"
          @click="goToPage(item)"
        >
          <img
            :src="item?.images?.find(image => image.isPrimary)?.uploadUrl"
            :alt="item.name"
            class="w-full h-40 object-cover"
          />

          <p class="text-sm font-medium">
            {{ item.name }}
          </p>
          <p class="text-primary font-semibold text-lg">
            Ksh {{ formattedPrice(item.price) }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-white border rounded-lg p-4 mt-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-700">Top Selling Items</h3>
        <NuxtLink to="/cart">
          <a
            href="#"
            class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
          >
            See All <i class="ml-1 pi pi-angle-right"></i>
          </a>
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="(item, index) in products"
          :key="index"
          class="border rounded-lg p-3 cursor-pointer"
          @click="goToPage(item)"
        >
          <img
            :src="item?.images?.find(image => image.isPrimary)?.uploadUrl"
            :alt="item.productModel?.name || item.name"
            class="w-full h-40 object-cover"
          />

          <p class="text-sm font-medium">
            {{ item.name }}
          </p>
          <p class="text-primary font-semibold text-lg">
            Ksh {{ formattedPrice(item.price) }}
          </p>
        </div>
      </div>
    </div>
    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useUserStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const productStore = useProductStore();
    const userStore = useUserStore();
    const toast = useToast();
    // Computed properties
    const wishList = computed(() => productStore.wishListItems);
    const cartItems = computed(() => productStore.cartItems);
    const cartCount = computed(() => productStore.cartCount);
    const cartTotal = computed(() => productStore.cartTotal);
    const products = computed(() => productStore.products);
    const isLoggedIn = computed(() => userStore.isLoggedIn);
    const router = useRouter();

    // Fetch wishlist on mount
    onMounted(() => {
      productStore.getWishList();
    });

    // const isInWishList = () => {
    //   wishList.find(item => item.id);
    // };
    // Methods
    const formattedPrice = price => {
      const { $formatPrice } = useNuxtApp();
      return $formatPrice(price);
    };

    const removeFromWishlist = async item => {
      await productStore.removeFromWishlist(item.id);
    };

    const addToCart = async product => {
      const productId = product.productModel?.id ?? product.id;
      try {
        if (userStore.isLoggedIn) {
          const response = await productStore.addToCart(
            product.productModel,
            1
          );
          console.log(product);
          await productStore.removeFromWishlist(product.id);
        } else {
          const response = await productStore.addToCart(product, 1);
          await productStore.removeFromWishlist(product.id);
        }
        // To remove the product from the wishlist
        // const res = await productStore.addToWishlist(productId);

        // Notify user on successful addition
        toast.add({
          severity: "success",
          summary: "Product moved to Cart",
          group: "br",
          life: 3000,
        });
      } catch (error) {
        // Handle errors and show appropriate toast messages
        toast.add({
          severity: "error",
          summary: "Failed to Add Product",
          detail: error.message,
          group: "br",
          life: 5000,
        });
      }
    };

    const randomizedProducts = products => {
      if (!Array.isArray(products) || products.length === 0) {
        console.warn("Invalid or empty products array:", products);
        return [];
      }
      return [...products].sort(() => 0.5 - Math.random()).slice(0, 5);
    };
    const goToPage = product => {
      // console.log("prodcet", product);
      router.push({
        path: `/products/${product.id}`,
      });
    };

    return {
      wishList,
      cartItems,
      cartCount,
      cartTotal,
      formattedPrice,
      removeFromWishlist,
      addToCart,
      products,
      randomizedProducts,
      goToPage,
    };
  },
};
</script>

<style>
/* Optional: Tailwind custom styles can go here */
</style>
