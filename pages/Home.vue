<template>
  <div
    class="product-section pt-20"
    style="
      background-image: url(' https://www.sdl.co.ke/assets/images/icons/vector-1.png');
    "
  >
    <!-- style="
      background-image: url('https://media.istockphoto.com/id/1255070620/photo/modern-house-with-garden-and-solar-panels.jpg?s=2048x2048&w=is&k=20&c=o-q6PLV-jwspJrtYwC-98d6bsBMW139OLXppJiglVcU=');
    " -->
    <div class="flex flex-wrap justify-center items-start">
      <!-- Left Section -->
      <div class="product-details w-full md:w-1/3 mb-6 md:mb-0">
        <div class="badge text-primary text-sm font-semibold mb-2">
          100% Best Product
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">HD Bullet Camera</h1>
        <p class="text-gray-500 text-base md:text-lg mb-6">Wide Angle</p>
        <div
          class="price flex items-center text-xl md:text-2xl font-semibold text-red-600 mb-4"
        >
          {{ price }}
          <span class="line-through text-gray-400 text-lg ml-4">Ksh 2,860</span>
        </div>
        <!-- <div class="discount flex items-center mb-6">
          <div class="flex items-center text-lg text-primary mr-4">
            <span class="text-xl font-bold">29%</span> off
          </div>
        </div> -->
        <div class="stock flex items-center text-sm text-gray-600 mb-6">
          <div class="w-full max-w-xs">
            <div class="relative">
              <div class="h-2 bg-gray-300 rounded">
                <div class="h-2 bg-primary rounded w-2/3"></div>
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
            class="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary"
          >
            SHOP NOW
            <i class="pi pi-angle-right"></i>
          </button>
        </NuxtLink>
      </div>

      <!-- Dynamic Image Section -->
      <div
        class="dynamic-image flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0"
      >
        <img
          :src="selectedImage"
          alt="Selected Product"
          class="w-full max-w-xs rounded-md border-0"
        />
        <!-- <div
          class="absolute bottom-0 left-0 text-white bg-primary text-sm px-3 py-1 rounded-full transform -translate-x-1/2 translate-y-1/2"
        >
          29% off
        </div> -->
      </div>

      <!-- Right Section -->
      <!-- <div class=""> -->
      <div
        class="hidden md:block bg-whit w-full md:w-1/3 pa-6 ma-5 pl-40 dark:border-orange-600"
      >
        <div class="border border-red-600 dark:border-orange-600 rounded p-4">
          <div class="mb-4 border-b pb-2 font-medium text-dark-600 text-center">
            Top Product
          </div>
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
              <div class="text-center">
                <img
                  :src="slotProps.data?.image"
                  :alt="slotProps.data?.name"
                  class="object-cover rounded max-w-full mx-auto"
                />
                <div class="mt-4 font-medium">{{ slotProps.data?.name }}</div>
                <div class="font-semibold text-xl py-2">
                  {{ slotProps.data.price }}
                </div>
                <div class="stock flex items-center text-sm text-gray-600 mb-4">
                  <!-- <span>Available: 334</span> | <span>Stock: 180</span> -->
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
      <div class="flex items-center space-x-2 overflow-x-auto">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Product ' + (index + 1)"
          @click="selectImage(image)"
          class="w-12 h-12 md:w-16 md:h-16 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"
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

    <!-- Feature Section -->
    <div
      class="feature__wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-12"
    >
      <div
        class="feature__item flex bg-white flex-col items-center text-center"
        v-for="(feature, index) in features"
        :key="index"
      >
        <div class="icon text-4xl text-red-500">
          <i :class="feature.icon"></i>
        </div>
        <div class="content mt-2">
          <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
          <p class="text-sm text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- <NewArrivals class="py-12" /> -->
    <!-- <CardsHome /> -->
    <!-- <TopDeal /> -->
    <Footer class="w-full bg-gray-100 text-gray-800 py-10" />
  </div>
</template>

<script>
import CardsHome from "~/components/cards/home.vue";
import TopDeal from "~/components/cards/TopDeal.vue";
import NewArrivals from "~/components/cards/NewArrivals.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "ProductSection",
  components: { CardsHome, TopDeal, NewArrivals, Footer },
  layout: "login",
  data() {
    return {
      price: "Ksh 2,400.00",
      images: [
        "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        "https://html.themexriver.com/radios/assets/img/product/img_52.png",
        "https://html.themexriver.com/radios/assets/img/product/img_54.png",
      ],
      selectedImage:
        "https://html.themexriver.com/radios/assets/img/product/img_53.png",
      products: [
        {
          name: "HD Camera Bullet",
          price: "Ksh 3,200.00",
          image:
            "https://html.themexriver.com/radios/assets/img/product/img_52.png",
        },
        {
          name: "Wireless Speaker",
          price: "Ksh 5,000.00",
          image:
            "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        },
        {
          name: "Smart Watch Pro",
          price: "Ksh 15,000.00",
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
          description: "100% Safe Payment",
        },
        {
          icon: "pi pi-whatsapp",
          title: "Support 24/7",
          description: "Quality Support",
        },
        {
          icon: "pi pi-money-bill",
          title: "Money Back",
          description: "Guaranteed Refund",
        },
        {
          icon: "pi pi-thumbs-up",
          title: "Quality Products",
          description: "Trusted Quality",
        },
      ],
    };
  },

  methods: {
    selectImage(image) {
      this.selectedImage = image;
    },
    nextImage() {
      const currentIndex = this.images.indexOf(this.selectedImage);
      if (currentIndex < this.images.length - 1) {
        this.selectedImage = this.images[currentIndex + 1];
      } else {
        this.selectedImage = this.images[0];
      }
    },
    prevImage() {
      const currentIndex = this.images.indexOf(this.selectedImage);
      if (currentIndex > 0) {
        this.selectedImage = this.images[currentIndex - 1];
      } else {
        this.selectedImage = this.images[this.images.length - 1];
      }
    },
  },
};
</script>

<style scoped>
.product-section {
  margin-inline: 5%;

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
