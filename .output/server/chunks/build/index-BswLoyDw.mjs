import { s as script$1 } from './index-Cf-aLWVL.mjs';
import { s as script } from './index-CHf7NZjU.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp, u as useUserStore, b as useProductStore } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/zindex';
import './index-zZrFrjQS.mjs';
import './index-CBz_SNTb.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import './index-DSnb32Yv.mjs';
import './index-BBqC3hNY.mjs';
import './index-DEuunsqE.mjs';
import './index-Dvqyfh34.mjs';
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
    const user = computed(() => userStore.user);
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
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
    const placeOrder = async () => {
      loading.value = true;
      console.log("cart", cartItems.value);
      const response = await productStore.placeOrder();
      console.log(response.data.id);
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
    };
    return {
      user,
      cartItems,
      cartTotal,
      coupon,
      applyCoupon,
      placeOrder,
      formattedPrice,
      loading
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = script;
  const _component_Toast = script$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto pt-12" }, _attrs))} data-v-f782bec4><div class="checkout-container flex flex-col md:flex-row gap-8 p-4 md:p-8" data-v-f782bec4><div class="billing-details flex-1 bg-white p-6 rounded-lg shadow" data-v-f782bec4><h2 class="text-xl font-semibold mb-4" data-v-f782bec4>Billing Details</h2><form class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-f782bec4><div class="form-group" data-v-f782bec4><label for="first-name" class="block text-sm font-medium mb-1" data-v-f782bec4>First Name*</label><input type="text" id="first-name"${ssrRenderAttr("value", $setup.user.firstName)} placeholder="First Name" required class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="last-name" class="block text-sm font-medium mb-1" data-v-f782bec4>Last Name*</label><input type="text" id="last-name"${ssrRenderAttr("value", $setup.user.lastName)} placeholder="Last Name" required class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="company-name" class="block text-sm font-medium mb-1" data-v-f782bec4>Company Name</label><input type="text" id="company-name" placeholder="Company Name" class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="street-address" class="block text-sm font-medium mb-1" data-v-f782bec4>Street Address*</label><input type="text" id="street-address" placeholder="Street Address" required class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="apartment" class="block text-sm font-medium mb-1" data-v-f782bec4>Apartment, floor, etc. (optional)</label><input type="text" id="apartment" placeholder="Apartment, floor, etc." class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="city" class="block text-sm font-medium mb-1" data-v-f782bec4>Town/City*</label><input type="text" id="city" placeholder="Town/City" required class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="phone" class="block text-sm font-medium mb-1" data-v-f782bec4>Phone Number*</label><input type="tel" id="phone"${ssrRenderAttr("value", $setup.user.phoneNumber)} placeholder="Phone Number" required class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="email" class="block text-sm font-medium mb-1" data-v-f782bec4>Email Address*</label><input type="email" id="email"${ssrRenderAttr("value", $setup.user.email)} placeholder="Email Address" required class="w-full p-2 border rounded" data-v-f782bec4></div></form></div><div class="cart-summary bg-white p-6 rounded-lg w-full md:max-w-sm shadow" data-v-f782bec4><h3 class="text-lg font-semibold mb-4" data-v-f782bec4>Cart Summary</h3><div class="cart-items space-y-4" data-v-f782bec4><!--[-->`);
  ssrRenderList($setup.cartItems, (item) => {
    var _a;
    _push(`<div class="cart-item flex flex-col sm:flex-row items-center gap-4 border-b pb-3" data-v-f782bec4><img${ssrRenderAttr(
      "src",
      ((_a = item.productModel.images[0]) == null ? void 0 : _a.optimizeUrl) || "https://via.placeholder.com/80x80"
    )} class="w-16 h-16 object-cover rounded" data-v-f782bec4><div class="flex-1 text-center sm:text-left" data-v-f782bec4><p class="text-sm" data-v-f782bec4>${ssrInterpolate(item.productModel.name)}</p><p class="text-gray-600 text-xs" data-v-f782bec4> Ksh ${ssrInterpolate($setup.formattedPrice(item.productModel.price * item.quantity))}</p></div></div>`);
  });
  _push(`<!--]--></div><div class="cart-summary-bottom mt-4" data-v-f782bec4><p class="flex justify-between text-sm" data-v-f782bec4> Subtotal <strong class="text-lg" data-v-f782bec4>${ssrInterpolate($setup.formattedPrice($setup.cartTotal))}</strong></p><hr class="my-2" data-v-f782bec4><p class="flex justify-between text-lg font-semibold" data-v-f782bec4> Total <strong class="text-lg" data-v-f782bec4>Ksh ${ssrInterpolate($setup.formattedPrice($setup.cartTotal))}</strong></p><div class="payment-methods flex flex-col sm:flex-row items-center gap-2 mt-4" data-v-f782bec4><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524" class="w-16 sm:w-1/4" alt="M-Pesa" data-v-f782bec4><label class="text-sm font-medium" data-v-f782bec4>${ssrInterpolate($setup.user.phoneNumber)}</label></div>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "button",
    class: "place-order-btn w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700",
    label: "Place Order",
    loading: $setup.loading,
    onClick: ($event) => $setup.placeOrder()
  }, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f782bec4"]]);

export { index as default };
//# sourceMappingURL=index-BswLoyDw.mjs.map
