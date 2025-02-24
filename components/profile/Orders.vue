<template>
  <div class="">
    <div class="flex flex-col" v-if="!detailedView && !fetching">
      <div class="p-4">
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
        <Divider />
        <!-- blue List -->
        <div
          v-if="filteredOrders.length > 0"
          class="max-h-[600px] overflow-y-auto"
        >
          <div
            v-for="(order, index) in filteredOrders"
            :key="index"
            class="border rounded-lg mb-4 p-4 cursor-pointer"
            @click="viewOrderDetails(order)"
          >
            <div class="flex justify-between items-center">
              <span
                class="px-3 py-1 text-xs rounded-full"
                :class="{
                  'bg-yellow-400 text-yellow-800': order.status === 'Pending',
                  'bg-blue-400 text-white': order.status === 'Awaiting Payment',
                  'bg-green-100 text-green-600': order.status === 'Delivered',
                  'bg-gray-300 text-gray-700': order.status === 'Cancelled',
                }"
              >
                {{ order.status }}
              </span>
              <span class="text-sm text-gray-500">
                {{ formatDate(order.createdAt) }}
              </span>
            </div>

            <div
              class="mt-2 flex flex-col md:flex-row items-center md:items-start"
            >
              <img
                :src="order.orderItems[0]?.productModel.images[0]?.optimizeUrl"
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
                    & {{ order.orderItems.length - 1 }} more items
                  </span>
                </p>
                <p class="text-gray-800 font-semibold mt-1">
                  Ksh {{ formattedPrice(order.total) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else
          class="flex flex-col items-center justify-center min-h-[50vh] text-center"
        >
          <img
            src="@/assets/images/no-order.png"
            alt="Empty Cart"
            class="w-40 h-40 mb-4"
          />
          <h2 class="text-xl font-semibold text-gray-700">No Orders!</h2>
          <p class="text-gray-500 text-sm mb-4">
            Browse our categories and discover our best deals!
          </p>
          <NuxtLink to="/dashboard">
            <button
              class="bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"
            >
              Start Shopping
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="fetching">
        <div class="relative flex justify-center items-center h-96">
          <div
            class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"
          ></div>
          <img
            src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png"
            class="rounded-full h-24 w-24"
          />
        </div>
      </div>
      <div v-else>
        <a
          class="p-button-text text-primary hover:text-white cursor-pointer"
          @click="detailedView = false"
          style="
            color: var(--secondary-color) !important;
            text-decoration: underline;
          "
        >
          Back to Orders
        </a>

        <div class="p-6 bg-white rounded-lg">
          <div class="flex justify-between">
            <h2 class="text-2xl font-semibold">Order Details</h2>
            <div class="flex items-center gap-2">
              <p class="font-semibold">Status</p>
              <span
                class="px-3 py-1 text-xs rounded-full"
                :class="{
                  'bg-yellow-400 text-yellow-800':
                    orderDetails.status === 'Pending',
                  'bg-yellow-400 text-blue-400':
                    orderDetails.status === 'Awaiting Payment',
                  'bg-green-100 text-green-600':
                    orderDetails.status === 'Delivered',
                  'bg-gray-300 text-gray-700':
                    orderDetails.status === 'Cancelled',
                }"
              >
                {{ orderDetails.status }}
              </span>
            </div>
          </div>
          <Divider />
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p class="font-semibold">Order ID</p>
              <p>{{ orderDetails.id }}</p>
            </div>
            <div>
              <p class="font-semibold">Customer Name</p>
              <p>{{ orderDetails.first_name }} {{ orderDetails.last_name }}</p>
            </div>
            <div>
              <p class="font-semibold">Company Name</p>
              <p>{{ orderDetails.company_name || "N/A" }}</p>
            </div>
            <div>
              <p class="font-semibold">Address</p>
              <p>{{ orderDetails.street_address }}, {{ orderDetails.town }}</p>
            </div>
            <div>
              <p class="font-semibold">Phone Number</p>
              <p>{{ orderDetails.phone_number }}</p>
            </div>
            <div>
              <p class="font-semibold">Email</p>
              <p>{{ orderDetails.email }}</p>
            </div>

            <div>
              <p class="font-semibold">Order Price</p>
              <p>Ksh {{ formattedPrice(orderDetails.orderPrice) }}</p>
            </div>
            <div>
              <p class="font-semibold">VAT</p>
              <p>Ksh {{ formattedPrice(orderDetails.vat) }}</p>
            </div>
            <div>
              <p class="font-semibold">Total</p>
              <p>Ksh {{ formattedPrice(orderDetails.total) }}</p>
            </div>
            <div>
              <p class="font-semibold">Order Date</p>
              <p>{{ formatDate(orderDetails.createdAt) }}</p>
            </div>
          </div>

          <Divider class="my-4" />

          <h3 class="text-xl font-semibold mb-2">Order Items</h3>
          <div class="space-y-4">
            <div
              v-for="(item, index) in orderDetails.orderItems"
              :key="index"
              class="border rounded-lg p-4"
            >
              <div class="flex items-center space-x-4">
                <img
                  :src="
                    item.productModel.images?.[0]?.optimizeUrl ||
                    'https://via.placeholder.com/100'
                  "
                  alt="Product Image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <p class="text-lg font-semibold">
                    {{ item.productModel.name }}
                  </p>
                  <p class="text-gray-500">
                    {{ item.productModel.description }}
                  </p>
                  <p class="font-semibold">
                    Price: Ksh {{ formattedPrice(item.productModel.price) }}
                  </p>
                  <p class="font-semibold">Quantity: {{ item.quantity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      orderDetails: {},
      detailedView: false,
      selectedFilter: "All",
      filters: ["All", "Awaiting Payment", "Pending", "Delivered", "Cancelled"],
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
      fetching: false,
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
    // Example: Initialize user data from localStorage (if needed)
    // if (process.client) {
    //   const userData = JSON.parse(localStorage.getItem("userData"));
    //   if (userData) {
    //     this.user.firstName = userData.firstName || "";
    //     this.user.lastName = userData.lastName || "";
    //     this.user.email = userData.email || "";
    //     this.user.phoneNumber = userData.phoneNumber || "";
    //     this.user.address = userData.address || "";
    //     this.user.createdAt = userData.createdAt || "";
    //   }
    // }
  },

  methods: {
    statusStyle(status) {
      switch (status.toLowerCase()) {
        case "awaiting payment":
          return { color: "#FFA500", icon: "pi pi-hourglass" }; // Orange with hourglass icon
        case "pending":
          return { color: "bg-primary", icon: "pi pi-clock" }; // Blue with clock icon
        case "delivered":
          return { color: "#28A745", icon: "pi pi-check" }; // Green with check icon
        case "cancelled":
          return { color: "#DC3545", icon: "pi pi-times" }; // Red with times icon
        default:
          return { color: "#6C757D", icon: "pi pi-info-circle" }; // Grey with info icon for unknown statuses
      }
    },
    async viewOrderDetails(order) {
      this.fetching = true;
      const productStore = useProductStore();
      try {
        const response = await productStore.getOrderDetails(order);
        console.log("Order details:", response);
        const data = response.data;
        this.orderDetails = data;
        this.detailedView = true;
        this.fetching = false;
        // this.$route.push("/")
        // this.$router.push({
        //   path: `/my-account/${order.id}`,
        // });
      } catch (error) {
        this.fetching = false;

        console.error("Error fetching order details:", error);
      }
    },
    getProductImage(orderItem) {
      console.log("Order Item:", orderItem);

      if (orderItem?.productModel?.images?.length > 0) {
        console.log(
          "Image found:",
          orderItem.productModel.images[0]?.optimizeUrl
        );
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
      this.fetching = true;
      const productStore = useProductStore();
      const orders = await productStore.getOrders();
      this.fetching = false;

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
