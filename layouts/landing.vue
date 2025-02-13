<template>
  <!-- <div class="sticky top-0 bg-cover bg-center h-200]" style="background-image: url('/images/bg.jpg');"> -->
  <div class="landing">
    <!-- <Navbar /> -->
    <NuxtPage />
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
  setup() { },
};
</script>

<style lang="css" scoped>
.landing {
  margin-inline: 12%;
  /* background-color: #f9fafc; */

}
</style>
