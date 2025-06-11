<template>
  <div class="flex flex-col md:flex-row w-full p-6">
    <div
      class="w-full md:w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"
    >
      <div
        class="text-lg font-semibold mb-2 border-b flex justify-between items-center"
      >
        <p class="text-gray-500 d-flex justify-center text-center pl-4">
          Hot Deals
        </p>
      </div>
      <Carousel
        :d_circular="true"
        :autoplayInterval="10000"
        :value="topProducts"
        :numVisible="1"
        :numScroll="1"
        orientation="horizontal"
        containerClass="custom-carousel-heigh flexitems-center justify-center"
        :showIndicators="false"
        :showNavigators="false"
      >
        <template #item="slotProps">
          <div>
            <div class="mb-4" @click="goToPage(slotProps.data)">
              <div class="relative mx-auto h-">
                <img
                  :src="slotProps.data.image"
                  alt=" "
                  class="object-cover rounded"
                  style="
                    max-width: 10% !important;
                    min-height: 210px !important;
                    max-height: 100px !important;
                    width: 100% !important;
                    height: 100% !important;
                  "
                />
              </div>
            </div>
            <div class="mb-4 font-medium flex justify-around">
              {{ slotProps.data.name }}
            </div>
            <div class="flex justify-around items-center">
              <div class="mt-0 font-semibold text-xl py-4">
                {{ formattedPrice(slotProps.data.price) }}
              </div>
            </div>
            <div class="flex justify-center text-center">
              <RatingCard :reviews="slotProps.data.Review" />
            </div>

            <p class="py-4">
              <span
                class="text-gray-600 text-sm text-truncate mb-4"
                v-for="item in slotProps.data.features"
              >
                {{ item.description }}
              </span>
            </p>
            <p class="flex justify-around items-center">
              <button
                class="w-3/4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline"
                @click="addToCart(slotProps.data)"
              >
                Add to Cart
              </button>
              <button
                class="w-1/4"
                @click="addToFavorites(slotProps.data)"
                :loading="loadingWish"
              >
                <i
                  v-if="!isInWishList(slotProps.data)"
                  class="pi pi-heart cursor-pointer mr-2"
                  style="font-size: 1.5rem"
                ></i>
                <i
                  v-else
                  class="pi pi-heart-fill cursor-pointer mr-2"
                  style="font-size: 1.5rem; color: red"
                ></i>
              </button>
            </p>
          </div>
        </template>
      </Carousel>
    </div>

    <!-- Monthly Featured Items Section -->
    <div class="p-6 w-full md:w-4/5">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <h2 class="text-lg font-bold mb-2 md:mb-0">
          <span class="text-red-500">Monthly Featured Items</span>
        </h2>

        <!-- Tabs -->
        <div
          class="flex flex-wrap md:flex-nowrap space-x-2 md:space-x-4 border-b"
        >
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="selectedTab = tab"
            :class="[
              'px-2 py-1 md:px-4 md:py-2 text-sm font-semibold whitespace-nowrap',
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
        <div
          class="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0"
        >
          <!-- Left Products -->
          <div class="flex flex-col space-y-4 w-full md:w-1/3">
            <ProductCard
              v-for="item in featuredProducts.slice(0, 2)"
              :key="item.name"
              :item="item"
              :loadingWish="loadingWish"
              :goToPage="goToPage"
              :selectImage="selectImage"
              :addToFavorites="addToFavorites"
              :addToCart="addToCart"
              :isInWishList="isInWishList"
              :formattedPrice="formattedPrice"
              class="border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"
            />
          </div>

          <!-- Center Product -->
          <div class="flex-1 h-full">
            <div
              v-for="item in featuredProducts.slice(2, 3)"
              :key="item.name"
              class="border rounded-sm p-4 shadow-sm h-full relative group transition duration-300 cursor-pointer"
            >
              <div class="flex justify-between">
                <Tag severity="warn" value="New"></Tag>
                <div class="gap-5">
                  <button @click="addToFavorites(item)" :loading="loadingWish">
                    <i
                      v-if="!isInWishList(item)"
                      class="pi pi-heart transition-colors cursor-pointer mr-2"
                      style="font-size: 1.3rem"
                    ></i>
                    <i
                      v-else
                      class="pi pi-heart-fill transition-colors cursor-pointer mr-2"
                      style="font-size: 1.3rem; color: red"
                    ></i>
                  </button>
                  <button
                    class="rounded-full transition-colors transition-colors"
                    @click="addToCart(item)"
                  >
                    <i
                      class="pi pi-shopping-cart transition-colors text- pt-4"
                      style="font-size: 1.3rem"
                    ></i>
                  </button>
                </div>
              </div>

              <div
                @click="goToPage(item)"
                class="flex flex-col items-center h-full"
              >
                <div class="relative">
                  <!-- {{ item }} -->
                  <img
                    :src="item.image"
                    class="object-cover rounded-md w-full h-48"
                  />
                  <!-- Hover Icons -->
                </div>

                <div class="text-center items-center pt-4 flex flex-col">
                  <h3 class="text-lg font-medium">
                    {{ item.product.name }}
                  </h3>
                  <span class="text-sm">
                    {{ item.name }}
                  </span>
                  <div
                    class="mt-2 text-primary hover:text-primary transition-colors duration-200 font-bold text-lg"
                  >
                    <span>{{ formattedPrice(item.price) }}</span>
                  </div>
                  <div class="flex mt-1 text-center">
                    <RatingCard :reviews="item.Review" />
                  </div>
                  <p class="text-gray-500 mt-1">
                    <strong>
                      {{
                        item.features.map((feat) => feat.description).join(", ")
                      }}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Products -->
          <div class="flex flex-col space-y-4 w-full md:w-1/3">
            <ProductCard
              v-for="item in featuredProducts.slice(3, 5)"
              :key="item.name"
              :item="item"
              :loadingWish="loadingWish"
              :goToPage="goToPage"
              :selectImage="selectImage"
              :addToFavorites="addToFavorites"
              :addToCart="addToCart"
              :isInWishList="isInWishList"
              :formattedPrice="formattedPrice"
              class="border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"
            />
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
import { useRouter } from "vue-router";
import ProductCard from "../MonthlyFeaturedCards/index.vue";
import RatingCard from "../ratings";

export default {
  components: { Carousel, ProductCard, RatingCard },
  setup() {
    const tabs = ref([
      "Top Monthly",
      // "Best Seller",
      // "Top",
      // "New Arrivals",
      // "Top Rating",
    ]);
    const userStore = useUserStore();

    const router = useRouter();
    const carousel = ref(null);
    const selectedTab = ref("Recent");
    const topProducts = ref([]);

    const products = computed(() => productStore.products);
    const getTopProducts = () => {
      topProducts.value = products.value
        .sort((a, b) => b.price - a.price) // Sort products by price in descending order
        .slice(0, 3) // Select the top 3 products
        .map((product) => ({
          name: product.name, // Ensure the product name is included
          price: product.price,
          image: product.images?.[0]?.uploadUrl || "",
          ...product,
        }));
    };

    const toast = useToast();
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = (price) => {
      let p = `Ksh ${$formatPrice(price)}`;
      return p;
    };
    const getSeverity = (status) => {
      switch (status) {
        case "INSTOCK":
          return "success";

        case "LOWSTOCK":
          return "warn";

        case "OUTOFSTOCK":
          return "danger";

        default:
          return null;
      }
    };
    const wishList = computed(() => productStore.wishListItems);

    const isInWishList = (item) => {
      if (!item || !item.id) {
        return false;
      }
      if (userStore.isLoggedIn) {
        const exists = wishList.value.some(
          (wish) => wish.productModel.id === item.id
        );
        return exists;
      } else {
        const exists = wishList.value.some((wish) => wish.id === item.id);
        return exists;
      }
    };
    const selectImage = (item, image) => {
      item.image = image;
    };
    const goToPage = (item) => {
      router.push({
        path: `/products/${item.id}`,
      });
    };
    const addToFavorites = async (product) => {
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
          const localWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

          // Check if the product is already in the local wishlist
          const existingIndex = localWishlist.findIndex(
            (item) => item.id === product.id
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
    onMounted(() => {
      getTopProducts();
    });
    const addToCart = async (product) => {
      console.log(product);
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

    const featuredProducts = computed(() => {
      const products = productStore.products;
      const totalItems = 20;

      // const defaultImage =
      //   "https://html.themexriver.com/radios/assets/img/product/img_53.png";
      // // Array of default images
      const defaultImages = [
        "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        "https://html.themexriver.com/radios/assets/img/product/img_54.png",
        "https://html.themexriver.com/radios/assets/img/product/img_55.png",
      ];

      if (products.length === 0) return [];

      // Repeat the products array until it reaches the desired length
      const repeatedProducts = [];
      while (repeatedProducts.length < totalItems) {
        repeatedProducts.push(...products);
      }
      let productImages = products.map((el) => {
        // const { image, name } = el;
        const products = {
          image: el.images[0]?.uploadUrl,
          images: el.images,
          ...el,
        };
        return products;
      });

      // Slice the array to ensure exactly 20 items and assign default images in a rotating manner
      return productImages;
      //  repeatedProducts.slice(0, totalItems).map((product, index) => ({
      //   ...product,
      //   image: product.image || defaultImage,
      //   images: defaultImages,
      // }));
    });

    return {
      products,
      featuredProducts,
      carousel,
      tabs,
      formattedPrice,
      selectedTab,
      getSeverity,
      selectImage,
      addToFavorites,
      addToCart,
      goToPage,
      isInWishList,
      getTopProducts,
      topProducts,
    };
  },
};
</script>

<style>
.pi-star-fill {
  color: gold;
}

.custom-carousel-height {
  height: 100%;
}
</style>
