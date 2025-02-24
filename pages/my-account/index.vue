<template>
  <div class="container mx-auto p-4">
    <!-- Tabs for Small Screens -->
    <div class="md:hidden mb-4">
      <!-- <div class="flex justify-between items-center mb-2">
        <button @click="logout" class="p-3 bg-red-500 text-white rounded-md">
          Logout
        </button>
      </div> -->
      <div class="flex justify-center rounded-full p6">
        <div class="flex flex-col items-center p-4">
          <img
            class="w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500"
            src="https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&semt=ais_hybrid"
            alt="Profile Image"
          />
          <div class="font-medium text-center pt-4">
            <div>
              {{ user.firstName + " " + user.lastName }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ user.email }}
            </div>
          </div>
        </div>
      </div>
      <TabMenu v-model:activeIndex="selectedIndex" :model="tabs" />
    </div>

    <div class="flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]">
      <!-- Sidebar for Large Screens -->
      <div class="hidden md:flex w-64 bg-white flex-col border-r p-6">
        <div class="flex justify-center rounded-full p-6">
          <div class="flex flex-col items-center p-4">
            <img
              class="w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500"
              src="https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&semt=ais_hybrid"
              alt="Profile Image"
            />
            <div class="font-medium text-center pt-4">
              <div>
                {{ user.firstName + " " + user.lastName }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ user.email }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <ul>
            <li v-for="(tab, index) in tabs" :key="tab.name">
              <button
                @click="selectedIndex = index"
                class="w-full p-4 gap-x-3 text-left hover:bg-secondary hover:text-white gap-y-4 rounded-xl"
                :class="{ 'bg-primary text-white': selectedIndex === index }"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>
        </div>
        <button
          @click="logout"
          class="mt-auto p-4 bg-primary text-white hover:bg-secondary"
        >
          Logout
        </button>
      </div>
      <!-- <Divider layout="vertical" /> -->

      <!-- Main Content -->
      <div class="flex-1 p-6 bg-white rounded-md min-h-[70vh]">
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
      { name: "Orders", label: "My Orders", component: Orders },
      // { name: "Wishlist", label: "Wishlist", component: Wishlist },
    ]);
    const user = userStore.user || { firstName: "", lastName: "", email: "" };

    const activeComponent = computed(
      () => tabs.value[selectedIndex.value].component
    );

    const logout = () => userStore.logout();

    return { tabs, selectedIndex, activeComponent, logout, userStore, user };
  },
};
</script>

<style scoped>
button {
  transition: background 0.3s ease;
}
</style>
