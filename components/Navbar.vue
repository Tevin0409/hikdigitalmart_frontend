<template>
  <header class="bg-white">
    <div class="container mx-auto px-2 py-4">
      <!-- Mobile Layout (Menu, Search, Logo in One Row) -->
      <div class="md:hidden flex items-center justify-between w-full">
        <!-- Logo (Align Right) -->
        <NuxtLink to="/dashboard">
          <img
            src="@/assets/images/logoo.png"
            alt="Hikvision Logo"
            class="h-16 object-contain"
          />
        </NuxtLink>

        <!-- Search Input (Full Width in Between) -->
        <AutoComplete
          v-model="searchTerm"
          @input="fetchProducts"
          :suggestions="filteredItems"
          @complete="searchItems"
          optionLabel="name"
          placeholder="I'm Searching for ..."
          class="flex-grow mx-2 p-input-icon-left"
          @item-select="navigateToProduct"
        >
          <template #option="slotProps">
            <div class="flex items-center w-full">
              <img
                :alt="slotProps.option.name"
                :src="slotProps.option.images"
                class="mr-2 rounded-md"
                style="width: 40px; height: 40px; object-fit: cover"
              />
              <div class="w-full">{{ slotProps.option.name }}</div>
            </div>
          </template>
        </AutoComplete>

        <!-- Menu Button -->
        <Button
          type="button"
          icon="pi pi-bars"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="bg-transparent border-none shadow-none p-2 text-black"
        />
        <Menu
          ref="menu"
          id="overlay_menu"
          :model="items"
          :popup="true"
          class="wmd:w-60"
        >
          <template #item="{ item, props }">
            <a v-ripple class="flex items-center" v-bind="props.action">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
              <Badge
                v-if="item.badge"
                class="ml-auto"
                :value="formattedPrice(item.badge)"
                severity="warning"
              />
            </a>
          </template>
        </Menu>
      </div>

      <!-- Desktop Layout (Hidden on Mobile) -->
      <div class="hidden md:flex items-center">
        <div class="mr-auto md:w-48 flex-shrink-0">
          <NuxtLink to="/dashboard">
            <img
              src="@/assets/images/logoo.png"
              alt="Hikvision Logo"
              class="h-20 object-contain"
            />
          </NuxtLink>
        </div>

        <div class="w-full bg-red flex justify-center items-center py-4">
          <div class="flex items-center space-x-2">
            <AutoComplete
              v-model="searchTerm"
              @input="fetchProducts"
              :suggestions="filteredItems"
              @complete="searchItems"
              optionLabel="name"
              placeholder="I'm Searching for ..."
              class="flex-grow mx-2 p-input-icon-left"
              @item-select="navigateToProduct"
            >
              <template #option="slotProps">
                <div class="flex items-center w-full">
                  <img
                    :alt="slotProps.option.name"
                    :src="slotProps.option.images"
                    class="mr-2 rounded-md"
                    style="width: 40px; height: 40px; object-fit: cover"
                  />
                  <div class="w-full">{{ slotProps.option.name }}</div>
                </div>
              </template>
            </AutoComplete>
            <Button label="Search" icon="pi pi-search" iconPos="left" />
          </div>
        </div>

        <nav
          class="hidden md:flex lg:flex w-1/5 justify-between items-center p-4"
        >
          <NuxtLink @click="goToProfile" class="cursor-pointer">
            <i class="pi pi-user text-3xl" />
          </NuxtLink>

          <NuxtLink @click="goToWishList" class="cursor-pointer">
            <OverlayBadge :value="wishListCount" severity="danger">
              <i class="pi pi-heart text-3xl" />
            </OverlayBadge>
          </NuxtLink>

          <NuxtLink @click="goToCart" class="cursor-pointer">
            <OverlayBadge :value="cartCount" severity="danger">
              <i class="pi pi-shopping-cart text-3xl" />
            </OverlayBadge>
          </NuxtLink>
        </nav>

        <div class="ml-4 hidden sm:flex flex-col font-bold">
          <span class="text-xs text-gray-400">My Cart</span>
          <span>Ksh {{ formattedPrice(cartTotal) }}</span>
        </div>
      </div>
    </div>
    <hr />
  </header>

  <!-- Dropdown for categories -->
  <!-- <select
          v-model="selectedCategory"
          @change="fetchProducts"
          class="bg-transparent uppercase font-bold text-sm p-4 mr-4"
        >
          <option value="" disabled selected>All</option>
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select> -->

  <!-- <input
          v-model="searchTerm"
          @input="fetchProducts"
          class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
          type="text"
          placeholder="I'm searching for ..."
        />
        <svg
          class="ml-auto h-5 px-4 text-gray-500"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          />
        </svg> -->

  <!-- Mobile Menu Button (Visible on Mobile Only) -->
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp } from "nuxt/app";
import { useUserStore } from "@/stores/auth";
// import { useProductStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";

// Define props
const props = defineProps({
  // refresh: {
  //   type: Boolean,
  //   default: false,
  // },
});

// watch(
//   () => props.refresh,
//   (newVal) => {
//     if (newVal) {
//       console.log("Navbar refreshed");
//       // Add logic to refresh data or update the UI
//     }
//   }
// );
const productStore = useProductStore();

const userStore = useUserStore();
const searchTerm = ref(""); // Stores the search term
const selectedCategory = ref("");
const menuOpen = ref(false);
const categories = ref([]);
const cartCount = computed(() => productStore.cartCount);
const cartTotal = computed(() => productStore.cartTotal);
const filteredItems = ref([]);

// Reactive wishlist count using computed
const wishListCount = computed(() => productStore.wishListCount);
const router = useRouter();
const { $formatPrice } = useNuxtApp();

const menu = ref();

const toggle = event => {
  menu.value.toggle(event);
};

const fetchCat = async () => {
  try {
    await productStore.getCategories(); // Calls the store action to fetch categories
    categories.value = productStore.categories; // Retrieves categories from store
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
const formattedPrice = price => {
  return $formatPrice(price);
};
const cartItems = ref(0);

const routeTo = () => {
  // const userStore = useUserStore();
};
const navigateToProduct = event => {
  if (event && event.value && event.value.id) {
    router.push({
      path: `/products/${event.value.id}`,
    });
  }

  //  router.push({
  //   path: `/products/${product.id}`,
  // });
};

const emit = defineEmits(["update:searchTerm"]);

const fetchProducts = async () => {
  // emit("update:searchTerm", searchTerm.value);

  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.get("/product", {
      params: {
        searchTerm: searchTerm.value,
        // categoryId: selectedCategory.value,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const getCartItems = async () => {
  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.get(`/product/cart`);
    // cartCount.value = response.data.length;
    // Calculate cart total
    const defaultPrice = 100;
    cartItems.value = response.data.reduce((total, item) => {
      return total + item.quantity * defaultPrice;
    }, 0);
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

const searchItems = async event => {
  let query = event.query;
  filteredItems.value = [];

  if (!query) return;

  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.get("/product", {
      params: { searchTerm: query },
    });

    const defaultImage =
      "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";
    filteredItems.value = response.data.results.flatMap(product =>
      product.models.map(model => ({
        id: model.id, // Now using the model's ID
        name: `${product.name} - (${model.name})`,
        images:
          model.images.length > 0
            ? model.images.map(img => img.autoCropUrl)
            : [defaultImage],
      }))
    );

    console.log(filteredItems.value);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// check if user is logged in
const checkUserLoggedIn = async () => {
  // Check if the user is logged in by verifying if the token exists
  if (userStore.isLoggedIn) {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");

      // Ensure storedWishlist is parsed safely
      const wishId = storedWishlist ? JSON.parse(storedWishlist) : [];

      console.log("Wishlist IDs:", wishId);

      // Ensure wishId is an array and has a length
      if (Array.isArray(wishId) && wishId.length > 0) {
        for (let i = 0; i < wishId.length; i++) {
          wishProduct(wishId[i]); // Call wishProduct with each ID
        }
        localStorage.removeItem("wishlist"); // Clear wishlist from localStorage
      } else {
        console.log("Wishlist is empty or invalid.");
      }

      return true;
    } else {
      console.error("LocalStorage is not available in the current context.");
      return false;
    }
  } else {
    console.log("No token found. User is not logged in.");
    return false;
  }
};
const goToWishList = () => {
  router.push({
    path: `/wishlist`,
  });
};
const goToCart = () => {
  router.push({
    path: `/cart`,
  });
};
const goToProfile = () => {
  router.push({
    path: `/my-account`,
  });
};
const welcomeLabel = computed(() => {
  return `Welcome ${userStore.isLoggedIn ? userStore.user.firstName : "User"}`;
});

const items = ref([
  {
    label: welcomeLabel,
    items: [
      {
        label: "My Account",
        icon: "pi pi-user",
        command: goToProfile,
      },
      {
        label: "Wishlist",
        icon: "pi pi-heart",
        command: goToWishList,
        badge: computed(() =>
          wishListCount.value > 0 ? wishListCount.value : null
        ),
      },
      {
        label: "Cart",
        icon: "pi pi-shopping-cart",
        command: goToCart,
        badge: computed(() => (cartTotal.value > 0 ? cartTotal.value : null)),
      },
    ],
  },
]);

const getWishList = async () => {
  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.get("/product/wishlist");
    // wishListCount.value = response.data.length;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishListCount.value = localWishlist.length;
  }
};
const wishProduct = async productId => {
  const productStore = useProductStore(); // Access the store
  const userStore = useUserStore(); // Access the user store for authentication state

  const { res } = await productStore.addToWishlist(productId);
  console.log(res, "Wishlist");
  await productStore.getWishList();

  try {
    const { $axios } = useNuxtApp();
    const product = { productId: productId };
    const response = await $axios.post(`/product/wishlist/add`, product);

    console.log("Done", response);
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
  }
};
// Fetch the data on component mount
onMounted(async () => {
  await productStore.getCategories();
  await productStore.getCartItems();
  await productStore.getWishList();
  await checkUserLoggedIn();
  await getCartItems();
  await getWishList();
  await fetchCat();
});
</script>

<style>
@media (min-width: 768px) {
  .md\:hidden {
    display: none;
  }

  .md\:flex {
    display: flex;
  }
}
</style>
