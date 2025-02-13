<template>
  <div class="container mx-auto p-4">
    <!-- Tabs for Small Screens -->
    <div class="md:hidden mb-4">
      <div class="flex justify-between items-center mb-2">
        <button @click="logout" class="p-3 bg-red-500 text-white rounded-md">
          Logout
        </button>
      </div>
      <TabMenu v-model:activeIndex="selectedIndex" :model="tabs" />
    </div>

    <div class="flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]">
      <!-- Sidebar for Large Screens -->
      <div class="hidden md:flex w-64 bg-white shadow-sm flex-col">
        <div class="p-4 text-lg font-semibold border-b">My Account</div>
        <div class="flex-1">
          <ul>
            <li v-for="(tab, index) in tabs" :key="tab.name">
              <button
                @click="selectedIndex = index"
                class="w-full p-4 text-left hover:bg-gray-200"
                :class="{ 'bg-primary text-white': selectedIndex === index }"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>
        </div>
        <button
          @click="logout"
          class="mt-auto p-4 bg-red-500 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-6 bg-white rounded-md shadow-md min-h-[70vh]">
        <component :is="activeComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/auth";
import Profile from "@/components/profile/Profile.vue";
import Orders from "@/components/profile/Orders.vue";
// import Wishlist from "@/components/profile/Wishlist.vue";
import TabMenu from "primevue/tabmenu";

definePageMeta({
  middleware: ["auth"],
});
export default {
  components: { Profile, Orders, TabMenu },
  setup() {
    const userStore = useUserStore();
    const selectedIndex = ref(0);
    const tabs = ref([
      { name: "Profile", label: "My Account", component: Profile },
      { name: "Orders", label: "Orders", component: Orders },
      // { name: "Wishlist", label: "Wishlist", component: Wishlist },
    ]);

    const activeComponent = computed(
      () => tabs.value[selectedIndex.value].component
    );

    const logout = () => userStore.logout();

    return { tabs, selectedIndex, activeComponent, logout };
  },
};
</script>

<style scoped>
button {
  transition: background 0.3s ease;
}
</style>
