<template>
  <!-- style="background-image: url('/images/bg.jpg');" -->
  <!-- sticky top-0 bg-cover bg-center h-200] -->
  <div class="bg-gray-50">
    <Navbar @update:searchTerm="handleSearchUpdate" :refresh="refresh" />
    <NuxtPage :search-term="searchTerm" @refreshNavbar="handleRefresh" />
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "~/components/Navbar.vue";
import { useUserStore } from "@/stores/auth";

export default {
  components: {
    Navbar,
  },
  setup() {
    const searchTerm = ref("");
    const userStore = useUserStore();
    const refresh = ref(false);

    // Check if the user is logged in (optional)
    // console.log("Is logged in:", userStore.isLoggedIn);

    const handleSearchUpdate = value => {
      searchTerm.value = value;
    };
    const handleRefresh = () => {
      console.log("Refreshing Navbar...");
      refresh.value = !refresh.value; // Toggle the refresh value
    };

    return { searchTerm, handleSearchUpdate, handleRefresh };
  },
};
</script>
