<!-- <template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="text-center max-w-md">
      <img
        src="~/assets/images/nodata.jpg"
        alt="404 Not Found"
        class="w-64 mx-auto mb-6"
      />

      <h1 class="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p class="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      <div class="flex justify-center gap-4">
        <Button
          label="Go Home"
          icon="pi pi-home"
          class="p-button-lg p-button-primary"
          @click="goHome"
        />
        <Button
          v-if="previousUrl"
          label="Go Back"
          icon="pi pi-arrow-left"
          class="p-button-lg p-button-secondary"
          @click="goBack"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import Button from "primevue/button";

const router = useRouter();
const route = useRoute();
const previousUrl = ref(null);

onBeforeMount(() => {
  if (window?.history?.length > 1) {
    previousUrl.value = document.referrer || null;
  }
});

const goHome = () => {
  router.push("/");
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
/* Optional: Add custom styles here */
</style> -->

<template>
  <div class="error-page">
    <h1>🚨 Custom Error</h1>
    <p>Status Code: {{ error.statusCode }}</p>
    <p>{{ error.message || "Something went wrong." }}</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});

const goHome = () => {
  navigateTo("/");
};
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 100px;
}
</style>
