<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row">
      <!-- Sidebar -->
      <main class="w-full bg-white border p-4">
        <!-- Profile Section -->
        <div v-if="activeSection === 'profile'">
          <h2 class="text-xl font-bold mb-4 text-red-500">Edit Your Profile</h2>
          <form @submit.prevent="updateUser">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  v-model="user.firstName"
                  class="border w-full p-2 mt-1"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  v-model="user.lastName"
                  class="border w-full p-2 mt-1"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  v-model="user.email"
                  class="border w-full p-2 mt-1"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  v-model="user.phoneNumber"
                  class="border w-full p-2 mt-1"
                />
              </div>
            </div>
            <div class="flex justify-between mt-6">
              <button type="button" class="border px-4 py-2 w-1/2 md:w-auto">
                Cancel
              </button>
              <Button
                class="bg-primary text-white py-3 rounded hover:bg-secondary mt-4"
                type="submit"
                label="Save Changes"
                :loading="loadingSave"
              />
            </div>
            <!-- Change Password Section -->
            <div class="mt-6">
              <button
                type="button"
                @click="showPasswordFields = !showPasswordFields"
                class="bg-secondary text-white px-4 py-2 w-full md:w-auto"
              >
                Change Password
              </button>

              <div
                v-if="showPasswordFields"
                class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label>Old Password</label>
                  <input
                    type="password"
                    v-model="passwords.oldPassword"
                    class="border w-full p-2 mt-1"
                  />
                </div>
                <div>
                  <label>New Password</label>
                  <input
                    type="password"
                    v-model="passwords.newPassword"
                    class="border w-full p-2 mt-1"
                  />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    v-model="passwords.confirmNewPassword"
                    class="border w-full p-2 mt-1"
                  />
                </div>

                <!-- Update Password Button -->
                <div class="col-span-1 md:col-span-2 flex justify-end mt-4">
                  <Button
                    class="bg-primary text-white py-3 rounded hover:bg-secondary mt-4"
                    type="button"
                    label="Update Password"
                    :loading="loading"
                    @click="updatePassword"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Payment Options Section -->
        <div v-if="activeSection === 'paymentOptions'">
          <h2 class="text-xl font-bold mb-4 text-red-500">Payment Method</h2>
          <div
            class="mt-4 flex flex-col md:flex-row items-center md:items-start"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524"
              class="w-1/2 md:w-1/4"
              alt="Mpesa Logo"
            />
            <div class="ml-4">
              <h3 class="font-bold mb-2">Mpesa</h3>
              <p class="text-gray-600">Mobile Number: {{ user.phoneNumber }}</p>
            </div>
          </div>
        </div>

        <!-- Orders Section -->
        <div v-if="activeSection === 'orders'">
          <h2 class="text-xl font-bold mb-4 text-red-500">My Orders</h2>
          <div class="p-4 bg-gray-100">
            <div class="flex space-x-4 mb-4 overflow-x-auto">
              <button
                v-for="filter in filters"
                :key="filter"
                @click="selectedFilter = filter"
                :class="[
                  'px-4 py-2 rounded-full border whitespace-nowrap',
                  selectedFilter === filter
                    ? 'bg-red-100 text-red-600'
                    : 'bg-white text-gray-600',
                ]"
              >
                {{ filter }}
              </button>
            </div>

            <!-- Orders List -->
            <div
              v-for="(order, index) in filteredOrders"
              :key="index"
              class="bg-white shadow-md rounded-lg mb-4 p-4"
            >
              <div class="flex justify-between items-center">
                <span
                  class="px-3 py-1 text-xs rounded-full"
                  :class="{
                    'bg-yellow-200 text-yellow-800': order.status === 'Pending',
                    'bg-green-100 text-green-600': order.status === 'Delivered',
                    'bg-gray-300 text-gray-700': order.status === 'Cancelled',
                  }"
                >
                  {{ order.status }}
                </span>
                <span class="text-sm text-gray-500">{{
                  formatDate(order.createdAt)
                }}</span>
              </div>

              <div
                class="mt-2 flex flex-col md:flex-row items-center md:items-start"
              >
                <img
                  :src="
                    order.orderItems[0]?.productModel.images[0]?.optimizeUrl
                  "
                  alt="Product Image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div class="ml-0 md:ml-4 text-center md:text-left">
                  <p class="text-red-600 font-semibold">
                    Order ID: {{ order.id.slice(0, 8) }}
                  </p>
                  <p class="text-gray-700">
                    {{ order.orderItems[0].productModel.name }}
                    <span
                      v-if="order.orderItems.length > 1"
                      class="text-blue-600"
                    >
                      & {{ order.orderItems.length - 1 }} more items</span
                    >
                  </p>
                  <p class="text-gray-800 font-semibold mt-1">
                    Ksh {{ formattedPrice(order.total) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script>
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";
import Toast from "primevue/toast";
definePageMeta({
  // middleware: ["auth"],
});
export default {
  data() {
    return {
      showPasswordFields: false,
      passwords: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      selectedFilter: "All",
      filters: ["All", "Pending", "Delivered", "Cancelled"],
      removeItem: false,
      loadingAdd: false,
      home: {
        icon: "pi pi-home",
        // icon: "pi pi-user",
      },
      items: [
        { label: "Home", route: "/" },
        { label: "My Account", route: "/profile" },
      ],
      activeSection: "profile", // Default section to display
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        createdAt: "",
      },
      orders: [],
      wishlist: [],
      loading: false,
      loadingSave: false,
    };
  },
  computed: {
    filteredOrders() {
      if (this.selectedFilter === "All") return this.orders;
      return this.orders.filter(order => order.status === this.selectedFilter);
    },
  },

  async mounted() {
    await this.getUserData();
    await this.getWishList();
    await this.getOrders();
  },

  methods: {
    async updatePassword() {
      this.loading = true;
      const userStore = useUserStore();
      try {
        const password = {
          newPassword: this.passwords.newPassword,
          oldPassword: this.passwords.oldPassword,
          confirmNewPassword: this.passwords.confirmNewPassword,
        };
        const response = await userStore.updatePassword(password);
        this.$toast.add({
          severity: "success",
          summary: response.data.message + "Please login to continue",
          group: "br",
          life: 3000,
        });
        this.loading = false;
        userStore.logout();
      } catch (err) {
        this.loading = false;
        this.$toast.add({
          severity: "error",
          summary: err,
          group: "br",
          life: 3000,
        });
      }
    },
    async updateUser() {
      const userStore = useUserStore();
      try {
        this.loadingSave = true;
        const user = {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          phoneNumber: this.user.phoneNumber,
        };
        const response = await userStore.updateUser(user, this.user.id);
        this.$toast.add({
          severity: "success",
          summary: "Details updated successfully",
          group: "br",
          life: 3000,
        });
        this.loadingSave = false;
      } catch (err) {
        this.loadingSave = false;
        this.$toast.add({
          severity: "error",
          summary: err,
          group: "br",
          life: 3000,
        });
      }
    },
    getProductImage(orderItem) {
      if (orderItem?.productModel?.images?.length > 0) {
        // console.log(
        //   "Image found:",
        //   orderItem.productModel.images[0]?.optimizeUrl
        // );
        return orderItem.productModel.images[0].optimizeUrl;
      }

      console.log("Using fallback image");
      return "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=";
    },
    formattedPrice(price) {
      const { $formatPrice } = useNuxtApp();
      return $formatPrice(price);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
    async getOrders() {
      const productStore = useProductStore();
      const orders = await productStore.getOrders();
      this.orders = orders;
    },
    async removeWish(id) {
      const { $axios } = useNuxtApp();
      this.removeItem = true;
      // setTimeout(() => {
      //   this.loadingAdd = false;
      // }, 2000);
      try {
        const response = await $axios.post(
          `/product/wishlist/remove/${productID}`
        );
        this.removeItem = false;
      } catch (error) {
        this.removeItem = false;
      }
    },
    async addToCart(product) {
      const { $axios } = useNuxtApp();
      this.loadingAdd = true;
      setTimeout(() => {
        this.loadingAdd = false;
      }, 2000);
      try {
        const body = {
          productId: product.id,
          quantity: 1,
        };
        const response = await $axios.post(`/product/cart/add`, body);
        this.loadingAdd = false;
      } catch (error) {
        this.loadingAdd = false;
      }
    },
    async getWishList() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/product/wishlist");
        this.wishlist = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getUserData() {
      const userStore = useUserStore();

      this.user = userStore.user;
      // console.log(this.userData, "userData");
    },
    logout() {
      const userStore = useUserStore(); // Access the store
      userStore.logout(); // Call the logout action
      // Clear user data and navigate to the auth page
      // localStorage.removeItem("user");
      // localStorage.removeItem("token");
      // this.$router.push("/auth");
    },
  },
};
</script>
