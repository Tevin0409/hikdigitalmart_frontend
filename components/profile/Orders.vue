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
          v-if="filteredOrders.length > 0 && !userData.shopOwnerVerified"
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
                  'bg-amber-400 text-white':
                    order.status === 'Awaiting Shipment',
                  'bg-green-100 text-green-600': order.status === 'Shipped',
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
                :src="order.orderItems[0]?.productModel.images[0]?.uploadUrl"
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
                <!-- add review button -->
                <!-- review -->
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="
            filteredQuotation.length === 0 && !userData.shopOwnerVerified
          "
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
        <div
          v-if="
            filteredQuotation.length > 0 &&
            userData.shopOwnerVerified &&
            !showQuotation
          "
          class="max-h-[600px] overflow-y-auto"
        >
          <div
            v-for="(order, index) in filteredQuotation"
            :key="index"
            class="border rounded-lg mb-4 p-4 cursor-pointer"
            @click="viewQuotation(order)"
          >
            <div class="flex justify-between items-center">
              <span
                class="px-3 py-1 text-xs rounded-full"
                :class="{
                  'bg-yellow-400 text-yellow-800': order.status === 'pending',
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

            <div class="mt-4">
              <p class="text-red-600 font-semibold">
                Quotation ID: {{ order.id.slice(0, 8) }}
              </p>
              <p class="text-black-600 font-">
                Response: {{ order.response ? order.response : "No response" }}
              </p>
              <p class="text-black-600 font-">Message: {{ order.message }}</p>
            </div>
          </div>
        </div>
        <div
          v-if="showQuotation"
          class="flex flex-col items-cente min-h-[50vh] text-center"
        >
          <div class="quotation-details" ref="quotationRef">
            <div class="flex justify-between">
              <a
                class="p-button-text text-primary hover:text-white cursor-pointer flex items-center"
                @click="showQuotation = false"
                style="color: var(--secondary-color) !important"
              >
                <i class="pi pi-arrow-left pr-2"></i>
                Back to Quotations
              </a>

              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                @click="printQuotation"
              >
                <i class="pi pi-print"></i>
                Print Quotations
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
              <div>
                <p class="font-semibold">Order ID</p>
                <p class="font-mono">{{ quotationItems.id.slice(0, 8) }}</p>
              </div>

              <div>
                <p class="font-semibold">Message</p>
                <p class="font-mono">
                  {{ quotationItems.message }}
                </p>
              </div>
              <div>
                <p class="font-semibold">Date Created</p>
                <p class="font-mono">
                  {{ formatDate(quotationItems.createdAt) }}
                </p>
              </div>
              <div>
                <p class="font-semibold">Response</p>
                <p class="font-mono">
                  {{
                    quotationItems.response
                      ? quotationItems.response
                      : "Not Available"
                  }}
                </p>
              </div>
              <p class="font-semibold pb-4">
                Items ({{ quotationItems.quotationItems.length }})
              </p>
            </div>
            <div>
              <div class="space-y-4">
                <div
                  v-for="(item, index) in quotationItems.quotationItems"
                  :key="index"
                  class="border rounded-lg p-4 flex"
                >
                  <div class="flex items-center space-x-4 mr-4">
                    {{ index + 1 }}
                  </div>

                  <div class="flex text-start items-start space-x-4">
                    <div>
                      {{ item.productModel.name }}

                      <p class="text-xs font-">
                        {{ item.productModel.description.slice(0, 200) }}
                      </p>
                      <p class="font-">Quantity: {{ item.quantity }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div class="flex justify-between">
          <a
            class="p-button-text text-primary hover:text-white cursor-pointer flex items-center"
            @click="detailedView = false"
            style="color: var(--secondary-color) !important"
          >
            <i class="pi pi-arrow-left pr-2"></i>
            Back to Orders
          </a>

          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            @click="printOrder"
          >
            <i class="pi pi-print"></i>
            Print Order
          </button>
        </div>

        <div class="p-6 bg-white rounded-lg order-details">
          <div class="flex justify-between">
            <h2 class="text-lg md:text-2xl font-semibold">Order Details</h2>

            <div class="flex items-center gap-2">
              <p class="font-semibold">Status</p>
              <span
                class="px-2 py-0.5 md:px-3 md:py-1 text-xs rounded-full"
                :class="{
                  // 'bg-yellow-400 text-yellow-800':
                  //   orderDetails.status === 'Pending',
                  'bg-yellow-400 text-blue-400':
                    orderDetails.status === 'Awaiting Payment',
                  'bg-amber-100 text-green-600':
                    orderDetails.status === 'Awaiting Shipment',
                  'bg-green-100 text-green-600':
                    orderDetails.status === 'Delivered',
                  'bg-gray-300 text-gray-700':
                    orderDetails.status === 'Cancelled',
                }"
              >
                {{ orderDetails.status }}
              </span>

              <!-- Print Order Button -->
            </div>
          </div>
          <Divider />
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p class="font-semibold">Order ID</p>
              <p class="font-mono">{{ orderDetails.id.slice(0, 8) }}</p>
            </div>
            <div>
              <p class="font-semibold">Customer Name</p>
              <p class="font-mono">
                {{ orderDetails.first_name }} {{ orderDetails.last_name }}
              </p>
            </div>
            <div>
              <p class="font-semibold">Company Name</p>
              <p>{{ orderDetails.company_name || "N/A" }}</p>
            </div>
            <div>
              <p class="font-semibold">Address</p>
              <p class="font-mono">
                {{ orderDetails.street_address }}, {{ orderDetails.town }}
              </p>
            </div>
            <div>
              <p class="font-semibold">Phone Number</p>
              <p class="font-mono">{{ orderDetails.phone_number }}</p>
            </div>
            <div>
              <p class="font-semibold">Email</p>
              <p class="font-mono">{{ orderDetails.email }}</p>
            </div>

            <div>
              <p class="font-semibold">Order Price</p>
              <p class="font-mono">
                Ksh {{ formattedPrice(orderDetails.orderPrice) }}
              </p>
            </div>
            <div>
              <p class="font-semibold">VAT</p>
              <p class="font-mono">
                Ksh {{ formattedPrice(orderDetails.vat) }}
              </p>
            </div>
            <div>
              <p class="font-semibold">Total</p>
              <p class="font-mono">
                Ksh {{ formattedPrice(orderDetails.total) }}
              </p>
            </div>
            <div>
              <p class="font-semibold">Order Date</p>
              <p class="font-mono">{{ formatDate(orderDetails.createdAt) }}</p>
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
                {{ item.productModel.images }}
                <img
                  :src="
                    item.productModel.images?.[0]?.uploadUrl ||
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
                    <span
                      v-html="
                        isExpanded
                          ? item.productModel.description
                          : truncatedDescription
                      "
                    ></span>
                    <span
                      v-if="shouldShowReadMore"
                      @click="toggleExpand"
                      class="text-blue-500 cursor-pointer"
                    >
                      {{ isExpanded ? "Read less" : "Read more" }}
                    </span>
                  </p>

                  <div class="flex justify-between items-center">
                    <div>
                      <p class="font-semibold">
                        Ksh {{ formattedPrice(item.productModel.price) }}
                      </p>
                      <p class="font-semibold">Quantity: {{ item.quantity }}</p>
                    </div>
                    <span class="text-sm text-gray-500">
                      <button
                        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                        @click.stop="addReview(item)"
                      >
                        <i class="pi pi-star"></i>
                        Review Product
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RatingCard v-model:visible="reviewProduct" :item="reviewItem" />
  </div>
</template>

<script>
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import RatingCard from "../components/cards/RatingDialog.vue";

definePageMeta({
  middleware: ["auth"],
});
export default {
  components: {
    RatingCard,
  },
  data() {
    return {
      quotationList: [],
      isExpanded: true,
      maxLength: 100,
      orderDetails: {},
      detailedView: false,
      selectedFilter: "All",
      filters: [
        "All",
        "Awaiting Payment",
        "Awaiting Shipment",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
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
      quotation: [],
      showQuotation: false,
      quotationItems: {},
      reviewProduct: false,
      reviewItem: {},
    };
  },
  computed: {
    filteredOrders() {
      if (this.selectedFilter === "All") return this.orders;
      return this.orders.filter(
        (order) => order.status === this.selectedFilter
      );
    },
    filteredQuotation() {
      if (this.selectedFilter === "All") return this.quotation;
      return this.quotation.filter(
        (order) => order.status === this.selectedFilter
      );
    },
    truncatedDescription() {
      return this.item?.productModel?.description
        ? this.item.productModel.description.slice(0, this.maxLength) + "..."
        : "";
    },
    shouldShowReadMore() {
      return this.item?.productModel?.description?.length > this.maxLength;
    },
    // computed to get user from store
    userData() {
      const userStore = useUserStore();
      return userStore.user;
    },
  },

  async mounted() {
    await this.getUserData();
    await this.getWishList();
    await this.getOrders();
    await this.getQuotation();
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
    addReview(item) {
      console.log("Add review clicked for item:", item);
      this.reviewItem = item;
      this.reviewProduct = true;
      this.$emit("addReview", item);
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    async printOrder() {
      const orderElement = document.querySelector(".order-details");
      if (!orderElement) return;

      const canvas = await html2canvas(orderElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 190; // PDF width in mm
      const pageHeight = 295; // PDF height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Order_${this.orderDetails.id.slice(0, 8)}.pdf`);
    },
    async printQuotation() {
      const quotationElement = document.querySelector(".quotation-details");
      if (!quotationElement) return;

      const canvas = await html2canvas(quotationElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Quotation_${this.quotationItems.id.slice(0, 8)}.pdf`);
    },

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
        const data = response.data;
        this.orderDetails = data;
        this.detailedView = true;
        this.fetching = false;
      } catch (error) {
        this.fetching = false;
      }
    },
    viewQuotation(quotation) {
      this.showQuotation = true;
      this.quotationItems = quotation;
    },
    getProductImage(orderItem) {
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
    async getQuotation() {
      this.fetching = true;
      const productStore = useProductStore();
      const quotation = await productStore.getQuotation();
      this.fetching = false;
      this.quotation = quotation;
    },
    async addWish(product) {
      const { $axios } = useNuxtApp();
      this.loadingAdd = true;
      setTimeout(() => {
        this.loadingAdd = false;
      }, 2000);
      try {
        const body = {
          productId: product.id,
        };
        const response = await $axios.post(`/product/wishlist/add`, body);
        this.loadingAdd = false;
      } catch (error) {
        this.loadingAdd = false;
      }
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
