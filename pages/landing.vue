<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-2">
        Welcome to SecureView CCTV Cameras
      </h1>
      <p class="text-lg text-gray-600">
        Your trusted partner for advanced security solutions
      </p>
    </header>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          v-for="(product, index) in products"
          :key="index"
          class="shadow-md"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="rounded-t-xl w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <Button label="Learn More" class="p-button-outlined" />
          </div>
        </Card>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Testimonials</h2>
      <Carousel
        :value="testimonials"
        :item-template="testimonialTemplate"
        class="shadow-md"
      />
    </section>

    <footer class="text-center mt-8">
      <p class="text-gray-500">
        &copy; 2025 SecureView CCTV Cameras. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { Card } from "primevue/card";
// import { Button } from "primevue/button";
// import { Carousel } from "primevue/carousel";

const testimonials = ref([
  { name: "John Doe", feedback: "Great quality cameras and quick service!" },
  { name: "Jane Smith", feedback: "Affordable prices and reliable products." },
  { name: "Michael Lee", feedback: "Fantastic support and easy installation." },
]);

const products = ref([
  {
    name: "Outdoor CCTV Camera",
    image: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
    description: "High-quality outdoor surveillance.",
  },
  {
    name: "Indoor CCTV Camera",
    image: "https://via.placeholder.com/400x300?text=Indoor+CCTV+Camera",
    description: "Clear indoor monitoring.",
  },
  {
    name: "Smart Doorbell Camera",
    image: "https://via.placeholder.com/400x300?text=Smart+Doorbell+Camera",
    description: "Secure your front door with smart features.",
  },
]);

const testimonialTemplate = testimonial => {
  return {
    template: `
      <div class="p-4 bg-white shadow-md rounded-xl">
        <p class="text-lg mb-2">"${testimonial.feedback}"</p>
        <p class="text-sm text-gray-500">- ${testimonial.name}</p>
      </div>
    `,
  };
};
</script>

<style scoped>
.p-button-outlined {
  border-color: #007bff;
  color: #007bff;
}
</style>
