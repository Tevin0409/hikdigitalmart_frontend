<template>
  <div class="container mx-auto my-10 px-4">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-gray-800">About Our Shop</h1>
      <p class="text-gray-600 mt-2">
        Welcome to our shop, your trusted partner for cutting-edge surveillance
        and security solutions. Explore our range of high-quality products
        tailored to meet all your security needs.
      </p>
    </div>

    <!-- Categories Section -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Our Product Categories
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="category in categories"
          :key="category.name"
          class="flex items-center border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
        >
          <img :src="category.icon" alt="" class="w-12 h-12 mr-4" />
          <div>
            <h3 class="text-lg font-semibold text-gray-800">
              {{ category.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="mt-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
      <p class="text-gray-600">
        At our shop, we are committed to providing reliable and innovative
        security products. From HD analogue cameras to advanced access control
        systems, our mission is to empower businesses and homeowners with the
        best technology in surveillance and safety.
      </p>
    </section>

    <!-- Why Choose Us Section -->
    <section class="mt-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
      <ul class="list-disc ml-6 text-gray-600">
        <li>Wide selection of high-quality surveillance products.</li>
        <li>Expert advice to help you choose the right solutions.</li>
        <li>Competitive prices and excellent customer service.</li>
        <li>Trusted by professionals and businesses worldwide.</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AboutPage",
  setup() {
    const categories = ref([
      {
        name: "HD ANALOGUE CAMERAS AND DVR",
        icon: "/assets/icons/cctv.svg",
      },
      {
        name: "IP NETWORK CAMERAS AND NVR",
        icon: "/assets/icons/network.svg",
      },
      {
        name: "ACCESS CONTROL PRODUCTS",
        icon: "/assets/icons/lock.svg",
      },
      {
        name: "VIDEO INTERCOM PRODUCTS",
        icon: "/assets/icons/phone.svg",
      },
      {
        name: "MONITOR DISPLAY PRODUCTS",
        icon: "/assets/icons/monitor.svg",
      },
      {
        name: "ACCESSORIES PRODUCTS",
        icon: "/assets/icons/toolbox.svg",
      },
    ]);

    return {
      categories,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
