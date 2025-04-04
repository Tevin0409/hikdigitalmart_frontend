<template>
  <div class="flex gap-6 p-4">
    <!-- Sidebar -->
    <div
      class="w-1/5 bg-white shadow p-4 rounded-lg relative h-32 sm:h-40 md:h-80 xl:h-80 hidden lg:block"
    >
      <ul v-if="categories.length" class="space-y-2">
        <li
          class="flex items-center gap-2 pt-3 hover:text-primary cursor-pointer font-regular"
          v-for="item in categories"
          :key="item.name"
          @mouseover="fetchProducts(item), (hoveredCategory = item.name)"
          @mouseleave="hoveredCategory = ''"
        >
          <i :class="getIcon(item.name)"></i>
          <span class="text-xs truncate">{{ item.name }}</span>
        </li>
      </ul>
      <p v-else class="text-gray-50 text-xs text-center pt-3">
        <Skeleton v-for="i in 9" class="mb-2 p-3"></Skeleton>
      </p>
    </div>

    <!-- Main Content -->
    <div
      class="flex-1 bg-white shadow rounded-lg relative w-full h-32 sm:h-40 md:h-80 xl:h-80"
    >
      <div class="flex items-center gap-6 relative">
        <div
          v-if="hoveredCategory"
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 rounded w-full h-32 sm:h-40 md:h-80 xl:h-80 p-4"
        >
          <!-- Display the Category Name -->
          <div class="flex items-center mb-4">
            <i :class="getIcon(hoveredCategory)"></i>
            <span class="ml-3">{{ hoveredCategory }}</span>

            <!-- {{ products }} -->
            <!-- Display the Products as a List -->
            <ul class="space-y-2 text-lg text-center">
              <li
                v-for="product in products"
                :key="product.id"
                class="hover:underlinetransition"
              >
                {{ product.name }}
              </li>
            </ul>
          </div>
        </div>

        <Carousel
          v-if="!hoveredCategory"
          :verticalViewPortHeight="200"
          :value="images"
          :numVisible="1"
          :numScroll="1"
          :showIndicators="false"
          :showNavigators="false"
          circular
          autoplayInterval="3000"
          class="rounded-lg shadow-lg w-full"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.data.src"
              :alt="slotProps.data.alt"
              class="rounded-lg object-cover w-full h-32 sm:h-40 md:h-80 xl:h-80"
            />
          </template>
        </Carousel>

        <!-- <div
          v-if="!hoveredCategory"
          class="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-4 rounded-lg absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 w-auto max-w-[70%] sm:max-w-[60%] md:max-w-[50%]"
        >
          <h2
            class="text-xs sm:text-sm md:text-base font-bold"
            style="font-family: sans-serif"
          >
            Break from <br />
            reality
          </h2>
          <p
            class="text-[10px] sm:text-xs md:text-sm text-gray-400"
            style="font-family: monospace"
          >
            HD and Audio
          </p>
          <button
            class="bg-primary text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-1 sm:py-2 mt-3 sm:mt-4 rounded-lg"
          >
            Shop Now
          </button>
        </div> -->
      </div>
    </div>

    <!-- Right Sidebar -->
    <div class="w-1/5 space-y-4 hidden lg:block h-32 lg:h-80 xl:h-80">
      <div class="bg-white shadow p-4 rounded-lg">
        <h4 class="text-primary font-bold">HELP CENTER</h4>
        <p class="text-gray-600 text-sm">Guide to Customer Care</p>

        <h4 class="text-primary font-bold">HOT DEALS</h4>
        <p class="text-gray-600 text-sm">Updated Daily</p>
      </div>
      <div
        class="bg-primary text-white text-center p-6 rounded-lg max-w-md mx-auto"
      >
        <p class="font-bold text-lg md:text-xl">CALL OR WHATSAPP</p>
        <p
          class="text-xl md:text-sm font-bold flex items-center justify-center gap-2"
        >
          <i class="pi pi-whatsapp text-md md:text-2xl"></i>
          +254 727 909 060
        </p>
        <p class="text-sm md:text-base">TO ORDER</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = ref([]);
const props = defineProps(["categories"]);
// name: "HomePageLayout",
const images = ref([
  {
    src: "https://www.hikvision.com/content/dam/hikvision/usa/newsroom/migrate-assets/Hikvision-s-4K-Ultra-HD-Cameras-Enhance-Surveillance-Video-with-High-Resolution-Quality-and-Exceptional-Features-0.jpg",
    alt: "Surveillance Camera 1",
  },
  {
    src: "https://www.hikvision.com/content/hikvision/us-en/newsroom/blog/2023/12/hikvision-in-black/_jcr_content/root/responsivegrid/img_0_copy.coreimg.100.1280.jpeg/1703703161523/blog-december-27.jpeg",
    alt: "Surveillance Camera 2",
  },
  {
    src: "https://siteexclusive.ae/wp-content/uploads/2021/07/Hikvision-4.jpg",
    alt: "Surveillance Camera 3",
  },
]);

const iconMap = {
  "HD ANALOGUE CAMERAS AND DVR": "pi pi-video",
  "IP NETWORK CAMERAS AND NVR": "pi pi-wifi",
  "ACCESS CONTROL PRODUCTS": "pi pi-lock",
  "VIDEO INTERCOM PRODUCTS": "pi pi-phone",
  "NETWORK AND CABLES PRODUCTS": "pi pi-sitemap",
  "MONITOR DISPLAY PRODUCTS": "pi pi-desktop",
  "ACCESSORIES PRODUCTS": "pi pi-cog",
  Phones: "pi pi-mobile",
};

const hoveredCategory = ref(""); // Stores the category name on hover

const getIcon = name => {
  return iconMap[name] || "pi pi-question"; // Default icon if no match
};

const fetchProducts = async category => {
  return;
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get(
      `/product/product-models/?categoryIds=${category.id}`
    );
    products.value = response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};
</script>

<style scoped>
.icon-official-store::before {
  content: "🏬";
}

.icon-phone::before {
  content: "📱";
}

.icon-tv::before {
  content: "📺";
}

.icon-appliances::before {
  content: "🍴";
}

.icon-health::before {
  content: "💄";
}

.icon-home::before {
  content: "🏠";
}
</style>
