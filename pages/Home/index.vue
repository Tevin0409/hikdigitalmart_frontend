<template>
  <div
    class="product-section pt-8"
    style="
      background-image: url(' https://www.sdl.co.ke/assets/images/icons/vector-1.png');
    "
  >
    <div class="flex flex-col md:flex-row items-center">
      <!-- Left section with text -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 pr-8">
        <h1 class="text-4xl text-pretty text-primary font-regular mb-4">
          Secure Your Home with State-of-the-Art CCTV Cameras
        </h1>
        <p class="text-gray-600 font-bold mb-6">
          Transform your home and business with sophisticated and stylish
          gadgets, and create a secure and inviting home.
        </p>
        <NuxtLink to="/dashboard">
          <button
            to="/dashboard"
            class="bg-black text-white px-6 py-3 rounded-lg mb-4"
          >
            Shop now
          </button>
        </NuxtLink>

        <div class="flex space-x-4 text-gray-600">
          <span class="flex items-center" v-for="i in features">
            <i :class="i.icon"></i>
            <p class="p-3">
              {{ i.description }}
            </p>
          </span>
        </div>
      </div>

      <!-- Right section with images and cards -->
      <div class="w-full md:w-1/2">
        <div
          class="md:1/2 p-4 rounded-lg flex flex-col items-center text-center"
        >
          <p class="text-lg font-semibold">Modern & stylish</p>
          <img
            src="https://www.hikvision.com/content/dam/hikvision/uk/products-image-portal/images/DS-2CD6D54FWD-IZHSNFC.png"
            alt="Selected Product"
            class="mt-2 rounded-lg w-1/2 bg-gray-50"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center py-8">
      <!-- Header Text -->
      <p class="text-gray-600 text-center mb-4 font-bold">
        Our Partners <span class="font-bold text-black"></span>
        <!-- Technicians and over
        <span class="font-bold text-black">5k+</span>
        <span class="font-bold"> Shop owners</span> like -->
      </p>

      <!-- Logo Container -->
      <div class="flex flex-wrap justify-center gap-6 md:gap-10">
        <img
          v-for="(logo, index) in logos"
          :key="index"
          :src="logo.src"
          :alt="logo.alt"
          class="h-20 md:h-20 object-contain"
        />
      </div>
    </div>

    <div class="flex justify-center text-center py-8 pb-10">
      <div>
        <p class="text-2xl font-bold text-gray-900">
          Are you a Technician, Wholesaler, or Retailer?
        </p>
        <span class="text-gray-600">
          We’ve got you covered Sign up with us today to enjoy discounted
          prices.
        </span>
      </div>
    </div>

    <div class="flex justify-center gap-4 pb-12">
      <div
        @click="$router.push('/auth')"
        class="feature__item flex bg-white flex-col items-center text-center cursor-pointer"
        v-for="(feature, index) in featuresSIgn"
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

    <!-- <div class="flex flex-wrap justify-center items-start">
      <div class="product-details w-full md:w-1/3 mb-6 md:mb-0">
        <div class="badge text-primary text-sm font-semibold mb-2"></div>
        <h1 class="text-2xl text-primary md:text-4xl font-bold mb-4">
          Secure Your Home with State-of-the-Art CCTV Cameras
        </h1>
        <div
          class="price flex items-center text-xl md:text-2xl font-semibold text-red-600 mb-4"
        ></div>

        <NuxtLink to="/dashboard">
          <button
            class="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary"
          >
            Explore Products
            <i class="pi pi-angle-right"></i>
          </button>
        </NuxtLink>
      </div>

      <div
        class="dynamic-image flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0"
      >
        <img
          :src="selectedImage"
          alt="Selected Product"
          class="w-full max-w-xs rounded-md border-0"
        />
       
      </div>
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
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div> -->

    <!-- Carousel Section -->
    <!-- <div class="carousel flex justify-center items-center mt-8 space-x-4">
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
    </div> -->

    <!-- <div class="bg-gray-100 py-12">
      <h2 class="text-3xl font-semibold text-center mb-8">
        Don't Take Our Word For It
      </h2>
      <div class="relative max-w-5xl mx-auto">
        <div
          class="flex overflow-hidden transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="w-full flex-shrink-0 p-6"
          >
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <div class="text-yellow-500 text-lg">★★★★★</div>
              <p class="text-gray-700 mt-3">
                {{ testimonial.text }}
              </p>
              <div class="mt-4 flex flex-col items-center">
                <img
                  :src="testimonial.image"
                  alt="User"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <h3 class="font-semibold mt-2">{{ testimonial.name }}</h3>
                <span class="text-gray-500 text-sm">{{
                  testimonial.position
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6 space-x-2">
          <div
            v-for="(dot, index) in testimonials.length"
            :key="index"
            class="w-3 h-3 rounded-full cursor-pointer"
            :class="currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'"
            @click="currentIndex = index"
          ></div>
        </div>
      </div>
    </div> -->

    <!-- <NewArrivals class="py-12" /> -->
    <!-- <CardsHome /> -->
    <!-- <TopDeal /> -->
    <Footer class="w-full bg-gray-100 text-gray-800 py-10" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardsHome from "~/components/cards/home.vue";
import TopDeal from "~/components/cards/TopDeal.vue";
import NewArrivals from "~/components/cards/NewArrivals.vue";
import Footer from "~/components/Footer.vue";

const price = ref("Ksh 2,400.00");
const images = ref([
  "https://html.themexriver.com/radios/assets/img/product/img_53.png",
  "https://html.themexriver.com/radios/assets/img/product/img_52.png",
  "https://html.themexriver.com/radios/assets/img/product/img_54.png",
]);

const selectedImage = ref(images.value[0]);

const logos = [
  {
    src: "https://www.nemtek.co.za/wp-content/uploads/2021/07/NEMTEK_logo.svg",
    alt: "NEMTEK",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
    alt: "HIKVISION",
  },
];
const products = ref([
  {
    name: "HD Camera Bullet",
    price: "Ksh 3,200.00",
    image: "https://html.themexriver.com/radios/assets/img/product/img_52.png",
  },
  {
    name: "Wireless Speaker",
    price: "Ksh 5,000.00",
    image: "https://html.themexriver.com/radios/assets/img/product/img_53.png",
  },
  {
    name: "Smart Watch Pro",
    price: "Ksh 15,000.00",
    image: "https://html.themexriver.com/radios/assets/img/product/img_54.png",
  },
]);

const featuresSIgn = ref([
  {
    icon: "pi pi-cog",
    title: "Technician",
    description: "Sign up with us today to enjoy discounted prices.",
  },
  // {
  //   icon: "pi pi-users",
  //   title: "Wholesaler",
  //   description: "Sign up with us today to enjoy discounted prices.",
  // },
  {
    icon: "pi pi-shopping-cart",
    title: "User",
    description: "Sign up with us today to enjoy discounted prices.",
  },
  {
    icon: "pi pi-user",
    title: "Shop Owner",
    description: "Sign up with us today to enjoy request quotation.",
  },
]);
const features = ref([
  {
    icon: "pi pi-truck",
    title: "Shipping",
    description: "Certified Products",
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
  // {
  //   icon: "pi pi-money-bill",
  //   title: "Money Back",
  //   description: "Guaranteed Refund",
  // },
  {
    icon: "pi pi-thumbs-up",
    title: "Quality Products",
    description: "Trusted Quality",
  },
]);

const selectImage = (image: string) => {
  selectedImage.value = image;
};

const nextImage = () => {
  const currentIndex = images.value.indexOf(selectedImage.value);
  selectedImage.value =
    currentIndex < images.value.length - 1
      ? images.value[currentIndex + 1]
      : images.value[0];
};

const prevImage = () => {
  const currentIndex = images.value.indexOf(selectedImage.value);
  selectedImage.value =
    currentIndex > 0
      ? images.value[currentIndex - 1]
      : images.value[images.value.length - 1];
};
const currentIndex = ref(0);
const testimonials = ref([
  {
    text: "At Jimmy Fairly, we believe every pair of glasses tells a unique story.",
    name: "Tarame L.",
    position: "Jimmy Fairly CEO",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    text: "Our customers inspire us to create eyewear that combines timeless design.",
    name: "Karimsa",
    position: "Jimmy Fairly CEO",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: "Their kind words motivate us to keep redefining what eyewear can be.",
    name: "Trampal",
    position: "Jimmy Fairly CEO",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
]);
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
