import { s as script$2 } from './index-Bkc7jbaS.mjs';
import { s as script$1 } from './index-CI0zemKa.mjs';
import { s as script } from './index-hZtXntCu.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp, u as useUserStore, b as useProductStore, g as useToast } from './server.mjs';
import { _ as _imports_0 } from './logoo-Bk06oiQl.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/zindex';
import './index-CPSBx0zQ.mjs';
import './index-BjfqnR8d.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import './index-5ckDHAkT.mjs';
import './index-BgtDrjLh.mjs';
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
    const isVat = ref(false);
    const user = computed(() => userStore.user || {});
    const home = ref({
      icon: "pi pi-home",
      route: "/dashboard"
    });
    const items = ref([
      { label: "Cart", route: "/cart" },
      { label: "Checkout", route: "/checkout" }
    ]);
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const requiredFields = ["firstName", "lastName", "email", "phoneNumber"];
    const getVat = (cartTotal2) => {
      return cartTotal2 * 0.16;
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
    const toast = useToast();
    const placeOrder = async () => {
      const userLoggedIn = userStore.isLoggedIn;
      console.log("isVat.value,", isVat.value);
      if (userLoggedIn) {
        user.value = {
          ...user.value,
          // Spread existing user properties
          isVat: isVat.value
          // Add or update isVat
        };
        try {
          loading.value = true;
          const response = await productStore.placeOrder(
            user.value,
            isVat.value
          );
          let order = {
            orderId: response.data.id,
            amount: formattedPrice(
              cartTotal + (isVat.value ? getVat(cartTotal) : 0)
            ),
            // Include VAT if applicable
            phoneNumber: user.value.phoneNumber
          };
          const mpesaResponse = await productStore.checkOut(order);
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
          user.value = {
            ...user.value,
            isVat: isVat.value
            // Add or update isVat
          };
          loading.value = true;
          const response = await productStore.placeOrderAnonymous(
            user.value,
            isVat.value
          );
          let order = {
            orderId: response.data.id,
            amount: formattedPrice(
              cartTotal + (isVat.value ? getVat(cartTotal) : 0)
            ),
            // Include VAT if applicable
            phoneNumber: user.value.phoneNumber
          };
          const mpesaResponse = await productStore.checkOut(order);
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
      defaultImage: _imports_0,
      home,
      items,
      getVat,
      isVat
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Breadcrumb = script;
  const _component_router_link = resolveComponent("router-link");
  const _component_Button = script$1;
  const _component_Toast = script$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto pt-12" }, _attrs))} data-v-242882a1>`);
  _push(ssrRenderComponent(_component_Breadcrumb, {
    home: $setup.home,
    model: $setup.items
  }, {
    item: withCtx(({ item, props }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (item.route) {
          _push2(ssrRenderComponent(_component_router_link, {
            to: item.route,
            custom: ""
          }, {
            default: withCtx(({ href, navigate }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<a${ssrRenderAttrs(mergeProps({ href }, props.action))} data-v-242882a1${_scopeId2}><span class="${ssrRenderClass([item.icon, "text-color"])}" data-v-242882a1${_scopeId2}></span><span class="text-primary font-semibold" data-v-242882a1${_scopeId2}>${ssrInterpolate(item.label)}</span></a>`);
              } else {
                return [
                  createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                    createVNode("span", {
                      class: [item.icon, "text-color"]
                    }, null, 2),
                    createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item.label), 1)
                  ], 16, ["href", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<a${ssrRenderAttrs(mergeProps({
            href: item.url,
            target: item.target
          }, props.action))} data-v-242882a1${_scopeId}><span class="text-surface-700 dark:text-surface-0" data-v-242882a1${_scopeId}>${ssrInterpolate(item.label)}</span></a>`);
        }
      } else {
        return [
          item.route ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: item.route,
            custom: ""
          }, {
            default: withCtx(({ href, navigate }) => [
              createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                createVNode("span", {
                  class: [item.icon, "text-color"]
                }, null, 2),
                createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item.label), 1)
              ], 16, ["href", "onClick"])
            ]),
            _: 2
          }, 1032, ["to"])) : (openBlock(), createBlock("a", mergeProps({
            key: 1,
            href: item.url,
            target: item.target
          }, props.action), [
            createVNode("span", { class: "text-surface-700 dark:text-surface-0" }, toDisplayString(item.label), 1)
          ], 16, ["href", "target"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="checkout-container flex flex-col md:flex-row gap-8 p-4 md:p-8" data-v-242882a1><div class="billing-details flex-1 bg-white p-6 rounded-lg shadow mb-4" data-v-242882a1><h2 class="text-xl font-semibold mb-4" data-v-242882a1>Billing Details</h2><form class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-242882a1><div class="form-group" data-v-242882a1><label for="first-name" class="block text-sm font-medium mb-1" data-v-242882a1>First Name*</label><input type="text" id="first-name"${ssrRenderAttr("value", $setup.user.firstName)} placeholder="First Name" required class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="last-name" class="block text-sm font-medium mb-1" data-v-242882a1>Last Name*</label><input type="text" id="last-name"${ssrRenderAttr("value", $setup.user.lastName)} placeholder="Last Name" required class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="company-name" class="block text-sm font-medium mb-1" data-v-242882a1>Company Name</label><input type="text" id="company-name"${ssrRenderAttr("value", $setup.user.company_name)} placeholder="Company Name" class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="street-address" class="block text-sm font-medium mb-1" data-v-242882a1>Street Address*</label><input type="text"${ssrRenderAttr("value", $setup.user.street_address)} id="street-address" placeholder="Street Address" required class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="apartment" class="block text-sm font-medium mb-1" data-v-242882a1>Apartment, floor, etc. (optional)</label><input type="text"${ssrRenderAttr("value", $setup.user.apartment)} id="apartment" placeholder="Apartment, floor, etc." class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="city" class="block text-sm font-medium mb-1" data-v-242882a1>Town/City*</label><input type="text" id="city"${ssrRenderAttr("value", $setup.user.town)} placeholder="Town/City" required class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="phone" class="block text-sm font-medium mb-1" data-v-242882a1>Phone Number*</label><input type="tel" id="phone"${ssrRenderAttr("value", $setup.user.phoneNumber)} placeholder="Phone Number" required class="w-full p-2 border rounded" data-v-242882a1></div><div class="form-group" data-v-242882a1><label for="email" class="block text-sm font-medium mb-1" data-v-242882a1>Email Address*</label><input type="email" id="email"${ssrRenderAttr("value", $setup.user.email)} placeholder="Email Address" required class="w-full p-2 border rounded" data-v-242882a1></div></form></div><div class="cart-summary bg-white p-6 flex-1 rounded-lg w-full md:max-w-sm shadow" data-v-242882a1><h3 class="text-lg font-semibold mb-4" data-v-242882a1>Cart Summary</h3><div class="cart-items space-y-4" data-v-242882a1><!--[-->`);
  ssrRenderList($setup.cartItems, (item) => {
    var _a3, _b2, _c2, _d2;
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
    _push(`<div class="cart-item flex flex-col sm:flex-row items-center gap-4 border-b pb-3" data-v-242882a1><img${ssrRenderAttr(
      "src",
      (_a3 = (_c = (_b = (_a2 = item.productModel) == null ? void 0 : _a2.images) == null ? void 0 : _b.find((image) => image.isPrimary)) == null ? void 0 : _c.uploadUrl) != null ? _a3 : (_e = (_d = item == null ? void 0 : item.images) == null ? void 0 : _d.find((image) => image.isPrimary)) == null ? void 0 : _e.uploadUrl
    )}${ssrRenderAttr("alt", ((_f = item.productModel) == null ? void 0 : _f.name) || "Product Image")} class="w-full h-40 object-cover" data-v-242882a1><div class="flex-1 text-center sm:text-left" data-v-242882a1><p class="text-sm" data-v-242882a1>${ssrInterpolate((_b2 = (_g = item == null ? void 0 : item.productModel) == null ? void 0 : _g.name) != null ? _b2 : item.name)}</p><div class="flex justify-between" data-v-242882a1><p class="text-gray-600 text-xs" data-v-242882a1> Ksh ${ssrInterpolate($setup.formattedPrice((_c2 = (_h = item.productModel) == null ? void 0 : _h.price) != null ? _c2 : item.price))}</p><p class="text-sm" data-v-242882a1>${ssrInterpolate((_d2 = (_i = item == null ? void 0 : item.productModel) == null ? void 0 : _i.quantity) != null ? _d2 : item.quantity)}</p></div></div></div>`);
  });
  _push(`<!--]--></div><div class="cart-summary-bottom mt-4" data-v-242882a1><p class="flex justify-between text-sm" data-v-242882a1> Subtotal <strong class="text-lg" data-v-242882a1>${ssrInterpolate($setup.formattedPrice($setup.cartTotal))}</strong></p><div class="flex items-center justify-between my-4" data-v-242882a1><label class="text-gray-600" data-v-242882a1>Apply VAT (16%)</label><label class="relative inline-flex items-center cursor-pointer" data-v-242882a1><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($setup.isVat) ? ssrLooseContain($setup.isVat, null) : $setup.isVat) ? " checked" : ""} class="sr-only peer" data-v-242882a1><div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors" data-v-242882a1></div><div class="absolute left-1 top-1 bg-white border border-gray-300 w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5" data-v-242882a1></div></label></div>`);
  if ($setup.isVat) {
    _push(`<hr class="my-2" data-v-242882a1>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.isVat) {
    _push(`<div class="flex justify-between text-gray-600" data-v-242882a1><span data-v-242882a1>VAT</span><span data-v-242882a1>Ksh ${ssrInterpolate($setup.formattedPrice($setup.getVat($setup.cartTotal)))}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<hr class="my-2" data-v-242882a1><p class="flex justify-between text-lg font-semibold" data-v-242882a1> Total <strong class="text-lg" data-v-242882a1>Ksh ${ssrInterpolate($setup.formattedPrice($setup.cartTotal + ($setup.isVat ? $setup.getVat($setup.cartTotal) : 0)))}</strong></p><div class="payment-methods flex flex-col sm:flex-row items-center gap-2 mt-4" data-v-242882a1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524" class="w-16 sm:w-1/4" alt="M-Pesa" data-v-242882a1><label class="text-sm font-medium" data-v-242882a1>${ssrInterpolate((_a = $setup.user) == null ? void 0 : _a.phoneNumber)}</label></div>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-242882a1"]]);

export { index as default };
//# sourceMappingURL=index-CGT0Iw-w.mjs.map
