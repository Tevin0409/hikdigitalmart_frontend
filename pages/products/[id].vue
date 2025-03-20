<template>
  <div class="container mx-auto p-6">
    <!-- Header -->
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0">{{
            item.label
          }}</span>
        </a>
      </template>
    </Breadcrumb>

    <!-- <h1 class="text-2xl font-semibold mb-6">Product Details</h1> -->

    <!-- Product Display -->
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Info Section -->
      <div class="flex flex-col space-y-4">
        <h2 class="text-3xl font-bold">{{ product.name }}</h2>
        <p class="text-lg text-gray-700 font-medium">
          Ksh {{ formattedPrice(product.price) }}
        </p>
        <p class="text-gray-600 leading-relaxed">
          <!-- {{ product.features.map(feature => feature.description).join(", ") }} -->
        </p>

        <!-- Colors -->
        <div class="flex items-center space-x-4">
          <p v-for="feature in product.features">{{ feature.description }}</p>
          <!-- <span class="font-medium">Colors:</span>
          <div
            v-for="(color, index) in product.colors"
            :key="index"
            :style="{ backgroundColor: color }"
            class="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
          ></div> -->
        </div>

        <!-- Size Selector -->
        <!-- <div class="flex items-center space-x-4">
          <span class="font-medium">Size:</span>
          <select class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <option v-for="(size, index) in product.sizes" :key="index">
              {{ size }}
            </option>
          </select>
        </div> -->

        <!-- Quantity and Actions -->
        <div class="flex items-center space-x-4">
          <input
            type="number"
            min="1"
            v-model="quantity"
            class="w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <p class="text-gray-600">
            <i class="pi pi-wallet mr-4"></i> Ksh
            {{ formattedPrice(product.price * quantity) }}
          </p>
          <p>
            <button @click="addToWishlist(product)" :loading="loadingWish">
              <i
                v-if="!isInWishList(product)"
                class="pi pi-heart cursor-pointer mr-2"
                style="font-size: 1.8rem"
              ></i>
              <i
                v-else
                class="pi pi-heart-fill cursor-pointer mr-2"
                style="font-size: 1.8rem; color: red"
              ></i>
            </button>
          </p>

          <Button
            @click="addToCart(product)"
            :loading="loadingAdd"
            label="Add to Cart"
          ></Button>
          <!-- <Button
          
            icon="pi pi-heart"
            severity="success"
            aria-label="Search"
            rounded
            class="favicon"
          /> -->
        </div>

        <!-- Delivery Info -->
        <div class="mt-4 space-y-2">
          <p class="text-bl font-bold">
            <i class="fas fa-truck"></i> Description
          </p>
          <p
            class="text-gray-600"
            v-html="formatDescription(product.description)"
          ></p>
          <p class="text-gray-600">
            <i class="fas fa-undo"></i>

            <!-- <p v-for="feature in product.features">{{ feature.description }}</p> -->
          </p>
        </div>
      </div>

      <!-- Product Images Section -->
      <div class="flexflex-col md:flex-row items-center">
        <!-- Main Image -->
        <div
          class="w-full h-96 mb-4 md:mb-0 md:mr-4 border rounded-lg overflow-hidden"
        >
          <img
            :src="product.image"
            alt="Product Image"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Thumbnails -->
        <div
          class="flex mt-8 md:flex-row gap-2 justify-center md:overflow-visible"
        >
          <img
            v-for="(img, index) in product.images.slice(-4)"
            :key="index"
            :src="img"
            alt="Thumbnail"
            @click="setMainImage(img)"
            class="w-20 h-20 md:w-32 md:h-32 object-cover border rounded-lg cursor-pointer hover:border-gray-500"
          />
        </div>
      </div>
    </div>

    <!-- Tabs Section -->
    <div v-if="product" class="mt-8">
      <div class="flex space-x-8 border-b pb-2">
        <h3
          class="cursor-pointer text-lg font-semibold"
          :class="tabClass('details')"
          @click="activeTab = 'details'"
        >
          Details
        </h3>
        <h3
          class="cursor-pointer text-lg font-semibold"
          :class="tabClass('reviews')"
          @click="activeTab = 'reviews'"
        >
          Reviews
        </h3>
        <h3
          class="cursor-pointer text-lg font-semibold"
          :class="tabClass('discussion')"
          @click="activeTab = 'discussion'"
        >
          Discussion
        </h3>
      </div>

      <!-- Details Section -->
      <div v-if="activeTab === 'details'" class="mt-6 space-y-6">
        <p v-html="formatDescription(product.description)"></p>
        <!-- <ol>
          <li
            class="text-gray-600 leading-relaxed pt-8"
            v-for="item in product.features"
          >
            {{ product.description }}
          </li>
        </ol>

        <ul class="list-disc pl-5 text-gray-700 space-y-2">
          <li v-for="(detail, index) in product.details" :key="index">
            {{ detail }}
          </li>
        </ul> -->
      </div>

      <!-- Reviews Section -->
      <div v-if="activeTab === 'reviews'" class="mt-6 space-y-8">
        <div v-for="review in reviews" :key="review.id" class="border-b pb-4">
          <div class="flex items-center space-x-4">
            <img
              :src="review.avatar"
              alt="User Avatar"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h4 class="font-bold text-gray-800">{{ review.name }}</h4>
              <p class="text-sm text-gray-500">{{ review.date }}</p>
              <div class="flex space-x-1 mt-1">
                <template v-for="i in 5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :fill="i <= review.rating ? 'currentColor' : 'none'"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 text-yellow-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </template>
              </div>
            </div>
          </div>
          <p class="mt-4 text-gray-800">{{ review.comment }}</p>
          <div class="flex items-center space-x-4 text-gray-500 text-sm mt-2">
            <span class="cursor-pointer hover:text-gray-700">Reply</span>
            <span>Likes: {{ review.likes }}</span>
            <span>Replies: {{ review.replies }}</span>
          </div>
        </div>
      </div>
      <!-- Discussion Section -->
      <div v-if="activeTab === 'discussion'" class="mt-6 space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">Discussion</h2>

        <!-- Input to Add a Comment -->
        <div class="flex items-start space-x-4">
          <!-- <img src="/path/to/default-avatar.jpg" alt="Your Avatar" class="w-10 h-10 rounded-full" /> -->
          <div class="flex-1">
            <textarea
              v-model="newComment"
              placeholder="Write your comment..."
              rows="3"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              @click="addComment"
              class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Post Comment
            </button>
          </div>
        </div>

        <!-- Display Existing Comments -->
        <div
          v-for="comment in discussionComments"
          :key="comment.id"
          class="border-b pb-4"
        >
          <div class="flex items-center space-x-4">
            <img
              :src="comment.avatar"
              alt="User Avatar"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h4 class="font-bold text-gray-800">{{ comment.name }}</h4>
              <p class="text-sm text-gray-500">{{ comment.date }}</p>
            </div>
          </div>
          <p class="mt-2 text-gray-700">{{ comment.content }}</p>
          <div class="flex items-center space-x-4 text-gray-500 text-sm mt-2">
            <span
              @click="replyToComment(comment.id)"
              class="cursor-pointer hover:text-gray-700"
              >Reply</span
            >
            <span>Likes: {{ comment.likes }}</span>
            <span>Replies: {{ comment.replies }}</span>
          </div>

          <!-- Replies -->
          <div
            v-if="comment.replies && comment.replies.length"
            class="mt-4 pl-6 border-l"
          >
            <div v-for="reply in comment.replies" :key="reply.id" class="mt-2">
              <div class="flex items-center space-x-4">
                <img
                  :src="reply.avatar"
                  alt="Reply Avatar"
                  class="w-8 h-8 rounded-full"
                />
                <div>
                  <h4 class="font-bold text-gray-800">{{ reply.name }}</h4>
                  <p class="text-sm text-gray-500">{{ reply.date }}</p>
                </div>
              </div>
              <p class="mt-2 text-gray-700">{{ reply.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div
      v-else
      class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
    >
      <div class="relative flex justify-center items-center">
        <div
          class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"
        ></div>
        <img
          src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png"
          class="rounded-full h-24 w-24"
        />
      </div>
      <!-- <div class="spinner-border animate-spin text-white" role="status">
        <span class="sr-only">Loading...</span>
      </div> -->
    </div>

    <!-- Related Products -->

    <section>
      <div class="rounded-md pt-10">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Related Products</h2>
        </div>

        <div class="flex overflow-x-auto gap-4 p-2">
          <div
            v-for="(product, index) in productList"
            :key="index"
            class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2"
            @click="goToProductPage(product)"
          >
            <div class="relative">
              <img
                :src="product.images[0]?.uploadUrl"
                :alt="product.name"
                class="w-full h-36 object-cover rounded-md"
              />
              <!-- <span
                class="absolute top-2 right-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-md"
              >
                -{{ product.discount }}%
              </span> -->
            </div>
            {{ product.product.name }}
            <h3 class="text-sm font-medium mt-2 truncate">
              {{ product.name }}
            </h3>
            <p class="text-lg font-semibold text-gray-900">
              <!-- {{ formatPrice(product.price) }} -->
            </p>
            <p class="text-gray-500 text-xs line-through">
              {{ product.oldPrice }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
// import formatPrice from "~/plugins/formatPrice";
import { useProductStore } from "@/stores/productStore";

const { $formatPrice } = useNuxtApp();
const router = useRouter();
const formattedPrice = price => {
  return $formatPrice(price);
};
const toast = useToast();
const userStore = useUserStore(); // Access the user store for authentication state

const productStore = useProductStore();

const route = useRoute();
const quantity = ref(1);
const activeTab = ref("details");
const products = ref([]);
const wishList = computed(() => productStore.wishListItems);

const productList = computed(() => productStore.products);
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
const reviews = [
  {
    id: 1,
    name: "Helen Mwoki.",
    date: "Yesterday",
    rating: 5,
    comment: "Excellent gamepad!",
    likes: 42,
    replies: 0,
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 1,
    name: "Susan Njeri M.",
    date: "Yesterday",
    rating: 5,
    comment: "Besst Product ever !",
    likes: 42,
    replies: 0,
    avatar: "https://via.placeholder.com/40",
  },
];

const product = ref(null);
const loading = ref(false);
const loadingAdd = ref(false);
const { $axios } = useNuxtApp();
const goToProductPage = product => {
  // console.log("prodcet", product);
  router.push({
    path: `/products/${product.id}`,
  });
};
onMounted(() => {
  // product.value = route.state?.product || dummyProduct;
  getProductByID();
  // getProducts()
});

const setMainImage = image => {
  product.value.image = image;
};
const formatDescription = description => {
  return description ? description.replace(/\r\n/g, "<br>") : "";
};
// addToWishlist;
const addToWishlist = async product => {
  const productStore = useProductStore(); // Access the store

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
      // if (existingIndex === -1) {

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
        localWishlist.push(productMod);
        // localWishlist.push(product);
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
  loadingAdd.value = true;
  try {
    await productStore.addToCart(product, quantity.value);
    toast.add({
      severity: "success",
      summary: "Product Added to Cart",
      group: "br",
      life: 3000,
    });
    loadingAdd.value = false;
  } catch (error) {
    loadingAdd.value = false;
    toast.add({
      severity: "danger",
      summary: "error adding to cart, Please try again",
      group: "br",
      life: 3000,
    });
  }
};

const getProductByID = async () => {
  const productID = route.params.id;

  try {
    const response = await $axios.get(`product/model/by-id/${productID}`);

    // Extract the primary image and all images from the response
    const primaryImage = response.data.images.find(
      image => image.isPrimary
    )?.uploadUrl;
    const allImages = response.data.images.map(image => image.uploadUrl);

    console.log("fd", allImages);

    product.value = {
      ...response.data,
      image: primaryImage, // Use the primary image or fall back to dummy
      images: allImages, // Use real images or fall back to dummy
      description: response.data.description, // Use real description or fall back to dummy
      colors: response.data.colors, // Use real colors or fall back to dummy
    };

    console.log("Updated Product:", product.value);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
  }
};
const home = ref({
  icon: "pi pi-home",
  route: "/dashboard",
});
const items = ref([
  { label: "Products", route: "/dashboard" },
  // { label: `${product.name}`, route: "" },
]);
// const randomizedProducts = computed(() => {
//   return [...productList.value] // Create a shallow copy
//     .sort(() => Math.random() - 0.5) // Shuffle array
//     .slice(0, 6); // Limit to 6 items
// });
const tabClass = tab => ({
  "text-black border-b-2 border-black": activeTab.value === tab,
  "text-gray-600": activeTab.value !== tab,
});
const getProductDetails = async () => {
  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.get("/product");
    products.value = response.data;
    // console.log("Product", products.value);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
</script>
<style scoped>
/* Add some custom styles for the loading spinner if needed */
.spinner-border {
  border-width: 4px;
  border-color: #fff transparent #fff transparent;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border-top-color: transparent;
}
</style>
