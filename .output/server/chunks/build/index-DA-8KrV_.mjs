import { s as script$1 } from './index-jtFS_Qvq.mjs';
import { s as script } from './index-CI0zemKa.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp, u as useUserStore, b as useProductStore, g as useToast } from './server.mjs';
import { _ as _imports_0 } from './logoo-Bk06oiQl.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/zindex';
import './index-ZzPV6IeI.mjs';
import './index-BjfqnR8d.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import './index-Bn5AJdG7.mjs';
import './index-5ckDHAkT.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import 'node:url';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = {
  setup() {
    const loading = ref(false);
    const { $formatPrice } = useNuxtApp();
    const userStore = useUserStore();
    const productStore = useProductStore();
    const cartTotal = computed(() => productStore.cartTotal);
    const cartItems = computed(() => productStore.cartItems);
    const user = computed(() => userStore.user || {});
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const requiredFields = ["firstName", "lastName", "email", "phoneNumber"];
    const coupon = ref("");
    const applyCoupon = () => {
      if (coupon.value === "DISCOUNT10") {
        cartItems.value.forEach((item) => {
          item.product.price = item.product.price * 0.9;
        });
        alert("Coupon applied: 10% discount!");
      } else {
        alert("Invalid coupon code.");
      }
    };
    const toast = useToast();
    const placeOrder = async () => {
      const userLoggedIn = userStore.isLoggedIn;
      if (userLoggedIn) {
        console.log(userLoggedIn);
        if (!user.value || Object.keys(user.value).length === 0) {
          toast.add({
            severity: "warn",
            summary: `Please log in to place an order.`,
            group: "br",
            life: 3e3
          });
          return;
        }
        for (const field of requiredFields) {
          if (!user.value[field]) {
            toast.add({
              severity: "warn",
              summary: `${field} is required.`,
              group: "br",
              life: 3e3
            });
            return;
          }
        }
        try {
          loading.value = true;
          const response = await productStore.placeOrder();
          let order = {
            orderId: response.data.id,
            amount: 1,
            phoneNumber: user.value.phoneNumber
          };
          const mpesaResponse = await productStore.checkOut(order);
          console.log(mpesaResponse, "Mpesa");
          loading.value = false;
          toast.add({
            severity: "success",
            summary: "Your Order has been placed successfully, Thank you",
            group: "br",
            life: 3e3
          });
        } catch (error) {
          console.log("Error placing order:", error);
          loading.value = false;
          toast.add({
            severity: "error",
            summary: "Error placing order",
            detail: error.message,
            group: "br",
            life: 3e3
          });
        }
      } else {
        if (!user.value || Object.keys(user.value).length === 0) {
          toast.add({
            severity: "warn",
            summary: `Please Enter your details to place an order.`,
            group: "br",
            life: 3e3
          });
          return;
        }
        for (const field of requiredFields) {
          if (!user.value[field]) {
            toast.add({
              severity: "warn",
              summary: `${field} is required to place an order.`,
              group: "br",
              life: 3e3
            });
            return;
          }
        }
        try {
          loading.value = true;
          const response = await productStore.placeOrderAnonymous(user.value);
          let order = {
            orderId: response.data.id,
            amount: 1,
            phoneNumber: user.value.phoneNumber
          };
          const mpesaResponse = await productStore.checkOut(order);
          console.log(mpesaResponse, "Mpesa");
          loading.value = false;
          toast.add({
            severity: "success",
            summary: "Your Order has been placed successfully, Thank you",
            group: "br",
            life: 3e3
          });
        } catch (error) {
          console.log("Error placing order:", error);
          loading.value = false;
          toast.add({
            severity: "error",
            summary: "Error placing order",
            detail: error.message,
            group: "br",
            life: 3e3
          });
        }
      }
    };
    return {
      user,
      cartItems,
      cartTotal,
      coupon,
      applyCoupon,
      placeOrder,
      formattedPrice,
      loading,
      defaultImage: _imports_0
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Button = script;
  const _component_Toast = script$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto pt-12" }, _attrs))} data-v-bbae7466><div class="checkout-container flex flex-col md:flex-row gap-8 p-4 md:p-8" data-v-bbae7466><div class="billing-details flex-1 bg-white p-6 rounded-lg shadow" data-v-bbae7466><h2 class="text-xl font-semibold mb-4" data-v-bbae7466>Billing Details</h2><form class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-bbae7466><div class="form-group" data-v-bbae7466><label for="first-name" class="block text-sm font-medium mb-1" data-v-bbae7466>First Name*</label><input type="text" id="first-name"${ssrRenderAttr("value", $setup.user.firstName)} placeholder="First Name" required class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="last-name" class="block text-sm font-medium mb-1" data-v-bbae7466>Last Name*</label><input type="text" id="last-name"${ssrRenderAttr("value", $setup.user.lastName)} placeholder="Last Name" required class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="company-name" class="block text-sm font-medium mb-1" data-v-bbae7466>Company Name</label><input type="text" id="company-name"${ssrRenderAttr("value", $setup.user.company_name)} placeholder="Company Name" class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="street-address" class="block text-sm font-medium mb-1" data-v-bbae7466>Street Address*</label><input type="text"${ssrRenderAttr("value", $setup.user.street_address)} id="street-address" placeholder="Street Address" required class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="apartment" class="block text-sm font-medium mb-1" data-v-bbae7466>Apartment, floor, etc. (optional)</label><input type="text"${ssrRenderAttr("value", $setup.user.apartment)} id="apartment" placeholder="Apartment, floor, etc." class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="city" class="block text-sm font-medium mb-1" data-v-bbae7466>Town/City*</label><input type="text" id="city"${ssrRenderAttr("value", $setup.user.town)} placeholder="Town/City" required class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="phone" class="block text-sm font-medium mb-1" data-v-bbae7466>Phone Number*</label><input type="tel" id="phone"${ssrRenderAttr("value", $setup.user.phoneNumber)} placeholder="Phone Number" required class="w-full p-2 border rounded" data-v-bbae7466></div><div class="form-group" data-v-bbae7466><label for="email" class="block text-sm font-medium mb-1" data-v-bbae7466>Email Address*</label><input type="email" id="email"${ssrRenderAttr("value", $setup.user.email)} placeholder="Email Address" required class="w-full p-2 border rounded" data-v-bbae7466></div></form></div><div class="cart-summary bg-white p-6 rounded-lg w-full md:max-w-sm shadow" data-v-bbae7466><h3 class="text-lg font-semibold mb-4" data-v-bbae7466>Cart Summary</h3><div class="cart-items space-y-4" data-v-bbae7466><!--[-->`);
  ssrRenderList($setup.cartItems, (item) => {
    var _a3, _b2, _c2, _d2;
    var _a2, _b, _c, _d, _e;
    _push(`<div class="cart-item flex flex-col sm:flex-row items-center gap-4 border-b pb-3" data-v-bbae7466><img${ssrRenderAttr("src", (_a3 = (_b = (_a2 = item == null ? void 0 : item.productModel) == null ? void 0 : _a2.images[0]) == null ? void 0 : _b.optimizeUrl) != null ? _a3 : $setup.defaultImage)} class="w-16 h-16 object-cover rounded" data-v-bbae7466><div class="flex-1 text-center sm:text-left" data-v-bbae7466><p class="text-sm" data-v-bbae7466>${ssrInterpolate((_b2 = (_c = item == null ? void 0 : item.productModel) == null ? void 0 : _c.name) != null ? _b2 : item.name)}</p><div class="flex justify-between" data-v-bbae7466><p class="text-gray-600 text-xs" data-v-bbae7466> Ksh ${ssrInterpolate($setup.formattedPrice((_c2 = (_d = item.productModel) == null ? void 0 : _d.price) != null ? _c2 : item.price))}</p><p class="text-sm" data-v-bbae7466>${ssrInterpolate((_d2 = (_e = item == null ? void 0 : item.productModel) == null ? void 0 : _e.quantity) != null ? _d2 : item.quantity)}</p></div></div></div>`);
  });
  _push(`<!--]--></div><div class="cart-summary-bottom mt-4" data-v-bbae7466><p class="flex justify-between text-sm" data-v-bbae7466> Subtotal <strong class="text-lg" data-v-bbae7466>${ssrInterpolate($setup.formattedPrice($setup.cartTotal))}</strong></p><hr class="my-2" data-v-bbae7466><p class="flex justify-between text-lg font-semibold" data-v-bbae7466> Total <strong class="text-lg" data-v-bbae7466>Ksh ${ssrInterpolate($setup.formattedPrice($setup.cartTotal))}</strong></p><div class="payment-methods flex flex-col sm:flex-row items-center gap-2 mt-4" data-v-bbae7466><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524" class="w-16 sm:w-1/4" alt="M-Pesa" data-v-bbae7466><label class="text-sm font-medium" data-v-bbae7466>${ssrInterpolate((_a = $setup.user) == null ? void 0 : _a.phoneNumber)}</label></div>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "button",
    class: "place-order-btn w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700",
    label: "Place Order",
    loading: $setup.loading,
    onClick: ($event) => $setup.placeOrder()
  }, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "top-right",
    group: "br"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bbae7466"]]);

export { index as default };
//# sourceMappingURL=index-DA-8KrV_.mjs.map
