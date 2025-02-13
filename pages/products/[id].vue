<template>
  <div class="container mx-auto p-6">
    <!-- Header -->
    <h1 class="text-2xl font-semibold mb-6">Product Details</h1>

    <!-- Product Display -->
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images Section -->
      <div class="flex flex-col items-center">
        <!-- Main Image -->
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full h-full object-cover mb-4 border rounded-lg"
        />

        <!-- Thumbnails -->
        <div class="grid grid-cols-5 gap-2">
          <img
            v-for="(img, index) in product.images"
            :key="index"
            :src="img.autoCropUrl"
            alt="Thumbnail"
            @click="setMainImage(img.autoCropUrl)"
            class="w-16 h-16 object-cover border rounded-lg cursor-pointer hover:border-gray-500"
          />
        </div>
      </div>

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
          <Button @click="addToCart" :loading="loadingAdd" label="Add to Cart">
          </Button>
        </div>

        <!-- Delivery Info -->
        <!-- <div class="mt-4 space-y-2">
          <p class="text-gray-600">
            <i class="fas fa-truck"></i> Free Delivery
          </p>
          <p class="text-gray-600"><i class="fas fa-undo"></i> Easy Returns</p>
        </div> -->
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
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
// import formatPrice from "~/plugins/formatPrice";

const { $formatPrice } = useNuxtApp();

const formattedPrice = price => {
  return $formatPrice(price);
};

const route = useRoute();
const quantity = ref(1);
const activeTab = ref("details");

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

onMounted(() => {
  // product.value = route.state?.product || dummyProduct;
  getProductByID();
});

const setMainImage = image => {
  product.value.image = image;
};
const formatDescription = description => {
  return description ? description.replace(/\r\n/g, "<br>") : "";
};
const addToCart = async () => {
  const userStore = useUserStore();

  let user = userStore.user;

  loadingAdd.value = true;
  const productID = route.params.id;
  try {
    const body = {
      productModelId: productID,
      quantity: quantity.value,
      userId: user.id,
    };
    const response = await $axios.post(`/product/cart/add`, body);
    loadingAdd.value = false; // Stop loading on error
  } catch (error) {
    loadingAdd.value = false; // Stop loading on error
    console.error("Error adding product to cart:", error);
  }
};
const getProductByID = async () => {
  const productID = route.params.id;

  try {
    const response = await $axios.get(`product/model/by-id/${productID}`);

    // Extract the primary image and all images from the response
    const primaryImage = response.data.images.find(
      image => image.isPrimary
    )?.optimizeUrl;
    const allImages = response.data.images.map(image => image.optimizeUrl);

    product.value = {
      ...response.data,
      image: primaryImage, // Use the primary image or fall back to dummy
      images: response.data.images, // Use real images or fall back to dummy
      description: response.data.description, // Use real description or fall back to dummy
      colors: response.data.colors, // Use real colors or fall back to dummy
    };

    console.log("Updated Product:", product.value);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
  }
};

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
