import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import script$2 from './index-B8fUCuXN.mjs';
import script$1 from './index-BpOzP0HJ.mjs';
import { _ as _export_sfc, d as useUserStore, a as useNuxtApp, e as useProductStore } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, ref, watch, createTextVNode, withDirectives, toDisplayString, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DxhiTiNz.mjs';
import script from './index-B9TrIdXC.mjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import script$4 from './index-Bj63-OuG.mjs';
import script$3 from './index-DwBCCSyQ.mjs';

const _sfc_main$2 = {
  data() {
    return {
      showPasswordFields: false,
      passwords: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      selectedFilter: "All",
      filters: ["All", "Pending", "Delivered", "Cancelled"],
      removeItem: false,
      loadingAdd: false,
      home: {
        icon: "pi pi-home"
        // icon: "pi pi-user",
      },
      items: [
        { label: "Home", route: "/" },
        { label: "My Account", route: "/profile" }
      ],
      activeSection: "profile",
      // Default section to display
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        createdAt: ""
      },
      orders: [],
      wishlist: [],
      loading: false,
      loadingSave: false
    };
  },
  computed: {
    filteredOrders() {
      if (this.selectedFilter === "All") return this.orders;
      return this.orders.filter((order) => order.status === this.selectedFilter);
    }
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
          confirmNewPassword: this.passwords.confirmNewPassword
        };
        const response = await userStore.updatePassword(password);
        this.$toast.add({
          severity: "success",
          summary: response.data.message + "Please login to continue",
          group: "br",
          life: 3e3
        });
        this.loading = false;
        userStore.logout();
      } catch (err) {
        this.loading = false;
        this.$toast.add({
          severity: "error",
          summary: err,
          group: "br",
          life: 3e3
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
          phoneNumber: this.user.phoneNumber
        };
        const response = await userStore.updateUser(user, this.user.id);
        this.$toast.add({
          severity: "success",
          summary: "Details updated successfully",
          group: "br",
          life: 3e3
        });
        this.loadingSave = false;
      } catch (err) {
        this.loadingSave = false;
        this.$toast.add({
          severity: "error",
          summary: err,
          group: "br",
          life: 3e3
        });
      }
    },
    getProductImage(orderItem) {
      var _a, _b;
      if (((_b = (_a = orderItem == null ? void 0 : orderItem.productModel) == null ? void 0 : _a.images) == null ? void 0 : _b.length) > 0) {
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
        year: "numeric"
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
      }, 2e3);
      try {
        const body = {
          productId: product.id,
          quantity: 1
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
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = script$1;
  const _component_Toast = script$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="flex flex-col md:flex-row"><main class="w-full bg-white border p-4">`);
  if ($data.activeSection === "profile") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">Edit Your Profile</h2><form><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label>First Name</label><input type="text"${ssrRenderAttr("value", $data.user.firstName)} class="border w-full p-2 mt-1"></div><div><label>Last Name</label><input type="text"${ssrRenderAttr("value", $data.user.lastName)} class="border w-full p-2 mt-1"></div><div><label>Email</label><input type="email"${ssrRenderAttr("value", $data.user.email)} class="border w-full p-2 mt-1"></div><div><label>Phone Number</label><input type="text"${ssrRenderAttr("value", $data.user.phoneNumber)} class="border w-full p-2 mt-1"></div></div><div class="flex justify-between mt-6"><button type="button" class="border px-4 py-2 w-1/2 md:w-auto"> Cancel </button>`);
    _push(ssrRenderComponent(_component_Button, {
      class: "bg-primary text-white py-3 rounded hover:bg-secondary mt-4",
      type: "submit",
      label: "Save Changes",
      loading: $data.loadingSave
    }, null, _parent));
    _push(`</div><div class="mt-6"><button type="button" class="bg-secondary text-white px-4 py-2 w-full md:w-auto"> Change Password </button>`);
    if ($data.showPasswordFields) {
      _push(`<div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"><div><label>Old Password</label><input type="password"${ssrRenderAttr("value", $data.passwords.oldPassword)} class="border w-full p-2 mt-1"></div><div><label>New Password</label><input type="password"${ssrRenderAttr("value", $data.passwords.newPassword)} class="border w-full p-2 mt-1"></div><div><label>Confirm Password</label><input type="password"${ssrRenderAttr("value", $data.passwords.confirmNewPassword)} class="border w-full p-2 mt-1"></div><div class="col-span-1 md:col-span-2 flex justify-end mt-4">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "bg-primary text-white py-3 rounded hover:bg-secondary mt-4",
        type: "button",
        label: "Update Password",
        loading: $data.loading,
        onClick: $options.updatePassword
      }, null, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></form></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeSection === "paymentOptions") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">Payment Method</h2><div class="mt-4 flex flex-col md:flex-row items-center md:items-start"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524" class="w-1/2 md:w-1/4" alt="Mpesa Logo"><div class="ml-4"><h3 class="font-bold mb-2">Mpesa</h3><p class="text-gray-600">Mobile Number: ${ssrInterpolate($data.user.phoneNumber)}</p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeSection === "orders") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">My Orders</h2><div class="p-4 bg-gray-100"><div class="flex space-x-4 mb-4 overflow-x-auto"><!--[-->`);
    ssrRenderList($data.filters, (filter) => {
      _push(`<button class="${ssrRenderClass([
        "px-4 py-2 rounded-full border whitespace-nowrap",
        $data.selectedFilter === filter ? "bg-red-100 text-red-600" : "bg-white text-gray-600"
      ])}">${ssrInterpolate(filter)}</button>`);
    });
    _push(`<!--]--></div><!--[-->`);
    ssrRenderList($options.filteredOrders, (order, index) => {
      var _a, _b;
      _push(`<div class="bg-white shadow-md rounded-lg mb-4 p-4"><div class="flex justify-between items-center"><span class="${ssrRenderClass([{
        "bg-yellow-200 text-yellow-800": order.status === "Pending",
        "bg-green-100 text-green-600": order.status === "Delivered",
        "bg-gray-300 text-gray-700": order.status === "Cancelled"
      }, "px-3 py-1 text-xs rounded-full"])}">${ssrInterpolate(order.status)}</span><span class="text-sm text-gray-500">${ssrInterpolate($options.formatDate(order.createdAt))}</span></div><div class="mt-2 flex flex-col md:flex-row items-center md:items-start"><img${ssrRenderAttr(
        "src",
        (_b = (_a = order.orderItems[0]) == null ? void 0 : _a.productModel.images[0]) == null ? void 0 : _b.optimizeUrl
      )} alt="Product Image" class="w-16 h-16 rounded-md object-cover"><div class="ml-0 md:ml-4 text-center md:text-left"><p class="text-red-600 font-semibold"> Order ID: ${ssrInterpolate(order.id.slice(0, 8))}</p><p class="text-gray-700">${ssrInterpolate(order.orderItems[0].productModel.name)} `);
      if (order.orderItems.length > 1) {
        _push(`<span class="text-blue-600"> &amp; ${ssrInterpolate(order.orderItems.length - 1)} more items</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><p class="text-gray-800 font-semibold mt-1"> Ksh ${ssrInterpolate($options.formattedPrice(order.total))}</p></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</main></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Profile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "RatingDialog",
  __ssrInlineRender: true,
  props: {
    visible: Boolean,
    item: Object
  },
  emits: ["update:visible", "reviewSubmitted"],
  setup(__props, { emit: __emit }) {
    const productStore = useProductStore();
    const props = __props;
    const emit = __emit;
    const isVisible = ref(props.visible);
    const reviewText = ref("");
    const reviewItem = ref(props.item);
    const product = ref({
      rating: 0,
      comment: ""
    });
    watch(
      () => props.visible,
      (val) => {
        isVisible.value = val;
      }
    );
    watch(
      () => isVisible.value,
      (val) => {
        emit("update:visible", val);
      }
    );
    watch(
      () => props.item,
      (val) => {
        reviewItem.value = val;
      }
    );
    function closeDialog() {
      isVisible.value = false;
      reviewText.value = "";
    }
    function submitReview() {
      console.log("Cdscs", reviewItem.value);
      try {
        productStore.submitReview({
          productModelId: reviewItem.value.productModelId,
          rating: product.value.rating,
          comment: product.value.comment,
          images: []
        });
        emit("reviewSubmitted");
        product.value = {
          rating: 0,
          comment: ""
        };
        closeDialog();
      } catch (error) {
        console.error("Failed to submit review:", error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script$3;
      const _component_Rating = script$4;
      const _component_Button = script$1;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        visible: isVisible.value,
        "onUpdate:visible": ($event) => isVisible.value = $event,
        modal: "",
        class: "w-full md:w-[60vw] lg:w-[15vw]"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full" data-v-31ad820b${_scopeId}><h2 class="text-xl font-bold" data-v-31ad820b${_scopeId}>Add Review</h2><div class="w-6" data-v-31ad820b${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between w-full" }, [
                createVNode("h2", { class: "text-xl font-bold" }, "Add Review"),
                createVNode("div", { class: "w-6" })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="w-full" data-v-31ad820b${_scopeId}><p class="mb-4 font-semibold" data-v-31ad820b${_scopeId}> Please provide your feedback for the product </p><span data-v-31ad820b${_scopeId}>${ssrInterpolate(((_b = (_a = reviewItem.value) == null ? void 0 : _a.productModel) == null ? void 0 : _b.name) || "N/A")}</span><div class="flex justify-center py-4" data-v-31ad820b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Rating, {
              modelValue: product.value.rating,
              "onUpdate:modelValue": ($event) => product.value.rating = $event,
              class: "p-rating"
            }, null, _parent2, _scopeId));
            _push2(`</div><textarea rows="4" class="w-full border rounded-md p-2 mb-4" placeholder="Write your review here..." data-v-31ad820b${_scopeId}>${ssrInterpolate(product.value.comment)}</textarea><div class="flex justify-end" data-v-31ad820b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700",
              onClick: submitReview
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit Review `);
                } else {
                  return [
                    createTextVNode(" Submit Review ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("p", { class: "mb-4 font-semibold" }, " Please provide your feedback for the product "),
                createVNode("span", null, toDisplayString(((_d = (_c = reviewItem.value) == null ? void 0 : _c.productModel) == null ? void 0 : _d.name) || "N/A"), 1),
                createVNode("div", { class: "flex justify-center py-4" }, [
                  createVNode(_component_Rating, {
                    modelValue: product.value.rating,
                    "onUpdate:modelValue": ($event) => product.value.rating = $event,
                    class: "p-rating"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                withDirectives(createVNode("textarea", {
                  "onUpdate:modelValue": ($event) => product.value.comment = $event,
                  rows: "4",
                  class: "w-full border rounded-md p-2 mb-4",
                  placeholder: "Write your review here..."
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, product.value.comment]
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_Button, {
                    class: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700",
                    onClick: submitReview
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Submit Review ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/RatingDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RatingCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31ad820b"]]);
const _imports_0 = "" + buildAssetsURL("no-order.CkeRJY7F.png");
const _sfc_main = {
  components: {
    RatingCard
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
        "Cancelled"
      ],
      removeItem: false,
      loadingAdd: false,
      home: {
        icon: "pi pi-home"
        // icon: "pi pi-user",
      },
      items: [
        { label: "Home", route: "/" },
        { label: "My Account", route: "/profile" }
      ],
      activeSection: "profile",
      // Default section to display
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        createdAt: ""
      },
      orders: [],
      wishlist: [],
      fetching: false,
      quotation: [],
      showQuotation: false,
      quotationItems: {},
      reviewProduct: false,
      reviewItem: {}
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
      var _a, _b;
      return ((_b = (_a = this.item) == null ? void 0 : _a.productModel) == null ? void 0 : _b.description) ? this.item.productModel.description.slice(0, this.maxLength) + "..." : "";
    },
    shouldShowReadMore() {
      var _a, _b, _c;
      return ((_c = (_b = (_a = this.item) == null ? void 0 : _a.productModel) == null ? void 0 : _b.description) == null ? void 0 : _c.length) > this.maxLength;
    },
    // computed to get user from store
    userData() {
      const userStore = useUserStore();
      return userStore.user;
    }
  },
  async mounted() {
    await this.getUserData();
    await this.getWishList();
    await this.getOrders();
    await this.getQuotation();
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
      const orderElement = (void 0).querySelector(".order-details");
      if (!orderElement) return;
      const canvas = await html2canvas(orderElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
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
      const quotationElement = (void 0).querySelector(".quotation-details");
      if (!quotationElement) return;
      const canvas = await html2canvas(quotationElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
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
          return { color: "#FFA500", icon: "pi pi-hourglass" };
        // Orange with hourglass icon
        case "pending":
          return { color: "bg-primary", icon: "pi pi-clock" };
        // Blue with clock icon
        case "delivered":
          return { color: "#28A745", icon: "pi pi-check" };
        // Green with check icon
        case "cancelled":
          return { color: "#DC3545", icon: "pi pi-times" };
        // Red with times icon
        default:
          return { color: "#6C757D", icon: "pi pi-info-circle" };
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
      var _a, _b, _c;
      if (((_b = (_a = orderItem == null ? void 0 : orderItem.productModel) == null ? void 0 : _a.images) == null ? void 0 : _b.length) > 0) {
        console.log(
          "Image found:",
          (_c = orderItem.productModel.images[0]) == null ? void 0 : _c.optimizeUrl
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
        year: "numeric"
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
      }, 2e3);
      try {
        const body = {
          productId: product.id
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
      }, 2e3);
      try {
        const body = {
          productId: product.id,
          quantity: 1
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
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Divider = script;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_RatingCard = resolveComponent("RatingCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  if (!$data.detailedView && !$data.fetching) {
    _push(`<div class="flex flex-col"><div class="p-4"><div class="flex space-x-4 mb-4 overflow-x-auto"><!--[-->`);
    ssrRenderList($data.filters, (filter) => {
      _push(`<button class="${ssrRenderClass([
        "px-4 py-2 rounded-full border whitespace-nowrap",
        $data.selectedFilter === filter ? "bg-red-100 text-red-600" : "bg-white text-gray-600"
      ])}">${ssrInterpolate(filter)}</button>`);
    });
    _push(`<!--]--></div>`);
    _push(ssrRenderComponent(_component_Divider, null, null, _parent));
    if ($options.filteredOrders.length > 0 && !$options.userData.shopOwnerVerified) {
      _push(`<div class="max-h-[600px] overflow-y-auto"><!--[-->`);
      ssrRenderList($options.filteredOrders, (order, index) => {
        var _a, _b;
        _push(`<div class="border rounded-lg mb-4 p-4 cursor-pointer"><div class="flex justify-between items-center"><span class="${ssrRenderClass([{
          "bg-yellow-400 text-yellow-800": order.status === "Pending",
          "bg-blue-400 text-white": order.status === "Awaiting Payment",
          "bg-amber-400 text-white": order.status === "Awaiting Shipment",
          "bg-green-100 text-green-600": order.status === "Shipped",
          "bg-green-100 text-green-600": order.status === "Delivered",
          "bg-gray-300 text-gray-700": order.status === "Cancelled"
        }, "px-3 py-1 text-xs rounded-full"])}">${ssrInterpolate(order.status)}</span><span class="text-sm text-gray-500">${ssrInterpolate($options.formatDate(order.createdAt))}</span></div><div class="mt-2 flex flex-col md:flex-row items-center md:items-start"><img${ssrRenderAttr("src", (_b = (_a = order.orderItems[0]) == null ? void 0 : _a.productModel.images[0]) == null ? void 0 : _b.uploadUrl)} alt="Product Image" class="w-16 h-16 rounded-md object-cover"><div class="ml-0 md:ml-4 text-center md:text-left"><p class="text-red-600 font-semibold"> Order ID: ${ssrInterpolate(order.id.slice(0, 8))}</p><p class="text-gray-700">${ssrInterpolate(order.orderItems[0].productModel.name)} `);
        if (order.orderItems.length > 1) {
          _push(`<span class="text-blue-600"> &amp; ${ssrInterpolate(order.orderItems.length - 1)} more items </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="text-gray-800 font-semibold mt-1"> Ksh ${ssrInterpolate($options.formattedPrice(order.total))}</p></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else if ($options.filteredQuotation.length === 0 && !$options.userData.shopOwnerVerified) {
      _push(`<div class="flex flex-col items-center justify-center min-h-[50vh] text-center"><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="w-40 h-40 mb-4"><h2 class="text-xl font-semibold text-gray-700">No Orders!</h2><p class="text-gray-500 text-sm mb-4"> Browse our categories and discover our best deals! </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"${_scopeId}> Start Shopping </button>`);
          } else {
            return [
              createVNode("button", { class: "bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded" }, " Start Shopping ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.filteredQuotation.length > 0 && $options.userData.shopOwnerVerified && !$data.showQuotation) {
      _push(`<div class="max-h-[600px] overflow-y-auto"><!--[-->`);
      ssrRenderList($options.filteredQuotation, (order, index) => {
        _push(`<div class="border rounded-lg mb-4 p-4 cursor-pointer"><div class="flex justify-between items-center"><span class="${ssrRenderClass([{
          "bg-yellow-400 text-yellow-800": order.status === "pending",
          "bg-blue-400 text-white": order.status === "Awaiting Payment",
          "bg-green-100 text-green-600": order.status === "Delivered",
          "bg-gray-300 text-gray-700": order.status === "Cancelled"
        }, "px-3 py-1 text-xs rounded-full"])}">${ssrInterpolate(order.status)}</span><span class="text-sm text-gray-500">${ssrInterpolate($options.formatDate(order.createdAt))}</span></div><div class="mt-4"><p class="text-red-600 font-semibold"> Quotation ID: ${ssrInterpolate(order.id.slice(0, 8))}</p><p class="text-black-600 font-"> Response: ${ssrInterpolate(order.response ? order.response : "No response")}</p><p class="text-black-600 font-">Message: ${ssrInterpolate(order.message)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.showQuotation) {
      _push(`<div class="flex flex-col items-cente min-h-[50vh] text-center"><div class="quotation-details"><div class="flex justify-between"><a class="p-button-text text-primary hover:text-white cursor-pointer flex items-center" style="${ssrRenderStyle({ "color": "var(--secondary-color) !important" })}"><i class="pi pi-arrow-left pr-2"></i> Back to Quotations </a><button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"><i class="pi pi-print"></i> Print Quotations </button></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4"><div><p class="font-semibold">Order ID</p><p class="font-mono">${ssrInterpolate($data.quotationItems.id.slice(0, 8))}</p></div><div><p class="font-semibold">Message</p><p class="font-mono">${ssrInterpolate($data.quotationItems.message)}</p></div><div><p class="font-semibold">Date Created</p><p class="font-mono">${ssrInterpolate($options.formatDate($data.quotationItems.createdAt))}</p></div><div><p class="font-semibold">Response</p><p class="font-mono">${ssrInterpolate($data.quotationItems.response ? $data.quotationItems.response : "Not Available")}</p></div><p class="font-semibold pb-4"> Items (${ssrInterpolate($data.quotationItems.quotationItems.length)}) </p></div><div><div class="space-y-4"><!--[-->`);
      ssrRenderList($data.quotationItems.quotationItems, (item, index) => {
        _push(`<div class="border rounded-lg p-4 flex"><div class="flex items-center space-x-4 mr-4">${ssrInterpolate(index + 1)}</div><div class="flex text-start items-start space-x-4"><div>${ssrInterpolate(item.productModel.name)} <p class="text-xs font-">${ssrInterpolate(item.productModel.description.slice(0, 200))}</p><p class="font-">Quantity: ${ssrInterpolate(item.quantity)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<div>`);
    if ($data.fetching) {
      _push(`<div><div class="relative flex justify-center items-center h-96"><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24"></div></div>`);
    } else {
      _push(`<div><div class="flex justify-between"><a class="p-button-text text-primary hover:text-white cursor-pointer flex items-center" style="${ssrRenderStyle({ "color": "var(--secondary-color) !important" })}"><i class="pi pi-arrow-left pr-2"></i> Back to Orders </a><button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"><i class="pi pi-print"></i> Print Order </button></div><div class="p-6 bg-white rounded-lg order-details"><div class="flex justify-between"><h2 class="text-lg md:text-2xl font-semibold">Order Details</h2><div class="flex items-center gap-2"><p class="font-semibold">Status</p><span class="${ssrRenderClass([{
        // 'bg-yellow-400 text-yellow-800':
        //   orderDetails.status === 'Pending',
        "bg-yellow-400 text-blue-400": $data.orderDetails.status === "Awaiting Payment",
        "bg-amber-100 text-green-600": $data.orderDetails.status === "Awaiting Shipment",
        "bg-green-100 text-green-600": $data.orderDetails.status === "Delivered",
        "bg-gray-300 text-gray-700": $data.orderDetails.status === "Cancelled"
      }, "px-2 py-0.5 md:px-3 md:py-1 text-xs rounded-full"])}">${ssrInterpolate($data.orderDetails.status)}</span></div></div>`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><p class="font-semibold">Order ID</p><p class="font-mono">${ssrInterpolate($data.orderDetails.id.slice(0, 8))}</p></div><div><p class="font-semibold">Customer Name</p><p class="font-mono">${ssrInterpolate($data.orderDetails.first_name)} ${ssrInterpolate($data.orderDetails.last_name)}</p></div><div><p class="font-semibold">Company Name</p><p>${ssrInterpolate($data.orderDetails.company_name || "N/A")}</p></div><div><p class="font-semibold">Address</p><p class="font-mono">${ssrInterpolate($data.orderDetails.street_address)}, ${ssrInterpolate($data.orderDetails.town)}</p></div><div><p class="font-semibold">Phone Number</p><p class="font-mono">${ssrInterpolate($data.orderDetails.phone_number)}</p></div><div><p class="font-semibold">Email</p><p class="font-mono">${ssrInterpolate($data.orderDetails.email)}</p></div><div><p class="font-semibold">Order Price</p><p class="font-mono"> Ksh ${ssrInterpolate($options.formattedPrice($data.orderDetails.orderPrice))}</p></div><div><p class="font-semibold">VAT</p><p class="font-mono"> Ksh ${ssrInterpolate($options.formattedPrice($data.orderDetails.vat))}</p></div><div><p class="font-semibold">Total</p><p class="font-mono"> Ksh ${ssrInterpolate($options.formattedPrice($data.orderDetails.total))}</p></div><div><p class="font-semibold">Order Date</p><p class="font-mono">${ssrInterpolate($options.formatDate($data.orderDetails.createdAt))}</p></div></div>`);
      _push(ssrRenderComponent(_component_Divider, { class: "my-4" }, null, _parent));
      _push(`<h3 class="text-xl font-semibold mb-2">Order Items</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList($data.orderDetails.orderItems, (item, index) => {
        var _a2;
        var _a, _b;
        _push(`<div class="border rounded-lg p-4"><div class="flex items-center space-x-4">${ssrInterpolate(item.productModel.images)} <img${ssrRenderAttr(
          "src",
          ((_b = (_a = item.productModel.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.uploadUrl) || "https://via.placeholder.com/100"
        )} alt="Product Image" class="w-16 h-16 rounded-md object-cover"><div><p class="text-lg font-semibold">${ssrInterpolate(item.productModel.name)}</p><p class="text-gray-500"><span>${(_a2 = $data.isExpanded ? item.productModel.description : $options.truncatedDescription) != null ? _a2 : ""}</span>`);
        if ($options.shouldShowReadMore) {
          _push(`<span class="text-blue-500 cursor-pointer">${ssrInterpolate($data.isExpanded ? "Read less" : "Read more")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><div class="flex justify-between items-center"><div><p class="font-semibold"> Ksh ${ssrInterpolate($options.formattedPrice(item.productModel.price))}</p><p class="font-semibold">Quantity: ${ssrInterpolate(item.quantity)}</p></div><span class="text-sm text-gray-500"><button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"><i class="pi pi-star"></i> Review Product </button></span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    }
    _push(`</div>`);
  }
  _push(ssrRenderComponent(_component_RatingCard, {
    visible: $data.reviewProduct,
    "onUpdate:visible": ($event) => $data.reviewProduct = $event,
    item: $data.reviewItem
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Orders as O, Profile as P };
//# sourceMappingURL=Orders-rAeowo6i.mjs.map
