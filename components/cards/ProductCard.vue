<template>
  <div
    class="border-r border-gray-200 rounded-lg p-4 text-center bg-white shadow-md relative group"
  >
    <img
      :src="item.images[0]?.uploadUrl"
      class="h-32 mx-auto mb-2 transition-transform group-hover:scale-105"
      alt="Product Image"
    />
    <div
      class="flex flex-col text-center p-2 hover:text-primary transition-colors duration-200"
      @click="goToProductPage(item)"
    >
      <h3
        class="text-sm font-regular truncate hover:text-primary transition-colors duration-200 cursor-pointer"
      >
        {{ item.product.name }} <br />
        <span class="font-medium text-sm"> ({{ item.name }})</span>
      </h3>

      <!-- Rating -->
      <div class="flex justify-center mt-">
        <span v-for="star in 5" :key="star" class="text-yellow-400">
          <i
            :class="{
              'pi pi-star-fill': star <= item.rating,
              'pi pi-star': star > item.rating,
            }"
          ></i>
        </span>
        <span class="text-gray-500 ml-2">
          <div class="flex items-center mt-2">
            <div class="flex text-yellow-400">
              <template v-for="i in 5" :key="i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                  class="w-4 h-4"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </template>
            </div>
            <p class="ml-2 text-gray-500 text-sm text-center">
              <!-- ({{ item.reviews }} reviews) -->
            </p>
          </div>
        </span>
      </div>

      <!-- Price -->
      <p class="text-red-500 font-semibold text-center">
        Ksh {{ formattedPrice(item.price) }}
        <!-- <span class="line-through text-gray-400">{{ formattedPrice(item.oldPrice) }}</span> -->
      </p>
    </div>

    <!-- Hover Buttons -->
    <div
      class="absolute top-4 right-4 flex flex-col space-y-2 opacity-0group-hover:opacity-100 transition-opacity"
    >
      <button @click="addToCart(item)" class="p-2 rounded-full">
        <i
          class="pi pi-shopping-cart text-gray-600"
          style="font-size: 1.2rem"
        ></i>
      </button>
      <!-- <button
        @click="wishProduct(item)"
        class="bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <i class="pi pi-heart text-gray-600"></i>
      </button> -->

      <button @click="wishProduct(item)">
        <i
          v-if="!isInWishList(item)"
          class="pi pi-heart cursor-pointer text-gray-600"
          style="font-size: 1.2rem"
        ></i>
        <i
          v-else
          class="pi pi-heart-fill cursor-pointer text-gray-600"
          style="font-size: 1.2rem; color: red"
        ></i>
      </button>
    </div>
    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useNuxtApp } from "nuxt/app";
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";

const toast = useToast();
const router = useRouter();
const userStore = useUserStore();
const { $axios } = useNuxtApp();
const { $formatPrice } = useNuxtApp();

const productStore = useProductStore();

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const formattedPrice = price => {
  return $formatPrice(price);
};
const emit = defineEmits(["wishlist-updated"]);

// defineEmits(["wishlist-updated"]);
// const wishList = ref([])
// const wishList = productStore.wishListItems; // Initialize wishlist as a reactive array
const wishList = computed(() => productStore.wishListItems);

const getWishList = async () => {
  try {
    const isLoggedIn = await checkUserLoggedIn();
    if (isLoggedIn) {
      const response = await $axios.get("/product/wishlist");
      wishList.value = response.data.map(item => item.productId); // Extract only product IDs
    } else {
      const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishList.value = localWishlist;
    }
  } catch (error) {
    // console.error("Error fetching wishlist:", error);
  }
};

const isInWishList = item => {
  if (!item || !item.id) {
    return false;
  }
  if (userStore.isLoggedIn) {
    const exists = wishList.value.some(
      wish => wish.productModel.id === item.id
    );
    return exists;
  } else {
    const exists = wishList.value.some(wish => wish.id === item.id);
    return exists;
  }
};
// Helper function to check if the user is logged in
const checkUserLoggedIn = async () => {
  if (userStore.isLoggedIn) {
    return true;
  } else {
    return false;
  }
};

const wishProduct = async product => {
  // console.log(productId, "Attempting to add to wishlist");

  const productStore = useProductStore(); // Access the store
  const userStore = useUserStore(); // Access the user store for authentication state

  try {
    if (userStore.isLoggedIn) {
      const res = await productStore.addToWishlist(product.id);
      await productStore.getWishList(); // Refresh wishlist from the server

      toast.add({
        severity: "success",
        summary: res.data.message,
        group: "br",
        life: 3000,
      });
    } else {
      // Not logged in: Save to or remove from localStorage wishlist
      const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      // Check if the product is already in the local wishlist
      const existingIndex = localWishlist.findIndex(
        item => item.id === product.id
      );
      if (existingIndex === -1) {
        const productMod = {
          id: product.id,
          name: product.name,
          created_at: new Date().toISOString(),
          userId: "user.id",
          productModelId: product.id,
          productModel: {
            ...product,
          },
        };
        // Product is not in the wishlist, add it
        localWishlist.push(productMod);
        localStorage.setItem("wishlist", JSON.stringify(localWishlist));

        await productStore.getWishList();

        toast.add({
          severity: "success",
          summary: "Your Wishlist has been saved locally.",
          group: "br",
          life: 3000,
        });
      } else {
        // Product is already in the wishlist, remove it
        localWishlist.splice(existingIndex, 1); // Remove the item from the array
        localStorage.setItem("wishlist", JSON.stringify(localWishlist));
        await productStore.getWishList();

        toast.add({
          severity: "info",
          summary: "The item has been removed from your local wishlist.",
          group: "br",
          life: 3000,
        });
      }
    }
  } catch (error) {
    console.error("Error processing wishlist:", error);

    toast.add({
      severity: "error",
      summary: "An error occurred while managing your wishlist.",
      detail: error.message,
      group: "br",
      life: 5000,
    });
  }
};

const addToCart = async product => {
  const userStore = useUserStore();
  let user = userStore.user;
  try {
    const productStore = useProductStore(); // Access the store
    const response = await productStore.addToCart(product, 1);

    // Notify user on successful addition
    toast.add({
      severity: "success",
      summary: "Product Added to Cart",
      group: "br",
      life: 3000,
    });

    console.log(response);
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

const goToProductPage = product => {
  // console.log("prodcet", product);
  router.push({
    path: `/products/${product.id}`,
  });
};

// Fetch the wishlist when the component is mounted
onMounted(() => {
  getWishList();
  checkUserLoggedIn();
});
</script>

<style scoped></style>
