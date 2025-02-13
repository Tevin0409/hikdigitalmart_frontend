<template>
  <div class="product-section pt-32">
    <div class="flex justify-center items-start">
      <!-- Left Section -->
      <div class="product-details w-1/3">
        <div class="badge text-primary text-sm font-semibold mb-2">
          100% Best Product
        </div>
        <h1 class="text-4xl font-bold mb-4">HD Bullet Camera</h1>
        <p class="text-gray-500 text-lg mb-6">Wide Angle</p>
        <div
          class="price flex items-center text-2xl font-semibold text-red-600 mb-4"
        >
          {{ price }}
          <span class="line-through text-gray-400 text-lg ml-4">KES 2,860</span>
        </div>
        <div class="discount flex items-center mb-6">
          <div class="flex items-center text-lg text-primary mr-4">
            <span class="text-xl font-bold">29%</span> off
          </div>
        </div>
        <div class="stock flex items-center text-sm text-gray-600 mb-6">
          <div class="w-full max-w-xs">
            <div class="relative">
              <div class="h-2 bg-gray-300 rounded">
                <div class="h-2 bg-primary rounded" style="width: 65%"></div>
              </div>
            </div>
            <div class="flex justify-between text-xs mt-2">
              <span>Available: 334</span>
              <span>Stock: 180</span>
            </div>
          </div>
        </div>
        <NuxtLink to="/dashboard">
          <button
            class="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-seconary"
          >
            SHOP NOW →
          </button>
        </NuxtLink>
      </div>
      <!-- Dynamic Image Section -->
      <div
        class="dynamic-image mt- flex justify-center items-center relative w-1/3"
      >
        <img
          :src="selectedImage"
          alt="Selected Product"
          class="w-full h-full rounded- shadow- border-0"
        />
        <div
          class="absolute bottom-0 left-0 text-white bg-primary text-sm px-3 py-1 rounded-full"
          style="transform: translate(-50%, 50%)"
        >
          29% off
        </div>
      </div>
      <!-- Right Section -->
      <div class="w-1/3 pa-6 ma-5 pl-40 h-40 dark:border-orange-600">
        <div
          class="border border-red-600 dark:border-orange-600 rounded m-2 p-4"
        >
          <!-- Static Content -->
          <div class="mb-4 border-b pb-2 font-medium text-dark-600 text-center">
            Top Product
          </div>

          <!-- Carousel for Dynamic Content -->
          <Carousel
            :d_circular="true"
            :autoplayInterval="3000"
            :value="products"
            :numVisible="1"
            :numScroll="1"
            orientation="horizontal"
            containerClass="flex items-center"
            :showIndicators="false"
            :showNavigators="false"
          >
            <template #item="slotProps">
              <!-- Dynamic Content -->
              <div>
                <div class="mb-4">
                  <div class="relative mx-auto">
                    <img
                      :src="slotProps.data?.image"
                      :alt="slotProps.data?.name"
                      class="object-cover rounded"
                      style="max-width: 100%"
                    />
                    <Tag
                      :value="slotProps.data.inventoryStatus"
                      :severity="getSeverity(slotProps.data.inventoryStatus)"
                      class="absolute"
                      style="left: 5px; top: 5px"
                    />
                  </div>
                </div>

                <div class="mb-4 font-medium flex justify-around">
                  {{ slotProps.data?.name }}
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
                  <div class="w-full max-w-xs">
                    <div class="relative">
                      <div class="h-2 bg-primary rounded">
                        <div
                          class="h-2 bg-primary rounded"
                          style="width: 65%"
                        ></div>
                      </div>
                      <div class="flex justify-between text-xs mt-2">
                        <span>Available: 334</span>
                        <span>Stock: 180</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="carousel flex justify-center items-center mt-8 space-x-4">
      <button
        @click="prevImage"
        class="text-gray-600 hover:text-gray-800 px-3 py-2 bg-gray-100 rounded-full shadow-md"
      >
        ←
      </button>
      <div class="flex items-center space-x-4">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Product ' + (index + 1)"
          @click="selectImage(image)"
          class="w-16 h-16 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"
          :class="{ 'border-orange-500': selectedImage === image }"
        />
      </div>
      <button
        @click="nextImage"
        class="text-gray-600 hover:text-gray-800 px-3 py-2 bg-gray-100 rounded-full shadow-md"
      >
        →
      </button>
    </div>

    <div class="feature__wrap grid grid-cols-5 gap-2 m-12">
      <div
        class="feature__item flex flex-col items-center text-center"
        v-for="(feature, index) in features"
        :key="index"
      >
        <div class="icon">
          <i :class="feature.icon" style="font-size: 2rem; color: #f44336"></i>
        </div>
        <div class="content mt-4">
          <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
          <p class="text-sm text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
    <NewArrivals class="py-12" />
    <CardsHome />
    <TopDeal />
    <Footer class="w-full left-0 bottom-0 bg-gray-100 text-gray-800 py-10" />
  </div>
</template>

<script>
import CardsHome from "~/components/cards/home.vue";
import TopDeal from "~/components/cards/TopDeal.vue";
import NewArrivals from "~/components/cards/NewArrivals.vue";
import Footer from "~/components/Footer.vue";

// definePageMeta({
//   layout: "landing",
// });
export default {
  name: "ProductSection",
  components: { CardsHome, TopDeal, NewArrivals, Footer },
  data() {
    return {
      price: "",
      images: [
        "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        "https://html.themexriver.com/radios/assets/img/product/img_52.png",
        "https://html.themexriver.com/radios/assets/img/product/img_54.png",
      ],
      selectedImage:
        "https://html.themexriver.com/radios/assets/img/product/img_53.png", // Default image
      products: [
        {
          name: "HD Camera Bullet",
          price: "KES 3,200.00",
          originalPrice: "KES 3,500.00",
          available: 334,
          sold: 180,
          image:
            "https://html.themexriver.com/radios/assets/img/product/img_52.png",
        },
        {
          name: "Wireless Speaker",
          price: "KES 5,000.00",
          originalPrice: "KES 5,500.00",
          available: 120,
          sold: 45,
          image:
            "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        },
        {
          name: "Smart Watch Pro",
          price: "KES 15,000.00",
          originalPrice: "KES 18,000.00",
          available: 80,
          sold: 25,
          image:
            "https://html.themexriver.com/radios/assets/img/product/img_54.png",
        },
      ],
      features: [
        {
          icon: "pi pi-truck",
          title: "Shipping",
          description: "Shipping Guarantee",
        },
        {
          icon: "pi pi-lock",
          title: "Payment Secure",
          description: "Got 100% Payment Safe",
        },
        {
          icon: "pi pi-whatsapp",
          title: "Support 24/7",
          description: "Top quality 24/7 Support",
        },
        {
          icon: "pi pi-money-bill",
          title: "100% Money Back",
          description: "Customers Money Backs",
        },
        {
          icon: "pi pi-thumbs-up",
          title: "Quality Products",
          description: "We Insure Product Quality",
        },
      ],
    };
  },
  methods: {
    getCategories() {
      // const {$axios } = useNuxtApp()
      // this.$axios.get("/categories")
    },

    getSeverity(status) {
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
    },
    selectImage(image) {
      this.selectedImage = image;
    },
    prevImage() {
      const currentIndex = this.images.indexOf(this.selectedImage);
      this.selectedImage =
        this.images[
          (currentIndex - 1 + this.images.length) % this.images.length
        ];
    },
    nextImage() {
      const currentIndex = this.images.indexOf(this.selectedImage);
      this.selectedImage = this.images[(currentIndex + 1) % this.images.length];
    },
  },
};
</script>

<style scoped>
.product-section {
  margin-inline: 12%;

  /* background-color: #f9fafc; */
}

.feature__wrap {
  padding: 1rem;
}

.feature__item {
  border: 1px solid #e5e7eb;
  /* Light gray border */
  border-radius: 0.5rem;
  /* Rounded corners */
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature__item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon img {
  max-width: 100%;
}
</style>
