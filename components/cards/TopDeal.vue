<template>
  <div class="flex flex-col md:flex-row w-full p-6">
    <!-- Hot Deals Card -->
    <div
      class="w-full md:w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"
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
              <div class="flex justify-around items-center">
                <div class="mt-0 font-semibold text-xl py-4">
                  {{ formattedPrice(slotProps.data.price) }}
                </div>
              </div>

              <div
                class="stock flex items-center text-sm text-gray-600 mb-6 justify-around"
              >
                <div
                  v-for="(label, index) in ['DAYS', 'HOURS', 'MINS', 'SEC']"
                  :key="index"
                  class="flex flex-col items-center"
                >
                  <div
                    class="flex items-center justify-center p-1 bg-orange-500 text-white rounded-full text-base md:text-lg font-bold"
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
            <div
              v-for="item in featuredProducts.slice(0, 2)"
              :key="item.name"
              class="border rounded-sm p-4 shadow-sm flex-1"
            >
              <div class="flex items-center">
                <!-- Main Product Image -->
                <img
                  :src="item.image"
                  class="w-28 h-28 object-cover rounded-md"
                />

                <div class="ml-4 flex flex-col w-full">
                  <h3 class="text-lg font-medium">{{ item.name }}</h3>
                  <div class="mt-2 text-primary font-bold text-lg">
                    <span>{{ formattedPrice(item.price) }}</span>
                  </div>
                  <p class="text-gray-500 mt-1">
                    <strong>{{ item.description }}</strong>
                  </p>

                  <!-- Image Thumbnails Carousel -->
                  <div class="carousel flex items-center mt-2 space-x-4">
                    <div class="flex items-center space-x-2 overflow-x-auto">
                      <img
                        v-for="(image, index) in item.images"
                        :key="index"
                        :src="image"
                        :alt="'Product ' + (index + 1)"
                        @click="selectImage(item, image)"
                        class="w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"
                        :class="{
                          'border-orange-500': item.image === image,
                        }"
                      />
                    </div>
                  </div>
                </div>

                <!-- Favorite & Cart Buttons -->
                <div
                  class="gap-5 relative left-0 top-0 align-start justify-end"
                >
                  <button
                    class="p-2 rounded-full transition-colors"
                    @click="addToFavorites(item)"
                  >
                    <i class="pi pi-heart text-primary"></i>
                  </button>
                  <button
                    class="p-2 rounded-full transition-colors"
                    @click="addToCart(item)"
                  >
                    <i class="pi pi-shopping-cart text-primary"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Center Product -->
          <div class="flex-1 h-full">
            <div
              v-for="item in featuredProducts.slice(2, 3)"
              :key="item.name"
              class="border rounded-sm p-4 shadow-sm h-full relative group transition duration-300"
            >
              <div class="flex justify-between">
                <Tag severity="warn" value="New"></Tag>
                <div class="gap-5">
                  <button
                    class="p-2 rounded-full transition-colors"
                    @click="addToFavorites(item)"
                  >
                    <i class="pi pi-heart text-primary"></i>
                  </button>
                  <button
                    class="p-2 rounded-full transition-colors"
                    @click="addToCart(item)"
                  >
                    <i class="pi pi-shopping-cart text-primary"></i>
                  </button>
                </div>
              </div>

              <div class="flex flex-col items-center h-full">
                <div class="relative">
                  <img
                    :src="item.image"
                    class="object-cover rounded-md w-full h-48"
                  />
                  <!-- Hover Icons -->
                </div>

                <div class="text-center items-center pt-4 flex flex-col">
                  <h3 class="text-lg font-medium">{{ item.name }}</h3>
                  <div class="mt-2 text-primary font-bold text-lg">
                    <span>{{ formattedPrice(item.price) }}</span>
                  </div>
                  <p class="text-gray-500 mt-1">
                    <strong>{{ item.description }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Products -->
          <div class="flex flex-col space-y-4 w-full md:w-1/3">
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
                <div class="ml-4 flex flex-col w-full">
                  <h3 class="text-lg font-medium">{{ item.name }}</h3>
                  <div class="mt-2 text-primary font-bold text-lg">
                    <span class=""> {{ formattedPrice(item.price) }}</span>
                  </div>
                  <p class="text-gray-500 mt-1">
                    <strong>{{ item.description }}</strong>
                  </p>
                  <div class="carousel flex items-center mt-2 space-x-4">
                    <div class="flex items-center space-x-2 overflow-x-auto">
                      <img
                        v-for="(image, index) in item.images"
                        :key="index"
                        :src="image"
                        :alt="'Product ' + (index + 1)"
                        @click="selectImage(item, image)"
                        class="w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"
                        :class="{
                          'border-orange-500': item.image === image,
                        }"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="gap-5 relative left-0 top-0 align-start justify-end"
                >
                  <button
                    class="p-2 rounded-full transition-colors"
                    @click="addToFavorites(item)"
                  >
                    <i class="pi pi-heart text-primary"></i>
                  </button>
                  <button
                    class="p-2 rounded-full transition-colors"
                    @click="addToCart(item)"
                  >
                    <i class="pi pi-shopping-cart text-primary"></i>
                  </button>
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
    const selectedTab = ref("Recent");
    const products = ref([
      {
        image:
          "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Bullet Camera",
        rating: 3,
        reviews: 26,
        oldPrice: 28.52,
        price: 3052,
      },
      {
        image:
          "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Bullet HD Camera",
        rating: 4,
        reviews: 42,
        oldPrice: 19.53,
        price: 2153,
      },
    ]);
    const toast = useToast();
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = price => {
      let p = `Ksh ${$formatPrice(price)}`;
      return p;
    };
    const getSeverity = status => {
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

    const selectImage = (item, image) => {
      item.image = image;
    };
    const addToFavorites = async product => {
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
            item => item.id === product.id
          );
          if (existingIndex === -1) {
            // Product is not in the wishlist, add it
            localWishlist.push(product);
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

    const featuredProducts = computed(() => {
      const products = productStore.products;
      const totalItems = 20;

      const defaultImage =
        "https://html.themexriver.com/radios/assets/img/product/img_53.png";
      // Array of default images
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

      // Slice the array to ensure exactly 20 items and assign default images in a rotating manner
      return repeatedProducts.slice(0, totalItems).map((product, index) => ({
        ...product,
        image: product.image || defaultImage,
        images: defaultImages,
      }));
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
    };
  },
};
</script>

<style>
.pi-star-fill {
  color: gold;
}
</style>
